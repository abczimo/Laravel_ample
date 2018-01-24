@extends('layouts.console')

@push('stylesheets')

    <!--Range slider CSS -->
    <link href="console/plugins/ion-rangeslider/css/ion.rangeSlider.css" rel="stylesheet">
    <link href="console/plugins/ion-rangeslider/css/ion.rangeSlider.skinModern.css" rel="stylesheet">

@endpush

@section('content')

    <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">ION Range Slider</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
            <a href="javascript: void(0);" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Ui Elements</a></li>
                <li class="active">ION Range Slider</li>
            </ol>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- .row -->
    <div class="row">
        <div class="col-sm-12">
            <div class="white-box">
                <!-- .row -->
                <div class="row">
                    <!-- .col-lg-12 -->
                    <div class="col-md-12">
                        <h3 class="box-title">Start without params</h3>
                        <div id="range_01"></div>
                    </div>
                    <!-- /.col-lg-12 -->
                    <div class="col-md-12 m-t-40 m-b-40">
                        <hr>
                    </div>
                    <!-- .col-lg-12 -->
                    <div class="col-md-12">
                        <h3 class="box-title">Set min value, max value and start point</h3>
                        <div id="range_02"></div>
                    </div>
                    <!-- /.col-lg-12 -->
                    <div class="col-md-12 m-t-40 m-b-40">
                        <hr>
                    </div>
                    <!-- .col-lg-12 -->
                    <div class="col-md-12">
                        <h3 class="box-title">Set type to double and specify range, also showing grid and adding prefix "$"</h3>
                        <div id="range_03"></div>
                    </div>
                    <!-- /.col-lg-12 -->
                    <div class="col-md-12 m-t-40 m-b-40">
                        <hr>
                    </div>
                    <!-- .col-lg-12 -->
                    <div class="col-md-12">
                        <h3 class="box-title">Set up range with negative values</h3>
                        <div id="range_04"></div>
                    </div>
                    <!-- /.col-lg-12 -->
                    <div class="col-md-12 m-t-40 m-b-40">
                        <hr>
                    </div>
                    <!-- .col-lg-12 -->
                    <div class="col-md-12">
                        <h3 class="box-title">Whant to show that max number is not the biggest one?</h3>
                        <div id="range_16"></div>
                    </div>
                    <!-- /.col-lg-12 -->
                    <div class="col-md-12 m-t-40 m-b-40">
                        <hr>
                    </div>
                    <!-- .col-lg-12 -->
                    <div class="col-md-12">
                        <h3 class="box-title">Remove double decoration</h3>
                        <div id="range_18"></div>
                    </div>
                    <!-- /.col-lg-12 -->
                    <div class="col-md-12 m-t-40 m-b-40">
                        <hr>
                    </div>
                    <!-- .col-lg-12 -->
                    <div class="col-md-12">
                        <h3 class="box-title">Visual details</h3>
                        <div id="range_22"></div>
                    </div>
                    <!-- /.col-lg-12 -->
                </div>
                <!-- .row -->
            </div>
        </div>
    </div>

@endsection

@push('scripts')

    <!-- Range slider  -->
    <script src="console/plugins/ion-rangeslider/js/ion.rangeSlider.min.js"></script>
    <script src="console/plugins/ion-rangeslider/js/ion.rangeSlider-init.js"></script>

@endpush