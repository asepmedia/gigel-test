<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use Validator;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function login(){
        if(Auth::attempt(['email' => request('email'), 'password' => request('password')])){
            $user = Auth::user();
            $success['status'] = true;
            $success['message'] = 'Login Success';
            $success['token'] =  $user->createToken('GigelApp')->accessToken;
            $success['user'] =  $user;
            return response()->json($success, 200);
        }
        else{
            return response()->json(['status' => false,'error'=>'Unauthorised'], 401);
        }
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'phone_number' => 'unique:users,phone_number',
            'password' => 'required|min:8|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/',
            'c_password' => 'required|min:8|same:password|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => false, 'error'=>$validator->errors()], 401);            
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['status'] = true;
        $success['message'] = 'Success Register';
        $success['token'] =  $user->createToken('GigelApp')->accessToken;
        $success['user'] =  $user;

        return response()->json($success, 200);
    }

    public function update(Request $request)
    {
        $id = auth()->user()->id;

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:users,email,'. $id,
            'phone_number' => 'unique:users,phone_number,'. $id,
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => false, 'error'=>$validator->errors()], 401);            
        }

        $update = User::where('id', $id)->update([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'phone_number' => $request->input('phone_number'),
        ]);

        if($update) {
            $success['status'] = true;
            return response()->json($success, 200);
        } else {
            $success['status'] = false;
            return response()->json($success, 200);
        }
    }

    public function password(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'old_password' => 'required',
            'password' => 'required|min:8|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/',
            'c_password' => 'required|min:8|same:password|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => false, 'error'=>$validator->errors()], 401);            
        }

        if (!Hash::check($request->old_password, auth()->user()->password)) {
            return response()->json(['status' => false, 'errors' => (object)[
                'old_password' => 'Old password does not match.'
            ]], 400);
        }

        $update = User::where('id', auth()->user()->id)->update([
            'password' => Hash::make($request->password)
        ]);

        if($update) {
            $success['status'] = true;
            return response()->json($success, 200);
        } else {
            $success['status'] = false;
            return response()->json($success, 200);
        }
        
    }

    public function profile(Request $request)
    {
        $success['status'] = true;
        $success['data'] = User::where('id', auth()->user()->id)->first();
        return response()->json($success, 200); 
    }
}
