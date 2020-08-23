<?php

namespace App\Http\Controllers;

use App\Models\UsersModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function __invoke(Request $request)
    {
        $userId = $request->input('userId');
        $password = $request->input('password');

        /** @var UsersModel $user */
        $user = UsersModel::where('user_id', $userId)->first();

        if ($user === null) {
            abort(403, 'User is not registed.');
        }

        if (!password_verify($password, $user->password)) {
            abort(403, 'Password is wrong.');
        }

        Auth::login($user, true);

        return response()->json([
            'user' => $user,
        ]);
    }
}
