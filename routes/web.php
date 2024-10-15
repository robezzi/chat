<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return Inertia::render('app');
});
Route::get('/', [UserController::class, 'index'])->name('home');

// require __DIR__.'/auth.php';
