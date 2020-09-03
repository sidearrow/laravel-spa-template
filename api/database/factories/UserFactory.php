<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\UsersModel;
use Faker\Generator as Faker;

$factory->define(UsersModel::class, function (Faker $faker) {
    return [
        'user_id' => null,
        'first_name' => $faker->name,
        'last_name' => $faker->name,
        'password' => null,
    ];
});
