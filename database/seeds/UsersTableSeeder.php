<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\User::create([
            'name' => 'Hiển',
            'email' => 'hien@gmail.com',
            'phone' => '01234567890',
            'password' => bcrypt('123123'),
            'role' => \App\User::ROLE_USER,
        ]);
    }
}
