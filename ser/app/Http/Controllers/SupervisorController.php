<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use App\Models\Spot;
use App\Models\Termination;
use Illuminate\Http\Request;

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
            // $terminate->reason = $request->reason;
            $terminate->save();

            $this->terminateRecord($request);

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

    public function terminateRecord(Request $request)
    {
        $termination = new Termination();
        $termination->staff_id = $request->staff_id;
        $termination->client_id = $request->client_id;
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

    public function changeAvailability(Request $request)
    {
        $available = Spot::where('id', $request->spot_id)
            ->where('parking_id', $request->parking_id)
            ->first();

        if ($available->availability) {
            $available->availability = FALSE;
            $available->save();

            return response()->json([
                'status' => 'Success',
                'data' => 'Spot ' . $request->spot_id . ' is now Unavailable.'
            ]);
        } else {
            $available->availability = TRUE;
            $available->save();

            return response()->json([
                'status' => 'Success',
                'data' => 'Spot ' . $request->spot_id . ' is now Available.'
            ]);
        }
    }
}
