@extends('layouts.console')

@push('stylesheets')

    <!--alerts CSS -->
    <link href="console/plugins/sweetalert/sweetalert.css" rel="stylesheet" type="text/css">

@endpush

@section('content')

    <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">Notifications</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
            <a href="javascript: void(0);" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Ui Elements</a></li>
                <li class="active">Notifications</li>
            </ol>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- .row -->
    <div class="row">
        <div class="col-lg-3 col-xs-12">
            <div class="white-box">
                <h3 class="box-title">A basic message <small>(Click on image)</small> </h3> <img src="console/images/alert.png" alt="alert" class="img-responsive model_img" id="sa-basic"> </div>
        </div>
        <div class="col-lg-3 col-xs-12">
            <div class="white-box">
                <h3 class="box-title">Title with a text under <small>(Click on image)</small></h3> <img src="console/images/alert2.png" alt="alert" class="img-responsive model_img" id="sa-title"> </div>
        </div>
        <div class="col-lg-3 col-xs-12">
            <div class="white-box">
                <h3 class="box-title">Success Message <small>(Click on image)</small></h3> <img src="console/images/alert3.png" alt="alert" class="img-responsive model_img" id="sa-success"> </div>
        </div>
        <div class="col-lg-3 col-xs-12">
            <div class="white-box">
                <h3 class="box-title">Warning message <small>(Click on image)</small></h3> <img src="console/images/alert4.png" alt="alert" class="img-responsive model_img" id="sa-warning"> </div>
        </div>
    </div>
    <!-- /.row -->
    <!-- .row -->
    <div class="row">
        <div class="col-lg-4 col-xs-12">
            <div class="white-box">
                <h3 class="box-title">A basic message <small>(Click on image)</small></h3> <img src="console/images/alert5.png" alt="alert" class="img-responsive model_img" id="sa-params"></div>
        </div>
        <div class="col-lg-4 col-xs-12">
            <div class="white-box">
                <h3 class="box-title">Alert with Image <small>(Click on image)</small></h3> <img src="console/images/alert7.png" alt="alert" class="img-responsive model_img" id="sa-image"> </div>
        </div>
        <div class="col-lg-4 col-xs-12">
            <div class="white-box">
                <h3 class="box-title">Alert with time <small>(Click on image)</small></h3> <img src="console/images/alert6.png" alt="alert" class="img-responsive model_img" id="sa-close"> </div>
        </div>
    </div>

@endsection

@push('scripts')

    <!-- Sweet-Alert  -->
    <script src="console/plugins/sweetalert/sweetalert.min.js"></script>
    <script src="console/plugins/sweetalert/jquery.sweet-alert.custom.js"></script>

@endpush