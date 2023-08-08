<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categories;
class CategoriaController extends Controller
{
    public function index()
    {
        $categories = Categories::all();
        return response()->json($categories);
    }

    public function show($id)
    {
        $categories = Categories::find($id);
        if (!$categories) {
            return response()->json(['message' => 'categories not founds'], 404);
        }
        return response()->json($categories);
    }

    public function store(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required|string|max:100',
                'description' => 'nullable|string',
            ]);

            $categories = new Categories();
            $categories->name = $request->input('name');
            $categories->description = $request->input('description');
            $categories->save();

            return response()->json(['message' => 'category successfully created'], 201);
        } catch (ValidationException $e) {
            // Manejo de errores de validación
            return response()->json(['error' => $e->errors()], 422);
        } catch (\Exception $e) {
            // Manejo de otros errores
            return response()->json(['error' => 'an error occurred while creating your category'], 500);
        }
    }

    
    public function update(Request $request, $id)
    {
        $categories = Categories::find($id);
        if (!$categories) {
            return response()->json(['message' => 'categories not found'], 404);
        }
    
        $categories->name = $request->input('name');
        $categories->description = $request->input('description');
        $categories->save();
    
        return response()->json(['message' => 'categories successfully updated'], 200);
    }

    public function destroy($id)
    {
        $categories = Categories::find($id);
        if (!$categories) {
            return response()->json(['message' => 'categories not fount'], 404);
        }

        $categories->delete();

        return response()->json(['message' => 'categories successfully eliminated'], 200);
    }
    
}
