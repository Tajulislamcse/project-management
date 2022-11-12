<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use DB;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
             DB::table('users')->insert([
            [
             'name' => 'tajul',
            'email' => 'tajul@gmail.com',
            'password' => bcrypt('123456'),
            ],
            [
             'name' => 'rakib',
            'email' => 'rakib@gmail.com',
            'password' => bcrypt('123456'),
            ],
            [
             'name' => 'jashim',
            'email' => 'jashim@gmail.com',
            'password' => bcrypt('123456'),
            ],
            [
             'name' => 'hasib',
            'email' => 'hasib@gmail.com',
            'password' => bcrypt('123456'),
            ],
            [
             'name' =>  'abdullah',
            'email' => 'abdullah@gmail.com',
            'password' => bcrypt('123456'),
            ],

        ]);
    }
}
