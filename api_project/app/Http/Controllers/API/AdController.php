<?php

namespace App\Http\Controllers\API;

use App\Ad;
use App\Category;
use App\City;
use App\Http\Controllers\Controller;
use function foo\func;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Spatie\MediaLibrary\Models\Media;
use Illuminate\Support\Str;

class AdController extends Controller
{
    public function allCategories(){
        return Category::whereNull('category_id')->where('isMain', '1')->get();
    }
    public function index(){
        $select = [
            'id',
            'name',
        ];
        $categories = Category::where('category_id','=',null)->withCount('ad')->get();
        $cities = City::select('name')->get();

        $ads = Ad::paginate(10);

        return response()->json(['cities'=>$cities,'categories'=>$categories,'ads'=>$ads],200);
    }

    public function allAdsByCategory($slug){

    }
    public function newAd(){
        $categories = Category::where('category_id','=',null)->withCount('ad')->get();
        $cities = City::select('name')->get();
        return response()->json(['cities'=>$cities,'categories'=>$categories],200);
    }

    public function test(Request $request){
        if ($request->method('post')){
            $data = Ad::first();
            $w = Ad::create([ ]);
            $data->addMedia($request->img)->toMediaCollection();
        }
    }
    public function testView(){
        $a = Category::findOrFail(5);
        return Str::slug($a->name);
        $data = Ad::first();
        return $data ->getMedia();
        return view('test');
    }
}
