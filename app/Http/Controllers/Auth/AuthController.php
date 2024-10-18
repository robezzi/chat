<?php
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\User;
class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if ($user && $user->password === $request->password) {
            // Успешная аутентификация
            // Здесь вы можете создать сессию или токен
            return response()->json(['message' => 'Успешный вход']);
        } else {
            return response()->json(['message' => 'Неверный пароль'], 401);
        }
    }

    public function register(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:users',
            'password' => 'required',
        ]);

        $user = new User();
        $user->email = $request->email;
        $user->password = $request->password; // Сохраняем пароль в открытом виде $user->save();

        return response()->json(['message' => 'Регистрация успешна']);
    }
}