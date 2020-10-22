@extends('admin.main')
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
                      <a class="btn btn-success active" href="" >ADD <i class="fa fa-plus"></i></a>

                    </li>

                  </ul>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example2" class="table table-bordered table-striped">
                  <thead>
                  <tr>
                    <th>#</th>
                    <th>Template Name</th>
                   <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                    @foreach ($product as $item)
                            <tr>
                                <td>1</td>
                            <td>{{$item->name}}</td>
                            <td><a href = 'home/delete/{{ $item->id }}'>Delete</a></td>
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
