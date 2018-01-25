@extends('layouts.console')

@push('stylesheets')

    <!-- Editable CSS -->
    <link type="text/css" rel="stylesheet" href="console/plugins/jsgrid/dist/jsgrid.min.css" />
    <link type="text/css" rel="stylesheet" href="console/plugins/jsgrid/dist/jsgrid-theme.min.css" />

@endpush

@section('content')

    <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">Editable Tables</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
            <a href="javascript: void(0);" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Tables</a></li>
                <li class="active">Editable Tables</li>
            </ol>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- /row -->
    <!-- /.row -->
    <!-- .row -->
    <div class="row">
        <div class="col-lg-12">
            <div class="white-box">
                <h3 class="box-title">Editable with Datatable</h3>
                <div id="basicgrid"></div>
            </div>
        </div>
    </div>
    <!-- /.row -->
    <!-- .row -->
    <div class="row">
        <div class="col-lg-12">
            <div class="white-box">
                <h3 class="box-title">Static</h3>
                <div id="staticgrid"></div>
            </div>
        </div>
    </div>
    <!-- /.row -->
    <!-- .row -->
    <div class="row">
        <div class="col-lg-12">
            <div class="white-box">
                <h3 class="box-title">Soarting</h3>
                <div class="col-md-2 row">
                    <select id="sortingField" class="form-control input-sm m-b-10">
                        <option>Name</option>
                        <option>Age</option>
                        <option>Address</option>
                        <option>Country</option>
                        <option>Married</option>
                    </select>
                </div>
                <div id="exampleSorting"></div>
            </div>
        </div>
    </div>

@endsection

@push('scripts')

    <!-- Editable -->
    <script src="console/plugins/jsgrid/db.js"></script>
    <script type="text/javascript" src="console/plugins/jsgrid/dist/jsgrid.min.js"></script>
    <script src="console/js/jsgrid-init.js"></script>

@endpush