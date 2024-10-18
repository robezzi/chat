<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Middleware\AuthMiddleware;

// Маршрут для отображения страницы логина (GET)
Route::get('/login', function () {
    return Inertia::render('login'); // Убедитесь, что имя компонента совпадает
})->name('login');

// Обработка POST-запроса для логина
Route::post('/login', [AuthController::class, 'login'])->name('login.post');

// Защищенные маршруты
Route::middleware([AuthMiddleware::class])->group(function () {
    Route::get('/home', [HomeController::class, 'index']);
});

// Маршрут для главной страницы
Route::get('/', [UserController::class, 'index'])->name('home');

