<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\UsersModel;
use Illuminate\Http\Request;

class UserGetController extends Controller
{
    public function __invoke(Request $request)
    {
        return UsersModel::all();
    }
}
