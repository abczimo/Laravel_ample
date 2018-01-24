@extends('layouts.console')

@push('stylesheets')

@endpush

@section('content')

	<div class="row bg-title">
	    <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
	        <h4 class="page-title">Panels & Wells</h4> </div>
	    <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
	        <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
	        <a href="javascript: void(0);" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
	        <ol class="breadcrumb">
	            <li><a href="#">Dashboard</a></li>
	            <li><a href="#">UI Elements</a></li>
	            <li class="active">Panels & Wells</li>
	        </ol>
	    </div>
	    <!-- /.col-lg-12 -->
	</div>
	<!-- .row -->
	<div class="row">
	    <div class="col-md-12">
	        <div class="white-box">
	            <h3 class="box-title">Simple White box panel</h3> Its a simple, give white-box class to div <code> &lt;div class="white-box"&gt; ... &lt;/div&gt; </code> </div>
	    </div>
	</div>
	<!-- /.row -->
	<!-- .row -->
	<div class="row">
	    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
	        <div class="panel panel-default">
	            <div class="panel-heading">Default Panel</div>
	            <div class="panel-wrapper collapse in">
	                <div class="panel-body">
	                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p> <a class="btn btn-custom m-t-10 collapseble">Get Code</a>
	                    <div class="m-t-15 collapseblebox dn">
	                        <div class="well"> <code> &lt;div class="panel panel-default"&gt;<br/>
	    &nbsp; &nbsp;&lt;div class="panel-heading"&gt;Default Panel&lt;/div&gt; <br/>
	    <br/>
	    &lt;div class="panel-wrapper collapse in"&gt;<br/>
	    &nbsp;&nbsp; &lt;div class="panel-body"&gt;<br/>
	    ... ... ...<br/>
	    &nbsp;&nbsp; &lt;/div&gt;<br/>
	    &lt;/div&gt;<br/>
	    <br/>
	    &lt;div class="panel-footer"&gt; Panel Footer &lt;/div&gt;<br/>
	    &lt;/div&gt; </code> </div>
	                    </div>
	                </div>
	                <div class="panel-footer"> Panel Footer </div>
	            </div>
	        </div>
	    </div>
	    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
	        <div class="panel panel-default">
	            <div class="panel-heading">Panel with action
	                <div class="panel-action"><a href="#" data-perform="panel-collapse"><i class="ti-minus"></i></a> <a href="#" data-perform="panel-dismiss"><i class="ti-close"></i></a></div>
	            </div>
	            <div class="panel-wrapper collapse in">
	                <div class="panel-body">
	                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p> <a class="btn btn-info m-t-10">Demo button</a> </div>
	                <div class="panel-footer"> Panel Footer </div>
	            </div>
	        </div>
	    </div>
	    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
	        <div class="panel panel-default">
	            <div class="panel-wrapper collapse in">
	                <div class="panel-body">
	                    <h3>Body title heading h3</h3>
	                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.Rorem psum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.</p>
	                    <p> Aliquam ornare lacus adipiscing, posuere lectus et, fringilla auguelacus adipiscing, posuere lectus et, fringilla augue.</p> <a class="btn btn-success m-t-10">Demo button</a> </div>
	            </div>
	        </div>
	    </div>
	</div>
	<!-- /.row -->
	<!-- .row -->
	<div class="row">
	    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
	        <div class="panel panel-default">
	            <div class="panel-heading">Title with small <small class="text-muted"> This is the small text...</small></div>
	            <div class="panel-wrapper collapse in">
	                <div class="panel-body">
	                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
	                </div>
	            </div>
	        </div>
	    </div>
	    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
	        <div class="panel panel-default">
	            <div class="panel-heading"><i class="ti-settings"></i> Panel with icon</div>
	            <div class="panel-wrapper collapse in">
	                <div class="panel-body">
	                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
	                </div>
	            </div>
	        </div>
	    </div>
	    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
	        <div class="panel panel-default">
	            <div class="panel-heading">Panel with label <span class="label label-info m-l-5">New</span></div>
	            <div class="panel-wrapper collapse in">
	                <div class="panel-body">
	                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
	                </div>
	            </div>
	        </div>
	    </div>
	</div>
	<!-- /.row -->
	<!-- .row -->
	<div class="row">
	    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
	        <div class="panel panel-default">
	            <div class="panel-heading">Title with small
	                <div class="panel-action">
	                    <div class="dropdown"> <a class="dropdown-toggle" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">Dropdown <span class="caret"></span></a>
	                        <ul class="dropdown-menu bullet dropdown-menu-right" aria-labelledby="examplePanelDropdown" role="menu">
	                            <li role="presentation"><a href="javascript:void(0)" role="menuitem"><i class="icon wb-reply" aria-hidden="true"></i> Reply</a></li>
	                            <li role="presentation"><a href="javascript:void(0)" role="menuitem"><i class="icon wb-share" aria-hidden="true"></i> Share</a></li>
	                            <li role="presentation"><a href="javascript:void(0)" role="menuitem"><i class="icon wb-trash" aria-hidden="true"></i> Delete</a></li>
	                            <li class="divider" role="presentation"></li>
	                            <li role="presentation"><a href="javascript:void(0)" role="menuitem"><i class="icon wb-settings" aria-hidden="true"></i> Settings</a></li>
	                        </ul>
	                    </div>
	                </div>
	            </div>
	            <div class="panel-wrapper collapse in">
	                <div class="panel-body">
	                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
	                </div>
	                <div class="panel-footer"> Panel Footer </div>
	            </div>
	        </div>
	    </div>
	    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
	        <div class="panel panel-default">
	            <div class="panel-heading">Panel with Tables</div>
	            <div class="panel-wrapper collapse in">
	                <table class="table table-hover">
	                    <thead>
	                        <tr>
	                            <th class="text-center">#</th>
	                            <th>First Name</th>
	                            <th>Last Name</th>
	                        </tr>
	                    </thead>
	                    <tbody>
	                        <tr>
	                            <td align="center">1</td>
	                            <td>Mark</td>
	                            <td>Otto</td>
	                        </tr>
	                        <tr>
	                            <td align="center">2</td>
	                            <td>Jacob</td>
	                            <td>Thornton</td>
	                        </tr>
	                        <tr>
	                            <td align="center">3</td>
	                            <td>Steave</td>
	                            <td>Jobs</td>
	                        </tr>
	                    </tbody>
	                </table>
	            </div>
	        </div>
	    </div>
	    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
	        <div class="panel panel-default">
	            <div class="panel-heading"> Panel With tab </div>
	            <div class="panel-wrapper collapse in">
	                <ul class="nav customtab nav-tabs" role="tablist">
	                    <li role="presentation" class="active"><a href="#home1" aria-controls="home" role="tab" data-toggle="tab" aria-expanded="true"><span class="visible-xs"><i class="ti-home"></i></span><span class="hidden-xs"> Home</span></a></li>
	                    <li role="presentation" class=""><a href="#profile1" aria-controls="profile" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-user"></i></span> <span class="hidden-xs">Profile</span></a></li>
	                    <li role="presentation"><a href="#messages1" aria-controls="messages" role="tab" data-toggle="tab"><span class="visible-xs"><i class="ti-email"></i></span> <span class="hidden-xs">Messages</span></a></li>
	                </ul>
	                <div class="panel-body">
	                    <div class="tab-content m-t-0">
	                        <div role="tabpanel" class="tab-pane fade active in" id="home1">
	                            <div class="col-md-6">
	                                <h3>Best Clean Tab ever</h3>
	                                <h4>you can use it with the small code</h4> </div>
	                            <div class="col-md-5 pull-right">
	                                <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
	                            </div>
	                            <div class="clearfix"></div>
	                        </div>
	                        <div role="tabpanel" class="tab-pane fade" id="profile1">
	                            <div class="col-md-6">
	                                <h3>Lets check profile</h3>
	                                <h4>you can use it with the small code</h4> </div>
	                            <div class="col-md-5 pull-right">
	                                <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
	                            </div>
	                            <div class="clearfix"></div>
	                        </div>
	                        <div role="tabpanel" class="tab-pane fade" id="messages1">
	                            <div class="col-md-6">
	                                <h3>Come on you have a lot message</h3>
	                                <h4>you can use it with the small code</h4> </div>
	                            <div class="col-md-5 pull-right">
	                                <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
	                            </div>
	                            <div class="clearfix"></div>
	                        </div>
	                        <div role="tabpanel" class="tab-pane fade" id="settings1">
	                            <div class="col-md-6">
	                                <h3>Just do Settings</h3>
	                                <h4>you can use it with the small code</h4> </div>
	                            <div class="col-md-5 pull-right">
	                                <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
	                            </div>
	                            <div class="clearfix"></div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>
	</div>
	<!-- /.row -->
	<!-- .row -->
	<div class="row">
	    <div class="col-lg-4 col-sm-4">
	        <div class="panel panel-info">
	            <div class="panel-heading"> Info Panel
	                <div class="pull-right"><a href="#" data-perform="panel-collapse"><i class="ti-minus"></i></a> <a href="#" data-perform="panel-dismiss"><i class="ti-close"></i></a> </div>
	            </div>
	            <div class="panel-wrapper collapse in" aria-expanded="true">
	                <div class="panel-body">
	                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
	                </div>
	            </div>
	        </div>
	    </div>
	    <!-- /.col-lg-4 -->
	    <div class="col-lg-4 col-sm-4">
	        <div class="panel panel-warning">
	            <div class="panel-heading"> Warning Panel
	                <div class="pull-right"><a href="#" data-perform="panel-collapse"><i class="ti-minus"></i></a> <a href="#" data-perform="panel-dismiss"><i class="ti-close"></i></a> </div>
	            </div>
	            <div class="panel-wrapper collapse in" aria-expanded="true">
	                <div class="panel-body">
	                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
	                </div>
	            </div>
	        </div>
	    </div>
	    <!-- /.col-lg-4 -->
	    <div class="col-lg-4 col-sm-4">
	        <div class="panel panel-danger">
	            <div class="panel-heading"> Danger Panel
	                <div class="pull-right"><a href="#" data-perform="panel-collapse"><i class="ti-minus"></i></a> <a href="#" data-perform="panel-dismiss"><i class="ti-close"></i></a> </div>
	            </div>
	            <div class="panel-wrapper collapse in" aria-expanded="true">
	                <div class="panel-body">
	                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
	                </div>
	            </div>
	        </div>
	    </div>
	    <!-- /.col-lg-4 -->
	    <!-- /.col-lg-4 -->
	    <div class="col-lg-4 col-sm-4">
	        <div class="panel panel-success">
	            <div class="panel-heading"> Success Panel
	                <div class="pull-right"><a href="#" data-perform="panel-collapse"><i class="ti-minus"></i></a> <a href="#" data-perform="panel-dismiss"><i class="ti-close"></i></a> </div>
	            </div>
	            <div class="panel-wrapper collapse in" aria-expanded="true">
	                <div class="panel-body">
	                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
	                </div>
	            </div>
	        </div>
	    </div>
	    <!-- /.col-lg-4 -->
	    <!-- /.col-lg-4 -->
	    <div class="col-lg-4 col-sm-4">
	        <div class="panel panel-primary">
	            <div class="panel-heading"> Primary Panel
	                <div class="pull-right"><a href="#" data-perform="panel-collapse"><i class="ti-minus"></i></a> <a href="#" data-perform="panel-dismiss"><i class="ti-close"></i></a> </div>
	            </div>
	            <div class="panel-wrapper collapse in" aria-expanded="true">
	                <div class="panel-body">
	                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
	                </div>
	            </div>
	        </div>
	    </div>
	    <!-- /.col-lg-4 -->
	    <!-- /.col-lg-4 -->
	    <div class="col-lg-4 col-sm-4">
	        <div class="panel panel-inverse">
	            <div class="panel-heading"> Inverse Panel
	                <div class="pull-right"><a href="#" data-perform="panel-collapse"><i class="ti-minus"></i></a> <a href="#" data-perform="panel-dismiss"><i class="ti-close"></i></a> </div>
	            </div>
	            <div class="panel-wrapper collapse in" aria-expanded="true">
	                <div class="panel-body">
	                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
	                </div>
	            </div>
	        </div>
	    </div>
	    <!-- /.col-lg-4 -->
	</div>
	<!-- /.row -->
	<!-- .row -->
	<div class="row">
	    <div class="col-md-12">
	        <h3>Wells</h3> </div>
	    <div class="col-lg-4">
	        <div class="well">
	            <h4>Normal Well</h4>
	            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
	        </div>
	    </div>
	    <!-- /.col-lg-4 -->
	    <div class="col-lg-4">
	        <div class="well well-lg">
	            <h4>Large Well</h4>
	            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
	        </div>
	    </div>
	    <!-- /.col-lg-4 -->
	    <div class="col-lg-4">
	        <div class="well well-sm">
	            <h4>Small Well</h4>
	            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
	        </div>
	    </div>
	    <!-- /.col-lg-4 -->
	</div>
	<!-- /.row -->

@endsection

@push('scripts')

@endpush