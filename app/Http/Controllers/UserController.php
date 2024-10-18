<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Display the home page with a list of users.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        // Получаем всех пользователей из базы данных 
        $users = User::all();

        // Возвращаем данные в компонент Home 
        return Inertia::render('home', [
            'users' => $users,
        ]);
    }

    /**
     * Update the user's password.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id * @return \Illuminate\Http\RedirectResponse
     */

    public function updatePassword(Request $request, $id)
    {
        $request->validate([
            'password' => 'required|string|min:8',
        ]);

        $user = User::find($id);
        $user->password = Hash::make($request->password); // Хешируем новый пароль
        $user->save();

        return redirect()->route('users.index')->with('success', 'Пароль успешно обновлен.');
    }

    /**
     * Log in the user.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required|string',
            'password' => 'required|string',
        ]);

        if (Auth::attempt(['username' => $request->username, 'password' => $request->password])) {
            // Аутентификация прошла успешно
             return redirect()->intended(`/home/${username}`);
             } else {
            // Ошибка аутентификации
            return back()->withErrors(['username' => 'Неверные учетные данные']);
        }
    }
}
