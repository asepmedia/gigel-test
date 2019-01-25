<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Secret',
            'email' => 'secret@secret.com',
            'password' => Hash::make('secret'),
            'phone_number' => '08120898213'
        ]);
    }
}
