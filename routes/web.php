<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::resource('products', 'ProductController');

Route::get('/', 'HomeController@index');
Route::get('/login', 'HomeController@index');
Route::get('/register', 'HomeController@index');
Route::get('/product/create', 'HomeController@index');


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
