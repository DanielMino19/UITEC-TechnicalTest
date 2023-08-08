<?php
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/categories', [CategoriaController::class, 'index']);
Route::get('/categories/{id}', [CategoriaController::class, 'show']);
Route::post('/categories', [CategoriaController::class, 'store']);
Route::put('/categories/{id}', [CategoriaController::class, 'update']);
Route::delete('/categories/{id}',[CategoriaController::class, 'destroy']);


Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'show']);
Route::post('/products', [ProductController::class, 'store']); // Ruta para crear un producto
Route::put('/products/{id}', [ProductController::class, 'update']); // Ruta para actualizar un producto
Route::delete('/products/{id}', [ProductController::class, 'destroy']); // Ruta para eliminar un producto
Route::get('/products/categories/{idCategories}', [ProductController::class, 'productByCategory']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
