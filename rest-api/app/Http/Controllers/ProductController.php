<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Redirect;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            "title" => "required",
            "description" => "required",
            "category" => "required|numeric",
            "price" => "required|numeric",
        ]);
        Product::create($data);
        return response()->json("Product Created");
    }

    /**
     * Display the specified resource.
     */
    public function show($product)
    {
        $data = Product::where("id", $product)->get();
        return response()->json($data);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        $data = $request->validate([
            "title" => "required",
            "description" => "required",
            "category" => "required",
            "price" => "required",
        ]);

        $product->update($data);
        return response()->json("Product Updated");

    }

    /** Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json("Product Deleted");

    }
}
