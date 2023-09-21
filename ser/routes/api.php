<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\SupervisorController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\SocketController;

Route::group(["middleware"=>"auth:api"],function(){
    Route::get('socket', [SocketController::class, 'socket']);
    Route::post('reservations', [SupervisorController::class, 'getReservations']);

    Route::group(["middleware"=>"auth.supervisor"],function(){
        Route::post('validity', [SupervisorController::class, 'checkValidity']);
        Route::post('spots', [SupervisorController::class, 'getSpots']);
        Route::post('terminate', [SupervisorController::class, 'terminateReservation']);
        Route::post('availability', [SupervisorController::class, 'changeAvailability']);
    });

    Route::group(["middleware"=>"auth.admin"],function(){
        Route::post('validity', [SupervisorController::class, 'checkValidity']);
        Route::post('spots', [SupervisorController::class, 'getSpots']);
        Route::post('availability', [SupervisorController::class, 'changeAvailability']);
        Route::post('parkingDetails', [AdminController::class, 'changeParkingDetails']);
        Route::post('ban', [AdminController::class, 'banCustomer']);
        Route::post('addSupervisor', [AuthController::class, 'register']);
        Route::post('removeSupervisor', [AdminController::class, 'removeSupervisor']);
    });
    Route::group(["middleware"=>"auth.client"],function(){
        Route::post('spots', [SupervisorController::class, 'getSpots']);
        Route::post('availableSpots', [SupervisorController::class, 'getAvailableSpots']);
        Route::post('register', [AuthController::class, 'register']);
        Route::get('parkings', [ClientController::class, 'getParkings']);
        Route::post('available', [ClientController::class, 'availableSpots']);
        Route::post('reserve', [ClientController::class, 'reserveSpot']);
        Route::post('changeInfo', [ClientController::class, 'changeAccountInfo']);
        Route::post('changePassword', [ClientController::class, 'changePassword']);
    });
});

Route::get("unauthorized", [AuthController::class, "unauthorized"])->name("unauthorized");
Route::post('login',[AuthController::class,'login']);
//Route::post('register',[AuthController::class,'register']);
Route::get('logout',[AuthController::class,'logout']);