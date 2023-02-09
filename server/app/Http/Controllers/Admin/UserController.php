<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index(Request $request){
        $data = $request->all();
        $user = User::where('mobile', $data['name'])->get();
        
        if (count($user) == 0) {
            $user = User::where('email', $data['name'])->get();
        }

        if (count($user) == 0) {
            return response()->json(['error' => 'not autorized.'], 403);
        }

        $user = $user[0];
        if (Hash::check($data['password'], $user->password)) {
            if ($user->admin == 1) {
                $user->token = Hash::make(time() . $data['password']);
                $user->save();
                return $user->makeHidden(['password']);
            }

            return response()->json(['error' => 'not autorized.'], 403);
        }
        
        return response()->json(['error' => 'not autorized.'], 403);
    }
}
