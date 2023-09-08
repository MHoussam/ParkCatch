<?php

namespace App\Http\Controllers;

use App\Models\Parking;
use App\Models\Reservation;
use App\Models\Spot;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function getParkings() {
        $parkings = Parking::all();

        return response()->json([
            'status' => 'Error',
            'data' => $parkings
        ]);
    }

    public function reserveSpot(Request $request) {
        $reserve = new Reservation;
        $reserve->user_id = $request->user_id;
        $reserve->parking_id = $request->parking_id;
        $reserve->spot_id = $request->spot_id;
        $reserve->duration = $request->duration;
        $reserve->total = $request->total;
        $reserve->valid = true;
        $reserve->plate_number = $request->plate_number;
        $reserve->phone_number = $request->phone_number;
        $reserve->time_reserved = $request->time_reserved;
        $reserve->date_reserved = $request->date_reserved;

        $spot = Spot::where('id', $request->spot_id)
                    ->where('parking_id', $request->parking_id)
                    ->first();

        $reserved = Reservation::where('spot_id', $request->spot_id)
                               ->where('valid', true)
                               ->first();

        if($spot != null && $reserved == null) {
            $reserve->save();

            return response()->json([
                'status' => 'Success',
                'data' => 'Spot has been reserved.'
            ]);
        }
        else {
            return response()->json([
                'status' => 'Error',
                'data' => 'The spot is already reserved or it does not exist.',
            ]);
        }
    }

    public function getReservations(Request $request) {
        $reservations = Reservation::where('user_id', $request->user_id)->get();

        return response()->json([
            'status' => 'Success',
            'data' => $reservations
        ]);
    }
}
