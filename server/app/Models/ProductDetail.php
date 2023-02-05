<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductDetail extends Model
{
    protected $fillable = ['product_id', 'length', 'width', 'height',
        'stand_number', 'stand_id', 'glass_thickness', 'glass_id', 'has_mat',
        'd_price' , 'd_saledarsad', 'd_sendtime', 'd_store'
    
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function glass()
    {
        return $this->belongsTo(Glass::class);
    }

    public function stand()
    {
        return $this->belongsTo(Stands::class);
    }
}
