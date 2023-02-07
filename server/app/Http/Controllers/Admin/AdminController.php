<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Glass;
use App\Models\Product;
use App\Models\ProductSubPhoto;
use Illuminate\Http\Request;

class AdminController extends Controller
{

    public function getGlasses()
    {
        return Glass::all();
    }


    public function changePhoto(Request $request)
    {
        $id = $request->input('id');
        $product_id = $request->input('product_id');
        $path =  base_path('../public_html/product-photo/');
        $product = Product::find($product_id);
        // برای عوض کردن عکس اصلی محصول

        if ($id == 0) {
            if (glob($path . $product->photo))
                unlink($path . $product->photo);

            if ($request->hasFile('file')) {
                $image = $request->file('file');
                $file_name = $request->file('file')->getClientOriginalName();
                $product->photo = $file_name;
                $product->save();
                $image->move($path, $file_name);
                return $file_name;
            }
        }
        return "ARMAN";
        // عوض کردن مابقی عکس های محصول
        $path = base_path('../public_html/product-subphotos');

        if ($id == 'all') {
            $photo = new ProductSubPhoto;
            $photo->product_id = $product_id;
        } else
            $photo = ProductSubPhoto::find($id);

        if ($request->hasFile('file')) {
            $image = $request->file('file');
            $file_name = $request->file('file')->getClientOriginalName();
            $photo->photo = $file_name;
            $photo->save();
            $image->move($path, $file_name);
            return $file_name;
        }
    }
}
