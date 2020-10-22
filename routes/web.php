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
    return view('welcome');
});

Auth::routes();


// Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::resource('/home', 'TemplatelistController');
Route::get('delete/{id}','TemplatelistController@destroy');

Route::get('/templateAdd','TemplatelistController@addtemplate')->name('templateAdd');

Route::post('/ajax_upload/action', 'TemplatelistController@action')->name('psdaction');

