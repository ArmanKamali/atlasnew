<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Tymon\JWTAuth\Contracts\JWTSubject;


class User extends Model
{
    use HasFactory;
    protected $fillable = ['mobile', 'fname','lname','email','password','disposablePasswoord'];

    
}
