@extends('layouts.console')

@push('stylesheets')
    
    <!-- chartist CSS -->
    <link href="console/plugins/chartist-js/dist/chartist.min.css" rel="stylesheet">
    <link href="console/plugins/chartist-plugin-tooltip-master/dist/chartist-plugin-tooltip.css" rel="stylesheet">
    <!-- morris CSS -->
    <link href="console/plugins/morrisjs/morris.css" rel="stylesheet">
    <!--Gauge chart CSS -->
    <link href="console/plugins/Minimal-Gauge-chart/css/cmGauge.css" rel="stylesheet" type="text/css" />

@endpush

@section('content')

	<div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">Dashboard 3</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
            <a href="#" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
            <ol class="breadcrumb">
                <li><a href="index.html">Dashboard</a></li>
                <li class="active">Dashboard 3</li>
            </ol>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- ============================================================== -->
    <!-- Other sales widgets -->
    <!-- ============================================================== -->
    <!-- .row -->
    <div class="row">
        <div class="col-lg-3 col-sm-6 col-xs-12">
            <div class="white-box">
                <h3 class="box-title">Daily Sales</h3>
                <div class="text-right"> <span class="text-muted">Todays Income</span>
                    <h1><sup><i class="ti-arrow-up text-success"></i></sup> $12,000</h1> </div> <span class="text-success">20%</span>
                <div class="progress m-b-0">
                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:20%;"> <span class="sr-only">20% Complete</span> </div>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6 col-xs-12">
            <div class="white-box">
                <h3 class="box-title">Weekly Sales</h3>
                <div class="text-right"> <span class="text-muted">Weekly Income</span>
                    <h1><sup><i class="ti-arrow-down text-danger"></i></sup> $5,000</h1> </div> <span class="text-danger">30%</span>
                <div class="progress m-b-0">
                    <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:30%;"> <span class="sr-only">230% Complete</span> </div>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6 col-xs-12">
            <div class="white-box">
                <h3 class="box-title">Monthly Sales</h3>
                <div class="text-right"> <span class="text-muted">Monthly Income</span>
                    <h1><sup><i class="ti-arrow-up text-info"></i></sup> $10,000</h1> </div> <span class="text-info">60%</span>
                <div class="progress m-b-0">
                    <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:60%;"> <span class="sr-only">20% Complete</span> </div>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6 col-xs-12">
            <div class="white-box">
                <h3 class="box-title">Yearly Sales</h3>
                <div class="text-right"> <span class="text-muted">Yearly Income</span>
                    <h1><sup><i class="ti-arrow-up text-inverse"></i></sup> $9,000</h1> </div> <span class="text-inverse">80%</span>
                <div class="progress m-b-0">
                    <div class="progress-bar progress-bar-inverse" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:80%;"> <span class="sr-only">230% Complete</span> </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /.row -->
    <!-- ============================================================== -->
    <!-- Extra-component -->
    <!-- ============================================================== -->
    <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12">
            <div class="white-box">
                <h3 class="box-title">Country visit</h3>
                <div id="usa" style="height: 365px"></div>
            </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
            <div class="white-box">
                <h3 class="box-title"><small class="pull-right m-t-10 text-success"><i class="fa fa-sort-asc"></i> 18% High then last month</small> Monthly Site Traffic</h3>
                <div class="stats-row">
                    <div class="stat-item">
                        <h6>Overall Growth</h6> <b>80.40%</b></div>
                    <div class="stat-item">
                        <h6>Montly</h6> <b>15.40%</b></div>
                    <div class="stat-item">
                        <h6>Day</h6> <b>5.50%</b></div>
                </div>
                <div id="sparkline8"></div>
            </div>
            <div class="white-box">
                <h3 class="box-title"><small class="pull-right m-t-10 text-danger"><i class="fa fa-sort-desc"></i> 18% High then last month</small>Weekly Site Traffic</h3>
                <div class="stats-row">
                    <div class="stat-item">
                        <h6>Overall Growth</h6> <b>80.40%</b></div>
                    <div class="stat-item">
                        <h6>Montly</h6> <b>15.40%</b></div>
                    <div class="stat-item">
                        <h6>Day</h6> <b>5.50%</b></div>
                </div>
                <div id="sparkline9"></div>
            </div>
        </div>
    </div>
    <!-- ============================================================== -->
    <!-- city-weather -->
    <!-- ============================================================== -->
    <div class="row">
        <div class="col-lg-4 col-md-12">
            <div class="white-box">
                <h3 class="box-title">Visit from the countries</h3>
                <ul class="country-state  p-t-20">
                    <li>
                        <h2>6350</h2> <small>From India</small>
                        <div class="pull-right">48% <i class="fa fa-level-up text-success"></i></div>
                        <div class="progress">
                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:48%;"> <span class="sr-only">48% Complete</span></div>
                        </div>
                    </li>
                    <li>
                        <h2>3250</h2> <small>From UAE</small>
                        <div class="pull-right">98% <i class="fa fa-level-up text-success"></i></div>
                        <div class="progress">
                            <div class="progress-bar progress-bar-inverse" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:98%;"> <span class="sr-only">98% Complete</span></div>
                        </div>
                    </li>
                    <li>
                        <h2>1250</h2> <small>From Australia</small>
                        <div class="pull-right">75% <i class="fa fa-level-down text-danger"></i></div>
                        <div class="progress">
                            <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:75%;"> <span class="sr-only">75% Complete</span></div>
                        </div>
                    </li>
                    <li>
                        <h2>1350</h2> <small>From USA</small>
                        <div class="pull-right">48% <i class="fa fa-level-up text-success"></i></div>
                        <div class="progress">
                            <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:48%;"> <span class="sr-only">48% Complete</span></div>
                        </div>
                    </li>
                    <li>
                        <h2>3250</h2> <small>From UAE</small>
                        <div class="pull-right">98% <i class="fa fa-level-up text-success"></i></div>
                        <div class="progress">
                            <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:98%;"> <span class="sr-only">98% Complete</span></div>
                        </div>
                    </li>
                    <li>
                        <h2>1250</h2> <small>From Australia</small>
                        <div class="pull-right">75% <i class="fa fa-level-down text-danger"></i></div>
                        <div class="progress">
                            <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:75%;"> <span class="sr-only">75% Complete</span></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-md-12 col-lg-8">
            <div class="white-box bg-extralight m-b-0">
                <div class="city-weather-widget">
                    <h1>Kufri, Himachal Pradesh</h1>
                    <h4>Friday, 19 Jan 2017</h4>
                    <div class="row p-t-30">
                        <div class="col-sm-6">
                            <ul class="side-icon-text">
                                <li><span class="di vm"><i class="wi wi-day-hail text-info"></i></span>
                                    <div class="di vm">
                                        <h1 class="m-b-0 text-info">23<sup>o</sup></h1>
                                        <h5 class="m-t-0">Mostly Sunny</h5></div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-sm-6">
                            <ul class="list-icons pull-right">
                                <li><i class="wi wi-day-sunny m-r-5"></i>Humidity 38%</li>
                                <li><i class=" wi wi-day-windy m-r-5"></i>Wind 38%</li>
                            </ul>
                        </div>
                        <div class="col-md-12">
                            <div id="ct-city-wth" style="height:220px"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="panel">
                <div class="row">
                    <ul class="list-unstyled city-weather-days">
                        <li class="col-xs-4 col-sm-2"><span>Tue</span><i class="wi wi-day-sunny"></i><span>32<sup>°F</sup></span></li>
                        <li class="col-xs-4 col-sm-2"><span>Wed</span><i class="wi wi-day-cloudy"></i><span>34<sup>°F</sup></span></li>
                        <li class="col-xs-4 col-sm-2"><span>Thu</span><i class="wi wi-day-hail"></i><span>35<sup>°F</sup></span></li>
                        <li class="col-xs-4 col-sm-2 active"><span>Fri</span><i class="wi wi-day-sprinkle"></i><span>34<sup>°F</sup></span></li>
                        <li class="col-xs-4 col-sm-2"><span>Sat</span><i class="wi wi-day-snow"></i><span>30<sup>°F</sup></span></li>
                        <li class="col-xs-4 col-sm-2"><span>Sun</span><i class="wi wi-day-sunny"></i><span>26<sup>°F</sup></span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- .row -->
    <div class="row">
        <div class="col-lg-6 col-sm-12 col-xs-12">
            <div class="row">
                <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="white-box">
                        <h3 class="box-title">NEW CLIENTS</h3>
                        <ul class="list-inline m-t-30 p-t-10 two-part">
                            <li><i class="icon-people text-info"></i></li>
                            <li class="text-right"><span class="counter">23</span></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="white-box">
                        <h3 class="box-title">NEW Projects</h3>
                        <ul class="list-inline m-t-30 p-t-10 two-part">
                            <li><i class="icon-folder text-purple"></i></li>
                            <li class="text-right"><span class="counter">169</span></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="white-box">
                        <h3 class="box-title">Open Projects</h3>
                        <ul class="list-inline m-t-30 p-t-10 two-part">
                            <li><i class="icon-folder-alt text-danger"></i></li>
                            <li class="text-right"><span class="">311</span></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="white-box">
                        <h3 class="box-title">NEW Invoices</h3>
                        <ul class="list-inline m-t-30 p-t-10 two-part">
                            <li><i class="ti-wallet text-success"></i></li>
                            <li class="text-right"><span class="">117</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-sm-12 col-xs-12">
            <div class="news-slide m-b-30 dashboard-slide">
                <div class="vcarousel slide">
                    <!-- Carousel items -->
                    <div class="carousel-inner">
                        <div class="active item">
                            <div class="overlaybg"><img src="console/images/heading-bg/slide6.jpg" alt="slide1" /></div>
                            <div class="news-content"><span class="label label-danger label-rounded">Primary</span>
                                <h2>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h2> <a href="#">Read More</a></div>
                        </div>
                        <div class="item">
                            <div class="overlaybg"><img src="console/images/heading-bg/slide4.jpg" alt="slide2" /></div>
                            <div class="news-content"><span class="label label-primary label-rounded">Primary</span>
                                <h2>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h2> <a href="#">Read More</a></div>
                        </div>
                        <div class="item">
                            <div class="overlaybg"><img src="console/images/heading-bg/slide6.jpg" alt="slide3" /></div>
                            <div class="news-content"><span class="label label-success label-rounded">Primary</span>
                                <h2>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h2> <a href="#">Read More</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /.row -->
    <!-- ============================================================== -->
    <!-- Demo table -->
    <!-- ============================================================== -->
    <div class="row">
        <div class="col-md-12">
            <div class="panel">
                <div class="panel-heading">MANAGE USERS</div>
                <div class="table-responsive">
                    <table class="table table-hover manage-u-table">
                        <thead>
                            <tr>
                                <th class="text-center" style="width: 70px">#</th>
                                <th>NAME</th>
                                <th>OCCUPATION</th>
                                <th>EMAIL</th>
                                <th>ADDED</th>
                                <th style="width: 250px">CATEGORY</th>
                                <th style="width: 300px">MANAGE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-center">1</td>
                                <td><span class="font-medium">Daniel Kristeen</span>
                                    <br/><span class="text-muted">Texas, Unitedd states</span></td>
                                <td>Visual Designer
                                    <br/><span class="text-muted">Past : teacher</span></td>
                                <td>daniel@website.com
                                    <br/><span class="text-muted">999 - 444 - 555</span></td>
                                <td>15 Mar 1988
                                    <br/><span class="text-muted">10: 55 AM</span></td>
                                <td>
                                    <select class="form-control">
                                        <option>Modulator</option>
                                        <option>Admin</option>
                                        <option>User</option>
                                        <option>Subscriber</option>
                                    </select>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="ti-key"></i></button>
                                    <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="icon-trash"></i></button>
                                    <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="ti-pencil-alt"></i></button>
                                    <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-20"><i class="ti-upload"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">2</td>
                                <td><span class="font-medium">Daniel Kristeen</span>
                                    <br/><span class="text-muted">Texas, Unitedd states</span></td>
                                <td>Visual Designer
                                    <br/><span class="text-muted">Past : teacher</span></td>
                                <td>daniel@website.com
                                    <br/><span class="text-muted">999 - 444 - 555</span></td>
                                <td>15 Mar 1988
                                    <br/><span class="text-muted">10: 55 AM</span></td>
                                <td>
                                    <select class="form-control">
                                        <option>Modulator</option>
                                        <option>Admin</option>
                                        <option>User</option>
                                        <option>Subscriber</option>
                                    </select>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="ti-key"></i></button>
                                    <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="icon-trash"></i></button>
                                    <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="ti-pencil-alt"></i></button>
                                    <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-20"><i class="ti-upload"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">3</td>
                                <td><span class="font-medium">Daniel Kristeen</span>
                                    <br/><span class="text-muted">Texas, Unitedd states</span></td>
                                <td>Visual Designer
                                    <br/><span class="text-muted">Past : teacher</span></td>
                                <td>daniel@website.com
                                    <br/><span class="text-muted">999 - 444 - 555</span></td>
                                <td>15 Mar 1988
                                    <br/><span class="text-muted">10: 55 AM</span></td>
                                <td>
                                    <select class="form-control">
                                        <option>Modulator</option>
                                        <option>Admin</option>
                                        <option>User</option>
                                        <option>Subscriber</option>
                                    </select>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="ti-key"></i></button>
                                    <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="icon-trash"></i></button>
                                    <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="ti-pencil-alt"></i></button>
                                    <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-20"><i class="ti-upload"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">4</td>
                                <td><span class="font-medium">Daniel Kristeen</span>
                                    <br/><span class="text-muted">Texas, Unitedd states</span></td>
                                <td>Visual Designer
                                    <br/><span class="text-muted">Past : teacher</span></td>
                                <td>daniel@website.com
                                    <br/><span class="text-muted">999 - 444 - 555</span></td>
                                <td>15 Mar 1988
                                    <br/><span class="text-muted">10: 55 AM</span></td>
                                <td>
                                    <select class="form-control">
                                        <option>Modulator</option>
                                        <option>Admin</option>
                                        <option>User</option>
                                        <option>Subscriber</option>
                                    </select>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="ti-key"></i></button>
                                    <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="icon-trash"></i></button>
                                    <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="ti-pencil-alt"></i></button>
                                    <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-20"><i class="ti-upload"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">5</td>
                                <td><span class="font-medium">Daniel Kristeen</span>
                                    <br/><span class="text-muted">Texas, Unitedd states</span></td>
                                <td>Visual Designer
                                    <br/><span class="text-muted">Past : teacher</span></td>
                                <td>daniel@website.com
                                    <br/><span class="text-muted">999 - 444 - 555</span></td>
                                <td>15 Mar 1988
                                    <br/><span class="text-muted">10: 55 AM</span></td>
                                <td>
                                    <select class="form-control">
                                        <option>Modulator</option>
                                        <option>Admin</option>
                                        <option>User</option>
                                        <option>Subscriber</option>
                                    </select>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="ti-key"></i></button>
                                    <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="icon-trash"></i></button>
                                    <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="ti-pencil-alt"></i></button>
                                    <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-20"><i class="ti-upload"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">6</td>
                                <td><span class="font-medium">Daniel Kristeen</span>
                                    <br/><span class="text-muted">Texas, Unitedd states</span></td>
                                <td>Visual Designer
                                    <br/><span class="text-muted">Past : teacher</span></td>
                                <td>daniel@website.com
                                    <br/><span class="text-muted">999 - 444 - 555</span></td>
                                <td>15 Mar 1988
                                    <br/><span class="text-muted">10: 55 AM</span></td>
                                <td>
                                    <select class="form-control">
                                        <option>Modulator</option>
                                        <option>Admin</option>
                                        <option>User</option>
                                        <option>Subscriber</option>
                                    </select>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="ti-key"></i></button>
                                    <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="icon-trash"></i></button>
                                    <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="ti-pencil-alt"></i></button>
                                    <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-20"><i class="ti-upload"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">7</td>
                                <td><span class="font-medium">Daniel Kristeen</span>
                                    <br/><span class="text-muted">Texas, Unitedd states</span></td>
                                <td>Visual Designer
                                    <br/><span class="text-muted">Past : teacher</span></td>
                                <td>daniel@website.com
                                    <br/><span class="text-muted">999 - 444 - 555</span></td>
                                <td>15 Mar 1988
                                    <br/><span class="text-muted">10: 55 AM</span></td>
                                <td>
                                    <select class="form-control">
                                        <option>Modulator</option>
                                        <option>Admin</option>
                                        <option>User</option>
                                        <option>Subscriber</option>
                                    </select>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="ti-key"></i></button>
                                    <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="icon-trash"></i></button>
                                    <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="ti-pencil-alt"></i></button>
                                    <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-20"><i class="ti-upload"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

@endsection

@push('scripts')

	<!--Counter js -->
    <script src="console/plugins/waypoints/lib/jquery.waypoints.js"></script>
    <script src="console/plugins/counterup/jquery.counterup.min.js"></script>
    <!-- Vector map JavaScript -->
    <script src="console/plugins/vectormap/jquery-jvectormap-2.0.2.min.js"></script>
    <script src="console/plugins/vectormap/jquery-jvectormap-world-mill-en.js"></script>
    <script src="console/plugins/vectormap/jquery-jvectormap-in-mill.js"></script>
    <script src="console/plugins/vectormap/jquery-jvectormap-us-aea-en.js"></script>
    <!-- chartist chart -->
    <script src="console/plugins/chartist-js/dist/chartist.min.js"></script>
    <script src="console/plugins/chartist-plugin-tooltip-master/dist/chartist-plugin-tooltip.min.js"></script>
    <!-- sparkline chart JavaScript -->
    <script src="console/plugins/jquery-sparkline/jquery.sparkline.min.js"></script>
    
    <script src="console/js/dashboard3.js"></script>

@endpush