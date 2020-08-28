<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\LoginCheckController;

Route::post('/login', LoginController::class);
Route::get('/login-check', LoginCheckController::class);
