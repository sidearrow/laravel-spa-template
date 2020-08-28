<?php

namespace App\Http\Controllers;

class LoginCheckController extends Controller
{
    public function __invoke()
    {
        return [
            'isLogin' => !auth()->guest(),
        ];
    }
}
