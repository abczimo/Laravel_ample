@extends('layouts.console')

@push('stylesheets')

@endpush

@section('content')

    <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">Contact Detail</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
            <a href="javascript: void(0);" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li class="active">Contact Detail</li>
            </ol>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- row -->
    <div class="row">
        <div class="col-md-4 col-xs-12">
            <div class="white-box">
                <div class="user-bg"> <img width="100%" alt="user" src="console/images/large/img1.jpg"> </div>
                <div class="user-btm-box">
                    <!-- .row -->
                    <div class="row text-center m-t-10">
                        <div class="col-md-6 b-r"><strong>Name</strong>
                            <p>Genelia Deshmukh</p>
                        </div>
                        <div class="col-md-6"><strong>Designation</strong>
                            <p>Designer</p>
                        </div>
                    </div>
                    <!-- /.row -->
                    <hr>
                    <!-- .row -->
                    <div class="row text-center m-t-10">
                        <div class="col-md-6 b-r"><strong>Email ID</strong>
                            <p>genelia@gmail.com</p>
                        </div>
                        <div class="col-md-6"><strong>Phone</strong>
                            <p>+123 456 789</p>
                        </div>
                    </div>
                    <!-- /.row -->
                    <hr>
                    <!-- .row -->
                    <div class="row text-center m-t-10">
                        <div class="col-md-12"><strong>Address</strong>
                            <p>E104, Dharti-2, Chandlodia Ahmedabad
                                <br/> Gujarat, India.</p>
                        </div>
                    </div>
                    <hr>
                    <!-- /.row -->
                    <div class="col-md-4 col-sm-4 text-center">
                        <p class="text-purple"><i class="ti-facebook"></i></p>
                        <h1>258</h1> </div>
                    <div class="col-md-4 col-sm-4 text-center">
                        <p class="text-blue"><i class="ti-twitter"></i></p>
                        <h1>125</h1> </div>
                    <div class="col-md-4 col-sm-4 text-center">
                        <p class="text-danger"><i class="ti-dribbble"></i></p>
                        <h1>556</h1> </div>
                </div>
            </div>
        </div>
        <div class="col-md-8 col-xs-12">
            <div class="white-box">
                <!-- .tabs -->
                <ul class="nav nav-tabs tabs customtab">
                    <li class="active tab">
                        <a href="#home" data-toggle="tab"> <span class="visible-xs"><i class="fa fa-home"></i></span> <span class="hidden-xs">Activity</span> </a>
                    </li>
                    <li class="tab">
                        <a href="#profile" data-toggle="tab"> <span class="visible-xs"><i class="fa fa-user"></i></span> <span class="hidden-xs">Profile</span> </a>
                    </li>
                    <li class="tab">
                        <a href="#settings" data-toggle="tab" aria-expanded="false"> <span class="visible-xs"><i class="fa fa-cog"></i></span> <span class="hidden-xs">Edit Detail</span> </a>
                    </li>
                </ul>
                <!-- /.tabs -->
                <div class="tab-content">
                    <!-- .tabs 1 -->
                    <div class="tab-pane active" id="home">
                        <div class="steamline">
                            <div class="sl-item">
                                <div class="sl-left"> <img src="console/images/users/genu.jpg" alt="user" class="img-circle" /> </div>
                                <div class="sl-right">
                                    <div class="m-l-40"><a href="#" class="text-info">John Doe</a> <span class="sl-date">5 minutes ago</span>
                                        <p>assign a new task <a href="#"> Design weblayout</a></p>
                                        <div class="m-t-20 row"><img src="console/images/img1.jpg" alt="user" class="col-md-3 col-xs-12" /> <img src="console/images/img2.jpg" alt="user" class="col-md-3 col-xs-12" /> <img src="console/images/img3.jpg" alt="user" class="col-md-3 col-xs-12" /></div>
                                    </div>
                                </div>
                            </div>
                            <div class="sl-item">
                                <div class="sl-left"> <img src="console/images/users/sonu.jpg" alt="user" class="img-circle" /> </div>
                                <div class="sl-right">
                                    <div class="m-l-40"> <a href="#" class="text-info">John Doe</a> <span class="sl-date">5 minutes ago</span>
                                        <div class="m-t-20 row">
                                            <div class="col-md-2 col-xs-12"><img src="console/images/img1.jpg" alt="user" class="img-responsive" /></div>
                                            <div class="col-md-9 col-xs-12">
                                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa</p> <a href="#" class="btn btn-success"> Design weblayout</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="sl-item">
                                <div class="sl-left"> <img src="console/images/users/ritesh.jpg" alt="user" class="img-circle" /> </div>
                                <div class="sl-right">
                                    <div class="m-l-40"><a href="#" class="text-info">John Doe</a> <span class="sl-date">5 minutes ago</span>
                                        <p class="m-t-10"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper </p>
                                    </div>
                                </div>
                            </div>
                            <div class="sl-item">
                                <div class="sl-left"> <img src="console/images/users/govinda.jpg" alt="user" class="img-circle" /> </div>
                                <div class="sl-right">
                                    <div class="m-l-40"><a href="#" class="text-info">John Doe</a> <span class="sl-date">5 minutes ago</span>
                                        <p>assign a new task <a href="#"> Design weblayout</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /.tabs1 -->
                    <!-- .tabs2 -->
                    <div class="tab-pane" id="profile">
                        <div class="row">
                            <div class="col-md-3 col-xs-6 b-r"> <strong>Full Name</strong>
                                <br>
                                <p class="text-muted">Johnathan Deo</p>
                            </div>
                            <div class="col-md-3 col-xs-6 b-r"> <strong>Mobile</strong>
                                <br>
                                <p class="text-muted">(123) 456 7890</p>
                            </div>
                            <div class="col-md-3 col-xs-6 b-r"> <strong>Email</strong>
                                <br>
                                <p class="text-muted">johnathan@admin.com</p>
                            </div>
                            <div class="col-md-3 col-xs-6"> <strong>Location</strong>
                                <br>
                                <p class="text-muted">London</p>
                            </div>
                        </div>
                        <hr>
                        <p class="m-t-30">Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries </p>
                        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <h4 class="font-bold m-t-30">Skill Set</h4>
                        <hr>
                        <h5>Wordpress <span class="pull-right">80%</span></h5>
                        <div class="progress">
                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:80%;"> <span class="sr-only">50% Complete</span> </div>
                        </div>
                        <h5>HTML 5 <span class="pull-right">90%</span></h5>
                        <div class="progress">
                            <div class="progress-bar progress-bar-custom" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width:90%;"> <span class="sr-only">50% Complete</span> </div>
                        </div>
                        <h5>jQuery <span class="pull-right">50%</span></h5>
                        <div class="progress">
                            <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:50%;"> <span class="sr-only">50% Complete</span> </div>
                        </div>
                        <h5>Photoshop <span class="pull-right">70%</span></h5>
                        <div class="progress">
                            <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:70%;"> <span class="sr-only">50% Complete</span> </div>
                        </div>
                    </div>
                    <!-- /.tabs2 -->
                    <!-- .tabs3 -->
                    <div class="tab-pane" id="settings">
                        <form class="form-horizontal form-material">
                            <div class="form-group">
                                <label class="col-md-12">Full Name</label>
                                <div class="col-md-12">
                                    <input type="text" placeholder="Johnathan Doe" class="form-control form-control-line"> </div>
                            </div>
                            <div class="form-group">
                                <label for="example-email" class="col-md-12">Email</label>
                                <div class="col-md-12">
                                    <input type="email" placeholder="johnathan@admin.com" class="form-control form-control-line" name="example-email" id="example-email"> </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-12">Password</label>
                                <div class="col-md-12">
                                    <input type="password" value="password" class="form-control form-control-line"> </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-12">Phone No</label>
                                <div class="col-md-12">
                                    <input type="text" placeholder="123 456 7890" class="form-control form-control-line"> </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-12">Message</label>
                                <div class="col-md-12">
                                    <textarea rows="5" class="form-control form-control-line"></textarea>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-12">Select Country</label>
                                <div class="col-sm-12">
                                    <select class="form-control form-control-line">
                                        <option>London</option>
                                        <option>India</option>
                                        <option>Usa</option>
                                        <option>Canada</option>
                                        <option>Thailand</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-12">
                                    <button class="btn btn-success">Update Profile</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <!-- /.tabs3 -->
                </div>
            </div>
        </div>
    </div>
    <!-- /.row -->

@endsection

@push('scripts')

@endpush