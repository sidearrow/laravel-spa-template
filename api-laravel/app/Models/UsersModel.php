<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class UsersModel extends User
{
    use Notifiable;

    public $table = 'users';

    public $visible = ['user_id', 'first_name', 'last_name'];
}
