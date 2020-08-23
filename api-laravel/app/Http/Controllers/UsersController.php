<?php

namespace App\Http\Controllers;

use App\Models\UsersModel;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function getAll()
    {
        return UsersModel::all();
    }
}
