<?php

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'name'=>'Daşınmaz əmlak',
                'isMain'=>true,
                'category_id'=>null,
                'image_path'=>'./images/category-1.svg',
            ],
            [
                'name'=>'Elektronika',
                'isMain'=>true,
                'category_id'=>null,
                'image_path'=>'./images/category-2.svg',
            ],
            [
                'name'=>'Ev və bağ üçün',
                'isMain'=>true,
                'category_id'=>null,
                'image_path'=>'./images/category-3.svg',
            ],
            [
                'name'=>'Nəqliyyat',
                'isMain'=>true,
                'category_id'=>null,
                'image_path'=>'./images/category-4.svg',
            ],
            [
                'name'=>'Şəxsi əşyalar',
                'isMain'=>true,
                'category_id'=>null,
                'image_path'=>'./images/category-5.svg',
            ],
            [
                'name'=>'Mənzillər',
                'isMain'=>false,
                'category_id'=>1,
                'image_path'=>null,
            ],
            [
                'name'=>'Villalar, bağ evləri',
                'isMain'=>false,
                'category_id'=>1,
                'image_path'=>null,
            ],
            [
                'name'=>'Obyektlər və ofislər',
                'isMain'=>false,
                'category_id'=>1,
                'image_path'=>null,
            ],
            [
                'name'=>'Torpaq',
                'isMain'=>false,
                'category_id'=>1,
                'image_path'=>null,
            ],
            [
                'name'=>'Xaricdə əmlak',
                'isMain'=>false,
                'category_id'=>1,
                'image_path'=>null,
            ],
            [
                'name'=>'Qarajlar',
                'isMain'=>false,
                'category_id'=>1,
                'image_path'=>null,
            ],
            [
                'name'=>'Telefonlar',
                'isMain'=>false,
                'category_id'=>2,
                'image_path'=>null,
            ],
            [
                'name'=>'Nömrələr və SİM-kartlar',
                'isMain'=>false,
                'category_id'=>2,
                'image_path'=>null,
            ],
            [
                'name'=>'Audio və video',
                'isMain'=>false,
                'category_id'=>2,
                'image_path'=>null,
            ],
            [
                'name'=>'Kompüter aksesuarları',
                'isMain'=>false,
                'category_id'=>2,
                'image_path'=>null,
            ],
            [
                'name'=>'Komponentlər və monitorlar',
                'isMain'=>false,
                'category_id'=>2,
                'image_path'=>null,
            ],
            [
                'name'=>'Noutbuklar və Netbuklar',
                'isMain'=>false,
                'category_id'=>2,
                'image_path'=>null,
            ],
            [
                'name'=>'Oyunlar, pultlar və proqramlar',
                'isMain'=>false,
                'category_id'=>2,
                'image_path'=>null,
            ],
            [
                'name'=>'Foto texnika',
                'isMain'=>false,
                'category_id'=>2,
                'image_path'=>null,
            ],
            [
                'name'=>'Masaüstü kompüterlər',
                'isMain'=>false,
                'category_id'=>2,
                'image_path'=>null,
            ],
            [
                'name'=>'Ofis avadanlığı və istehlak',
                'isMain'=>false,
                'category_id'=>2,
                'image_path'=>null,
            ],
            [
                'name'=>'Planşet və elektron kitablar',
                'isMain'=>false,
                'category_id'=>2,
                'image_path'=>null,
            ],
            [
                'name'=>'Mebel və interyer',
                'isMain'=>false,
                'category_id'=>3,
                'image_path'=>null,
            ],
            [
                'name'=>'Təmir və tikinti',
                'isMain'=>false,
                'category_id'=>3,
                'image_path'=>null,
            ],
            [
                'name'=>'Məişət texnikası',
                'isMain'=>false,
                'category_id'=>3,
                'image_path'=>null,
            ],
            [
                'name'=>'Qab-qacaq və mətbəx ləvazimatları',
                'isMain'=>false,
                'category_id'=>3,
                'image_path'=>null,
            ],
            [
                'name'=>'Bitkilər',
                'isMain'=>false,
                'category_id'=>3,
                'image_path'=>null,
            ],

            [
                'name'=>'Ehtiyat hissələri və aksesuarlar',
                'isMain'=>false,
                'category_id'=>4,
                'image_path'=>null,
            ],
            [
                'name'=>'Avtomobillər',
                'isMain'=>false,
                'category_id'=>4,
                'image_path'=>null,
            ],
            [
                'name'=>'Avtobuslar və xüsusi texnika',
                'isMain'=>false,
                'category_id'=>4,
                'image_path'=>null,
            ],
            [
                'name'=>'Motosikletlər və mopedlər',
                'isMain'=>false,
                'category_id'=>4,
                'image_path'=>null,
            ],
            [
                'name'=>'Su nəqliyyatı',
                'isMain'=>false,
                'category_id'=>4,
                'image_path'=>null,
            ],
            [
                'name'=>'Saat və zinət əşyaları',
                'isMain'=>false,
                'category_id'=>5,
                'image_path'=>null,
            ],
            [
                'name'=>'Geyim və ayaqqabılar',
                'isMain'=>false,
                'category_id'=>5,
                'image_path'=>null,
            ],
            [
                'name'=>'Sağlamlıq və gözəllik',
                'isMain'=>false,
                'category_id'=>5,
                'image_path'=>null,
            ],
            [
                'name'=>'Aksesuarlar',
                'isMain'=>false,
                'category_id'=>5,
                'image_path'=>null,
            ],
            [
                'name'=>'İtmiş əşyalar',
                'isMain'=>false,
                'category_id'=>5,
                'image_path'=>null,
            ],
            [
                'name'=>'İtmiş əşyalar',
                'isMain'=>false,
                'category_id'=>5,
                'image_path'=>null,
            ],

        ];
        for ($i = 0; $i<count($data); $i++){
            $cat = new \App\Category();
            $cat->name = $data[$i]['name'];
            $cat->isMain = $data[$i]['isMain'];
            $cat->category_id = $data[$i]['category_id'];
            $cat->image_path = $data[$i]['image_path'];
            $cat->save();
        }


    }
}
