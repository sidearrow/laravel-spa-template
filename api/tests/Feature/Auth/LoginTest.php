<?php

namespace Tests\Feature;

use App\Models\UsersModel;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AuthTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        var_dump([env('DB_HOST')]);
        parent::setUp();

        factory(UsersModel::class)->make([
            'user_id' => 'admin',
            'first_name' => 'admin_first_name',
            'last_name' => 'admin_last_name',
            'password' => password_hash('password', PASSWORD_DEFAULT),
        ]);
    }

    public function testBasicTest()
    {
        $response = $this->json(
            'POST',
            '/login',
            [
                'user_id' => 'admin',
                'password' => 'password',
            ]
        );

        $response->assertStatus(200);
    }
}
