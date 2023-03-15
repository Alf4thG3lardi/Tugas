<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cat = Categories::all();
        return response()->json($cat);
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
            "categories" => "required",
        ]);

        Categories::create($data);
        return response()->json("Categories Created");
    }

    /**
     * Display the specified resource.
     */
    public function show($categories)
    {
        $data = Categories::where("id", $categories)->get();
        return response()->json($data);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Categories $categories)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Categories $categories, $category)
    {
        $cat = Categories::where("id", $category)->update($request->all());
        // $categories->update($data);
        if($cat) {
            return response()->json("Categories Updated");
        } else {
            return response()->json("Categories update failed");
        }

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($category)
    {
        $cat = Categories::where("id", $category)->delete();
        // $categories->delete();
        if($cat) {
            return response()->json("Categories Deleted");
        } else {
            return response()->json("Categories delete failed");
        }
    }
}
