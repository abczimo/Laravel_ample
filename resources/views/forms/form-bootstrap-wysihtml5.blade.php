@extends('layouts.console')

@push('stylesheets')

    <link rel="stylesheet" href="console/plugins/html5-editor/bootstrap-wysihtml5.css" />

@endpush

@section('content')

     <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">Bootstrap Wysiwig Editor</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
            <a href="javascript: void(0);" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Forms</a></li>
                <li class="active">Wysiwig Editor</li>
            </ol>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- .row -->
    <div class="row">
        <div class="col-sm-12">
            <div class="white-box">
                <h3 class="box-title m-b-0">Bootstrap wysihtml5</h3>
                <p class="text-muted m-b-30">Bootstrap html5 editor</p>
                <form method="post">
                    <div class="form-group">
                        <textarea class="textarea_editor form-control" rows="15" placeholder="Enter text ..."></textarea>
                    </div>
                </form>
            </div>
        </div>
    </div>

@endsection

@push('scripts')

    <!-- wysuhtml5 Plugin JavaScript -->
    <script src="console/plugins/html5-editor/wysihtml5-0.3.0.js"></script>
    <script src="console/plugins/html5-editor/bootstrap-wysihtml5.js"></script>
    <script>
        $(document).ready(function() {
            $('.textarea_editor').wysihtml5();
        });
    </script>

@endpush