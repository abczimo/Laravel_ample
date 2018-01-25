@extends('layouts.console')

@push('stylesheets')

<link rel="stylesheet" href="console/plugins/dropify/dist/css/dropify.min.css">

@endpush

@section('content')

    <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">File Upload</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
            <a href="javascript: void(0);" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Forms</a></li>
                <li class="active">File Upload</li>
            </ol>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- .row -->
    <div class="row">
        <div class="col-sm-6 ol-md-6 col-xs-12">
            <div class="white-box">
                <h3 class="box-title">File Upload1</h3>
                <label for="input-file-now">Your so fresh input file — Default version</label>
                <input type="file" id="input-file-now" class="dropify" /> </div>
        </div>
        <div class="col-sm-6 ol-md-6 col-xs-12">
            <div class="white-box">
                <h3 class="box-title">File Upload2</h3>
                <label for="input-file-now-custom-1">You can add a default value</label>
                <input type="file" id="input-file-now-custom-1" class="dropify" data-default-file="console/plugins/dropify/dist/src/images/test-image-1.jpg" /> </div>
        </div>
    </div>
    <!-- /.row -->
    <div class="row">
        <div class="col-sm-6 ol-md-6 col-xs-12">
            <div class="white-box">
                <h3 class="box-title">File Upload3</h3>
                <label for="input-file-now-custom-2">You can set the height</label>
                <input type="file" id="input-file-now-custom-2" class="dropify" data-height="500" /> </div>
        </div>
        <div class="col-sm-6 ol-md-6 col-xs-12">
            <div class="white-box">
                <h3 class="box-title">File Upload4</h3>
                <label for="input-file-now-custom-3">You can combine options</label>
                <input type="file" id="input-file-now-custom-3" class="dropify" data-height="500" data-default-file="console/plugins/dropify/dist/src/images/test-image-2.jpg" /> </div>
        </div>
    </div>
    <!-- .row -->
    <div class="row">
        <div class="col-sm-6 ol-md-6 col-xs-12">
            <div class="white-box">
                <h3 class="box-title">File Upload5</h3>
                <label for="input-file-max-fs">You can add a max file size</label>
                <input type="file" id="input-file-max-fs" class="dropify" data-max-file-size="2M" /> </div>
        </div>
        <div class="col-sm-6 ol-md-6 col-xs-12">
            <div class="white-box">
                <h3 class="box-title">File Upload6</h3>
                <label for="input-file-disable-remove">You can disable remove button</label>
                <input type="file" id="input-file-disable-remove" class="dropify" data-show-remove="false" /> </div>
        </div>
    </div>

@endsection

@push('scripts')

    <!-- jQuery file upload -->
    <script src="console/plugins/dropify/dist/js/dropify.min.js"></script>
    <script>
        $(document).ready(function() {
            // Basic
            $('.dropify').dropify();
            // Translated
            $('.dropify-fr').dropify({
                messages: {
                    default: 'Glissez-déposez un fichier ici ou cliquez',
                    replace: 'Glissez-déposez un fichier ou cliquez pour remplacer',
                    remove: 'Supprimer',
                    error: 'Désolé, le fichier trop volumineux'
                }
            });
            // Used events
            var drEvent = $('#input-file-events').dropify();
            drEvent.on('dropify.beforeClear', function(event, element) {
                return confirm("Do you really want to delete \"" + element.file.name + "\" ?");
            });
            drEvent.on('dropify.afterClear', function(event, element) {
                alert('File deleted');
            });
            drEvent.on('dropify.errors', function(event, element) {
                console.log('Has Errors');
            });
            var drDestroy = $('#input-file-to-destroy').dropify();
            drDestroy = drDestroy.data('dropify')
            $('#toggleDropify').on('click', function(e) {
                e.preventDefault();
                if (drDestroy.isDropified()) {
                    drDestroy.destroy();
                } else {
                    drDestroy.init();
                }
            })
        });
    </script>

@endpush