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

Route::get('/', function () {
    // return view('welcome');
    return view('dashboard.dashboard-1');
});

/**
 * Dashboard
 */
Route::get('/index.html', function() {
	return view('dashboard.dashboard-1');
});

Route::get('/index2.html', function() {
	return view('dashboard.dashboard-2');
});

Route::get('/index3.html', function() {
	return view('dashboard.dashboard-3');
});

/**
 * Products
 */
Route::get('/products.html', function() {
	return view('ecommerce.product');
});

Route::get('/product-orders.html', function() {
	return view('ecommerce.product-orders');
});

/**
 * UI Elements
 */
Route::get('/panels-wells.html', function() {
	return view('uielements.panels-wells');
});

/**
 * Sample Pages
 */
Route::get('/starter-page.html', function() {
	return view('samplepages.starter-page');
});
