<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TodoController;

Route::group(["middleware"=>"auth:api"],function(){

    Route::group(["middleware"=>"auth.admin"],function(){
        Route::post('register',[AuthController::class,'register']);
        Route::post('updateUserAccount',[AdminController::class,'updateUserAccount']);
        Route::post('deleteUser',[AdminController::class,'deleteUser']);
        Route::post('getUsers', [AdminController::class, 'getUsers']);
    });

    Route::group(["middleware"=>"auth.teacher"],function(){
        Route::get('getTeacherCourses', [TeacherController::class, 'getTeacherCourses']);
        Route::post('getCourseMaterial', [TeacherController::class, 'getCourseMaterial']);
        Route::post('getCourseAssignments', [TeacherController::class, 'getCourseAssignments']);
    });

    Route::group(["middleware"=>"auth.student"],function(){
        Route::post('student/getCourses', [StudentController::class, 'getCourses']);
        Route::post('getAvailableCourses', [StudentController::class, 'getAvailableCourses']);
        Route::post('courseEnroll', [StudentController::class, "courseEnroll"]);
    });
   
    Route::group(["prefix" => "user"], function(){
        Route::post("logout", [AuthController::class, "logout"]);
        Route::post("refresh", [AuthController::class, "refresh"]);
    });

});


Route::get("unauthorized", [AuthController::class, "unauthorized"])->name("unauthorized");
Route::post('login',[AuthController::class,'login']);