<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\ProductDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class ProductController extends Controller
{
    public function __construct()
    {
        header('Access-Control-Allow-Origin:  http://localhost:3000');
        header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');
        header('Access-Control-Allow-Methods:  GET, POST, PUT');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::with('categories');

        $products->select(['id', 'name', 'serial', 'price', 'sale', 'photo', 'content']);
        $products->with(['categories' => function ($query) {
            $query->addSelect('*');
        }]);

        $products->with(['details' => function ($query) {
            $query->addSelect('*');
            $query->with(['glass']);
        }]);

        $products->with(['product_sub_photos' => function ($query) {
            $query->orderBy('position');
            $query->addSelect('*');
        }]);

        return $products->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data['name'] = $request->name;
        $data['serial'] = $request->serial;
        $data['main_cat'] = $request->main_cat;
        $data['sub_cat'] = $request->sub_cat;
        $product = new  Product;
        $product->name = $data['name'];
        $product->serial = $data['serial'];

        $path =  base_path('../public_html/product-photo/');

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $file_name = $data['serial'] . 'main_photo';
            $product->photo = $file_name;
            $image->move($path, $file_name);
        }
        
        $product->save();
        $product = Product::find($product->id)->categories()->sync([$data['main_cat'], $data['sub_cat']]);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data =  $request->except('token');
        $product = Product::find($id);
        if ($data['name'] != 'sale_percent')
            $product->update([$data['name'] => $data['value']]);
        else
            $product->update(['sale' => $data['value'] / 100 * $product->price]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::find($id);
        $product->delete();
    }
}
