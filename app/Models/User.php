<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $fillable = ['username'];

    public function dialogs()
    {
        return $this->hasMany(Dialog::class);
    }

    public function messages()
    {
        return $this->hasMany(Message::class);
    }
}
