<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Templatelist;

class TemplatelistController extends Controller
{

	    //
    function index()
    {
    //    $get= DB::table('products')
    //     ->get();

    //       return view('admin.dashboard',);

          $Templatelist = Templatelist::all();
          return view('cflyer.dashboard', compact('Templatelist'));

    }


    function addtemplate()
    {
    	return view('cflyer.add_template');
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
        DB::delete('delete from Templatelist where id = ?',[$id]);
        
        return redirect()->route('home');

    }

    function action(Request $request)
    {

      dd('test');

     $validation = Validator::make($request->all(), [
      'select_file' => 'required|image|mimes:psd'
     ]);
     if($validation->passes())
     {
      $image = $request->file('file');
      $new_name = rand() . '.' . $image->getClientOriginalExtension();
      $image->move(public_path('images'), $new_name);
      return;
     }
     else
     {
      return response()->json([
       'message'   => $validation->errors()->all(),
       'uploaded_image' => '',
       'class_name'  => 'alert-danger'
      ]);
     }

    }


}
