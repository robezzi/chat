<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable; 
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable // Измените здесь
{
    use HasFactory, Notifiable; // Добавьте Notifiable, если хотите использовать уведомления

    protected $fillable = ['username', 'password']; // Не забудьте добавить 'password', если он у вас есть 
    public function dialogs()
    {
        return $this->hasMany(Dialog::class);
    }

    public function messages()
    {
        return $this->hasMany(Message::class);
    }

    public function getAuthIdentifierName()
    {
        return 'username';
    }

    // Если у вас есть метод для получения пароля, добавьте его
    public function getAuthPassword()
    {
        return $this->password; // Убедитесь, что у вас есть поле 'password' в вашей таблице
    }
}
