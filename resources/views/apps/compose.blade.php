@extends('layouts.console')

@push('stylesheets')

    <!-- wysihtml5 CSS -->
    <link rel="stylesheet" href="console/plugins/html5-editor/bootstrap-wysihtml5.css" />
    <!-- Dropzone css -->
    <link href="console/plugins/dropzone-master/dist/dropzone.css" rel="stylesheet" type="text/css" />

@endpush

@section('content')

    <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">Compose Mail</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
            <a href="javascript: void(0);" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li class="active">Compose Mail</li>
            </ol>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- row -->
    <div class="row">
        <!-- Left sidebar -->
        <div class="col-md-12">
            <div class="white-box">
                <div class="row">
                    <div class="col-lg-2 col-md-3  col-sm-4 col-xs-12 inbox-panel">
                        <div> <a href="#" class="btn btn-custom btn-block waves-effect waves-light">Compose</a>
                            <div class="list-group mail-list m-t-20"> <a href="inbox.html" class="list-group-item active">Inbox <span class="label label-rouded label-success pull-right">5</span></a> <a href="#" class="list-group-item ">Starred</a> <a href="#" class="list-group-item">Draft <span class="label label-rouded label-warning pull-right">15</span></a> <a href="#" class="list-group-item">Sent Mail</a> <a href="#" class="list-group-item">Trash <span class="label label-rouded label-default pull-right">55</span></a> </div>
                            <h3 class="panel-title m-t-40 m-b-0">Labels</h3>
                            <hr class="m-t-5">
                            <div class="list-group b-0 mail-list"> <a href="#" class="list-group-item"><span class="fa fa-circle text-info m-r-10"></span>Work</a> <a href="#" class="list-group-item"><span class="fa fa-circle text-warning m-r-10"></span>Family</a> <a href="#" class="list-group-item"><span class="fa fa-circle text-purple m-r-10"></span>Private</a> <a href="#" class="list-group-item"><span class="fa fa-circle text-danger m-r-10"></span>Friends</a> <a href="#" class="list-group-item"><span class="fa fa-circle text-success m-r-10"></span>Corporate</a> </div>
                        </div>
                    </div>
                    <div class="col-lg-10 col-md-9 col-sm-8 col-xs-12 mail_listing">
                        <h3 class="box-title">Compose New Message</h3>
                        <div class="form-group">
                            <input class="form-control" placeholder="To:"> </div>
                        <div class="form-group">
                            <input class="form-control" placeholder="Subject:"> </div>
                        <div class="form-group">
                            <textarea class="textarea_editor form-control" rows="15" placeholder="Enter text ..."></textarea>
                        </div>
                        <h4><i class="ti-link"></i> Attachment</h4>
                        <form action="#" class="dropzone">
                            <div class="fallback">
                                <input name="file" type="file" multiple /> </div>
                        </form>
                        <hr>
                        <button type="submit" class="btn btn-primary"><i class="fa fa-envelope-o"></i> Send</button>
                        <button class="btn btn-default"><i class="fa fa-times"></i> Discard</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /.row -->

@endsection

@push('scripts')

    <script src="console/plugins/html5-editor/wysihtml5-0.3.0.js"></script>
    <script src="console/plugins/html5-editor/bootstrap-wysihtml5.js"></script>
    <script src="console/plugins/dropzone-master/dist/dropzone.js"></script>
    <script>
        $(document).ready(function() {
            $('.textarea_editor').wysihtml5();
        });
    </script>

@endpush