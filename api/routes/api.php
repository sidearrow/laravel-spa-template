<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\SessionController;
use App\Http\Controllers\User\UserDeleteController;
use App\Http\Controllers\User\UserGetController;
use App\Http\Controllers\User\UserPutController;

Route::post('/login', LoginController::class);

Route::middleware('auth')->group(function () {
    Route::get('/session', SessionController::class);
    Route::get('/logout', LogoutController::class);

    Route::get('/user', UserGetController::class);
    Route::put('/user', UserPutController::class);
    Route::delete('/user', UserDeleteController::class);
});
