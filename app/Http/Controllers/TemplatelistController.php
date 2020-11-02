<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Templatelist;
use Illuminate\Foundation\Http\FormRequest;
use App\Http\Controllers\Controller;
use Validator;
use Imagick;



class TemplatelistController extends Controller
{

    // public function __construct(){
    //     $this->imagic = new Imagick();
    // }

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


    function imageresoltion(Request $request)
    {


       $imageresize='public/'.$_POST["path"];
      $image = new Imagick($imageresize);
    dd($image);

     // $image=new Imagick($imageresize);
      $array=$image->getImageResolution();
      print_r($array['x']);

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

    function addtemplt(Request $request)
    {
     $validation = Validator::make($request->all(), [
      'file' => 'required'
     ]);
     
     if($validation->passes())
     {

      $image = $request->file('file');
      $new_name = rand() . '.' . $image->getClientOriginalExtension();
      $image->move(public_path('images'), $new_name);
      return $new_name;
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
