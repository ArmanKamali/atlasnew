<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Color extends Model
{
    protected $fillable = [
        'name', 'red', 'green', 'blue'];

    public function products()
    {
        return $this->belongsToMany(Product::class);
    }
}
