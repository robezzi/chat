<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

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

        // Возвращаем данные  в компонент Home 
        return Inertia::render('home', [
            'users' => $users,
        ]);
    }
}
