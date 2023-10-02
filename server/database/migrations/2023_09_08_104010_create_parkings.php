<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('parkings', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('address');
            $table->integer('spots_number');
            $table->integer('price');
            $table->time('open_hour');
            $table->time('close_hour');
            $table->timestamps();
        });

        Schema::create('spots', function (Blueprint $table) {
            $table->id();
            $table->integer('parking_id');
            $table->string('name');
            $table->boolean('availability');
            $table->string('reason')->nullable();
            $table->integer('x_coordinate');
            $table->integer('y_coordinate');
            $table->timestamps();
        });

        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->integer('parking_id');
            $table->string('spot_name');
            $table->integer('duration');
            $table->integer('total');
            $table->boolean('valid');            
            $table->timestamps();
        });

        Schema::create('bannings', function (Blueprint $table) {
            $table->id();
            $table->string('user_email');
            $table->string('reason');            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('parkings');
    }
};
