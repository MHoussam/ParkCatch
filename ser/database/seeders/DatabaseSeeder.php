<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        DB::table('reservations')->insert([
            'user_id' => 5,
            'parking_id' => 1,
            'spot_id' => 1,
            'duration' => 2,
            'total' => 30,
            'valid' => TRUE,
            'plate_number' => 'G573827',
            'parked_plate_number' => 'G573827',
            'correct' => null,
        ]);

        DB::table('reservations')->insert([
            'user_id' => 10,
            'parking_id' => 3,
            'spot_id' => 8,
            'duration' => 3,
            'total' => 40,
            'valid' => TRUE,
            'plate_number' => 'B765476',
            'parked_plate_number' => 'B223344',
            'correct' => null,
        ]);

        DB::table('spots')->insert([
            'parking_id' => 1,
            'name' => 'A-1',
            'availability' => true,
            'reason' => null,
            'x_coordinate' => 1,
            'y_coordinate' => 1,
        ]);

        DB::table('spots')->insert([
            'parking_id' => 1,
            'name' => 'A-2',
            'availability' => true,
            'reason' => null,
            'x_coordinate' => 1,
            'y_coordinate' => 2,
        ]);

        DB::table('spots')->insert([
            'parking_id' => 1,
            'name' => 'A-3',
            'availability' => true,
            'reason' => null,
            'x_coordinate' => 1,
            'y_coordinate' => 3,
        ]);

        DB::table('spots')->insert([
            'parking_id' => 1,
            'name' => 'A-4',
            'availability' => true,
            'reason' => null,
            'x_coordinate' => 1,
            'y_coordinate' => 4,
        ]);

        DB::table('spots')->insert([
            'parking_id' => 1,
            'name' => 'A-5',
            'availability' => true,
            'reason' => null,
            'x_coordinate' => 1,
            'y_coordinate' => 5,
        ]);

        DB::table('spots')->insert([
            'parking_id' => 2,
            'name' => 'B-1',
            'availability' => true,
            'reason' => null,
            'x_coordinate' => 2,
            'y_coordinate' => 1,
        ]);

        DB::table('spots')->insert([
            'parking_id' => 2,
            'name' => 'B-2',
            'availability' => true,
            'reason' => null,
            'x_coordinate' => 2,
            'y_coordinate' => 2,
        ]);

        DB::table('spots')->insert([
            'parking_id' => 2,
            'name' => 'B-3',
            'availability' => true,
            'reason' => null,
            'x_coordinate' => 2,
            'y_coordinate' => 3,
        ]);

        DB::table('spots')->insert([
            'parking_id' => 2,
            'name' => 'B-4',
            'availability' => true,
            'reason' => null,
            'x_coordinate' => 2,
            'y_coordinate' => 4,
        ]);

        DB::table('spots')->insert([
            'parking_id' => 2,
            'name' => 'B-5',
            'availability' => true,
            'reason' => null,
            'x_coordinate' => 2,
            'y_coordinate' => 5,
        ]);

        DB::table('spots')->insert([
            'parking_id' => 2,
            'name' => 'C-1',
            'availability' => true,
            'reason' => null,
            'x_coordinate' => 3,
            'y_coordinate' => 1,
        ]);

        DB::table('spots')->insert([
            'parking_id' => 2,
            'name' => 'C-2',
            'availability' => true,
            'reason' => null,
            'x_coordinate' => 3,
            'y_coordinate' => 2,
        ]);

        DB::table('spots')->insert([
            'parking_id' => 2,
            'name' => 'C-3',
            'availability' => true,
            'reason' => null,
            'x_coordinate' => 3,
            'y_coordinate' => 3,
        ]);

        DB::table('spots')->insert([
            'parking_id' => 2,
            'name' => 'C-4',
            'availability' => true,
            'reason' => null,
            'x_coordinate' => 3,
            'y_coordinate' => 4,
        ]);

        DB::table('spots')->insert([
            'parking_id' => 2,
            'name' => 'C-5',
            'availability' => true,
            'reason' => null,
            'x_coordinate' => 3,
            'y_coordinate' => 5,
        ]);
    }
}