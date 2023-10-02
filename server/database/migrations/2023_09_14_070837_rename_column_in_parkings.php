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
        Schema::table('parkings', function (Blueprint $table) {
            $table->decimal('latitude', 13, 10)->after('x_coordinate');
            $table->decimal('longitude', 13, 10)->after('y_coordinate');

            $table->dropColumn(['x_coordinate', 'y_coordinate']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('parkings', function (Blueprint $table) {
        });
    }
};
