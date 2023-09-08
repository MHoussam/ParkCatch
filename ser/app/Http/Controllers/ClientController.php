<?php

namespace App\Http\Controllers;

use App\Models\Parking;
use App\Models\Reservation;
use App\Models\Spot;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

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

    public function changeAccountInfo(Request $request) {
        $user = User::where('id', Auth::user()->id)->first();
        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->email = $request->email;
        $user->save();

        return response()->json([
            'status' => 'Success',
            'data' => 'Account Info is updated.'
        ]);
    }

    public function changePassword(Request $request) {
        $user = User::where('id', Auth::user()->id)->first();
    
        if (!Hash::check($request->old_password, $user->password)) {
            return response()->json([
                'status' => 'Error',
                'message' => 'The old password does not match.'
            ], 400);
        }
    
        $request->validate([
            'new_password' => 'required|string|min:6',
        ]);
    
        $user->password = Hash::make($request->new_password);
        $user->save();
    
        return response()->json([
            'status' => 'Success',
            'message' => 'Password has been updated.'
        ]);
    }
}
