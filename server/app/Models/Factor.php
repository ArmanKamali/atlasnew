<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Factor extends Model
{
    protected $fillable = ['user_id', 'date', 'price', 'confirmed', 'peigiri', 'condition', 'status'];

    public function products()
    {
        return $this->belongsToMany(Product::class)->withPivot('quantity','price');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
