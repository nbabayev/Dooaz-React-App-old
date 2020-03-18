<?php

namespace App\Http\Controllers\API;

use App\Category;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function register(Request $request){
        //return $request->all();
        $validator = Validator::make($request->all(),[
           'name'=>'required',
            'surname'=>'required',
            'phone'=>'required',
            'email'=>'required|email|unique:users',
            'password'=>'required',
            'confirm_password'=>'required|same:password'
        ]);
        if ($validator->fails()){
            return response()->json(['status' => 'error', 'errors' => $validator->errors(),401]);
        }
        $input = $request->all();
        $input['password'] = Hash::make($input['password']);
        $user =User::create($input);
        $token = $user->createToken('MyApp')->accessToken;
        return response()->json(['status' => 'success', 'token' => $token, 'user' => $user],200 );

    }
    public function test(){
        return 'ok';
        $data = Category::with('categories')->get();
        return $data;
    }
    public function details(){
        $user = Auth::user();
        return response()->json(['success'=>$user],200);
    }
    public function login(Request $request){
        $loginData = $request->validate([
           'email'=>'required',
            'password'=>'required',
        ]);
        if (!auth()->attempt($loginData)){
            return response(['message'=>'Invalid credentials']);
        }
        $accessToken = auth()->user()->createToken('MyApp')->accessToken;
        return response(['user'=>auth()->user(),'access_token'=>$accessToken]);
    }
}
