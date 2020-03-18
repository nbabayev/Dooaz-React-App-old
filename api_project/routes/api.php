<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('register','API\UserController@register');
Route::post('login','API\UserController@login');
Route::post('/test','API\AdController@test')->name('test');
Route::get('/test','API\AdController@testView')->name('testView');
Route::post('/','API\AdController@index')->name('index');

Route::group(['prefix'=>'elanlar'],function (){
    Route::get('/','API\AdController@allCategories')->name('allCategories');
    Route::post ('/newad','API\AdController@newAd')->name('newAd');

});


Route::group([ 'middleware' => 'auth:api' ], function () {
    Route::post('details','API\UserController@details');
});
