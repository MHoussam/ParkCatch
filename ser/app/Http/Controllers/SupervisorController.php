<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use App\Models\Spot;
use Illuminate\Http\Request;

class SupervisorController extends Controller
{
    public function getReservations(Request $request) {
        $reservations = Reservation::where('user_id', $request->user_id)->get();

        $reservationIds = $reservations->pluck('parking_id');

        $reservParking = Reservation::with('parking:id,name,address,latitude,longitude,photo')
                         ->whereIn('parking_id',$reservationIds )
                         ->get();
    
        return response()->json([
            'status' => 'Success',
            'data' => $reservParking
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

        if($isCorrect){
            $message = 'Plate Number & Parked Plate Number Matched.';
        }
        else {
            $message = 'Plate Number & Parked Plate Number Did Not Match.';
        }

        return response()->json([
            'status' => 'Success',
            'message' => $message,
        ]);
    }

    public function getSpots(Request $request) {
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
    
    public function getAvailableSpots(Request $request) {
        $spots = $this->getSpots($request);

        $availableSpots = $spots->original['data']->filter(function ($spot) {
            return !$spot->reserved;
        });

        return response()->json([
            'status' => 'Success',
            'data' => $availableSpots->count()
        ]);
    }
    

    public function terminateReservation(Request $request) {
        $terminate = Reservation::where('spot_id', $request->spot_id)
                     ->where('parking_id', $request->parking_id)
                     ->where('valid', TRUE)
                     ->first();

        if ($terminate) {
            $terminate->valid = FALSE;
            $terminate->reason = $request->reason;
            $terminate->save();

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

    public function changeAvailability(Request $request) {
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
