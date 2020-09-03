<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserDeleteController extends Controller
{
    public function __invoke(Request $request)
    {
        $request->validate([
            'userId' => ['required'],
        ]);

        return ['delete'];
    }
}
