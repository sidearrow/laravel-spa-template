<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User;

class UsersModel extends User
{
    public $table = 'users';

    public $hidden = ['password'];
}
