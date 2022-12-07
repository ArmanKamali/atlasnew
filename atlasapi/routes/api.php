<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::post('/user/generate-password', [\App\Http\Controllers\AuthController:: class, 'generatePassword']);
Route::post('/user/login', [\App\Http\Controllers\AuthController:: class, 'login']);
Route::post('/user/info', [\App\Http\Controllers\AuthController:: class, 'userInfo']);
Route::post('/buy', [\App\Http\Controllers\BuyController:: class, 'index']);
Route::post('/buy/upload-image', [\App\Http\Controllers\BuyController:: class, 'uploadImage']);
Route::post('/admin/login', [\App\Http\Controllers\AdminController:: class, 'login']);
Route::post('/user/get-provinces', [\App\Http\Controllers\AuthController:: class, 'getProvinces']);
Route::post('/user/edit-user', [\App\Http\Controllers\AuthController:: class, 'editUser']);
