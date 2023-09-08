<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\SupervisorController;

Route::group(["middleware"=>"auth:api"],function(){
    Route::group(["middleware"=>"auth.supervisor"],function(){
        Route::get('reservations', [SupervisorController::class, 'getReservations']);
        Route::post('validity', [SupervisorController::class, 'checkValidity']);
        Route::post('spots', [SupervisorController::class, 'getSpots']);
        Route::post('terminate', [SupervisorController::class, 'terminateReservation']);
    });
});

Route::get("unauthorized", [AuthController::class, "unauthorized"])->name("unauthorized");
Route::post('login',[AuthController::class,'login']);
Route::post('register',[AuthController::class,'register']);

Route::get('logout',[AuthController::class,'logout']);