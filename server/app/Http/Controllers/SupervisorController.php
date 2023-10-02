<?php

namespace App\Http\Controllers;

use App\Models\Availabilityspot;
use App\Models\Reservation;
use App\Models\Spot;
use App\Models\Termination;
use Illuminate\Http\Request;
use thiagoalessio\TesseractOCR\TesseractOCR;
// use Yk\LaravelOcr\Facades\Ocr;
use AlImranAhmed\LaraOCR\OCR;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Http;

class SupervisorController extends Controller
{
    public function getAllReservations(Request $request)
    {
        $reservedParkings = Reservation::with([
            'user:id,first_name,last_name',
            'parking:id,name,address,latitude,longitude,photo',
        ])
            ->where('parking_id', $request->parking_id)
            ->where('valid', true)
            ->get();

        return response()->json([
            'status' => 'Success',
            'data' => $reservedParkings,
        ]);
    }


    public static function checkValidity(Request $request)
    {
        $reservation = Reservation::find($request->reservation_id);

        if (!$reservation) {
            return response()->json([
                'status' => 'Error',
                'message' => 'Reservation not found.',
            ]);
        }

        $isCorrect = $reservation->plate_number === $reservation->parked_plate_number;

        $reservation->update(['correct' => $isCorrect]);

        if ($isCorrect) {
            $message = 'Plate Number & Parked Plate Number Matched.';
        } else {
            $message = 'Plate Number & Parked Plate Number Did Not Match.';
        }

        return response()->json([
            'status' => 'Success',
            'message' => $message,
        ]);
    }

    public function getSpots(Request $request)
    {
        $reserved = Reservation::where('parking_id', $request->parking_id)
            ->where('valid', TRUE)
            ->get();

        $reservedSpotIds = $reserved->pluck('spot_id');

        $availableSpotIds = Spot::where('parking_id', $request->parking_id)
            ->whereNotIn('id', $reservedSpotIds)
            ->pluck('id')
            ->toArray();

        $spots = Spot::where('parking_id', $request->parking_id)->get();

        foreach ($spots as &$spot) {
            $spotId = $spot->id;
            $spot->reserved = in_array($spotId, $availableSpotIds) ? false : true;
        }

        return response()->json([
            'status' => 'Success',
            'data' => $spots
        ]);
    }

    public function getAvailableSpots(Request $request)
    {
        $spots = $this->getSpots($request);

        $availableSpots = $spots->original['data']->filter(function ($spot) {
            return !$spot->reserved;
        });

        return response()->json([
            'status' => 'Success',
            'data' => $availableSpots->count()
        ]);
    }


    public function terminateReservation(Request $request)
    {
        $terminate = Reservation::where('spot_id', $request->spot_id)
            ->where('parking_id', $request->parking_id)
            ->where('valid', TRUE)
            ->first();

        if ($terminate) {
            $terminate->valid = FALSE;
            $terminate->save();

            $client_id = $terminate->user_id;
            $this->terminateRecord($request, $client_id);

            return response()->json([
                'status' => 'Success',
                'data' => 'The reservation of Spot ' . $request->spot_id . ' has been terminated.'
            ]);
        } else {
            return response()->json([
                'status' => 'Error',
                'message' => 'No valid reservation found for Spot ' . $request->spot_id,
            ], 404);
        }
    }

    public function terminateRecord(Request $request, $client_id)
    {
        $termination = new Termination();
        $termination->staff_id = $request->staff_id;
        $termination->client_id = $client_id;
        $termination->parking_id = $request->parking_id;
        $termination->spot_id = $request->spot_id;
        $termination->reason = $request->reason;
        $termination->date = now()->toDateString();
        $termination->time = now()->toTimeString();
        $termination->save();

        return response()->json([
            'status' => 'Success',
            'data' => 'Termination record has been created.'
        ]);
    }

    public function removeAvailability(Request $request)
    {
        $available = Spot::where('id', $request->spot_id)
            ->where('parking_id', $request->parking_id)
            ->first();

        $available->availability = false;
        $available->save();

        $this->availabilityRecord($request);

        return response()->json([
            'status' => 'Success',
            'data' => 'Spot ' . $request->spot_id . ' is now Unavailable.'
        ]);
    }

    public function availabilityRecord(Request $request)
    {
        $existing = Availabilityspot::where('spot_id', $request->spot_id)
            ->where('parking_id', $request->parking_id)
            ->latest()
            ->first();

        if ($existing) {
            if ($existing->available == $request->available) {
                return response()->json([
                    'status' => 'Error',
                    'message' => 'The spot is already ' . ($request->available ? 'unavailable' : 'available') . '.',
                ]);
            }
        }

        $availability = new Availabilityspot();
        $availability->staff_id = $request->staff_id;
        $availability->parking_id = $request->parking_id;
        $availability->spot_id = $request->spot_id;
        if ($request->available == 1) {
            $availability->available = true;
        } else {
            $availability->available = false;
        }
        $availability->reason = $request->reason;
        $availability->date = now()->toDateString();
        $availability->time = now()->toTimeString();
        $availability->save();

        return response()->json([
            'status' => 'Success',
            'data' => 'Availability record has been created.'
        ]);
    }

    public function addAvailability(Request $request)
    {
        $available = Spot::where('id', $request->spot_id)
            ->where('parking_id', $request->parking_id)
            ->first();

        $available->availability = true;
        $available->save();

        $this->availabilityRecord($request);

        return response()->json([
            'status' => 'Success',
            'data' => 'Spot ' . $request->spot_id . ' is now Available.'
        ]);
    }

    public function image(Request $request)
    {
        $base64Image = $request->image;

        $imageData = base64_decode($base64Image);

        $spot_id = 5;
        $parking_id = 1;

        $reservation = Reservation::where('spot_id', $spot_id)
            ->where('parking_id', $parking_id)
            ->where('valid', 1)
            ->first();

        if (!$reservation) {
            return response()->json(['message' => 'No valid reservation found'], 404);
        }

        $imagePath = 'C:\Users\moham\Desktop\ParkCatch\ser\storage\image.png';
        file_put_contents($imagePath, $imageData);

        $apiKey = '632020fed59f99387387beb58de0b629';
        //$imagePath = 'C:\Users\moham\Pictures\image.png';

        $client = new Client();
        $uploadApiUrl = 'https://api.imgbb.com/1/upload';

        $imageFile = fopen($imagePath, 'r');

        $response = $client->post($uploadApiUrl, [
            'multipart' => [
                [
                    'name' => 'key',
                    'contents' => $apiKey,
                ],
                [
                    'name' => 'image',
                    'contents' => $imageFile,
                    'filename' => 'imag.png',
                ],
            ],
        ]);

        if ($response->getStatusCode() === 200) {
            $data = json_decode($response->getBody(), true);
            $imageUrl = $data['data']['url'];

            $apiUrl = 'https://api.apilayer.com/image_to_text/url';

            $recognizeResponse = Http::withHeaders([
                'apikey' => 'XVAnKVpdijIVZu5McKWQZpSObwikv7nI',
            ])->get($apiUrl, [
                'url' => $imageUrl,
            ]);

            if ($recognizeResponse->successful()) {
                $parked_plate_number = $reservation->parked_plate_number;
                $plate_number = $reservation->plate_number;
                $valid = $reservation->valid;

                if ($plate_number != $parked_plate_number && $valid == 1) {
                    $data = $recognizeResponse->json();

                    $lines = explode("\n", $data["all_text"]);

                    $number = '';
                    foreach ($lines as $line) {
                        if (trim($line) == $plate_number) {
                            $reservation->correct = 1;
                            $number = trim($line);
                            break;
                        } else {
                            $reservation->correct = 0;
                        }
                    }

                    $reservation->parked_plate_number = $data["all_text"];
                    $reservation->save();
                }
            } else {
                return response()->json(['message' => 'API request failed'], 500);
            }
        } else {
            return response()->json(['message' => 'Image upload failed'], 500);
        }
    }
}