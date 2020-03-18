<?php

use Illuminate\Database\Seeder;

class StatusTableSeeder extends Seeder
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
                'name'=>'verifiable',
            ],
            [
                'name'=>'accepted',
            ],
            [
                'name'=>'deflected'
            ]
        ];
        foreach ($data as $a){
            $b = new \App\Status();
            $b->name = $a['name'];
            $b->save();

        }

    }
}
