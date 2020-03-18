<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Status extends Model
{
    use HasTranslations;
    protected $translatable = ['name'];
    protected $table = 'status';

    public function ad(){
        return $this->hasMany(Ad::class);
    }
}
