<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserPutController extends Controller
{
    public function __invoke(Request $request)
    {
        $request->validate([
            'userId' => ['required'],
            'firstName' => ['required'],
            'lastName' => ['required'],
        ]);

        return response()->json(['aa']);
    }
}
