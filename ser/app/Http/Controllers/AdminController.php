<?php

namespace App\Http\Controllers;

use App\Models\Banning;
use App\Models\Parking;
use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function changeParkingDetails(Request $request) {
        $details = Parking::where('parking_id', $request->parking_id)->first();

        if ($details) {
            $details->price = $request->price;
            $details->open_hour = $request->open_hour;            
            $details->close_hour = $request->close_hour;
            $details->save();

            return response()->json([
                'status' => 'Success',
                'data' => 'Details has been changed.'
            ]);
        } else {
            return response()->json([
                'status' => 'Error',
                'data' => 'Could not find the parking lot'
            ], 404);
        }
    }

    public function banCustomer(Request $request) {
        $ban = new Banning;
        $ban->user_email = $request->email;
        $ban->reason = $request->reason;
        $ban->save();

        return response()->json([
            'status' => 'Success',
            'data' => 'Details has been changed.'
        ]);
    }

    public function removeSupervisor(Request $request) {
        $remove = User::where('email', $request->email)->first();
        
        if($remove){

            $remove->delete();
            
            return response()->json([
                'status' => 'Success',
                'data' => 'Supervisor with email: ' . $request->email . ' has been removed.'
            ]);
        }
        else {
            return response()->json([
                'status' => 'Error',
                'data' => 'Supervisor with email: ' . $request->email . ' not found.'
            ], 404);
        }        
    }
}
