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

/**
 * Apps
 */
Route::get('/chat.html', function() {
	return view('apps.chat');
});

Route::get('/inbox.html', function() {
	return view('apps.inbox');
});

Route::get('/inbox-detail.html', function() {
	return view('apps.inbox-detail');
});

Route::get('/compose.html', function() {
	return view('apps.compose');
});

Route::get('/contact.html', function() {
	return view('apps.contact');
});

Route::get('/contact2.html', function() {
	return view('apps.contact2');
});

Route::get('/contact-detail.html', function() {
	return view('apps.contact-detail');
});


Route::get('/documentation.html', function() {
	return view('documentation');
});
