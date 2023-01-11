<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['serial', 'photo', 'name', 'price', 'lenght',
        'width', 'content', 'store', 'sell', 'is_available', 'sale', 'is_wonder',
        'visit', 'transfer_time', 'wholesale_price', 'wholesale_sale'];

    public function colors()
    {
        return $this->belongsToMany(Color::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function product_sub_photos()
    {
        return $this->hasMany(ProductSubPhoto::class);
    }

    public function detail()
    {
        return $this->hasOne(ProductDetail::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function factors()
    {
        return $this->belongsToMany(Factor::class);
    }
}
