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

Route::get('/index.html', function() {
	return view('dashboard.dashboard-1');
});

Route::get('/index2.html', function() {
	return view('dashboard.dashboard-2');
});

