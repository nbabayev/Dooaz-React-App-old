<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $table = 'media';
    protected $hidden = ['id','file_name'];
    /*public function ad(){
        return $this->morphTo(Ad::class,'model');
    }*/
}
