<?php

namespace Tests\Feature;

use Illuminate\Support\Facades\DB;
use Tests\TestCase;

class AuthTest extends TestCase
{
    private function createUser()
    {
        DB::table('users')
            ->insert([
                'user_id' => 'admin',
                'first_name' => 'first_name',
                'last_name' => 'last_name',
                'password' => password_hash('password', PASSWORD_BCRYPT),
            ]);
    }

    private function deleteUser()
    {
        DB::table('users')
            ->where('user_id', '=', 'admin')
            ->delete();
    }

    protected function setUp(): void
    {
        parent::setUp();
        $this->createUser();
    }

    protected function tearDown(): void
    {
        $this->deleteUser();
    }

    public function testLoginSuccess()
    {
        $response = $this->postJson(
            '/login',
            [
                'userId' => 'admin',
                'password' => 'password',
            ],
        );

        $response->dump();

        $response->assertStatus(200);
    }
}
