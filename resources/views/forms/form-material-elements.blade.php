@extends('layouts.console')

@push('stylesheets')

@endpush

@section('content')

    <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">Material Form</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
            <a href="javascript: void(0);" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Forms</a></li>
                <li class="active">Material Form</li>
            </ol>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- .row -->
    <div class="row">
        <div class="col-sm-12">
            <div class="white-box p-l-20 p-r-20">
                <h3 class="box-title m-b-0">Animated Line Inputs Forms</h3>
                <p class="text-muted m-b-30 font-13">Just add <code>form-material</code> class to the form that's it. </p>
                <div class="row">
                    <div class="col-md-12">
                        <form class="form-material form-horizontal">
                            <div class="form-group">
                                <label class="col-md-12">Default Text <span class="help"> e.g. "George deo"</span></label>
                                <div class="col-md-12">
                                    <input type="text" class="form-control form-control-line" value="Some text value..."> </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-12" for="example-email">Email <span class="help"> e.g. "example@gmail.com"</span></label>
                                <div class="col-md-12">
                                    <input type="email" id="example-email2" name="example-email" class="form-control" placeholder="Email"> </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-12">Password</label>
                                <div class="col-md-12">
                                    <input type="password" class="form-control" value="password"> </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-12">Placeholder</label>
                                <div class="col-md-12">
                                    <input type="text" class="form-control" placeholder="placeholder"> </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-12">Text area</label>
                                <div class="col-md-12">
                                    <textarea class="form-control" rows="5"></textarea>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-12">Input Select</label>
                                <div class="col-sm-12">
                                    <select class="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-12">File upload</label>
                                <div class="col-sm-12">
                                    <div class="fileinput fileinput-new input-group" data-provides="fileinput">
                                        <div class="form-control" data-trigger="fileinput"> <i class="glyphicon glyphicon-file fileinput-exists"></i> <span class="fileinput-filename"></span></div> <span class="input-group-addon btn btn-default btn-file"> <span class="fileinput-new">Select file</span> <span class="fileinput-exists">Change</span>
                                        <input type="file" name="..."> </span> <a href="#" class="input-group-addon btn btn-default fileinput-exists" data-dismiss="fileinput">Remove</a> </div>
                                </div>
                            </div>
                            <div class="form-group ">
                                <label class="col-sm-12">Helping text</label>
                                <div class="col-sm-12">
                                    <input type="text" class="form-control form-control-line" placeholder="Helping text"> <span class="help-block"><small>A block of help text that breaks onto a new line and may extend beyond one line.</small></span> </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /.row -->
    <!-- .row -->
    <div class="row">
        <div class="col-sm-12">
            <div class="white-box p-l-20 p-r-20">
                <h3 class="box-title m-b-0">Line Inputs Forms</h3>
                <p class="text-muted m-b-30 font-13">Just add <code>form-control-line</code> class with form-control </p>
                <div class="row">
                    <div class="col-md-12">
                        <form class="form-horizontal">
                            <div class="form-group">
                                <label class="col-md-12">Default Text <span class="help"> e.g. "George deo"</span></label>
                                <div class="col-md-12">
                                    <input type="text" class="form-control form-control-line" value="Some text value..."> </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-12" for="example-email">Email <span class="help"> e.g. "example@gmail.com"</span></label>
                                <div class="col-md-12">
                                    <input type="email" id="example-email2" name="example-email" class="form-control form-control-line" placeholder="Email"> </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-12">Password</label>
                                <div class="col-md-12">
                                    <input type="password" class="form-control form-control-line" value="password"> </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-12">Placeholder</label>
                                <div class="col-md-12">
                                    <input type="text" class="form-control form-control-line" placeholder="placeholder"> </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-12">Text area</label>
                                <div class="col-md-12">
                                    <textarea class="form-control form-control-line" rows="5"></textarea>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-12">Input Select</label>
                                <div class="col-sm-12">
                                    <select class="form-control form-control-line">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-12">File upload</label>
                                <div class="col-sm-12">
                                    <div class="fileinput fileinput-new input-group" data-provides="fileinput">
                                        <div class="form-control form-control-line" data-trigger="fileinput"> <i class="glyphicon glyphicon-file fileinput-exists"></i> <span class="fileinput-filename"></span></div> <span class="input-group-addon btn btn-default btn-file"> <span class="fileinput-new">Select file</span> <span class="fileinput-exists">Change</span>
                                        <input type="file" name="..."> </span> <a href="#" class="input-group-addon btn btn-default fileinput-exists" data-dismiss="fileinput">Remove</a> </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-12">Helping text</label>
                                <div class="col-sm-12">
                                    <input type="text" class="form-control form-control-line" placeholder="Helping text"> <span class="help-block"><small>A block of help text that breaks onto a new line and may extend beyond one line.</small></span> </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection

@push('scripts')

@endpush