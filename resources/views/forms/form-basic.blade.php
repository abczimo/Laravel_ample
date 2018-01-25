@extends('layouts.console')

@push('stylesheets')

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
        <div class="col-sm-12">
            <div class="white-box">
                <h3 class="box-title m-b-0">Default Basic Forms</h3>
                <p class="text-muted m-b-30 font-13"> All bootstrap element classies </p>
                <form class="form-horizontal">
                    <div class="form-group">
                        <label class="col-md-12">Default Text <span class="help"> e.g. "George deo"</span></label>
                        <div class="col-md-12">
                            <input type="text" class="form-control" value="George deo..."> </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-12" for="example-email">Email <span class="help"> e.g. "example@gmail.com"</span></label>
                        <div class="col-md-12">
                            <input type="email" id="example-email" name="example-email" class="form-control" placeholder="Email"> </div>
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
                    <div class="form-group">
                        <label class="col-sm-12">Helping text</label>
                        <div class="col-sm-12">
                            <input type="text" class="form-control" placeholder="Helping text"> <span class="help-block"><small>A block of help text that breaks onto a new line and may extend beyond one line.</small></span> </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- /.row -->
    <!-- .row -->
    <div class="row">
        <div class="col-sm-12">
            <div class="white-box">
                <h3 class="box-title m-b-0">Input groups</h3>
                <p class="text-muted m-b-30 font-13"> Bootstrap Elements </p>
                <div class="row">
                    <div class="col-sm-12 col-xs-12">
                        <form>
                            <div class="form-group">
                                <label class="control-label">Static</label>
                                <div class="input-group"> <span class="input-group-addon">@</span>
                                    <input type="text" placeholder="Username" class="form-control"> </div>
                                <div class="input-group m-t-10">
                                    <input type="email" id="example-input2-group1" name="example-input2-group1" class="form-control" placeholder="Email"> <span class="input-group-addon"><i class="fa fa-envelope-o"></i></span> </div>
                                <div class="input-group m-t-10"> <span class="input-group-addon"><i class="fa fa-dollar"></i></span>
                                    <input type="text" id="example-input3-group1" name="example-input3-group1" class="form-control" placeholder=".."> <span class="input-group-addon">.00</span> </div>
                            </div>
                            <!-- form-group -->
                        </form>
                    </div>
                    <div class="col-sm-12 col-xs-12">
                        <form>
                            <div class="form-group">
                                <label class="control-label m-t-20" for="example-input1-group3">Dropdowns</label>
                                <div class="input-group">
                                    <div class="input-group-btn">
                                        <button type="button" class="btn waves-effect waves-light btn-info dropdown-toggle" data-toggle="dropdown">Action <span class="caret"></span></button>
                                        <ul class="dropdown-menu">
                                            <li><a href="javascript:void(0)">Action</a></li>
                                            <li><a href="javascript:void(0)">Another action</a></li>
                                            <li class="divider"></li>
                                            <li><a href="javascript:void(0)">Separated link</a></li>
                                        </ul>
                                    </div>
                                    <input type="text" id="example-input1-group3" name="example-input1-group3" class="form-control" placeholder="Username"> </div>
                                <div class="input-group m-t-10">
                                    <input type="email" id="example-input2-group3" name="example-input2-group3" class="form-control" placeholder="Email">
                                    <div class="input-group-btn">
                                        <button type="button" class="btn waves-effect waves-light btn-info dropdown-toggle" data-toggle="dropdown">Action <span class="caret"></span></button>
                                        <ul class="dropdown-menu dropdown-menu-right">
                                            <li><a href="javascript:void(0)">Action</a></li>
                                            <li><a href="javascript:void(0)">Another action</a></li>
                                            <li class="divider"></li>
                                            <li><a href="javascript:void(0)">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <label class="control-label m-t-40" for="example-input1-group3">Segment Buttons</label>
                                <div class="input-group m-t-10">
                                    <div class="input-group-btn">
                                        <button type="button" class="btn waves-effect waves-light btn-info">Action</button>
                                        <button type="button" class="btn waves-effect waves-light btn-inverse dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></button>
                                        <ul class="dropdown-menu">
                                            <li><a href="javascript:void(0)">Action</a></li>
                                            <li><a href="javascript:void(0)">Another action</a></li>
                                            <li class="divider"></li>
                                            <li><a href="javascript:void(0)">Separated link</a></li>
                                        </ul>
                                    </div>
                                    <input type="text" id="example-input3-group3" name="example-input3-group3" class="form-control" placeholder="..">
                                    <div class="input-group-btn">
                                        <button type="button" class="btn waves-effect waves-light btn-info dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></button>
                                        <ul class="dropdown-menu dropdown-menu-right">
                                            <li><a href="javascript:void(0)">Action</a></li>
                                            <li><a href="javascript:void(0)">Another action</a></li>
                                            <li class="divider"></li>
                                            <li><a href="javascript:void(0)">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="input-group m-t-10">
                                    <input type="text" id="example-input3-group4" name="example-input3-group3" class="form-control" placeholder="..">
                                    <div class="input-group-btn">
                                        <button type="button" class="btn waves-effect waves-light btn-inverse dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></button>
                                        <ul class="dropdown-menu dropdown-menu-right">
                                            <li><a href="javascript:void(0)">Action</a></li>
                                            <li><a href="javascript:void(0)">Another action</a></li>
                                            <li class="divider"></li>
                                            <li><a href="javascript:void(0)">Separated link</a></li>
                                        </ul>
                                        <button type="button" class="btn waves-effect waves-light btn-info">Action</button>
                                    </div>
                                </div>
                            </div>
                            <!-- form-group -->
                        </form>
                    </div>
                    <div class="col-sm-12 col-xs-12">
                        <form>
                            <div class="form-group">
                                <label class="control-label m-t-20" for="example-input1-group2">Buttons</label>
                                <div class="input-group"> <span class="input-group-btn">
          <button type="button" class="btn waves-effect waves-light btn-info"><i class="fa fa-search"></i></button>
          </span>
                                    <input type="text" id="example-input1-group2" name="example-input1-group2" class="form-control" placeholder="Search"> </div>
                                <div class="input-group m-t-10">
                                    <input type="email" id="example-input2-group2" name="example-input2-group2" class="form-control" placeholder="Email"> <span class="input-group-btn">
          <button type="button" class="btn waves-effect waves-light btn-info">Submit</button>
          </span> </div>
                                <div class="input-group m-t-10"> <span class="input-group-btn">
          <button type="button" class="btn waves-effect waves-light btn-primary"><i class="fa fa-facebook"></i></button>
          </span>
                                    <input type="text" id="example-input3-group2" name="example-input3-group2" class="form-control" placeholder="Search"> <span class="input-group-btn">
          <button type="button" class="btn waves-effect waves-light btn-info"><i class="fa fa-twitter"></i></button>
          </span> </div>
                            </div>
                            <!-- form-group -->
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
            <div class="white-box">
                <h3 class="box-title m-b-0">Input States</h3>
                <p class="text-muted m-b-30 font-13"> Validation styles for error, warning, and success states on form controls.</p>
                <div class="row">
                    <div class="col-sm-6 col-xs-12">
                        <form class="form-horizontal" role="form">
                            <div class="form-group has-success">
                                <label class="col-md-3 control-label" for="state-success">Success</label>
                                <div class="col-md-6">
                                    <input type="text" id="state-success" name="state-success" class="form-control" placeholder="..."> </div>
                            </div>
                            <div class="form-group has-warning">
                                <label class="col-md-3 control-label" for="state-warning">Warning</label>
                                <div class="col-md-6">
                                    <input type="text" id="state-warning" name="state-warning" class="form-control" placeholder="..."> </div>
                            </div>
                            <div class="form-group has-error">
                                <label class="col-md-3 control-label" for="state-danger">Danger</label>
                                <div class="col-md-6">
                                    <input type="text" id="state-danger" name="state-danger" class="form-control" placeholder="..."> </div>
                            </div>
                            <div class="form-group has-success has-feedback">
                                <label class="col-sm-3 control-label">Input with success </label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control"> <span class="glyphicon glyphicon-ok form-control-feedback"></span> </div>
                            </div>
                            <div class="form-group has-warning has-feedback">
                                <label class="col-sm-3 control-label">Input with warning </label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control inputmask"> <span class="glyphicon glyphicon-warning-sign form-control-feedback"></span> </div>
                            </div>
                            <div class="form-group has-error has-feedback">
                                <label class="col-sm-3 control-label">Input with error </label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control inputmask"> <span class="glyphicon glyphicon-remove form-control-feedback"></span> </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-sm-6 col-xs-12">
                        <form role="form" class="form-horizontal">
                            <div class="form-group">
                                <label class="col-sm-3 control-label" for="example-input-small">Small</label>
                                <div class="col-sm-6">
                                    <input type="text" id="example-input-small" name="example-input-small" class="form-control input-sm" placeholder=".input-sm"> </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label" for="example-input-normal">Normal</label>
                                <div class="col-sm-6">
                                    <input type="text" id="example-input-normal" name="example-input-normal" class="form-control" placeholder="Normal"> </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label" for="example-input-large">Large</label>
                                <div class="col-sm-6">
                                    <input type="text" id="example-input-large" name="example-input-large" class="form-control input-lg" placeholder=".input-lg"> </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">Grid Sizes</label>
                                <div class="col-sm-4">
                                    <input type="text" class="form-control" placeholder=".col-sm-4"> </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-5 col-sm-offset-3">
                                    <input type="text" class="form-control" placeholder=".col-sm-5"> </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-6 col-sm-offset-3">
                                    <input type="text" class="form-control" placeholder=".col-sm-6"> </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /.row -->
    <div class="row">
        <div class="col-md-6">
            <div class="white-box">
                <h3 class="box-title m-b-0">Sample Basic Forms</h3>
                <p class="text-muted m-b-30 font-13"> Bootstrap Elements </p>
                <div class="row">
                    <div class="col-sm-12 col-xs-12">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">User Name</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter Username"> </div>
                            <div class="form-group">
                                <label for="exampleInputEmail2">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail2" placeholder="Enter email"> </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"> </div>
                            <div class="form-group">
                                <label for="exampleInputPassword2">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Confirm Password"> </div>
                            <div class="form-group">
                                <div class="checkbox checkbox-success">
                                    <input id="checkbox1" type="checkbox">
                                    <label for="checkbox1"> Remember me </label>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-success waves-effect waves-light m-r-10">Submit</button>
                            <button type="submit" class="btn btn-inverse waves-effect waves-light">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="white-box">
                <h3 class="box-title m-b-0">Sample Horizontal form</h3>
                <p class="text-muted m-b-30 font-13"> Use Bootstrap's predefined grid classes for horizontal form </p>
                <form class="form-horizontal">
                    <div class="form-group">
                        <label for="inputEmail3" class="col-sm-3 control-label">Username*</label>
                        <div class="col-sm-9">
                            <input type="email" class="form-control" id="inputEmail3" placeholder="Username"> </div>
                    </div>
                    <div class="form-group">
                        <label for="inputEmail4" class="col-sm-3 control-label">Email*</label>
                        <div class="col-sm-9">
                            <input type="email" class="form-control" id="inputEmail4" placeholder="Email"> </div>
                    </div>
                    <div class="form-group">
                        <label for="inputEmail5" class="col-sm-3 control-label">Website</label>
                        <div class="col-sm-9">
                            <input type="email" class="form-control" id="inputEmail5" placeholder="Website"> </div>
                    </div>
                    <div class="form-group">
                        <label for="inputPassword3" class="col-sm-3 control-label">Password*</label>
                        <div class="col-sm-9">
                            <input type="password" class="form-control" id="inputPassword3" placeholder="Password"> </div>
                    </div>
                    <div class="form-group">
                        <label for="inputPassword4" class="col-sm-3 control-label">Re Password*</label>
                        <div class="col-sm-9">
                            <input type="password" class="form-control" id="inputPassword4" placeholder="Retype Password"> </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-3 col-sm-9">
                            <div class="checkbox checkbox-success">
                                <input id="checkbox33" type="checkbox">
                                <label for="checkbox33">Check me out !</label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group m-b-0">
                        <div class="col-sm-offset-3 col-sm-9">
                            <button type="submit" class="btn btn-info waves-effect waves-light m-t-10">Sign in</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

@endsection

@push('scripts')

@endpush