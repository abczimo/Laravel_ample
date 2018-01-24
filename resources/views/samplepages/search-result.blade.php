@extends('layouts.console')

@push('stylesheets')

@endpush

@section('content')

    <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">Search Result</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
            <a href="javascript: void(0);" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li class="active">Search Result</li>
            </ol>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- .row -->
    <div class="row">
        <div class="col-md-12">
            <div class="white-box">
                <h3 class="box-title">Search Here</h3>
                <form class="form-group" role="search">
                    <div class="input-group">
                        <input type="text" id="example-input1-group2" name="example-input1-group2" class="form-control" placeholder="Angular Js"> <span class="input-group-btn"><button type="button" class="btn waves-effect waves-light btn-info"><i class="fa fa-search"></i></button></span> </div>
                </form>
                <h2 class="m-t-40">Search Result For "Angular Js"</h2> <small>About 14,700 result ( 0.10 seconds)</small>
                <hr>
                <ul class="search-listing">
                    <li>
                        <h3><a href="javacript:void(0)">AngularJs</a></h3> <a href="javascript:void(0)" class="search-links">http://www.google.com/angularjs</a>
                        <p>Lorem Ipsum viveremus probamus opus apeirian haec perveniri, memoriter.Praebeat pecunias viveremus probamus opus apeirian haec perveniri, memoriter.</p>
                    </li>
                    <li>
                        <h3><a href="javacript:void(0)">AngularJS — Superheroic JavaScript MVW Framework</a></h3> <a href="javascript:void(0)" class="search-links">http://www.google.com/angularjs</a>
                        <p>Lorem Ipsum viveremus probamus opus apeirian haec perveniri, memoriter.Praebeat pecunias viveremus probamus opus apeirian haec perveniri, memoriter.</p>
                    </li>
                    <li>
                        <h3><a href="javacript:void(0)">AngularJS Tutorial - W3Schools</a></h3> <a href="javascript:void(0)" class="search-links">http://www.google.com/angularjs</a>
                        <p>Lorem Ipsum viveremus probamus opus apeirian haec perveniri, memoriter.Praebeat pecunias viveremus probamus opus apeirian haec perveniri, memoriter.</p>
                    </li>
                    <li>
                        <h3><a href="javacript:void(0)">Introduction to AngularJS - W3Schools</a></h3> <a href="javascript:void(0)" class="search-links">http://www.google.com/angularjs</a>
                        <p>Lorem Ipsum viveremus probamus opus apeirian haec perveniri, memoriter.Praebeat pecunias viveremus probamus opus apeirian haec perveniri, memoriter.</p>
                    </li>
                    <li>
                        <h3><a href="javacript:void(0)">AngularJS Tutorial</a></h3> <a href="javascript:void(0)" class="search-links">http://www.google.com/angularjs</a>
                        <p>Lorem Ipsum viveremus probamus opus apeirian haec perveniri, memoriter.Praebeat pecunias viveremus probamus opus apeirian haec perveniri, memoriter.</p>
                    </li>
                    <li>
                        <h3><a href="javacript:void(0)">Angular 2: One framework.</a></h3> <a href="javascript:void(0)" class="search-links">http://www.google.com/angularjs</a>
                        <p>Lorem Ipsum viveremus probamus opus apeirian haec perveniri, memoriter.Praebeat pecunias viveremus probamus opus apeirian haec perveniri, memoriter.</p>
                    </li>
                </ul>
                <ul class="pagination m-b-0">
                    <li class="disabled"> <a href="#"><i class="fa fa-angle-left"></i></a> </li>
                    <li> <a href="javascript:void(0)">1</a> </li>
                    <li class="active"> <a href="javascript:void(0)">2</a> </li>
                    <li> <a href="javascript:void(0)">3</a> </li>
                    <li> <a href="javascript:void(0)">4</a> </li>
                    <li> <a href="javascript:void(0)">5</a> </li>
                    <li> <a href="javascript:void(0)"><i class="fa fa-angle-right"></i></a> </li>
                </ul>
            </div>
        </div>
    </div>

@endsection

@push('scripts')

@endpush