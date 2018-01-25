@extends('layouts.console')

@push('stylesheets')

    <!-- Dropzone css -->
    <link href="console/plugins/dropzone-master/dist/dropzone.css" rel="stylesheet" type="text/css" />

@endpush

@section('content')

    <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">Form Dropzone</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
            <a href="javascript: void(0);" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Forms</a></li>
                <li class="active">Form Dropzone</li>
            </ol>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- .row -->
    <div class="row">
        <div class="col-md-12">
            <div class="white-box">
                <h3 class="box-title m-b-0">Dropzone </h3>
                <p class="text-muted m-b-30"> For multiple file upload</p>
                <form action="#" class="dropzone">
                    <div class="fallback">
                        <input name="file" type="file" multiple /> </div>
                </form>
            </div>
        </div>
    </div>

@endsection

@push('scripts')

    <!-- Dropzone Plugin JavaScript -->
    <script src="console/plugins/dropzone-master/dist/dropzone.js"></script>

@endpush