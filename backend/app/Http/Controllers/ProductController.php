<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }

    public function show($id)
    {
        $product = product::find($id);
        if (!$product) {
            return response()->json(['message' => 'product not found'], 404);
        }
        return response()->json($product);
    }

    public function store(Request $request)
    {
        $product = new product();
        $product->name = $request->input('name');
        $product->value = $request->input('value');
        $product->expire_date = $request->input('expire_date');
        $product->amount_stock = $request->input('amount_stock');
        $product->perishables = $request->input('perishables');
        $product->imgs = $request->input('imgs');
        $product->categorie_id = $request->input('categorie_id');
        $product->save();

        return response()->json(['message' => 'product creado con éxito'], 201);
    }

    public function update(Request $request, $id)
    {
        $product = product::find($id);
        if (!$product) {
            return response()->json(['message' => 'product no encontrado'], 404);
        }

        $product->name = $request->input('name');
        $product->value = $request->input('value');
        $product->expire_date = $request->input('expire_date');
        $product->amount_stock = $request->input('amount_stock');
        $product->perishables = $request->input('perishables');
        $product->imgs = $request->input('imgs');
        $product->categorie_id = $request->input('categorie_id');
        $product->save();

        return response()->json(['message' => 'product successfully updated'], 200);
    }

    public function destroy($id)
    {
        $product = product::find($id);
        if (!$product) {
            return response()->json(['message' => 'product not fount'], 404);
        }

        $product->delete();

        return response()->json(['message' => 'product successfully eliminated'], 200);
    }

    public function productByCategory($idCategories)
    {
        $product = Product::where('categorie_id', $idCategories)->get();
        return response()->json($product);
    }
}