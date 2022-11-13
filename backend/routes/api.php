<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\GroupController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::post('register',[AuthController::class,'registerUser']);
Route::post('login',[AuthController::class,'loginUser']);
// Route::get('login',function()
// {
//     return response()->json('okay');
// });
Route::middleware('auth:api')->group(function()
{
 Route::post('logout',[AuthController::class,'logout']);
 Route::resource('projects',ProjectController::class);
 Route::get('groups',[GroupController::class,'getGroups']);
 Route::get('users',[AuthController::class,'getUsers']);

});

