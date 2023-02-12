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

    public function getProducts()
    {
        $cat_id = $_GET['cat_id'];
        if ($cat_id == 'all') {
            $products = Product::with('categories');

            $products->select(['id', 'name', 'serial', 'price', 'sale', 'photo', 'content']);
            $products->with(['categories' => function ($query) {
                $query->addSelect('*');
            }]);

            $products->with(['details' => function ($query) {
                $query->addSelect('*');
                $query->with(['glass']);
            }]);


            return  $products->get();
        }

        $products = Category::with(['products' => function ($products) {
            $products->with(['details' => function ($details) {
                $details->addSelect('*');
                $details->with(['glass']);
            }]);
        }])->find($cat_id)->products;
        return $products;
    }
}
