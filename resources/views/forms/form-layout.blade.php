@extends('layouts.console')

@push('stylesheets')

@endpush

@section('content')

    <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">Form Layout</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
            <a href="javascript: void(0);" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Forms</a></li>
                <li class="active">Form Layout</li>
            </ol>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!--.row-->
    <div class="row">
        <div class="col-sm-4 col-sm-12">
            <div class="white-box">
                <center>
                    <h3 class="box-title m-b-0">Designer Basic Form</h3>
                    <p class="text-muted m-b-30 font-13"> Enter below detail</p>
                </center>
                <form class="no-bg-addon">
                    <div class="form-group">
                        <div class="input-group">
                            <input type="text" class="form-control" id="exampleInputuname1" placeholder="Name">
                            <div class="input-group-addon"><i class="ti-user"></i></div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
                            <div class="input-group-addon"><i class="ti-email"></i></div>
                        </div>
                    </div>
                    <div class="btn-group btn-group-justified select-mode m-b-30">
                        <div class="btn-group">
                            <button class="btn btn-info" autofocus type="button">
                                <i class="icon-user"></i>
                                <br/>
                                <span>SINGLE</span>
                            </button>
                        </div>
                        <div class="btn-group">
                            <button class="btn btn-default btn-outline" type="button">
                                <i class="icon-people"></i>
                                <br/>
                                <span>TEAM</span>
                            </button>
                        </div>
                    </div>
                    <div class="form-group">
                        <select class="form-control">
                            <option>Number of members</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <label for="">PAYMENT METHOD</label>
                        </div>
                        <ul class="select-row-icon">
                            <li>
                                <a href="javascript:void(0)"><i class="mdi mdi-credit-card"></i> <span>CREDIT CARD</span> <i class="whn-hov mdi mdi-checkbox-marked-circle"></i></a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="selected"><i class="mdi mdi-monitor"></i> <span>CREDIT CARD</span> <i class="whn-hov mdi mdi-checkbox-marked-circle"></i></a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"><i class="mdi mdi-cash"></i> <span>CREDIT CARD</span> <i class="whn-hov mdi mdi-checkbox-marked-circle"></i></a>
                            </li>
                        </ul>
                    </div>
                    <button class="btn btn-block btn-danger btn-lg btn-rounded">Submit</button>
                </form>
            </div>
        </div>
        <div class="col-md-4 col-sm-12">
            <div class="white-box">
                <h3 class="box-title m-b-0">Sample Forms with icon</h3>
                <p class="text-muted m-b-30 font-13"> Bootstrap Elements </p>
                <div class="row">
                    <div class="col-sm-12 col-xs-12">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputuname3">User Name</label>
                                <div class="input-group">
                                    <div class="input-group-addon"><i class="ti-user"></i></div>
                                    <input type="text" class="form-control" id="exampleInputuname3" placeholder="Username"> </div>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail2">Email address</label>
                                <div class="input-group">
                                    <div class="input-group-addon"><i class="ti-email"></i></div>
                                    <input type="email" class="form-control" id="exampleInputEmail2" placeholder="Enter email"> </div>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputphone">Phone</label>
                                <div class="input-group">
                                    <div class="input-group-addon"><i class="ti-mobile"></i></div>
                                    <input type="tel" class="form-control" id="exampleInputphone" placeholder="Enter phone"> </div>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputpwd1">Password</label>
                                <div class="input-group">
                                    <div class="input-group-addon"><i class="ti-lock"></i></div>
                                    <input type="password" class="form-control" id="exampleInputpwd1" placeholder="Enter email"> </div>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputpwd2">Confirm Password</label>
                                <div class="input-group">
                                    <div class="input-group-addon"><i class="ti-lock"></i></div>
                                    <input type="password" class="form-control" id="exampleInputpwd2" placeholder="Enter email"> </div>
                            </div>
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
        <div class="col-md-4 col-sm-12">
            <div class="white-box">
                <h3 class="box-title m-b-0">Sample Forms with Right icon</h3>
                <p class="text-muted m-b-30 font-13"> Bootstrap Elements </p>
                <div class="row">
                    <div class="col-sm-12 col-xs-12">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputuname7">User Name</label>
                                <div class="input-group">
                                    <input type="text" class="form-control" id="exampleInputuname7" placeholder="Username">
                                    <div class="input-group-addon"><i class="ti-user"></i></div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail3">Email address</label>
                                <div class="input-group">
                                    <input type="email" class="form-control" id="exampleInputEmail3" placeholder="Enter email">
                                    <div class="input-group-addon"><i class="ti-email"></i></div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputphone2">Phone</label>
                                <div class="input-group">
                                    <input type="tel" class="form-control" id="exampleInputphone2" placeholder="Enter phone">
                                    <div class="input-group-addon"><i class="ti-mobile"></i></div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputpwd3">Password</label>
                                <div class="input-group">
                                    <input type="password" class="form-control" id="exampleInputpwd3" placeholder="Enter pwd">
                                    <div class="input-group-addon"><i class="ti-lock"></i></div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputpwd4">Confirm Password</label>
                                <div class="input-group">
                                    <input type="password" class="form-control" id="exampleInputpwd4" placeholder="Enter pwd">
                                    <div class="input-group-addon"><i class="ti-lock"></i></div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="checkbox checkbox-success">
                                    <input id="checkbox2" type="checkbox">
                                    <label for="checkbox2"> Remember me </label>
                                </div>
                            </div>
                            <div class="text-right">
                                <button type="submit" class="btn btn-success waves-effect waves-light m-r-10">Submit</button>
                                <button type="submit" class="btn btn-inverse waves-effect waves-light">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <div class="white-box">
                <h3 class="box-title m-b-0">Sample Horizontal form with icon</h3>
                <p class="text-muted m-b-30 font-13"> Use Bootstrap's predefined grid classes for horizontal form </p>
                <form class="form-horizontal">
                    <div class="form-group">
                        <label for="exampleInputuname4" class="col-sm-3 control-label">Username*</label>
                        <div class="col-sm-9">
                            <div class="input-group">
                                <div class="input-group-addon"><i class="ti-user"></i></div>
                                <input type="text" class="form-control" id="exampleInputuname4" placeholder="Username"> </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail4" class="col-sm-3 control-label">Email*</label>
                        <div class="col-sm-9">
                            <div class="input-group">
                                <div class="input-group-addon"><i class="ti-email"></i></div>
                                <input type="email" class="form-control" id="exampleInputEmail4" placeholder="Enter email"> </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputpwd5" class="col-sm-3 control-label">Website</label>
                        <div class="col-sm-9">
                            <div class="input-group">
                                <div class="input-group-addon"><i class="ti-world"></i></div>
                                <input type="text" class="form-control" id="exampleInputpwd5" placeholder="Enter Website Name"> </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputPassword3" class="col-sm-3 control-label">Password*</label>
                        <div class="col-sm-9">
                            <div class="input-group">
                                <div class="input-group-addon"><i class="ti-lock"></i></div>
                                <input type="password" class="form-control" id="exampleInputpwd9" placeholder="Enter pwd"> </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputPassword4" class="col-sm-3 control-label">Re Password*</label>
                        <div class="col-sm-9">
                            <div class="input-group">
                                <div class="input-group-addon"><i class="ti-lock"></i></div>
                                <input type="password" class="form-control" id="exampleInputpwd6" placeholder="Re Enter pwd"> </div>
                        </div>
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
        <div class="col-md-6">
            <div class="white-box">
                <h3 class="box-title m-b-0">Form with right icon</h3>
                <p class="text-muted m-b-30 font-13"> Use Bootstrap's predefined grid classes for horizontal form </p>
                <form class="form-horizontal">
                    <div class="form-group">
                        <label for="exampleInputuname2" class="col-sm-3 control-label">Username*</label>
                        <div class="col-sm-9">
                            <div class="input-group">
                                <input type="text" class="form-control" id="exampleInputuname2" placeholder="Username">
                                <div class="input-group-addon"><i class="ti-user"></i></div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail5" class="col-sm-3 control-label">Email*</label>
                        <div class="col-sm-9">
                            <div class="input-group">
                                <input type="email" class="form-control" id="exampleInputEmail5" placeholder="Enter email">
                                <div class="input-group-addon"><i class="ti-email"></i></div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputpwd10" class="col-sm-3 control-label">Website</label>
                        <div class="col-sm-9">
                            <div class="input-group">
                                <input type="text" class="form-control" id="exampleInputpwd10" placeholder="Enter Website Name">
                                <div class="input-group-addon"><i class="ti-world"></i></div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputPassword3" class="col-sm-3 control-label">Password*</label>
                        <div class="col-sm-9">
                            <div class="input-group">
                                <input type="password" class="form-control" id="exampleInputpwd7" placeholder="Enter pwd">
                                <div class="input-group-addon"><i class="ti-lock"></i></div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputPassword4" class="col-sm-3 control-label">Re Password*</label>
                        <div class="col-sm-9">
                            <div class="input-group">
                                <input type="password" class="form-control" id="exampleInputpwd8" placeholder="Re Enter pwd">
                                <div class="input-group-addon"><i class="ti-lock"></i></div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-3 col-sm-9">
                            <div class="checkbox checkbox-success">
                                <input id="checkbox34" type="checkbox">
                                <label for="checkbox34">Check me out !</label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group m-b-0">
                        <div class="col-sm-offset-3 col-sm-9 text-right">
                            <button type="submit" class="btn btn-info waves-effect waves-light m-t-10">Sign in</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!--./row-->
    <!--.row-->
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-info">
                <div class="panel-heading"> With two column</div>
                <div class="panel-wrapper collapse in" aria-expanded="true">
                    <div class="panel-body">
                        <form action="#">
                            <div class="form-body">
                                <h3 class="box-title">Person Info</h3>
                                <hr>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label">First Name</label>
                                            <input type="text" id="firstName" class="form-control" placeholder="John doe"> <span class="help-block"> This is inline help </span> </div>
                                    </div>
                                    <!--/span-->
                                    <div class="col-md-6">
                                        <div class="form-group has-error">
                                            <label class="control-label">Last Name</label>
                                            <input type="text" id="lastName" class="form-control" placeholder="12n"> <span class="help-block"> This field has error. </span> </div>
                                    </div>
                                    <!--/span-->
                                </div>
                                <!--/row-->
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label">Gender</label>
                                            <select class="form-control">
                                                <option value="">Male</option>
                                                <option value="">Female</option>
                                            </select> <span class="help-block"> Select your gender </span> </div>
                                    </div>
                                    <!--/span-->
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label">Date of Birth</label>
                                            <input type="text" class="form-control" placeholder="dd/mm/yyyy"> </div>
                                    </div>
                                    <!--/span-->
                                </div>
                                <!--/row-->
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label">Category</label>
                                            <select class="form-control" data-placeholder="Choose a Category" tabindex="1">
                                                <option value="Category 1">Category 1</option>
                                                <option value="Category 2">Category 2</option>
                                                <option value="Category 3">Category 5</option>
                                                <option value="Category 4">Category 4</option>
                                            </select>
                                        </div>
                                    </div>
                                    <!--/span-->
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label">Membership</label>
                                            <div class="radio-list">
                                                <label class="radio-inline p-0">
                                                    <div class="radio radio-info">
                                                        <input type="radio" name="radio" id="radio1" value="option1">
                                                        <label for="radio1">Option 1</label>
                                                    </div>
                                                </label>
                                                <label class="radio-inline">
                                                    <div class="radio radio-info">
                                                        <input type="radio" name="radio" id="radio2" value="option2">
                                                        <label for="radio2">Option 2 </label>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <!--/span-->
                                </div>
                                <!--/row-->
                                <h3 class="box-title m-t-40">Address</h3>
                                <hr>
                                <div class="row">
                                    <div class="col-md-12 ">
                                        <div class="form-group">
                                            <label>Street</label>
                                            <input type="text" class="form-control"> </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>City</label>
                                            <input type="text" class="form-control"> </div>
                                    </div>
                                    <!--/span-->
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>State</label>
                                            <input type="text" class="form-control"> </div>
                                    </div>
                                    <!--/span-->
                                </div>
                                <!--/row-->
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Post Code</label>
                                            <input type="text" class="form-control"> </div>
                                    </div>
                                    <!--/span-->
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Country</label>
                                            <select class="form-control">
                                                <option>--Select your Country--</option>
                                                <option>India</option>
                                                <option>Sri Lanka</option>
                                                <option>USA</option>
                                            </select>
                                        </div>
                                    </div>
                                    <!--/span-->
                                </div>
                            </div>
                            <div class="form-actions">
                                <button type="submit" class="btn btn-success"> <i class="fa fa-check"></i> Save</button>
                                <button type="button" class="btn btn-default">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--./row-->
    <!--.row-->
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-info">
                <div class="panel-heading"> With Horizontal two column</div>
                <div class="panel-wrapper collapse in" aria-expanded="true">
                    <div class="panel-body">
                        <form action="#" class="form-horizontal">
                            <div class="form-body">
                                <h3 class="box-title">Person Info</h3>
                                <hr class="m-t-0 m-b-40">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label col-md-3">First Name</label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" placeholder="John doe"> <span class="help-block"> This is inline help </span> </div>
                                        </div>
                                    </div>
                                    <!--/span-->
                                    <div class="col-md-6">
                                        <div class="form-group has-error">
                                            <label class="control-label col-md-3">Last Name</label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" placeholder="12n"> <span class="help-block"> This field has error. </span> </div>
                                        </div>
                                    </div>
                                    <!--/span-->
                                </div>
                                <!--/row-->
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label col-md-3">Gender</label>
                                            <div class="col-md-9">
                                                <select class="form-control">
                                                    <option value="">Male</option>
                                                    <option value="">Female</option>
                                                </select> <span class="help-block"> Select your gender. </span> </div>
                                        </div>
                                    </div>
                                    <!--/span-->
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label col-md-3">Date of Birth</label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" placeholder="dd/mm/yyyy"> </div>
                                        </div>
                                    </div>
                                    <!--/span-->
                                </div>
                                <!--/row-->
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label col-md-3">Category</label>
                                            <div class="col-md-9">
                                                <select class="form-control" data-placeholder="Choose a Category" tabindex="1">
                                                    <option value="Category 1">Category 1</option>
                                                    <option value="Category 2">Category 2</option>
                                                    <option value="Category 3">Category 5</option>
                                                    <option value="Category 4">Category 4</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <!--/span-->
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label col-md-3">Membership</label>
                                            <div class="col-md-9">
                                                <div class="radio-list">
                                                    <label class="radio-inline">
                                                        <input type="radio" name="optionsRadios2" value="option1"> Free </label>
                                                    <label class="radio-inline">
                                                        <input type="radio" name="optionsRadios2" value="option2" checked=""> Professional </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--/span-->
                                </div>
                                <h3 class="box-title">Address</h3>
                                <hr class="m-t-0 m-b-40">
                                <!--/row-->
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label col-md-3">Address 1</label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control"> </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label col-md-3">Address 2</label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control"> </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label col-md-3">City</label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control"> </div>
                                        </div>
                                    </div>
                                    <!--/span-->
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label col-md-3">State</label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control"> </div>
                                        </div>
                                    </div>
                                    <!--/span-->
                                </div>
                                <!--/row-->
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label col-md-3">Post Code</label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control"> </div>
                                        </div>
                                    </div>
                                    <!--/span-->
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label col-md-3">Country</label>
                                            <div class="col-md-9">
                                                <select class="form-control">
                                                    <option>Country 1</option>
                                                    <option>Country 2</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <!--/span-->
                                </div>
                                <!--/row-->
                            </div>
                            <div class="form-actions">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="row">
                                            <div class="col-md-offset-3 col-md-9">
                                                <button type="submit" class="btn btn-success">Submit</button>
                                                <button type="button" class="btn btn-default">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6"> </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--./row-->
    <!--.row-->
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-info">
                <div class="panel-heading"> Form with Only view</div>
                <div class="panel-wrapper collapse in" aria-expanded="true">
                    <div class="panel-body">
                        <form class="form-horizontal" role="form">
                            <div class="form-body">
                                <h3 class="box-title">Person Info</h3>
                                <hr class="m-t-0 m-b-40">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label col-md-3">First Name:</label>
                                            <div class="col-md-9">
                                                <p class="form-control-static"> John </p>
                                            </div>
                                        </div>
                                    </div>
                                    <!--/span-->
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label col-md-3">Last Name:</label>
                                            <div class="col-md-9">
                                                <p class="form-control-static"> Doe </p>
                                            </div>
                                        </div>
                                    </div>
                                    <!--/span-->
                                </div>
                                <!--/row-->
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label col-md-3">Gender:</label>
                                            <div class="col-md-9">
                                                <p class="form-control-static"> Male </p>
                                            </div>
                                        </div>
                                    </div>
                                    <!--/span-->
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label col-md-3">Date of Birth:</label>
                                            <div class="col-md-9">
                                                <p class="form-control-static"> 11/06/1987 </p>
                                            </div>
                                        </div>
                                    </div>
                                    <!--/span-->
                                </div>
                                <!--/row-->
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label col-md-3">Category:</label>
                                            <div class="col-md-9">
                                                <p class="form-control-static"> Category1 </p>
                                            </div>
                                        </div>
                                    </div>
                                    <!--/span-->
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label col-md-3">Membership:</label>
                                            <div class="col-md-9">
                                                <p class="form-control-static"> Free </p>
                                            </div>
                                        </div>
                                    </div>
                                    <!--/span-->
                                </div>
                                <!--/row-->
                                <h3 class="box-title">Address</h3>
                                <hr class="m-t-0 m-b-40">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label col-md-3">Address:</label>
                                            <div class="col-md-9">
                                                <p class="form-control-static"> E104, Dharti-2, Near silverstar mall </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label col-md-3">City:</label>
                                            <div class="col-md-9">
                                                <p class="form-control-static"> Bhavnagar </p>
                                            </div>
                                        </div>
                                    </div>
                                    <!--/span-->
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label col-md-3">State:</label>
                                            <div class="col-md-9">
                                                <p class="form-control-static"> Gujarat </p>
                                            </div>
                                        </div>
                                    </div>
                                    <!--/span-->
                                </div>
                                <!--/row-->
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label col-md-3">Post Code:</label>
                                            <div class="col-md-9">
                                                <p class="form-control-static"> 457890 </p>
                                            </div>
                                        </div>
                                    </div>
                                    <!--/span-->
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label col-md-3">Country:</label>
                                            <div class="col-md-9">
                                                <p class="form-control-static"> India </p>
                                            </div>
                                        </div>
                                    </div>
                                    <!--/span-->
                                </div>
                            </div>
                            <div class="form-actions">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="row">
                                            <div class="col-md-offset-3 col-md-9">
                                                <button type="submit" class="btn btn-info"> <i class="fa fa-pencil"></i> Edit</button>
                                                <button type="button" class="btn btn-default">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6"> </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--./row-->
    <!--.row-->
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-info">
                <div class="panel-heading"> With Border Form</div>
                <div class="panel-wrapper collapse in" aria-expanded="true">
                    <div class="panel-body">
                        <form action="#" class="form-horizontal form-bordered">
                            <div class="form-body">
                                <div class="form-group">
                                    <label class="control-label col-md-3">First Name</label>
                                    <div class="col-md-9">
                                        <input type="text" placeholder="small" class="form-control"> <span class="help-block"> This is inline help </span> </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3">Last Name</label>
                                    <div class="col-md-9">
                                        <input type="text" placeholder="medium" class="form-control"> <span class="help-block"> This is inline help </span> </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3">Gender</label>
                                    <div class="col-md-9">
                                        <select class="form-control">
                                            <option value="">Male</option>
                                            <option value="">Female</option>
                                        </select> <span class="help-block"> Select your gender. </span> </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3">Date of Birth</label>
                                    <div class="col-md-9">
                                        <input type="text" class="form-control" placeholder="dd/mm/yyyy"> </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3">Category</label>
                                    <div class="col-md-9">
                                        <select class="form-control">
                                            <option value="Category 1">Category 1</option>
                                            <option value="Category 2">Category 2</option>
                                            <option value="Category 3">Category 5</option>
                                            <option value="Category 4">Category 4</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3">Multi-Value Select</label>
                                    <div class="col-md-9">
                                        <select class="form-control" multiple="">
                                            <optgroup label="NFC EAST">
                                                <option>Dallas Cowboys</option>
                                                <option>New York Giants</option>
                                                <option>Philadelphia Eagles</option>
                                                <option>Washington Redskins</option>
                                            </optgroup>
                                            <optgroup label="NFC NORTH">
                                                <option>Chicago Bears</option>
                                                <option>Detroit Lions</option>
                                                <option>Green Bay Packers</option>
                                                <option>Minnesota Vikings</option>
                                            </optgroup>
                                            <optgroup label="NFC SOUTH">
                                                <option>Atlanta Falcons</option>
                                                <option>Carolina Panthers</option>
                                                <option>New Orleans Saints</option>
                                                <option>Tampa Bay Buccaneers</option>
                                            </optgroup>
                                            <optgroup label="NFC WEST">
                                                <option>Arizona Cardinals</option>
                                                <option>St. Louis Rams</option>
                                                <option>San Francisco 49ers</option>
                                                <option>Seattle Seahawks</option>
                                            </optgroup>
                                            <optgroup label="AFC EAST">
                                                <option>Buffalo Bills</option>
                                                <option>Miami Dolphins</option>
                                                <option>New England Patriots</option>
                                                <option>New York Jets</option>
                                            </optgroup>
                                            <optgroup label="AFC NORTH">
                                                <option>Baltimore Ravens</option>
                                                <option>Cincinnati Bengals</option>
                                                <option>Cleveland Browns</option>
                                                <option>Pittsburgh Steelers</option>
                                            </optgroup>
                                            <optgroup label="AFC SOUTH">
                                                <option>Houston Texans</option>
                                                <option>Indianapolis Colts</option>
                                                <option>Jacksonville Jaguars</option>
                                                <option>Tennessee Titans</option>
                                            </optgroup>
                                            <optgroup label="AFC WEST">
                                                <option>Denver Broncos</option>
                                                <option>Kansas City Chiefs</option>
                                                <option>Oakland Raiders</option>
                                                <option>San Diego Chargers</option>
                                            </optgroup>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3">Membership</label>
                                    <div class="col-md-9">
                                        <div class="radio-list">
                                            <label>
                                                <input type="radio" name="optionsRadios2" value="option1"> Free </label>
                                            <label>
                                                <input type="radio" name="optionsRadios2" value="option2" checked=""> Professional </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3">Street</label>
                                    <div class="col-md-9">
                                        <input type="text" class="form-control"> </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3">City</label>
                                    <div class="col-md-9">
                                        <input type="text" class="form-control"> </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3">State</label>
                                    <div class="col-md-9">
                                        <input type="text" class="form-control"> </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3">Post Code</label>
                                    <div class="col-md-9">
                                        <input type="text" class="form-control"> </div>
                                </div>
                                <div class="form-group last">
                                    <label class="control-label col-md-3">Country</label>
                                    <div class="col-md-9">
                                        <select class="form-control"> </select>
                                    </div>
                                </div>
                            </div>
                            <div class="form-actions">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="row">
                                            <div class="col-md-offset-3 col-md-9">
                                                <button type="submit" class="btn btn-success"> <i class="fa fa-check"></i> Submit</button>
                                                <button type="button" class="btn btn-default">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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