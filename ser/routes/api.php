<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\SupervisorController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ClientController;

Route::group(["middleware"=>"auth:api"],function(){
    Route::group(["middleware"=>"auth.supervisor"],function(){
        Route::get('reservations', [SupervisorController::class, 'getReservations']);
        Route::post('validity', [SupervisorController::class, 'checkValidity']);
        Route::post('spots', [SupervisorController::class, 'getSpots']);
        Route::post('terminate', [SupervisorController::class, 'terminateReservation']);
        Route::post('availability', [SupervisorController::class, 'changeAvailability']);
    });

    Route::group(["middleware"=>"auth.admin"],function(){
        Route::get('reservations', [SupervisorController::class, 'getReservations']);
        Route::post('validity', [SupervisorController::class, 'checkValidity']);
        Route::post('spots', [SupervisorController::class, 'getSpots']);
        Route::post('availability', [SupervisorController::class, 'changeAvailability']);
        Route::post('parkingDetails', [AdminController::class, 'changeAvailability']);
        Route::post('ban', [AdminController::class, 'banCustomer']);
        Route::post('addSupervisor', [AuthController::class, 'register']);
        Route::post('removeSupervisor', [AdminController::class, 'removeSupervisor']);
    });
});

Route::get("unauthorized", [AuthController::class, "unauthorized"])->name("unauthorized");
Route::post('login',[AuthController::class,'login']);
Route::post('register',[AuthController::class,'register']);
Route::get('logout',[AuthController::class,'logout']);