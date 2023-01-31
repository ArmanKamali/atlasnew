<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;

class ProductController extends Controller
{
    public function __construct()
    {
        header('Access-Control-Allow-Origin:  *');
        header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');
        header('Access-Control-Allow-Methods:  GET, POST, PUT');
    }

    public function getCategory()
    {
        

        $category = Category::all();
        return $category;
    }

    public function getProducts(Request $request){
        $cat_id = $request->all();
        $products = Product::all();
        return $products;
    }
}
