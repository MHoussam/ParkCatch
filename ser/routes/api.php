<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\SupervisorController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\SocketController;

Route::group(["middleware" => "auth:api"], function () {
    Route::get('socket', [SocketController::class, 'socket']);
    Route::post('spots', [SupervisorController::class, 'getSpots']);

    Route::group(["middleware" => ["auth", "auth.supervisor"]], function () {
        Route::post('allReservations', [SupervisorController::class, 'getAllReservations']);
        Route::post('validity', [SupervisorController::class, 'checkValidity']);
        Route::post('terminate', [SupervisorController::class, 'terminateReservation']);
        Route::post('removeAvail', [SupervisorController::class, 'removeAvailability']);
        Route::post('addAvail', [SupervisorController::class, 'addAvailability']);
    });

    Route::group(["middleware" => "auth.admin"], function () {
        Route::post('adminAllReservations', [SupervisorController::class, 'getAllReservations']);
        Route::post('adminValidity', [SupervisorController::class, 'checkValidity']);
        Route::post('adminRemoveAvail', [SupervisorController::class, 'removeAvailability']);
        Route::post('adminAddAvail', [SupervisorController::class, 'addAvailability']);
        Route::post('parkingDetails', [AdminController::class, 'changeParkingDetails']);
        Route::post('ban', [AdminController::class, 'banCustomer']);
        Route::post('addSupervisor', [AdminController::class, 'addSupervisor']);
        Route::post('removeSupervisor', [AdminController::class, 'removeSupervisor']);
    });
    Route::group(["middleware" => "auth.client"], function () {
        Route::post('availableSpots', [SupervisorController::class, 'getAvailableSpots']);
        Route::post('reservations', [ClientController::class, 'getReservations']);
        Route::post('register', [AuthController::class, 'register']);
        Route::get('parkings', [ClientController::class, 'getParkings']);
        Route::post('available', [ClientController::class, 'availableSpots']);
        Route::post('reserve', [ClientController::class, 'reserveSpot']);
        Route::post('changeInfo', [ClientController::class, 'changeAccountInfo']);
        Route::post('changePassword', [ClientController::class, 'changePassword']);
    });
});

Route::get("unauthorized", [AuthController::class, "unauthorized"])->name("unauthorized");
Route::post('login', [AuthController::class, 'login']);
Route::post('register',[AuthController::class,'register']);
Route::get('logout', [AuthController::class, 'logout']);
Route::post('image', [SupervisorController::class, 'image']);