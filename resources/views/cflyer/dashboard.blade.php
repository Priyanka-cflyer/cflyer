@extends('cflyer.layout.main')
@section('content')

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <div class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1 class="m-0 text-dark">Template Master</h1>
        </div><!-- /.col -->
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="">Home</a></li>
            <li class="breadcrumb-item active">Template Master</li>
          </ol>
        </div><!-- /.col -->
      </div><!-- /.row -->
    </div><!-- /.container-fluid -->
  </div>
  <!-- /.content-header -->

  <!-- Main content -->
  <section class="content">
    <div class="container-fluid">
      <!-- Small boxes (Stat box) -->
      <div class="card ">
       <div class="card-header">
        <h3 class="card-title">Template Master</h3>
        <div class="card-tools">
          <ul class="nav nav-pills ml-auto">
            <li class="nav-item">
              <a class="btn btn-success active" href="{{route('templateAdd')}}" >ADD <i class="fa fa-plus"></i></a>


            </li>

          </ul>
        </div>
      </div>
      <!-- /.card-header -->
      <div class="card-body">
        <table id="example2" class="table table-bordered table-striped">
          <thead>
            <tr>
              
              <th>Images</th>

              <th>#</th>

              <th>Date</th>

              <th>Designer</th>

              <th>Size</th>

              <th>Side</th>

              <th>Creative</th>

              <th>Purpose</th>

              <th>Occasion</th>

            </tr>
          </thead>
          <tbody>
            @foreach ($Templatelist as $item)
            <tr>

              <td ><a style="width: 100px;" id="Zoom-1"  class="MagicZoom"  data-options="zoomCaption: top; zoomHeight:400px; zoomWidth: 700px; zoomDistance: 100; expand: fullscreen; expandZoomOn: always;"  href="{{$item->image}}" >

                <img class="img_temp" style="width: 100px !important;height: 100px!important;" src="{{$item->image}}?scale.height=800" alt=""/>

              </a></td>

              <td><b>Template: </b>{{$item->Template}}<br><b>Draft: </b>{{$item->Draft}}<br><b>Blocks: </b>{{$item->length}} 
              </td>
              <td><b>Added: </b>{{$item->Added}}<br><b>Edited: </b>{{$item->Edited}}</td>
              <td>name:</td>
              <td>{{$item->Print_Size}}<br><b>Resolution: </b>{{$item->resolution}}</td>
              <td>{{$item->Edited}}</td>
              <td>{{$item->Added}}</td>
              <td>{{$item->length }}</td>
              <td>{{$item->Designer }}</td>
            </tr>
            @endforeach


          </tbody>

        </table>
      </div>
      <!-- /.card-body -->
    </div>

    <!-- /.row (main row) -->
  </div><!-- /.container-fluid -->
</section>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->





@endsection
