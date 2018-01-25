@extends('layouts.console')

@push('stylesheets')

@endpush

@section('content')

    <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">Buttons</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
            <a href="javascript: void(0);" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">UI Elements</a></li>
                <li class="active">Buttons</li>
            </ol>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!--row -->
    <div class="row">
        <div class="col-lg-12">
            <div class="white-box">
                <h3 class="m-b-0 box-title">General Buttons </h3>
                <p class="text-muted m-b-30">Use a classes <code>btn btn-default</code>to quickly create a General btn.</p>
                <div class="row">
                    <div class="col-lg-2 col-sm-4 col-xs-12">
                        <button class="btn btn-block btn-default">Default</button>
                    </div>
                    <div class="col-lg-2 col-sm-4 col-xs-12">
                        <button class="btn btn-block btn-info">Info</button>
                    </div>
                    <div class="col-lg-2 col-sm-4 col-xs-12">
                        <button class="btn btn-block btn-primary">Primary</button>
                    </div>
                    <div class="col-lg-2 col-sm-4 col-xs-12">
                        <button class="btn btn-block btn-success">Success</button>
                    </div>
                    <div class="col-lg-2 col-sm-4 col-xs-12">
                        <button class="btn btn-block btn-danger">Danger</button>
                    </div>
                    <div class="col-lg-2 col-sm-4 col-xs-12">
                        <button class="btn btn-block btn-warning">Warning</button>
                    </div>
                </div>
                <h3 class="m-b-0 m-t-30 box-title">Rounded Buttons </h3>
                <p class="text-muted m-b-30">Use a classes <code>btn btn-default btn-rounded</code>to quickly create a Disabled btn.</p>
                <div class="row">
                    <div class="col-lg-2 col-sm-4 col-xs-12">
                        <button class="btn btn-block btn-default btn-rounded">Default</button>
                    </div>
                    <div class="col-lg-2 col-sm-4 col-xs-12">
                        <button class="btn btn-block btn-info btn-rounded">Info</button>
                    </div>
                    <div class="col-lg-2 col-sm-4 col-xs-12">
                        <button class="btn btn-block btn-primary btn-rounded">Primary</button>
                    </div>
                    <div class="col-lg-2 col-sm-4 col-xs-12">
                        <button class="btn btn-block btn-success btn-rounded">Success</button>
                    </div>
                    <div class="col-lg-2 col-sm-4 col-xs-12">
                        <button class="btn btn-block btn-danger btn-rounded">Danger</button>
                    </div>
                    <div class="col-lg-2 col-sm-4 col-xs-12">
                        <button class="btn btn-block btn-warning btn-rounded">Warning</button>
                    </div>
                </div>
                <h3 class="m-b-0 m-t-30 box-title">Disabled Buttons </h3>
                <p class="text-muted m-b-30">Use a classes <code>btn btn-default disabled</code>to quickly create a Disabled btn.</p>
                <div class="row">
                    <div class="col-lg-2 col-sm-4 col-xs-12">
                        <button class="btn btn-block btn-default disabled">Default</button>
                    </div>
                    <div class="col-lg-2 col-sm-4 col-xs-12">
                        <button class="btn btn-block btn-info disabled">Info</button>
                    </div>
                    <div class="col-lg-2 col-sm-4 col-xs-12">
                        <button class="btn btn-block btn-primary disabled">Primary</button>
                    </div>
                    <div class="col-lg-2 col-sm-4 col-xs-12">
                        <button class="btn btn-block btn-success disabled">Success</button>
                    </div>
                    <div class="col-lg-2 col-sm-4 col-xs-12">
                        <button class="btn btn-block btn-danger disabled">Danger</button>
                    </div>
                    <div class="col-lg-2 col-sm-4 col-xs-12">
                        <button class="btn btn-block btn-warning disabled">Warning</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--row -->
    <!--row -->
    <div class="row">
        <div class="col-lg-12">
            <div class="white-box">
                <h3 class="m-b-0 box-title">Outline Buttons </h3>
                <p class="text-muted m-b-30">Use a classes <code>btn btn-default btn-outline</code>to quickly create a Outline btn.</p>
                <div class="row">
                    <div class="col-lg-2 col-sm-4 col-xs-12">
                        <button class="btn btn-block btn-outline btn-default">Default</button>
                    </div>
                    <div class="col-lg-2 col-sm-4 col-xs-12">
                        <button class="btn btn-block btn-outline btn-info">Info</button>
                    </div>
                    <div class="col-lg-2 col-sm-4 col-xs-12">
                        <button class="btn btn-block btn-outline btn-primary">Primary</button>
                    </div>
                    <div class="col-lg-2 col-sm-4 col-xs-12">
                        <button class="btn btn-block btn-outline btn-success">Success</button>
                    </div>
                    <div class="col-lg-2 col-sm-4 col-xs-12">
                        <button class="btn btn-block btn-outline btn-danger">Danger</button>
                    </div>
                    <div class="col-lg-2 col-sm-4 col-xs-12">
                        <button class="btn btn-block btn-outline btn-warning">Warning</button>
                    </div>
                </div>
                <h3 class="m-b-0 m-t-30 box-title">Rounded outline Buttons </h3>
                <p class="text-muted m-b-30">Use a classes <code>btn btn-default btn-rounded</code>to quickly create a Rounded btn.</p>
                <div class="row">
                    <div class="col-lg-2 col-sm-4 col-xs-12">
                        <button class="btn btn-block btn-outline btn-rounded btn-default">Default</button>
                    </div>
                    <div class="col-lg-2 col-sm-4 col-xs-12">
                        <button class="btn btn-block btn-outline btn-rounded btn-info">Info</button>
                    </div>
                    <div class="col-lg-2 col-sm-4 col-xs-12">
                        <button class="btn btn-block btn-outline btn-rounded btn-primary">Primary</button>
                    </div>
                    <div class="col-lg-2 col-sm-4 col-xs-12">
                        <button class="btn btn-block btn-outline btn-rounded btn-success">Success</button>
                    </div>
                    <div class="col-lg-2 col-sm-4 col-xs-12">
                        <button class="btn btn-block btn-outline btn-rounded btn-danger">Danger</button>
                    </div>
                    <div class="col-lg-2 col-sm-4 col-xs-12">
                        <button class="btn btn-block btn-outline btn-rounded btn-warning">Warning</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--row -->
    <div class="row">
        <div class="col-lg-6 col-sm-6 col-xs-12">
            <div class="white-box">
                <h3 class="m-b-0 box-title">All Size button</h3>
                <p class="text-muted m-b-30">Use a class <code>btn-lg</code> <code>btn-sm</code> <code>btn-xs</code></p>
                <div class="button-box">
                    <button class="btn btn-outline btn-default btn-lg">Large button</button>
                    <button class="btn btn-outline btn-default">Default button</button>
                    <button class="btn btn-outline btn-default btn-sm">Small button</button>
                    <button class="btn btn-outline btn-default btn-xs">Mini button</button>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-sm-6 col-xs-12">
            <div class="white-box">
                <h3 class="m-b-0 box-title">Block button</h3>
                <p class="text-muted m-b-30">Use a class <code>btn-block</code></p>
                <button class="btn btn-outline btn-default btn-lg btn-block">Block button</button>
            </div>
        </div>
    </div>
    <!--row -->
    <!--row -->
    <div class="row">
        <div class="col-lg-4 col-sm-6 col-xs-12">
            <div class="white-box">
                <h3 class="m-b-0 box-title">Button with icons</h3>
                <p class="text-muted m-b-30">Just add icon in i tag and text in span thats it </p>
                <div class="button-box">
                    <button class="btn btn-outline btn-default waves-effect waves-light"> <i class="fa fa-heart m-r-5"></i> <span>Love</span></button>
                    <button class="btn btn-info waves-effect waves-light"><span>Love</span> <i class="fa fa-heart m-l-5"></i></button>
                    <button class="btn btn-success waves-effect waves-light" type="button"><span class="btn-label"><i class="fa fa-check"></i></span>Success</button>
                    <button class="btn btn-primary btn-rounded waves-effect waves-light" type="button"><span class="btn-label"><i class="fa fa-envelope-o"></i></span>Mail</button>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-xs-12">
            <div class="white-box">
                <h3 class="m-b-0 box-title">Button with Dropdown & Dropup</h3>
                <p class="text-muted m-b-30">Just add icon in i tag and text in span thats it </p>
                <div class="button-box">
                    <div class="btn-group m-r-10">
                        <button aria-expanded="false" data-toggle="dropdown" class="btn btn-info dropdown-toggle waves-effect waves-light" type="button">Dropdown <span class="caret"></span></button>
                        <ul role="menu" class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </div>
                    <div class="btn-group dropup m-r-10">
                        <button aria-expanded="false" data-toggle="dropdown" class="btn btn-danger dropdown-toggle waves-effect waves-light" type="button">Dropdown <span class="caret"></span></button>
                        <ul role="menu" class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </div>
                    <div class="btn-group m-r-10">
                        <button aria-expanded="false" data-toggle="dropdown" class="btn btn-default btn-outline dropdown-toggle waves-effect waves-light" type="button"> <i class="fa fa-heart m-r-5"></i> <span class="caret"></span></button>
                        <ul role="menu" class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </div>
                    <div class="btn-group dropup">
                        <button aria-expanded="false" data-toggle="dropdown" class="btn btn-warning dropdown-toggle waves-effect waves-light" type="button"><i class="fa fa-heart m-r-5"></i> <span class="caret"></span></button>
                        <ul role="menu" class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-xs-12">
            <div class="white-box">
                <h3 class="m-b-0 box-title">Upload Buttons</h3>
                <p class="text-muted m-b-30">Just add icon in i tag and text in span thats it </p>
                <div class="button-box">
                    <div class="fileupload btn btn-info waves-effect waves-light"><span><i class="ion-upload m-r-5"></i>Upload</span>
                        <input type="file" class="upload"> </div>
                    <div class="fileupload btn btn-danger btn-rounded waves-effect waves-light"><span><i class="ion-upload m-r-5"></i>Upload</span>
                        <input type="file" class="upload"> </div>
                    <div class="fileupload btn btn-default btn-outline btn-rounded waves-effect waves-light"><span><i class="ion-upload m-r-5"></i>Upload</span>
                        <input type="file" class="upload"> </div>
                    <div class="fileupload btn btn-default btn-outline waves-effect waves-light"><span><i class="ion-upload m-r-5"></i>Upload</span>
                        <input type="file" class="upload"> </div>
                </div>
            </div>
        </div>
    </div>
    <!--row -->
    <div class="row">
        <div class="col-lg-6 col-sm-6 col-xs-12">
            <div class="white-box">
                <h3 class="box-title">Normal Circle Buttons</h3>
                <button type="button" class="btn btn-default btn-circle"><i class="fa fa-check"></i> </button>
                <button type="button" class="btn btn-primary btn-circle"><i class="fa fa-list"></i> </button>
                <button type="button" class="btn btn-success btn-circle"><i class="fa fa-link"></i> </button>
                <button type="button" class="btn btn-info btn-circle"><i class="fa fa-check"></i> </button>
                <button type="button" class="btn btn-warning btn-circle"><i class="fa fa-times"></i> </button>
                <button type="button" class="btn btn-danger btn-circle"><i class="fa fa-heart"></i> </button>
                <br>
                <br>
                <h3 class="box-title">Large Circle Buttons</h3>
                <button type="button" class="btn btn-default btn-circle btn-lg"><i class="fa fa-check"></i> </button>
                <button type="button" class="btn btn-primary btn-circle btn-lg"><i class="fa fa-list"></i> </button>
                <button type="button" class="btn btn-success btn-circle btn-lg"><i class="fa fa-link"></i> </button>
                <button type="button" class="btn btn-info btn-circle btn-lg"><i class="fa fa-check"></i> </button>
                <button type="button" class="btn btn-warning btn-circle btn-lg"><i class="fa fa-times"></i> </button>
                <button type="button" class="btn btn-danger btn-circle btn-lg"><i class="fa fa-heart"></i> </button>
                <br>
                <br>
                <h3 class="box-title">Extra Large Circle Buttons</h3>
                <button type="button" class="btn btn-default btn-circle btn-xl"><i class="fa fa-check"></i> </button>
                <button type="button" class="btn btn-primary btn-circle btn-xl"><i class="fa fa-list"></i> </button>
                <button type="button" class="btn btn-success btn-circle btn-xl"><i class="fa fa-link"></i> </button>
                <button type="button" class="btn btn-info btn-circle btn-xl"><i class="fa fa-check"></i> </button>
                <button type="button" class="btn btn-warning btn-circle btn-xl"><i class="fa fa-times"></i> </button>
                <button type="button" class="btn btn-danger btn-circle btn-xl"><i class="fa fa-heart"></i> </button>
            </div>
        </div>
        <div class="col-lg-6 col-sm-6 col-xs-12">
            <div class="white-box">
                <h3 class="box-title">Social Buttons <code class="font-12">btn btn-facebook</code></h3>
                <div class="button-box">
                    <div class="button-list">
                        <button class="btn btn-facebook waves-effect waves-light" type="button"> <i class="fa fa-facebook"></i> </button>
                        <button class="btn btn-twitter waves-effect waves-light" type="button"> <i class="fa fa-twitter"></i> </button>
                        <button class="btn btn-googleplus waves-effect waves-light" type="button"> <i class="fa fa-google-plus"></i> </button>
                        <button class="btn btn-linkedin waves-effect waves-light" type="button"> <i class="fa fa-linkedin"></i> </button>
                        <button class="btn btn-instagram waves-effect waves-light" type="button"> <i class="fa fa-instagram"></i> </button>
                        <button class="btn btn-pinterest waves-effect waves-light" type="button"> <i class="fa fa-pinterest"></i> </button>
                        <button class="btn btn-dribbble waves-effect waves-light" type="button"> <i class="fa fa-dribbble"></i> </button>
                        <button class="btn btn-youtube waves-effect waves-light" type="button"> <i class="fa fa-youtube"></i> </button>
                        <h3 class="m-t-20">With Circle <code class="font-12">btn btn-facebook btn-circle</code></h3>
                        <button class="btn btn-facebook waves-effect btn-circle waves-light" type="button"> <i class="fa fa-facebook"></i> </button>
                        <button class="btn btn-twitter waves-effect btn-circle waves-light" type="button"> <i class="fa fa-twitter"></i> </button>
                        <button class="btn btn-googleplus waves-effect btn-circle waves-light" type="button"> <i class="fa fa-google-plus"></i> </button>
                        <button class="btn btn-linkedin waves-effect btn-circle waves-light" type="button"> <i class="fa fa-linkedin"></i> </button>
                        <button class="btn btn-instagram waves-effect btn-circle waves-light" type="button"> <i class="fa fa-instagram"></i> </button>
                        <button class="btn btn-pinterest waves-effect btn-circle waves-light" type="button"> <i class="fa fa-pinterest"></i> </button>
                        <button class="btn btn-dribbble waves-effect btn-circle waves-light" type="button"> <i class="fa fa-dribbble"></i> </button>
                        <button class="btn btn-youtube waves-effect btn-circle waves-light" type="button"> <i class="fa fa-youtube"></i> </button>
                        <h3 class="m-t-20">With Rounded <code class="font-12">btn btn-facebook btn-rounded</code></h3>
                        <button class="btn btn-facebook waves-effect btn-rounded waves-light" type="button"> <i class="fa fa-facebook"></i> </button>
                        <button class="btn btn-twitter waves-effect btn-rounded waves-light" type="button"> <i class="fa fa-twitter"></i> </button>
                        <button class="btn btn-googleplus waves-effect btn-rounded waves-light" type="button"> <i class="fa fa-google-plus"></i> </button>
                        <button class="btn btn-linkedin waves-effect btn-rounded waves-light" type="button"> <i class="fa fa-linkedin"></i> </button>
                        <button class="btn btn-instagram waves-effect btn-rounded waves-light" type="button"> <i class="fa fa-instagram"></i> </button>
                        <button class="btn btn-pinterest waves-effect btn-rounded waves-light" type="button"> <i class="fa fa-pinterest"></i> </button>
                        <button class="btn btn-dribbble waves-effect btn-rounded waves-light" type="button"> <i class="fa fa-dribbble"></i> </button>
                        <button class="btn btn-youtube waves-effect btn-rounded waves-light" type="button"> <i class="fa fa-youtube"></i> </button>
                        <p class="m-b-20"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--row -->
    <!--row -->
    <div class="row">
        <div class="col-lg-6 col-sm-12">
            <div class="white-box">
                <h3 class="box-title">Stylish1 btn</h3>
                <div class="button-box">
                    <p class="text-muted m-b-30">Give class to the button <code>fcbtn btn btn-outline btn-primary btn-1b</code></p>
                    <button class="fcbtn btn btn-primary btn-outline btn-1b">Button</button>
                    <button class="fcbtn btn btn-info btn-outline btn-1b">Button</button>
                    <button class="fcbtn btn btn-warning btn-outline btn-1b">Button</button>
                    <button class="fcbtn btn btn-danger btn-outline btn-1b">Button</button>
                    <button class="fcbtn btn btn-success btn-outline btn-1b">Button</button>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-sm-12">
            <div class="white-box">
                <h3 class="box-title">Stylish2 btn</h3>
                <p class="text-muted m-b-30">Give class to the button <code>fcbtn btn btn-outline btn-primary btn-1c</code></p>
                <div class="button-box">
                    <button class="fcbtn btn btn-primary btn-outline btn-1c">Button</button>
                    <button class="fcbtn btn btn-info btn-outline btn-1c">Button</button>
                    <button class="fcbtn btn btn-warning btn-outline btn-1c">Button</button>
                    <button class="fcbtn btn btn-danger btn-outline btn-1c">Button</button>
                    <button class="fcbtn btn btn-success btn-outline btn-1c">Button</button>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-sm-12">
            <div class="white-box">
                <h3 class="box-title">Stylish3 btn</h3>
                <div class="button-box">
                    <p class="text-muted m-b-30">Give class to the button <code>fcbtn btn btn-outline btn-primary btn-1d</code></p>
                    <button class="fcbtn btn btn-primary btn-outline btn-1d">Button</button>
                    <button class="fcbtn btn btn-info btn-outline btn-1d">Button</button>
                    <button class="fcbtn btn btn-warning btn-outline btn-1d">Button</button>
                    <button class="fcbtn btn btn-danger btn-outline btn-1d">Button</button>
                    <button class="fcbtn btn btn-success btn-outline btn-1d">Button</button>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-sm-12">
            <div class="white-box">
                <h3 class="box-title">Stylish4 btn</h3>
                <div class="button-box">
                    <p class="text-muted m-b-30">Give class to the button <code>fcbtn btn btn-outline btn-primary btn-1e</code></p>
                    <button class="fcbtn btn btn-primary btn-outline btn-1e">Button</button>
                    <button class="fcbtn btn btn-info btn-outline btn-1e">Button</button>
                    <button class="fcbtn btn btn-warning btn-outline btn-1e">Button</button>
                    <button class="fcbtn btn btn-danger btn-outline btn-1e">Button</button>
                    <button class="fcbtn btn btn-success btn-outline btn-1e">Button</button>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-sm-6 col-xs-12">
            <div class="white-box">
                <h3 class="box-title">Group Button</h3>
                <div class="btn-group m-b-20">
                    <button type="button" class="btn btn-default btn-outline waves-effect">Left</button>
                    <button type="button" class="btn btn-default btn-outline waves-effect">Middle</button>
                    <button type="button" class="btn btn-default btn-outline waves-effect">Right</button>
                </div>
                <br/>
                <div class="btn-group btn-group-vertical m-b-20">
                    <button class="btn btn-default btn-outline waves-effect waves-light">Left</button>
                    <button class="btn btn-default btn-outline waves-effect waves-light">Middle</button>
                    <button class="btn btn-default btn-outline waves-effect waves-light">Right</button>
                </div>
                <div class="btn-group btn-group-justified m-b-20"> <a class="btn btn-default btn-outline waves-effect waves-light" role="button">Left</a> <a class="btn btn-default btn-outline waves-effect waves-light" role="button">Middle</a> <a class="btn btn-default btn-outline waves-effect waves-light" role="button">Right</a></div>
                <div class="btn-group">
                    <button type="button" class="btn btn-default btn-outline waves-effect">1</button>
                    <button type="button" class="btn btn-info waves-effect">2</button>
                    <button type="button" class="btn btn-default btn-outline waves-effect">3</button>
                    <button type="button" class="btn btn-default btn-outline waves-effect">4</button>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-sm-6">
            <div class="white-box">
                <div class="button-box">
                    <h3 class="box-title">Animated dropdown</h3>
                    <div class="btn-group m-r-10">
                        <button aria-expanded="false" data-toggle="dropdown" class="btn btn-info dropdown-toggle waves-effect waves-light" type="button">Flipinx <span class="caret"></span></button>
                        <ul role="menu" class="dropdown-menu animated flipInX">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </div>
                    <div class="btn-group dropdown m-r-10">
                        <button aria-expanded="false" data-toggle="dropdown" class="btn btn-danger dropdown-toggle waves-effect waves-light" type="button">Flipiny <span class="caret"></span></button>
                        <ul role="menu" class="dropdown-menu animated flipInY">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </div>
                    <div class="btn-group m-r-10">
                        <button aria-expanded="false" data-toggle="dropdown" class="btn btn-default btn-outline dropdown-toggle waves-effect waves-light" type="button"> LightSpeedIn <span class="caret"></span></button>
                        <ul role="menu" class="dropdown-menu animated lightSpeedIn">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </div>
                    <div class="btn-group dropdown">
                        <button aria-expanded="false" data-toggle="dropdown" class="btn btn-warning dropdown-toggle waves-effect waves-light" type="button">Slideinup <span class="caret"></span></button>
                        <ul role="menu" class="dropdown-menu animated slideInUp">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Stylish4 btn</h3>
                <div class="button-box">
                    <p class="text-muted m-b-30">Give class to the button <code>fcbtn btn btn-outline btn-primary btn-1f</code></p>
                    <button class="fcbtn btn btn-primary btn-outline btn-1f">Button</button>
                    <button class="fcbtn btn btn-info btn-outline btn-1f">Button</button>
                    <button class="fcbtn btn btn-warning btn-outline btn-1f">Button</button>
                    <button class="fcbtn btn btn-danger btn-outline btn-1f">Button</button>
                    <button class="fcbtn btn btn-success btn-outline btn-1f">Button</button>
                </div>
            </div>
        </div>
    </div>

@endsection

@push('scripts')

@endpush