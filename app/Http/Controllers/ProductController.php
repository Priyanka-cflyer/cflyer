<?php

namespace App\Http\Controllers;

use App\product;
use Illuminate\Http\Request;
use DB;
class ProductController extends Controller
{
    //
    function index()
    {
    //    $get= DB::table('products')
    //     ->get();

    //       return view('admin.dashboard',);

          $product = product::all();
          return view('cflyer.dashboard', compact('product'));

    }

        /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        // product::create([
        //     'name'=> $request->name,
        //     'slug'=> $slug,
        //     'image'=> $file,
        // ]);
        // return redirect()->route('servicecategory.index');
    }


    public function destroy($id)
    {
        DB::delete('delete from product where id = ?',[$id]);
        echo "Record deleted successfully.<br/>";
        echo '<a href = "/delete-records">Click Here</a> to go back.';
    }

}
