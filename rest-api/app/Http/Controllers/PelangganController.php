<?php

namespace App\Http\Controllers;

use App\Models\Pelanggan;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PelangganController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $custommer = Pelanggan::all();
        return response()->json($custommer);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            "pelanggan"=>"required",
            "alamat"=>"required",
            "telp"=>"required|numeric",
        ]);

        Pelanggan::create($data);
        return response()->json("Pelanggan registered");
    }

    /**
     * Display the specified resource.
     */
    public function show($pelanggan)
    {
        $data =  Pelanggan::where("id", $pelanggan)->get();
        if ($data) {
            return response()->json($data);
        } else {
            return response()->json("Transfer failed");
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pelanggan $pelanggan)
    {

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pelanggan $pelanggan)
    {
        $data = $request->validate([
            "pelanggan"=>"required",
            "alamat"=>"required",
            "telp"=>"required|numeric",
        ]);

        $pelanggan->update($data);
        return response()->json("Pelanggan Updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pelanggan $pelanggan)
    {
        $pelanggan->delete();
        return response()->json("Pelanggan Deleted");
    }
}
