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
 * eCommerce
 */
Route::get('/products.html', function() {
	return view('ecommerce.products');
});

Route::get('/product-orders.html', function() {
	return view('ecommerce.product-orders');
});

Route::get('/product-details.html', function() {
	return view('ecommerce.product-details');
});

Route::get('/product-edit.html', function() {
	return view('ecommerce.product-edit');
});

Route::get('/product-cart.html', function() {
	return view('ecommerce.product-cart');
});

Route::get('/product-checkout.html', function() {
	return view('ecommerce.product-checkout');
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


