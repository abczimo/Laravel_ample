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

Route::get('/panel-ui-block.html', function() {
	return view('uielements.panel-ui-block');
});

Route::get('/buttons.html', function() {
	return view('uielements.buttons');
});

Route::get('/sweatalert.html', function() {
	return view('uielements.sweatalert');
});

Route::get('/typography.html', function() {
	return view('uielements.typography');
});

Route::get('/grid.html', function() {
	return view('uielements.grid');
});

Route::get('/tabs.html', function() {
	return view('uielements.tabs');
});

Route::get('/tab-stylish.html', function() {
	return view('uielements.tab-stylish');
});

Route::get('/modals.html', function() {
	return view('uielements.modals');
});

Route::get('/progressbars.html', function() {
	return view('uielements.progressbars');
});

Route::get('/notification.html', function() {
	return view('uielements.notification');
});

Route::get('/carousel.html', function() {
	return view('uielements.carousel');
});

Route::get('/list-style.html', function() {
	return view('uielements.list-style');
});

Route::get('/user-cards.html', function() {
	return view('uielements.user-cards');
});

Route::get('/timeline.html', function() {
	return view('uielements.timeline');
});

Route::get('/timeline-horizontal.html', function() {
	return view('uielements.timeline-horizontal');
});

Route::get('/nestable.html', function() {
	return view('uielements.nestable');
});

Route::get('/range-slider.html', function() {
	return view('uielements.range-slider');
});

Route::get('/tooltip-stylish.html', function() {
	return view('uielements.tooltip-stylish');
});

Route::get('/bootstrap.html', function() {
	return view('uielements.bootstrap');
});

/**
 * Sample Pages
 */
Route::get('/starter-page.html', function() {
	return view('samplepages.starter-page');
});

Route::get('/blank.html', function() {
	return view('samplepages.blank');
});

Route::get('/email-templates/basic.html', function() {
	return view('samplepages.email-templates.basic');
});

Route::get('/email-templates/alert.html', function() {
	return view('samplepages.email-templates.alert');
});

Route::get('/email-templates/billing.html', function() {
	return view('samplepages.email-templates.billing');
});

Route::get('/email-templates/password-reset.html', function() {
	return view('samplepages.email-templates.password-reset');
});

Route::get('/lightbox.html', function() {
	return view('samplepages.lightbox');
});

Route::get('/treeview.html', function() {
	return view('samplepages.treeview');
});

Route::get('/search-result.html', function() {
	return view('samplepages.search-result');
});

Route::get('/utility-classes.html', function() {
	return view('samplepages.utility-classes');
});

Route::get('/custom-scroll.html', function() {
	return view('samplepages.custom-scroll');
});

Route::get('/animation.html', function() {
	return view('samplepages.animation');
});

Route::get('/profile.html', function() {
	return view('samplepages.profile');
});

Route::get('/invoice.html', function() {
	return view('samplepages.invoice');
});

/**
 * Authentication Pages
 */
Route::get('/login.html', function() {
	return view('authentication.login');
});

Route::get('/login2.html', function() {
	return view('authentication.login2');
});

Route::get('/register.html', function() {
	return view('authentication.register');
});

Route::get('/register2.html', function() {
	return view('authentication.register2');
});

Route::get('/register3.html', function() {
	return view('authentication.register3');
});

Route::get('/recoverpw.html', function() {
	return view('authentication.recoverpw');
});

Route::get('/lock-screen.html', function() {
	return view('authentication.lock-screen');
});

/**
 * Error Pages
 */
Route::get('/400.html', function() {
	return view('errors.400');
});

Route::get('/403.html', function() {
	return view('errors.403');
});

Route::get('/404.html', function() {
	return view('errors.404');
});

Route::get('/500.html', function() {
	return view('errors.500');
});

Route::get('/503.html', function() {
	return view('errors.503');
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
