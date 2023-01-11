<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Stands extends Model
{
    protected $fillable = ['name'];

    public function productDetails()
    {
        return $this->hasMany(ProductDetail::class);
    }
}
