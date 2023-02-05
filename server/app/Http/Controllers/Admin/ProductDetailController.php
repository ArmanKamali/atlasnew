<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\ProductDetail;
use Illuminate\Http\Request;

class ProductDetailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    // Add Product
    public function store(Request $request)
    {
        $data = $request->except('token');
        for ($i = 0; $i < $data['number']; $i++) {
            $detail = new ProductDetail;
            $detail->product_id = $data['productId'];
            $detail->save();
        }

        return $detail->id;
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data =  $request->except('token');
        $product = ProductDetail::find($data['id']);
        $product->update([$data['name'] => $data['value']]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        $detail = ProductDetail::find($id);
        $product = Product::with('details')->find($detail->product_id);
        if (count($product->details) == 1)
            return response()->json(['error' => 'you can not delete last product details.'], 500);

        $detail->delete();
    }
}
