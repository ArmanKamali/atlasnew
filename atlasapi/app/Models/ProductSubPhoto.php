<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductSubPhoto extends Model
{
    protected $fillable = ['product_id', 'photo', 'position'];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
