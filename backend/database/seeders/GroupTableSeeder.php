<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;
class GroupTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        		DB::table('groups')->insert([
        				['name'=>'Mobile Application Group'],
        				['name'=>'Web Application Group'],
        			]);
    }
}
