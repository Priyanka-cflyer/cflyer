<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTemplatelistsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('templatelists', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('Print_product');
            $table->string('new');
            $table->string('Template');
            $table->string('Draft');
            $table->string('Designer');
            $table->string('image');
            $table->string('length');
            $table->string('Added');
            $table->string('Edited');
            $table->string('psdfile');
            $table->string('resolution');
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
        Schema::dropIfExists('templatelists');
    }
}
