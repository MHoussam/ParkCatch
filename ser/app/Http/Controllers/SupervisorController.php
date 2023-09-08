<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;

class SupervisorController extends Controller
{
    public function getReservations() {
        $reservations = Reservation::with('user:id,email')->get();
    
        return response()->json([
            'status' => 'Success',
            'data' => $reservations
        ]);
    }

    public static function checkValidity(Request $request)
    {
        $reservation = Reservation::find($request->id);

        if (!$reservation) {
            return response()->json([
                'status' => 'Error',
                'message' => 'Reservation not found.',
            ]);
        }

        $isCorrect = $reservation->plate_number === $reservation->parked_plate_number;

        $reservation->update(['correct' => $isCorrect]);

        return response()->json([
            'status' => 'Success',
            'message' => 'Plate Number & Parked Plate Number Matched.',
        ]);
    }
}
