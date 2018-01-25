@extends('layouts.console')

@push('stylesheets')

    <!-- Calendar CSS -->
    <link href="console/plugins/calendar/dist/fullcalendar.css" rel="stylesheet" />

@endpush

@section('content')

    <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">Calendar Page</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
            <a href="javascript: void(0);" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li class="active">Calendar Page</li>
            </ol>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- row -->
    <div class="row">
        <div class="col-md-3">
            <div class="white-box">
                <h3 class="box-title">Drag and drop your event</h3>
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div id="calendar-events" class="m-t-20">
                            <div class="calendar-events" data-class="bg-info"><i class="fa fa-circle text-info"></i> My Event One</div>
                            <div class="calendar-events" data-class="bg-success"><i class="fa fa-circle text-success"></i> My Event Two</div>
                            <div class="calendar-events" data-class="bg-danger"><i class="fa fa-circle text-danger"></i> My Event Three</div>
                            <div class="calendar-events" data-class="bg-warning"><i class="fa fa-circle text-warning"></i> My Event Four</div>
                        </div>
                        <!-- checkbox -->
                        <div class="checkbox">
                            <input id="drop-remove" type="checkbox">
                            <label for="drop-remove">
                                Remove after drop
                            </label>
                        </div>
                        <a href="#" data-toggle="modal" data-target="#add-new-event" class="btn btn-lg m-t-40 btn-danger btn-block waves-effect waves-light">
                            <i class="ti-plus"></i> Add New Event
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-9">
            <div class="white-box">
                <div id="calendar"></div>
            </div>
        </div>
    </div>
    <!-- /.row -->
    <!-- BEGIN MODAL -->
    <div class="modal fade none-border" id="my-event">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title"><strong>Add Event</strong></h4>
                </div>
                <div class="modal-body"></div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-white waves-effect" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-success save-event waves-effect waves-light">Create event</button>
                    <button type="button" class="btn btn-danger delete-event waves-effect waves-light" data-dismiss="modal">Delete</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal Add Category -->
    <div class="modal fade none-border" id="add-new-event">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title"><strong>Add</strong> a category</h4>
                </div>
                <div class="modal-body">
                    <form role="form">
                        <div class="row">
                            <div class="col-md-6">
                                <label class="control-label">Category Name</label>
                                <input class="form-control form-white" placeholder="Enter name" type="text" name="category-name" />
                            </div>
                            <div class="col-md-6">
                                <label class="control-label">Choose Category Color</label>
                                <select class="form-control form-white" data-placeholder="Choose a color..." name="category-color">
                                    <option value="success">Success</option>
                                    <option value="danger">Danger</option>
                                    <option value="info">Info</option>
                                    <option value="primary">Primary</option>
                                    <option value="warning">Warning</option>
                                    <option value="inverse">Inverse</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger waves-effect waves-light save-category" data-dismiss="modal">Save</button>
                    <button type="button" class="btn btn-white waves-effect" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <!-- END MODAL -->

@endsection

@push('scripts')

    <!-- Calendar JavaScript -->
    <script src="console/plugins/calendar/jquery-ui.min.js"></script>
    <script src="console/plugins/moment/moment.js"></script>
    <script src='console/plugins/calendar/dist/fullcalendar.min.js'></script>
    <script src="console/plugins/calendar/dist/jquery.fullcalendar.js"></script>
    <script src="console/plugins/calendar/dist/cal-init.js"></script>
    
@endpush