<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;

class ProductController extends Controller
{
    public function getCategory()
    {
        $category = Category::all();
        return $category;
    }

    public function getProducts(){
        $cat_id = $_GET['cat_id'];
        return $cat_id;
        $products = Product::all();
        return $products;
    }
}
