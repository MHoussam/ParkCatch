<?php

namespace App\Http\Controllers;

use App\Models\Banning;
use App\Models\Parking;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function changeParkingDetails(Request $request) {
        $details = Parking::where('id', $request->parking_id)->first();
    
        if ($details) {
            if ($request->has('price')) {
                $details->price = $request->price;
            }
            
            if ($request->has('open_hour')) {
                $details->open_hour = $request->open_hour;
            }
    
            if ($request->has('close_hour')) {
                $details->close_hour = $request->close_hour;
            }
    
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

    public function addSupervisor(Request $request){
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        $user = new User;
        $user->first_name = $request-> first_name;
        $user->last_name = $request-> last_name;
        $user->email = $request-> email;
        $user->password = Hash::make($request->password);
        $user->role = 2;
        $user->parking_id = $request->parking_id;
        $user->save();

        return response()->json([
            'status' => 'Success',
            'data' => $user
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
