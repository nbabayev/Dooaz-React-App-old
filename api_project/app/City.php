<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class City extends Model
{
    use HasTranslations;
    public $translatable = ['name'];
    protected $table = 'cities';


    public function ad()
    {
        return $this->hasMany(Ad::class);
    }
}
