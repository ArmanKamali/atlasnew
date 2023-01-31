<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\AdminToken;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/get-category', [\App\Http\Controllers\ProductController:: class, 'getCategory']);
Route::get('/get-products', [\App\Http\Controllers\ProductController:: class, 'getProducts']);


// admin page
Route::post('admin/login',[\App\Http\Controllers\Admin\UserController:: class, 'index']);


// admin middleware
Route::middleware([AdminToken::class])->group(function () {
    Route::get('admin/get-products',[\App\Http\Controllers\Admin\ProductController:: class, 'index']);

 
});