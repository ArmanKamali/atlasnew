<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Code extends Model
{
    protected $fillable = ['text', 'number', 'finish_time', 'percent', 'use_number', 'available'];

    public function users(){
        return $this->belongsToMany(User::class);
    }

}
