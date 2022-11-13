<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;

class GroupController extends Controller
{
    public function getGroups()
    {
    	$groups = DB::table('groups')->get();
    	return response()->json(['groups'=>$groups],200);
    }
}
