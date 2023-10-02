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
            'spot_id' => 2,
            'duration' => 2,
            'total' => 30,
            'valid' => False,
            'plate_number' => 'G573827',
            'parked_plate_number' => 'G573827',
            'correct' => 1,
            'phone_number' => 71218886,
            'time_reserved' => '20:15:10',
            'date_reserved' => '2023-09-08',
        ]);

        DB::table('reservations')->insert([
            'user_id' => 5,
            'parking_id' => 3,
            'spot_id' => 12,
            'duration' => 3,
            'total' => 40,
            'valid' => TRUE,
            'plate_number' => 'B765476',
            'parked_plate_number' => 'B223344',
            'correct' => 0,
            'phone_number' => 71218886,
            'time_reserved' => '20:43:37',
            'date_reserved' => '2023-09-07',
        ]);

        DB::table('reservations')->insert([
            'user_id' => 3,
            'parking_id' => 3,
            'spot_id' => 13,
            'duration' => 2,
            'total' => 30,
            'valid' => FALSE,
            'plate_number' => 'G124356',
            'parked_plate_number' => null,
            'correct' => null,
            'phone_number' => 71218886,
            'time_reserved' => '09:03:25',
            'date_reserved' => '2023-09-07',
        ]);

        DB::table('reservations')->insert([
            'user_id' => 3,
            'parking_id' => 1,
            'spot_id' => 5,
            'duration' => 2,
            'total' => 30,
            'valid' => TRUE,
            'plate_number' => 'G123456',
            'parked_plate_number' => null,
            'correct' => null,
            'phone_number' => 71218886,
            'time_reserved' => '09:03:25',
            'date_reserved' => '2023-09-07',
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
            'x_coordinate' => 2,
            'y_coordinate' => 1,
        ]);

        DB::table('spots')->insert([
            'parking_id' => 1,
            'name' => 'A-3',
            'availability' => true,
            'reason' => null,
            'x_coordinate' => 3,
            'y_coordinate' => 1,
        ]);

        DB::table('spots')->insert([
            'parking_id' => 1,
            'name' => 'A-4',
            'availability' => true,
            'reason' => null,
            'x_coordinate' => 4,
            'y_coordinate' => 1,
        ]);

        DB::table('spots')->insert([
            'parking_id' => 1,
            'name' => 'A-5',
            'availability' => true,
            'reason' => null,
            'x_coordinate' => 5,
            'y_coordinate' => 1,
        ]);

        DB::table('spots')->insert([
            'parking_id' => 2,
            'name' => 'B-1',
            'availability' => true,
            'reason' => null,
            'x_coordinate' => 1,
            'y_coordinate' => 2,
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
            'x_coordinate' => 3,
            'y_coordinate' => 2,
        ]);

        DB::table('spots')->insert([
            'parking_id' => 2,
            'name' => 'B-4',
            'availability' => true,
            'reason' => null,
            'x_coordinate' => 4,
            'y_coordinate' => 2,
        ]);

        DB::table('spots')->insert([
            'parking_id' => 2,
            'name' => 'B-5',
            'availability' => true,
            'reason' => null,
            'x_coordinate' => 5,
            'y_coordinate' => 2,
        ]);

        DB::table('spots')->insert([
            'parking_id' => 2,
            'name' => 'C-1',
            'availability' => true,
            'reason' => null,
            'x_coordinate' => 1,
            'y_coordinate' => 3,
        ]);

        DB::table('spots')->insert([
            'parking_id' => 2,
            'name' => 'C-2',
            'availability' => true,
            'reason' => null,
            'x_coordinate' => 2,
            'y_coordinate' => 3,
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
            'x_coordinate' => 4,
            'y_coordinate' => 3,
        ]);

        DB::table('spots')->insert([
            'parking_id' => 2,
            'name' => 'C-5',
            'availability' => true,
            'reason' => null,
            'x_coordinate' => 5,
            'y_coordinate' => 3,
        ]);

        DB::table('parkings')->insert([
            'name' => 'Le Mall Parking',
            'address' => 'Saida',
            'price' => 2,
            'spots_number' => 30,
            'open_hour' => '09:00:00',
            'close_hour' => '23:00:00',
            'latitude' => 33.5633724791,
            'longitude' => 35.3803411022,
            'photo' => 'lemall.png',
        ]);

        DB::table('parkings')->insert([
            'name' => 'Saida Mall Parking',
            'address' => 'Saida',
            'price' => 1,
            'spots_number' => 40,
            'open_hour' => '09:00:00',
            'close_hour' => '23:00:00',
            'latitude' => 33.5647691664,
            'longitude' => 35.3800171543,
            'photo' => 'saidamall.png',
        ]);

        DB::table('users')->insert([
            'first_name' => 'Houssam',
            'last_name' => 'Osta',
            'email' => 'admin1@gmail.com',
            'password' => '$2y$10$TJG/09OC9H94NP8rhCeC4e3SWuyqfHzfI.3Pki.bx77a981ggo02y',
            'role' => 1,
            'parking_id' => 1,
        ]);

        DB::table('users')->insert([
            'first_name' => 'Mohammad',
            'last_name' => 'Houssam',
            'email' => 'supervisor1@gmail.com',
            'password' => '$2y$10$A3me/JUsUMmOZlRlExiR2uypu.mCMDYhjTrRLzAEBL7rCeNLMi1hu',
            'role' => 2,
            'parking_id' => 1,
        ]);

        DB::table('users')->insert([
            'first_name' => 'Mohammad',
            'last_name' => 'Osta',
            'email' => 'client@gmail.com',
            'password' => '$2y$10$NlCAOKYXY7EhooGP5OfWGO/eEqFxbl8QmH1KUUzEbqkr8c9qRw8Q2',
            'role' => 3,
            'parking_id' => 0,
        ]);
    }
}