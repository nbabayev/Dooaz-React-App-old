<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ads', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->text('description');
            $table->integer('city_id');
            $table->integer('user_id')->nullable();
            $table->integer('num_of_view')->default(0);
            $table->timestamp('accepted_date')->nullable();
            $table->string('price_daily'); // int
            $table->string('price_weekly'); // int
            $table->string('price_monthly'); // int
            $table->integer('category_id');
            $table->integer('status_id')->default(1);
            $table->string('user_name')->nullable();
            $table->string('user_surname')->nullable();
            $table->string('user_mobile')->nullable();
            $table->string('user_email')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ads');
    }
}
