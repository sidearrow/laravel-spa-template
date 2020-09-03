<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SessionController extends Controller
{
    public function __invoke(Request $request)
    {
        $auth = auth();

        return [
            'isLogin' => !$auth->guest(),
            'user' => $auth->user(),
        ];
    }
}
