<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Glass;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    
    public function getGlasses(){
        return Glass::all();
    }
    

    public function changePhoto(Request $request){
        $id = $request->input('id');

        if ($request->hasFile('file')) {
            $image = $request->file('file');
            $destinationPath = base_path('../public_html/product-photo');
            $file_name = $request->file('file')->getClientOriginalName();;
            $image->move($destinationPath, $file_name);
        }

    }
}
