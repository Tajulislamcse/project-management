<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\RegistrationRequest;
use App\Http\Requests\LoginRequest;
use App\Models\User;


class AuthController extends Controller
{
    public function registerUser(RegistrationRequest $request)
    {
          $credentials = [];
          $credentials = [
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
          ];
          $user = User::create($credentials);
          $token = $user->createToken('access_token')->accessToken;
          $data = [
            'user' => $user, 
            'token' => $token,
            'message' => 'Registration has been successful.'
        ];
        return response()->json($data, 201);
    }
    public function loginUser(LoginRequest $request)
    {
          $credentials = [
            'email' => $request->email,
            'password' => $request->password
          ];
         
        if (auth()->attempt($credentials))
          {
            $user = User::where('email',$credentials['email'])->first();
            $token= auth()->user()->createToken('access_token')->accessToken;
            $data = [
              'user' => $user, 
              'token' => $token,
             'message' => 'Login has been successful.'
            ];
            return response()->json($data, 200);
          }
          $data = [
             'message' => 'email or password mismatch.'
            ];
          return response()->json($data, 422);


    }
    public function logout()
    {
       auth()->user()->token()->revoke();
       return response()->json(['message'=>'Logout has been successful'],200);
    }
    public function getUsers()
    {
      $users = User::all();
      return response()->json(['data'=>$users],200);
    }
}
