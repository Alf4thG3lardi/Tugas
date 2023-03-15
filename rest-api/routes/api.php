<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\SkillController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\OrderdetailController;
use App\Http\Controllers\PelangganController;
use App\Http\Controllers\ProductController;

Route::group(["prefix" => "v1"], function (){
    Route::apiResource("skills", SkillController::class);
    Route::apiResource("product", ProductController::class);
    Route::apiResource("categories", CategoriesController::class);
    Route::apiResource("pelanggan", PelangganController::class);
    Route::apiResource("orderdetail", OrderdetailController::class);

});
