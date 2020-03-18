<?php

namespace App;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Category extends Model
{
    use Sluggable;
    use HasTranslations;
    public $translatable = ['name'];
    protected $table = 'categories';
    protected $with = ['subCategories'];
    protected $hidden = [ 'created_at', 'updated_at' ];
    public function categories(){
        return $this->belongsTo(Category::class,'category_id','id');
    }
    public function subCategories(){
        return $this->hasMany(Category::class,'category_id')->withCount('ad');
    }
    public function ad(){
        return $this->hasMany(Ad::class);
    }
    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }
}
