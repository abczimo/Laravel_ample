@extends('layouts.console')

@push('stylesheets')

    <!-- summernotes CSS -->
    <link href="console/plugins/summernote/dist/summernote.css" rel="stylesheet" />

@endpush

@section('content')

     <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">Summernotes</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
            <a href="javascript: void(0);" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Forms</a></li>
                <li class="active">Summernotes</li>
            </ol>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- .row -->
    <div class="row">
        <div class="col-sm-12">
            <div class="white-box">
                <h3 class="box-title">Default Summernote</h3>
                <div class="summernote">
                    <h3>Default Summernote</h3> </div>
            </div>
        </div>
    </div>
    <!-- /.row -->
    <!-- .row -->
    <div class="row">
        <div class="col-sm-12">
            <div class="white-box">
                <h3 class="box-title m-b-0">Air mode Inline editior</h3> <small>Select some text to edit via summernote</small>
                <hr>
                <div class="inline-editor">
                    <h3>Title Heading will be <b>apear here</b></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitconsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <ul class="list-icons">
                        <li><i class="fa fa-check text-success"></i> Lorem ipsum dolor sit amet</li>
                        <li><i class="fa fa-check text-success"></i> Consectetur adipiscing elit</li>
                        <li><i class="fa fa-check text-success"></i> Integer molestie lorem at massa </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- /.row -->
    <!-- .row -->
    <div class="row">
        <div class="col-sm-12">
            <div class="white-box">
                <h3 class="box-title m-b-0">Click to edit</h3> <small>You can edit content on the fly.</small>
                <hr>
                <div class="click2edit m-b-40">Click on Edite button and change the text then save it.</div> <a id="edit" class="btn btn-info btn-rounded" onclick="edit()" type="button">Edit</a> <a id="save" class="btn btn-success btn-rounded" onclick="save()" type="button">Save</a> </div>
        </div>
    </div>

@endsection

@push('scripts')

    <script src="console/plugins/summernote/dist/summernote.min.js"></script>
    <script>
        jQuery(document).ready(function() {
            $('.summernote').summernote({
                height: 350, // set editor height
                minHeight: null, // set minimum height of editor
                maxHeight: null, // set maximum height of editor
                focus: false // set focus to editable area after initializing summernote
            });
            $('.inline-editor').summernote({
                airMode: true
            });
        });
        window.edit = function() {
            $(".click2edit").summernote()
        }, window.save = function() {
            $(".click2edit").destroy()
        }
    </script>

@endpush