<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function (Request $request) {
    return ['work'];
});

Route::middleware('auth')->group(function () {
    Route::get('/users', 'UsersController@getAll');
});
