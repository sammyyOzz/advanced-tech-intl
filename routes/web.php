<?php

use Illuminate\Support\Facades\Route;

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

// Route::get('/', function () {
//     return view('welcome');
// });

Route::view('/{path?}', 'app');
Route::view('/products/{path?}', 'app');
Route::view('/products/industrial-automation/{path?}', 'app');
Route::view('/products/education-research/{path?}', 'app');
Route::view('/products/defense-aerospace/{path?}', 'app');
Route::view('/products/scada-analytics/{path?}', 'app');
