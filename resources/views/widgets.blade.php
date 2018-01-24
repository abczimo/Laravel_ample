@extends('layouts.console')

@push('stylesheets')

    <!-- chartist CSS -->
    <link href="console/plugins/chartist-js/dist/chartist.min.css" rel="stylesheet">
    <link href="console/plugins/chartist-plugin-tooltip-master/dist/chartist-plugin-tooltip.css" rel="stylesheet">
    <!--Owl carousel CSS -->
    <link href="console/plugins/owl.carousel/owl.carousel.min.css" rel="stylesheet" type="text/css" />
    <link href="console/plugins/owl.carousel/owl.theme.default.css" rel="stylesheet" type="text/css" />
    <!--Gauge chart CSS -->
    <link href="console/plugins/Minimal-Gauge-chart/css/cmGauge.css" rel="stylesheet" type="text/css" />
    <!-- morris CSS -->
    <link href="console/plugins/morrisjs/morris.css" rel="stylesheet">
    <link href="console/plugins/css-chart/css-chart.css" rel="stylesheet">

@endpush

@section('content')

    <div class="row bg-title">
                    <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                        <h4 class="page-title">Widgets Page</h4> </div>
                    <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                        <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
                        <a href="#" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
                        <ol class="breadcrumb">
                            <li><a href="#">Widgets</a></li>
                            <li class="active">All widgets</li>
                        </ol>
                    </div>
                    <!-- /.col-lg-12 -->
                </div>
                <!-- ============================================================== -->
                <!-- Sales, finance & Expance widgets -->
                <!-- ============================================================== -->
                <!-- .row -->
                <div class="row">
                    <!-- col-md-3 -->
                    <div class="col-md-6 col-lg-5 col-sm-12">
                        <div class="white-box">
                            <h3 class="box-title">Sales</h3>
                            <div id="morris-donut-chart" style="height:318px; padding-top: 50px;"></div>
                            <div class="row p-t-30">
                                <div class="col-xs-8 p-t-30">
                                    <h3 class="font-medium">TOTAL SALES</h3>
                                    <h5 class="text-muted m-t-0">160 sales monthly</h5></div>
                                <div class="col-xs-4 p-t-30">
                                    <div class="circle-md pull-right circle bg-info"><i class="ti-shopping-cart"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- col-md-3 -->
                    <div class="col-md-6 col-lg-7 col-sm-12">
                        <div class="white-box bg-extralight m-b-0">
                            <h3 class="box-title">Expence</h3>
                            <div class="demo-container" style="height:140px;">
                                <div id="placeholder" class="demo-placeholder"></div>
                            </div>
                        </div>
                        <div class="white-box p-b-0">
                            <div class="row">
                                <div class="col-xs-8">
                                    <h2 class="font-medium m-t-0">$458.50</h2>
                                    <h5 class="text-muted m-t-0">Expence for December 1 to 10</h5></div>
                                <div class="col-xs-4">
                                    <div class="circle-md pull-right circle bg-info"><i class="ti-plus"></i></div>
                                </div>
                            </div>
                            <div class="row m-t-30 minus-margin">
                                <div class="col-sm-12 col-sm-6 b-t b-r">
                                    <ul class="expense-box">
                                        <li><i class="ti-headphone-alt text-info"></i><span><h2>$250</h2><h4>Entertainment</h4></span></li>
                                    </ul>
                                </div>
                                <div class="col-sm-12 col-sm-6  b-t">
                                    <ul class="expense-box">
                                        <li><i class="ti-home text-info"></i><span><h2>$60.50</h2><h4>House Rent</h4></span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row minus-margin">
                                <div class="col-sm-12 col-sm-6  b-t b-r">
                                    <ul class="expense-box">
                                        <li><i class="fa fa-paper-plane-o text-info"></i><span><h2>$28</h2><h4>Travel</h4></span></li>
                                    </ul>
                                </div>
                                <div class="col-sm-12 col-sm-6  b-t">
                                    <ul class="expense-box">
                                        <li><i class="ti-shopping-cart text-info"></i><span><h2>$70</h2><h4>Shopping</h4></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.row -->
                <!-- ============================================================== -->
                <!-- finance & Expance widgets -->
                <!-- ============================================================== -->
                <div class="row">
                    <div class="col-md-12 col-lg-8 col-sm-12">
                        <div class="calendar-widget m-b-30">
                            <div class="cal-left">
                                <h1>23</h1>
                                <h4>Thursday</h4> <span></span>
                                <h5>March 2017</h5>
                                <div class="cal-btm-text"> <a href="">3 TASKS</a>
                                    <h5>Prepare project</h5> </div>
                            </div>
                            <div class="cal-right bg-extralight">
                                <table class="cal-table">
                                    <tbody>
                                        <tr>
                                            <td colspan="5">
                                                <h1>March</h1></td>
                                            <td></td>
                                            <td><a href="" class="cal-add"><i class="ti-plus"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td>SUN</td>
                                            <td>MON</td>
                                            <td>TUE</td>
                                            <td>WED</td>
                                            <td>THU</td>
                                            <td>FRI</td>
                                            <td>SAT</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>8</td>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>
                                            <td>13</td>
                                        </tr>
                                        <tr>
                                            <td>14</td>
                                            <td>15</td>
                                            <td>16</td>
                                            <td>17</td>
                                            <td>18</td>
                                            <td>19</td>
                                            <td>20</td>
                                        </tr>
                                        <tr>
                                            <td>21</td>
                                            <td>22</td>
                                            <td class="cal-active">23</td>
                                            <td>24</td>
                                            <td>25</td>
                                            <td>26</td>
                                            <td>27</td>
                                        </tr>
                                        <tr>
                                            <td>28</td>
                                            <td>29</td>
                                            <td>30</td>
                                            <td>31</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td colspan="7"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-4 col-sm-12">
                        <div class="white-box">
                            <h3 class="box-title">Finance</h3>
                            <div id="diagram"></div>
                            <div class="get">
                                <div class="arc"> <span class="text">Aug</span>
                                    <input type="hidden" class="percent" value="95" />
                                    <input type="hidden" class="color" value="#53e69d" /> </div>
                                <div class="arc"> <span class="text">Sep</span>
                                    <input type="hidden" class="percent" value="90" />
                                    <input type="hidden" class="color" value="#ff7676" /> </div>
                                <div class="arc"> <span class="text">Oct</span>
                                    <input type="hidden" class="percent" value="80" />
                                    <input type="hidden" class="color" value="#88B8E6" /> </div>
                                <div class="arc"> <span class="text">Nov</span>
                                    <input type="hidden" class="percent" value="53" />
                                    <input type="hidden" class="color" value="#BEDBE9" /> </div>
                                <div class="arc"> <span class="text">Dec</span>
                                    <input type="hidden" class="percent" value="45" />
                                    <input type="hidden" class="color" value="#EDEBEE" /> </div>
                            </div>
                            <div class="row p-t-30">
                                <div class="col-xs-8">
                                    <h1 class="font-medium m-t-0">56%</h1>
                                    <h5 class="text-muted m-t-0">increase in November</h5></div>
                                <div class="col-xs-4">
                                    <div class="circle-md pull-right circle bg-success"><i class="ti-stats-up"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ============================================================== -->
                <!-- wallet, & manage users widgets -->
                <!-- ============================================================== -->
                <!-- .row -->
                <div class="row">
                    <!-- col-md-9 -->
                    <div class="col-md-12 col-lg-12">
                        <div class="manage-users">
                            <div class="sttabs tabs-style-iconbox">
                                <nav>
                                    <ul>
                                        <li><a href="#section-iconbox-1" class="sticon ti-user"><span>Select Users</span></a></li>
                                        <li><a href="#section-iconbox-2" class="sticon ti-lock"><span>Set Permissions</span></a></li>
                                        <li><a href="#section-iconbox-3" class="sticon ti-receipt"><span>Message Users</span></a></li>
                                        <li><a href="#section-iconbox-4" class="sticon ti-check-box"><span>Save and finish</span></a></li>
                                    </ul>
                                </nav>
                                <div class="content-wrap">
                                    <section id="section-iconbox-1">
                                        <div class="p-20 row">
                                            <div class="col-sm-6">
                                                <h3 class="m-t-0">Select Users to Manage</h3></div>
                                            <div class="col-sm-6">
                                                <ul class="side-icon-text pull-right">
                                                    <li><a href="#"><span class="circle circle-sm bg-success di"><i class="ti-plus"></i></span><span>Add Users</span></a></li>
                                                    <li><a href="#"><span class="circle circle-sm bg-danger di"><i class="ti-pencil-alt"></i></span><span>Edit</span></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="table-responsive manage-table">
                                            <table class="table" cellspacing="14">
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th></th>
                                                        <th></th>
                                                        <th>NAME</th>
                                                        <th>POSITION</th>
                                                        <th>JOINED</th>
                                                        <th>LOCATION</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr class="advance-table-row active">
                                                        <td width="10"></td>
                                                        <td width="40">
                                                            <div class="checkbox checkbox-circle checkbox-info">
                                                                <input id="checkbox7" checked="" type="checkbox">
                                                                <label for="checkbox7"> </label>
                                                            </div>
                                                        </td>
                                                        <td width="60"><img src="console/images/users/varun.jpg" class="img-circle" width="30" /></td>
                                                        <td>Andrew Simons</td>
                                                        <td>Modulator</td>
                                                        <td>6 May 2016</td>
                                                        <td>Gujrat, India</td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="7" class="sm-pd"></td>
                                                    </tr>
                                                    <tr class="advance-table-row">
                                                        <td></td>
                                                        <td>
                                                            <div class="checkbox checkbox-circle checkbox-info">
                                                                <input id="checkbox7" type="checkbox">
                                                                <label for="checkbox7"> </label>
                                                            </div>
                                                        </td>
                                                        <td><img src="console/images/users/genu.jpg" class="img-circle" width="30" /></td>
                                                        <td>Hanna Gover</td>
                                                        <td>Admin</td>
                                                        <td>13 Jan 2005</td>
                                                        <td>Texas, United states</td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="7" class="sm-pd"></td>
                                                    </tr>
                                                    <tr class="advance-table-row">
                                                        <td></td>
                                                        <td>
                                                            <div class="checkbox checkbox-circle checkbox-info">
                                                                <input id="checkbox7" type="checkbox">
                                                                <label for="checkbox7"> </label>
                                                            </div>
                                                        </td>
                                                        <td><img src="console/images/users/sonu.jpg" class="img-circle" width="30" /></td>
                                                        <td>Joshi Nirav</td>
                                                        <td>Admin</td>
                                                        <td>21 Mar 2001</td>
                                                        <td>Bhavnagar, India</td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="7" class="sm-pd"></td>
                                                    </tr>
                                                    <tr class="advance-table-row">
                                                        <td></td>
                                                        <td>
                                                            <div class="checkbox checkbox-circle checkbox-info">
                                                                <input id="checkbox7" type="checkbox">
                                                                <label for="checkbox7"> </label>
                                                            </div>
                                                        </td>
                                                        <td><img src="console/images/users/pawandeep.jpg" class="img-circle" width="30" /></td>
                                                        <td>Joshi Sunil</td>
                                                        <td>Admin</td>
                                                        <td>21 Mar 2004</td>
                                                        <td>Gujarat, India</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="p-10 row">
                                            <div class="col-sm-8">
                                                <h3>1 members selected</h3></div>
                                            <div class="col-sm-2 pull-right m-t-10"><a href="javascript:void(0);" class="btn btn-block p-10 btn-rounded btn-danger"><span>Next</span><i class="ti-arrow-right m-l-5"></i></a></div>
                                        </div>
                                    </section>
                                    <section id="section-iconbox-2">
                                        <h2>Tabbing 2</h2></section>
                                    <section id="section-iconbox-3">
                                        <h2>Tabbing 3</h2></section>
                                    <section id="section-iconbox-4">
                                        <h2>Tabbing 4</h2></section>
                                </div>
                                <!-- /content -->
                            </div>
                            <!-- /tabs -->
                        </div>
                    </div>
                    <!-- /col-md-9 -->
                </div>
                <!-- /.row -->
                <!-- ============================================================== -->
                <!-- Sales, weather & calander widgets -->
                <!-- ============================================================== -->
                <!-- .row -->
                <div class="row">
                    <div class="col-md-12 col-lg-8 col-sm-12">
                        <div class="row">
                            <div class="col-md-6 col-sm-6 col-lg-6">
                                <div class="bg-danger">
                                    <div id="ct-sales" class="p-t-30" style="height: 360px"></div>
                                </div>
                                <div class="white-box">
                                    <div class="row">
                                        <div class="col-xs-8">
                                            <h2 class="m-b-0 font-medium">$354.50</h2>
                                            <h5 class="text-muted m-t-0">160 Sales</h5></div>
                                        <div class="col-xs-4">
                                            <div class="circle circle-md bg-info pull-right m-t-10"><i class="ti-shopping-cart"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-6 col-lg-6">
                                <div class="bg-theme white-box m-b-0">
                                    <ul class="expense-box">
                                        <li><i class="wi wi-day-cloudy text-white"></i><span><h1 class="text-white m-b-0">25<sup>o</sup></h1><h4 class="text-white">Sunny day</h4></span></li>
                                    </ul>
                                    <div id="ct-weather" style="height: 180px"></div>
                                    <ul class="dp-table text-white">
                                        <li>05 AM</li>
                                        <li>10 AM</li>
                                        <li>03 PM</li>
                                        <li>08 PM</li>
                                    </ul>
                                </div>
                                <div class="white-box">
                                    <div class="row">
                                        <div class="col-xs-8">
                                            <h2 class="m-b-0 font-medium">Sunday</h2>
                                            <h5 class="text-muted m-t-0">March 2017</h5></div>
                                        <div class="col-xs-4">
                                            <div class="circle circle-md bg-success pull-right m-t-10"><i class="wi wi-day-sunny"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /col-md-3 -->
                            <div class="col-md-12 col-lg-12 col-sm-12">
                                <div class="white-box">
                                    <div class="row">
                                        <div class="col-xs-4">
                                            <h2 class="m-b-0 font-medium">$354.50</h2>
                                            <h5 class="text-muted m-t-0">160 Sales</h5></div>
                                        <div class="col-xs-8">
                                            <div id="ct-main-bal" style="height: 70px"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- col-md-3 -->
                    <div class="col-md-12 col-lg-4 col-sm-12">
                        <div class="panel wallet-widgets">
                            <div class="panel-body">
                                <ul class="side-icon-text">
                                    <li><a href="#"><span class="circle circle-md bg-success di vm"><i class="ti-plus"></i></span><span class="di vm"><h1 class="m-b-0">$458.50</h1><h5 class="m-t-0">Your wallet Banalce</h5></span></a></li>
                                </ul>
                            </div>
                            <div id="morris-area-chart2" style="height:230px"></div>
                            <ul class="wallet-list">
                                <li><i class="icon-wallet"></i><a href="javascript:void(0)">Withdrow money</a></li>
                                <li><i class="icon-handbag"></i><a href="javascript:void(0)">Shop Now</a></li>
                                <li><i class="ti-archive"></i><a href="javascript:void(0)">Add funds</a></li>
                                <li><i class=" ti-wallet"></i><a href="javascript:void(0)">Withdrow money</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- /.row -->
                <!-- ============================================================== -->
                <!-- Sales different chart widgets -->
                <!-- ============================================================== -->
                <!-- .row -->
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-lg-6">
                        <div class="white-box">
                            <div class="row">
                                <div class="col-xs-6">
                                    <h2 class="m-b-0 font-medium">$354.50</h2>
                                    <h5 class="text-muted m-t-0">160 Sales</h5></div>
                                <div class="col-xs-6">
                                    <div id="ct-bar-chart" class="pull-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 col-sm-12 col-lg-6">
                        <div class="white-box">
                            <div class="row">
                                <div class="col-xs-6">
                                    <h2 class="m-b-0 font-medium">$354.50</h2>
                                    <h5 class="text-muted m-t-0">160 Sales</h5></div>
                                <div class="col-xs-6">
                                    <div id="ct-extra" style="height: 70px" class="pull-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.row -->
                <!-- ============================================================== -->
                <!-- Realtime & visit widgets -->
                <!-- ============================================================== -->
                <!-- .row -->
                <div class="row">
                    <div class="col-md-6 col-lg-5 col-sm-12">
                        <div class="white-box real-time-widgets">
                            <div data-label="" class="css-bar m-t-30 css-bar-25 css-bar-xxl css-bar-success"></div>
                            <div class="data-text">
                                <h1>25</h1>
                                <h5>Visitor</h5><span>REALTIME</span></div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-7">
                        <div class="white-box">
                            <h3 class="box-title">Todays visit</h3>
                            <ul class="list-inline">
                                <li>
                                    <h5><i class="fa fa-circle m-r-5" style="color: #2cabe3;"></i>Returning Visitor</h5> </li>
                                <li>
                                    <h5><i class="fa fa-circle m-r-5" style="color: #ff7676;"></i>New visits</h5> </li>
                            </ul>
                            <div id="ct-visits" style="height: 220px;"></div>
                        </div>
                    </div>
                </div>
                <!-- /.row -->
                <!-- ============================================================== -->
                <!-- Profile, & inbox widgets -->
                <!-- ============================================================== -->
                <!-- .row -->
                <div class="row">
                    <div class="col-md-6 col-sm-12 col-lg-4">
                        <div class="panel">
                            <div class="p-30">
                                <div class="row">
                                    <div class="col-xs-4"><img src="console/images/users/varun.jpg" alt="varun" class="img-circle img-responsive"></div>
                                    <div class="col-xs-8">
                                        <h2 class="m-b-0">Daniel Kristeen</h2>
                                        <h4>UIUX Designer</h4><a href="javascript:void(0)" class="btn btn-rounded btn-success"><i class="ti-plus m-r-5"></i> FOLLOW</a></div>
                                </div>
                                <div class="row text-center m-t-30">
                                    <div class="col-xs-4 b-r">
                                        <h2>14</h2>
                                        <h4>PHOTOS</h4></div>
                                    <div class="col-xs-4 b-r">
                                        <h2>54</h2>
                                        <h4>VIDEOS</h4></div>
                                    <div class="col-xs-4">
                                        <h2>145</h2>
                                        <h4>TASKS</h4></div>
                                </div>
                            </div>
                            <hr class="m-t-10" />
                            <div class="p-20 text-center">
                                <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore sert adg</p>
                                <hr>
                                <h4 class="m-t-30 font-medium">Followers</h4>
                                <ul class="dp-table m-t-30">
                                    <li><img src="console/images/users/varun.jpg" alt="varun" width="60" data-toggle="tooltip" title="Varun Dhavan" class="img-circle"></li>
                                    <li><img src="console/images/users/genu.jpg" alt="varun" width="60" data-toggle="tooltip" title="Varun Dhavan" class="img-circle"></li>
                                    <li><img src="console/images/users/pawandeep.jpg" alt="varun" width="60" data-toggle="tooltip" title="Varun Dhavan" class="img-circle"></li>
                                    <li><a href="" class="circle circle-md bg-info di" data-toggle="tooltip" title="More">5+</a></li>
                                </ul>
                            </div>
                            <hr>
                            <ul class="dp-table profile-social-icons">
                                <li><a href="javascript:void(0)"><i class="fa fa-globe"></i></a></li>
                                <li><a href="javascript:void(0)"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="javascript:void(0)"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="javascript:void(0)"><i class="fa fa-youtube"></i></a></li>
                                <li><a href="javascript:void(0)"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-8 col-sm-12">
                        <div class="white-box bg-info m-b-0 p-b-0 mailbox-widget">
                            <h2 class="text-white p-b-20">Your Mailbox</h2>
                            <ul class="nav customtab nav-tabs" role="tablist">
                                <li role="presentation" class="active"><a href="#home1" aria-controls="home" role="tab" data-toggle="tab" aria-expanded="true"><span class="visible-xs"><i class="ti-email"></i></span><span class="hidden-xs"> INBOX</span></a></li>
                                <li role="presentation" class=""><a href="#profile1" aria-controls="profile" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-export"></i></span> <span class="hidden-xs">SENT</span></a></li>
                                <li role="presentation" class=""><a href="#messages1" aria-controls="messages" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-panel"></i></span> <span class="hidden-xs">SPAM</span></a></li>
                                <li role="presentation" class=""><a href="#settings1" aria-controls="settings" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-trash"></i></span> <span class="hidden-xs">DELETED</span></a></li>
                            </ul>
                        </div>
                        <div class="white-box p-0">
                            <div class="tab-content m-t-0">
                                <div role="tabpanel" class="tab-pane fade active in" id="home1">
                                    <div class="p-30">
                                        <ul class="side-icon-text pull-right">
                                            <li><a href="#"><span class="circle circle-sm bg-success di"><i class="ti-plus"></i></span><span>Compose</span></a></li>
                                            <li><a href="#"><span class="circle circle-sm bg-danger di"><i class="ti-trash"></i></span><span>Delete</span></a></li>
                                        </ul>
                                        <h3><i class="ti-email"></i>  350 Unread emails</h3> </div>
                                    <div class="inbox-center table-responsive">
                                        <table class="table  table-hover">
                                            <tbody>
                                                <tr class="unread">
                                                    <td>&nbsp;</td>
                                                    <td width="50">
                                                        <div class="checkbox checkbox-info m-t-0 m-b-0">
                                                            <input type="checkbox">
                                                            <label for="checkbox0"></label>
                                                        </div>
                                                    </td>
                                                    <td class="hidden-xs" width="50"><i class="fa fa-star-o"></i></td>
                                                    <td class="hidden-xs">Hritik Roshan</td>
                                                    <td class="max-texts"> <a href="inbox-detail.html"><span class="label label-info m-r-10">Work</span> Lorem ipsum perspiciatis unde omnis iste</a></td>
                                                    <td class="hidden-xs"><i class="fa fa-paperclip"></i></td>
                                                    <td class="text-right"> 12:30 PM </td>
                                                    <td>&nbsp;</td>
                                                </tr>
                                                <tr class="unread">
                                                    <td>&nbsp;</td>
                                                    <td>
                                                        <div class="checkbox checkbox-info m-t-0 m-b-0">
                                                            <input type="checkbox">
                                                            <label for="checkbox0"></label>
                                                        </div>
                                                    </td>
                                                    <td class="hidden-xs"><i class="fa fa-star text-warning"></i></td>
                                                    <td class="hidden-xs">Genelia Roshan</td>
                                                    <td class="max-texts"><a href="inbox-detail.html">Lorem ipsum perspiciatis unde omnis iste</a></td>
                                                    <td class="hidden-xs"><i class="fa fa-paperclip"></i></td>
                                                    <td class="text-right"> May 13 </td>
                                                    <td>&nbsp;</td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;</td>
                                                    <td>
                                                        <div class="checkbox checkbox-info m-t-0 m-b-0">
                                                            <input type="checkbox">
                                                            <label for="checkbox0"></label>
                                                        </div>
                                                    </td>
                                                    <td class="hidden-xs"><i class="fa fa-star-o"></i></td>
                                                    <td class="hidden-xs">Akshay Kumar</td>
                                                    <td class="max-texts"><a href="inbox-detail.html"><span class="label label-warning">Work</span> Lorem ipsum perspiciatis unde</a></td>
                                                    <td class="hidden-xs"><i class="fa fa-paperclip"></i></td>
                                                    <td class="text-right"> May 12 </td>
                                                    <td>&nbsp;</td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;</td>
                                                    <td>
                                                        <div class="checkbox checkbox-info m-t-0 m-b-0">
                                                            <input type="checkbox">
                                                            <label for="checkbox0"></label>
                                                        </div>
                                                    </td>
                                                    <td class="hidden-xs"><i class="fa fa-star text-warning"></i></td>
                                                    <td class="hidden-xs">Genelia Roshan</td>
                                                    <td class="max-texts"><a href="inbox-detail.html">Lorem ipsum perspiciatis unde omnis iste</a></td>
                                                    <td class="hidden-xs"><i class="fa fa-paperclip"></i></td>
                                                    <td class="text-right"> May 11 </td>
                                                    <td>&nbsp;</td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;</td>
                                                    <td>
                                                        <div class="checkbox checkbox-info m-t-0 m-b-0">
                                                            <input type="checkbox">
                                                            <label for="checkbox0"></label>
                                                        </div>
                                                    </td>
                                                    <td class="hidden-xs"><i class="fa fa-star-o"></i></td>
                                                    <td class="hidden-xs">Ritesh Deshmukh</td>
                                                    <td class="max-texts"><a href="inbox-detail.html"><span class="label label-success">Elite</span> Lorem ipsum perspiciatis unde</a></td>
                                                    <td class="hidden-xs"><i class="fa fa-paperclip"></i></td>
                                                    <td class="text-right"> May 11 </td>
                                                    <td>&nbsp;</td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;</td>
                                                    <td>
                                                        <div class="checkbox checkbox-info m-t-0 m-b-0">
                                                            <input type="checkbox">
                                                            <label for="checkbox0"></label>
                                                        </div>
                                                    </td>
                                                    <td class="hidden-xs"><i class="fa fa-star-o"></i></td>
                                                    <td class="hidden-xs">Akshay Kumar</td>
                                                    <td class="max-texts"><a href="inbox-detail.html"><span class="label label-warning">Work</span> Lorem ipsum perspiciatis unde atem</a></td>
                                                    <td class="hidden-xs"><i class="fa fa-paperclip"></i></td>
                                                    <td class="text-right"> May 11 </td>
                                                    <td>&nbsp;</td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;</td>
                                                    <td>
                                                        <div class="checkbox m-t-0 m-b-0">
                                                            <input type="checkbox">
                                                            <label for="checkbox0"></label>
                                                        </div>
                                                    </td>
                                                    <td class="hidden-xs"><i class="fa fa-star-o"></i></td>
                                                    <td class="hidden-xs">Hritik Roshan</td>
                                                    <td class="max-texts"><a href="inbox-detail.html"><span class="label label-info m-r-10">Work</span> Lorem ipsum perspiciatis m</a></td>
                                                    <td class="hidden-xs"><i class="fa fa-paperclip"></i></td>
                                                    <td class="text-right"> May 10 </td>
                                                    <td>&nbsp;</td>
                                                </tr>
                                            </tbody>
                                        </table>
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
                <!-- /.row -->
                <!-- ============================================================== -->
                <!-- Other sales widgets -->
                <!-- ============================================================== -->
                <!-- .row -->
                <div class="row">
                    <div class="col-lg-3 col-md-6    col-sm-6 col-xs-12">
                        <div class="white-box">
                            <h3 class="box-title">Daily Sales</h3>
                            <div class="text-right"> <span class="text-muted">Todays Income</span>
                                <h1><sup><i class="ti-arrow-up text-success"></i></sup> $12,000</h1> </div> <span class="text-success">20%</span>
                            <div class="progress m-b-0">
                                <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:20%;"> <span class="sr-only">20% Complete</span> </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div class="white-box">
                            <h3 class="box-title">Weekly Sales</h3>
                            <div class="text-right"> <span class="text-muted">Weekly Income</span>
                                <h1><sup><i class="ti-arrow-down text-danger"></i></sup> $5,000</h1> </div> <span class="text-danger">30%</span>
                            <div class="progress m-b-0">
                                <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:30%;"> <span class="sr-only">230% Complete</span> </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div class="white-box">
                            <h3 class="box-title">Monthly Sales</h3>
                            <div class="text-right"> <span class="text-muted">Monthly Income</span>
                                <h1><sup><i class="ti-arrow-up text-info"></i></sup> $10,000</h1> </div> <span class="text-info">60%</span>
                            <div class="progress m-b-0">
                                <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:60%;"> <span class="sr-only">20% Complete</span> </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
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
                                            <th width="70" class="text-center">#</th>
                                            <th>NAME</th>
                                            <th>OCCUPATION</th>
                                            <th>EMAIL</th>
                                            <th>ADDED</th>
                                            <th width="250">CATEGORY</th>
                                            <th width="300">MANAGE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-center">1</td>
                                            <td>Daniel Kristeen
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
                                            <td>Daniel Kristeen
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
                                            <td>Daniel Kristeen
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
                                            <td>Daniel Kristeen
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
                                            <td>Daniel Kristeen
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
                                            <td>Daniel Kristeen
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
                <!-- ============================================================== -->
                <!-- city-weather -->
                <!-- ============================================================== -->
                <div class="row">
                    <div class="col-md-12 col-lg-7">
                        <div class="white-box bg-extralight m-b-0">
                            <div class="city-weather-widget">
                                <h1>Kufri, Himachal Pradesh</h1>
                                <h4>Friday, 19 Jan 2017</h4>
                                <div class="row p-t-30">
                                    <div class="col-sm-6">
                                        <ul class="side-icon-text">
                                            <li><span class="di vm"><i class="wi wi-day-hail text-info"></i></span><span class="di vm"><h1 class="m-b-0 text-info">23<sup>o</sup></h1><h5 class="m-t-0">Mostly Sunny</h5></span></li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-6">
                                        <ul class="list-icons pull-right">
                                            <li><i class="wi wi-day-sunny m-r-5"></i>Humidity 38%</li>
                                            <li><i class=" wi wi-day-windy m-r-5"></i>Wind 38%</li>
                                        </ul>
                                    </div>
                                    <div class="col-md-12">
                                        <div id="ct-city-wth"></div>
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
                    <div class="col-md-12 col-lg-5">
                        <div class="weather-with-bg">
                            <div class="wt-top">
                                <div class="wt-img" style="background-image: url(console/images/weather-bg.jpg);">
                                    <ul class="side-icon-text">
                                        <li><span class="di vm"><i class="wi wi-day-sunny"></i></span><span class="di vm"><h1 class="m-b-0">25<sup>o</sup></h1><h4>Mostly Sunny</h4></span></li>
                                    </ul>
                                    <div class="wt-city-text">
                                        <h1>New Delhi, India</h1>
                                        <h4>Friday, 19 Jan 2017</h4> </div>
                                </div>
                            </div>
                            <div class="white-box">
                                <h2>February</h2>
                                <ul class="wt-counter list-unstyled">
                                    <li><a href="JavaScript:void(0)">1</a></li>
                                    <li><a href="JavaScript:void(0)">2</a></li>
                                    <li><a href="JavaScript:void(0)">3</a></li>
                                    <li><a href="JavaScript:void(0)">4</a></li>
                                    <li><a href="JavaScript:void(0)">5</a></li>
                                    <li><a href="JavaScript:void(0)">6</a></li>
                                    <li><a href="JavaScript:void(0)">7</a></li>
                                    <li><a href="JavaScript:void(0)">8</a></li>
                                    <li><a href="JavaScript:void(0)">9</a></li>
                                    <li><a href="JavaScript:void(0)">10</a></li>
                                    <li><a href="JavaScript:void(0)">11</a></li>
                                    <li><a href="JavaScript:void(0)">12</a></li>
                                    <li><a href="JavaScript:void(0)">13</a></li>
                                    <li><a href="JavaScript:void(0)">14</a></li>
                                    <li><a href="JavaScript:void(0)">15</a></li>
                                    <li><a href="JavaScript:void(0)">16</a></li>
                                    <li><a href="JavaScript:void(0)">17</a></li>
                                    <li><a href="JavaScript:void(0)">18</a></li>
                                    <li class="active"><a href="JavaScript:void(0)">19</a></li>
                                    <li><a href="JavaScript:void(0)">20</a></li>
                                    <li><a href="JavaScript:void(0)">21</a></li>
                                    <li><a href="JavaScript:void(0)">22</a></li>
                                    <li><a href="JavaScript:void(0)">23</a></li>
                                    <li><a href="JavaScript:void(0)">24</a></li>
                                    <li><a href="JavaScript:void(0)">25</a></li>
                                    <li><a href="JavaScript:void(0)">26</a></li>
                                    <li><a href="JavaScript:void(0)">27</a></li>
                                    <li><a href="JavaScript:void(0)">28</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ============================================================== -->
                <!-- Extra-component -->
                <!-- ============================================================== -->
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="white-box">
                            <h3 class="box-title m-b-0">MONTHLY USAGE</h3>
                            <h1 class="m-b-30 m-t-0 font-medium">58.50</h1>
                            <ul class="dp-table">
                                <li>
                                    <div class="progress progress-md progress-vertical-bottom m-0">
                                        <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100" style="height:30%;"> <span class="sr-only">88% Complete</span> </div>
                                    </div>
                                    <br/> <b>S</b> </li>
                                <li>
                                    <div class="progress progress-md progress-vertical-bottom m-0">
                                        <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100" style="height:60%;"> <span class="sr-only">88% Complete</span> </div>
                                    </div>
                                    <br/> <b>M</b> </li>
                                <li>
                                    <div class="progress progress-md progress-vertical-bottom m-0">
                                        <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100" style="height:80%;"> <span class="sr-only">88% Complete</span> </div>
                                    </div>
                                    <br/> <b>T</b> </li>
                                <li>
                                    <div class="progress progress-md progress-vertical-bottom m-0">
                                        <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100" style="height:30%;"> <span class="sr-only">88% Complete</span> </div>
                                    </div>
                                    <br/> <b>W</b> </li>
                                <li>
                                    <div class="progress progress-md progress-vertical-bottom m-0">
                                        <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100" style="height:40%;"> <span class="sr-only">88% Complete</span> </div>
                                    </div>
                                    <br/> <b>T</b> </li>
                                <li>
                                    <div class="progress progress-md progress-vertical-bottom m-0">
                                        <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100" style="height:20%;"> <span class="sr-only">88% Complete</span> </div>
                                    </div>
                                    <br/> <b>F</b> </li>
                                <li>
                                    <div class="progress progress-md progress-vertical-bottom m-0">
                                        <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100" style="height:50%;"> <span class="sr-only">88% Complete</span> </div>
                                    </div>
                                    <br/> <b>S</b> </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="white-box">
                            <h3 class="box-title">Polar chart</h3>
                            <div id="ct-polar-chart" style="height: 342px;"></div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="mt-gauge text-center">
                            <div id="gaugeDemo" class="gauge gauge-big gauge-green">
                                <div class="gauge-arrow" data-percentage="40" style="transform: rotate(0deg);"> </div>
                            </div>
                        </div>
                        <div class="panel">
                            <div class="panel-footer">
                                <div class="row">
                                    <div class="col-xs-6">
                                        <h1 class="m-b-0 m-t-0 font-medium">26.30</h1>
                                        <h4 class="m-t-0">AMps Used</h4> </div>
                                    <div class="col-xs-6">
                                        <button type="button" class="btn mtbutton btn-info btn-circle btn-xl pull-right"><i class="icon-speedometer"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="white-box">
                            <h3 class="box-title">Visit from the countries</h3>
                            <ul class="country-state">
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
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- ============================================================== -->
                <!-- Blog-component -->
                <!-- ============================================================== -->
                <div class="row">
                    <div class="col-md-6 col-lg-3 col-xs-12 col-sm-6"> <img class="img-responsive" alt="user" src="console/images/big/img1.jpg">
                        <div class="white-box">
                            <div class="text-muted"><span class="m-r-10"><i class="icon-calender"></i> May 16</span> <a class="text-muted m-l-10" href="#"><i class="fa fa-heart-o"></i> 38</a></div>
                            <h3 class="m-t-20 m-b-20">Top 20 Models are on the ramp</h3>
                            <p>Titudin venenatis ipsum ac feugiat. Vestibulum ullamcorper quam.</p>
                            <button class="btn btn-success btn-rounded waves-effect waves-light m-t-20">Read more</button>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 col-xs-12 col-sm-6"> <img class="img-responsive" alt="user" src="console/images/big/img2.jpg">
                        <div class="white-box">
                            <div class="text-muted"><span class="m-r-10"><i class="icon-calender"></i> May 16</span> <a class="text-muted m-l-10" href="#"><i class="fa fa-heart-o"></i> 38</a></div>
                            <h3 class="m-t-20 m-b-20">Top 20 Models are on the ramp</h3>
                            <p>Titudin venenatis ipsum ac feugiat. Vestibulum ullamcorper quam.</p>
                            <button class="btn btn-success btn-rounded waves-effect waves-light m-t-20">Read more</button>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 col-xs-12 col-sm-6"> <img class="img-responsive" alt="user" src="console/images/big/img3.jpg">
                        <div class="white-box">
                            <div class="text-muted"><span class="m-r-10"><i class="icon-calender"></i> May 16</span> <a class="text-muted m-l-10" href="#"><i class="fa fa-heart-o"></i> 38</a></div>
                            <h3 class="m-t-20 m-b-20">Top 20 Models are on the ramp</h3>
                            <p>Titudin venenatis ipsum ac feugiat. Vestibulum ullamcorper quam.</p>
                            <button class="btn btn-success btn-rounded waves-effect waves-light m-t-20">Read more</button>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 col-xs-12 col-sm-6"> <img class="img-responsive" alt="user" src="console/images/big/img4.jpg">
                        <div class="white-box">
                            <div class="text-muted"><span class="m-r-10"><i class="icon-calender"></i> May 16</span> <a class="text-muted m-l-10" href="#"><i class="fa fa-heart-o"></i> 38</a></div>
                            <h3 class="m-t-20 m-b-20">Top 20 Models are on the ramp</h3>
                            <p>Titudin venenatis ipsum ac feugiat. Vestibulum ullamcorper quam.</p>
                            <button class="btn btn-success btn-rounded waves-effect waves-light m-t-20">Read more</button>
                        </div>
                    </div>
                </div>
                <!-- ============================================================== -->
                <!-- analitics widgets -->
                <!-- ============================================================== -->
                <div class="row">
                    <div class="col-md-4 col-sm-12 col-xs-12">
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
                    </div>
                    <div class="col-md-4 col-sm-12 col-xs-12">
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
                    <div class="col-md-4 col-sm-12 col-xs-12">
                        <div class="white-box">
                            <h3 class="box-title"><small class="pull-right m-t-10 text-success"><i class="fa fa-sort-asc"></i> 18% High then last month</small>Yearly Site Traffic</h3>
                            <div class="stats-row">
                                <div class="stat-item">
                                    <h6>Overall Growth</h6> <b>80.40%</b></div>
                                <div class="stat-item">
                                    <h6>Montly</h6> <b>15.40%</b></div>
                                <div class="stat-item">
                                    <h6>Day</h6> <b>5.50%</b></div>
                            </div>
                            <div id="sparkline10"></div>
                        </div>
                    </div>
                </div>
                <!-- ============================================================== -->
                <!-- vertical news slide and extra widgets -->
                <!-- ============================================================== -->
                <!-- .row -->
                <div class="row">
                    <div class="col-lg-6 col-sm-12 col-xs-12">
                        <div class="row">
                            <div class="col-lg-6 col-sm-6 col-xs-12">
                                <div class="white-box">
                                    <h3 class="box-title">NEW CLIENTS</h3>
                                    <ul class="list-inline two-part">
                                        <li><i class="icon-people text-info"></i></li>
                                        <li class="text-right"><span class="counter">23</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-6 col-xs-12">
                                <div class="white-box">
                                    <h3 class="box-title">NEW Projects</h3>
                                    <ul class="list-inline two-part">
                                        <li><i class="icon-folder text-purple"></i></li>
                                        <li class="text-right"><span class="counter">169</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-6 col-xs-12">
                                <div class="white-box">
                                    <h3 class="box-title">Open Projects</h3>
                                    <ul class="list-inline two-part">
                                        <li><i class="icon-folder-alt text-danger"></i></li>
                                        <li class="text-right"><span class="counter">311</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-6 col-xs-12">
                                <div class="white-box">
                                    <h3 class="box-title">NEW Invoices</h3>
                                    <ul class="list-inline two-part">
                                        <li><i class="ti-wallet text-success"></i></li>
                                        <li class="text-right"><span class="counter">117</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12 col-xs-12">
                        <div class="news-slide m-b-15">
                            <div class="vcarousel slide">
                                <!-- Carousel items -->
                                <div class="carousel-inner">
                                    <div class="active item">
                                        <div class="overlaybg"><img src="console/images/heading-bg/slide6.jpg" /></div>
                                        <div class="news-content"><span class="label label-danger label-rounded">Primary</span>
                                            <h2>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h2> <a href="#">Read More</a></div>
                                    </div>
                                    <div class="item">
                                        <div class="overlaybg"><img src="console/images/heading-bg/slide4.jpg" /></div>
                                        <div class="news-content"><span class="label label-primary label-rounded">Primary</span>
                                            <h2>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h2> <a href="#">Read More</a></div>
                                    </div>
                                    <div class="item">
                                        <div class="overlaybg"><img src="console/images/heading-bg/slide6.jpg" /></div>
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
                <!-- chart showcase widgets -->
                <!-- ============================================================== -->
                <!-- row -->
                <div class="row">
                    <div class="col-md-6 col-xs-12 col-sm-6">
                        <div class="white-box m-b-0 bg-danger">
                            <h3 class="text-white box-title">Analysis <span class="pull-right"><i class="fa fa-caret-up"></i> 260</span></h3>
                            <div id="sparkline1dash"></div>
                        </div>
                        <div class="white-box">
                            <div class="row">
                                <div class="p-l-20 p-r-20">
                                    <div class="pull-left">
                                        <div class="text-muted m-t-20">SITE ANALYSIS</div>
                                        <h2>21000</h2>
                                    </div>
                                    <div data-label="60%" class="css-bar css-bar-60 css-bar-lg m-b-0 css-bar-danger pull-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xs-12 col-sm-6">
                        <div class="white-box m-b-0 bg-info">
                            <h3 class="text-white box-title">Sales <span class="pull-right"><i class="fa fa-caret-down"></i> 160</span></h3>
                            <div id="sparkline2dash" class="text-center"></div>
                        </div>
                        <div class="white-box">
                            <div class="row">
                                <div class="p-l-20 p-r-20">
                                    <div class="pull-left">
                                        <div class="text-muted m-t-20">TOTAL SALES</div>
                                        <h2>21000</h2> </div>
                                    <div data-label="60%" class="css-bar css-bar-60 css-bar-lg m-b-0  css-bar-info pull-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xs-12 col-sm-6">
                        <div class="white-box m-b-0 bg-purple">
                            <h3 class="text-white box-title">Site visits <span class="pull-right"><i class="fa fa-caret-up"></i> 260</span></h3>
                            <div id="sparkline3dash"></div>
                        </div>
                        <div class="white-box">
                            <div class="row">
                                <div class="p-l-20 p-r-20">
                                    <div class="pull-left">
                                        <div class="text-muted m-t-20">TOTAL VISITS</div>
                                        <h2>26000</h2> </div>
                                    <div data-label="60%" class="css-bar css-bar-60 css-bar-lg m-b-0 css-bar-purple pull-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xs-12 col-sm-6">
                        <div class="white-box m-b-0 bg-inverse">
                            <h3 class="text-white box-title">Power consumption <span class="pull-right"><i class="fa fa-caret-up"></i> 260</span></h3>
                            <div id="sparkline4dash" class="text-center"></div>
                        </div>
                        <div class="white-box">
                            <div class="row">
                                <div class="p-l-20 p-r-20">
                                    <div class="pull-left">
                                        <div class="text-muted m-t-20">TOTAL CONSUME</div>
                                        <h2>61000</h2> </div>
                                    <div data-label="60%" class="css-bar css-bar-60 css-bar-lg m-b-0 css-bar-inverse pull-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /row -->
                <!-- ============================================================== -->
                <!-- SALES analyitics widgets -->
                <!-- ============================================================== -->
                <!-- .row -->
                <div class="row">
                    <div class="col-md-7 col-lg-7 col-sm-6 col-xs-12">
                        <div class="white-box">
                            <h3 class="box-title">SALES ANALYTICS</h3>
                            <ul class="list-inline text-center">
                                <li>
                                    <h5><i class="fa fa-circle m-r-5" style="color: #dadada;"></i>Site A View</h5> </li>
                                <li>
                                    <h5><i class="fa fa-circle m-r-5" style="color: #e2eff8;"></i>Site B View</h5> </li>
                            </ul>
                            <div id="morris-area-chart3" style="height: 380px;"></div>
                        </div>
                    </div>
                    <div class="col-md-5 col-lg-5 col-sm-6 col-xs-12">
                        <div class="white-box">
                            <h3 class="box-title">Total Sites Visit</h3>
                            <div class="row">
                                <div class="col-md-6 col-sm-6 col-xs-6  m-t-30">
                                    <h1 class="text-warning">6778</h1>
                                    <p class="text-muted">APRIL 2016</p> <b>(150-165 Sales)</b> </div>
                                <div class="col-md-6 col-sm-6 col-xs-6">
                                    <div id="sales1" class="text-center"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 col-lg-5 col-sm-6 col-xs-12">
                        <div class="white-box">
                            <h3 class="box-title">Sales Difference</h3>
                            <div class="row">
                                <div class="col-md-6 col-sm-6 col-xs-6  m-t-30">
                                    <h1 class="text-info">$2478</h1>
                                    <p class="text-muted">APRIL 2016</p> <b>(150-165 Sales)</b> </div>
                                <div class="col-md-6 col-sm-6 col-xs-6">
                                    <div id="sales2" class="text-center"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.row -->
                <!-- ============================================================== -->
                <!-- Recent comment, table & feed widgets -->
                <!-- ============================================================== -->
                <div class="row">
                    <div class="col-md-12 col-lg-6 col-sm-12">
                        <div class="white-box">
                            <h3 class="box-title">Recent Comments</h3>
                            <div class="comment-center">
                                <div class="comment-body">
                                    <div class="user-img"> <img src="console/images/users/pawandeep.jpg" alt="user" class="img-circle"></div>
                                    <div class="mail-contnet">
                                        <h5>Pavan kumar</h5><span class="time">10:20 AM   20  may 2016</span> <span class="label label-rouded label-info">PENDING</span>
                                        <br/><span class="mail-desc">Donec ac condimentum massa. Etiam pellentesque pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo dui pellentesque molestie feugiat.</span> <a href="javacript:void(0)" class="btn btn btn-rounded btn-default btn-outline m-r-5"><i class="ti-check text-success m-r-5"></i>Approve</a><a href="javacript:void(0)" class="btn-rounded btn btn-default btn-outline"><i class="ti-close text-danger m-r-5"></i> Reject</a> </div>
                                </div>
                                <div class="comment-body">
                                    <div class="user-img"> <img src="console/images/users/sonu.jpg" alt="user" class="img-circle"> </div>
                                    <div class="mail-contnet">
                                        <h5>Sonu Nigam</h5><span class="time">10:20 AM   20  may 2016</span> <span class="label label-rouded label-success">APPROVED</span>
                                        <br/><span class="mail-desc">Donec ac condimentum massa. Etiam pellentesque pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo dui pellentesque molestie feugiat.</span> </div>
                                </div>
                                <div class="comment-body">
                                    <div class="user-img"> <img src="console/images/users/arijit.jpg" alt="user" class="img-circle"> </div>
                                    <div class="mail-contnet">
                                        <h5>Arijit singh</h5><span class="time">10:20 AM   20  may 2016</span> <span class="label label-rouded label-danger">REJECTED</span>
                                        <br/><span class="mail-desc">Donec ac condimentum massa. Etiam pellentesque pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo dui pellentesque molestie feugiat.</span> </div>
                                </div>
                                <div class="comment-body b-none">
                                    <div class="user-img"> <img src="console/images/users/govinda.jpg" alt="user" class="img-circle"></div>
                                    <div class="mail-contnet ">
                                        <h5>Govinda kumar</h5><span class="time">10:20 AM   20  may 2016</span> <span class="label label-rouded label-info">PENDING</span>
                                        <br/><span class="mail-desc">Donec ac condimentum massa. Etiam pellentesque pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo dui pellentesque molestie feugiat.</span> <a href="javacript:void(0)" class="btn btn btn-rounded btn-default btn-outline m-r-5"><i class="ti-check text-success m-r-5"></i>Approve</a><a href="javacript:void(0)" class="btn-rounded btn btn-default btn-outline"><i class="ti-close text-danger m-r-5"></i> Reject</a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-6 col-sm-12">
                        <div class="white-box">
                            <h3 class="box-title">Recent sales
                                  <div class="col-md-3 col-sm-4 col-xs-6 pull-right">
                                    <select class="form-control pull-right row b-none">
                                      <option>March 2017</option>
                                      <option>April 2017</option>
                                      <option>May 2017</option>
                                      <option>June 2017</option>
                                      <option>July 2017</option>
                                    </select>
                                  </div>
                            </h3>
                            <div class="row sales-report">
                                <div class="col-md-6 col-sm-6 col-xs-6">
                                    <h2>March 2017</h2>
                                    <p>SALES REPORT</p>
                                </div>
                                <div class="col-md-6 col-sm-6 col-xs-6 ">
                                    <h1 class="text-right text-success m-t-20">$3,690</h1> </div>
                            </div>
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>NAME</th>
                                            <th>STATUS</th>
                                            <th>DATE</th>
                                            <th>PRICE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td class="txt-oflo">Elite admin</td>
                                            <td><span class="label label-success label-rouded">SALE</span> </td>
                                            <td class="txt-oflo">April 18, 2017</td>
                                            <td><span class="text-success">$24</span></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td class="txt-oflo">Real Homes WP Theme</td>
                                            <td><span class="label label-info label-rouded">EXTENDED</span></td>
                                            <td class="txt-oflo">April 19, 2017</td>
                                            <td><span class="text-info">$1250</span></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td class="txt-oflo">Helping Hands WP Theme</td>
                                            <td><span class="label label-success label-rouded">member</span></td>
                                            <td class="txt-oflo">April 22, 2017</td>
                                            <td><span class="text-success">$24</span></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td class="txt-oflo">Ample Admin</td>
                                            <td><span class="label label-info label-rouded">EXTENDED</span></td>
                                            <td class="txt-oflo">April 19, 2017</td>
                                            <td><span class="text-info">$1250</span></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td class="txt-oflo">Medical Pro WP Theme</td>
                                            <td><span class="label label-danger label-rouded">TAX</span></td>
                                            <td class="txt-oflo">April 20, 2017</td>
                                            <td><span class="text-danger">-$24</span></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td class="txt-oflo">Hosting press html</td>
                                            <td><span class="label label-warning label-rouded">SALE</span></td>
                                            <td class="txt-oflo">April 21, 2017</td>
                                            <td><span class="text-success">$24</span></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td class="txt-oflo">Real Homes WP Theme</td>
                                            <td><span class="label label-info label-rouded">EXTENDED</span></td>
                                            <td class="txt-oflo">April 19, 2017</td>
                                            <td><span class="text-info">$1250</span></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td class="txt-oflo">Helping Hands WP Theme</td>
                                            <td><span class="label label-success label-rouded">member</span></td>
                                            <td class="txt-oflo">April 22, 2017</td>
                                            <td><span class="text-success">$24</span></td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td class="txt-oflo">Digital Agency PSD</td>
                                            <td><span class="label label-success label-rouded">SALE</span> </td>
                                            <td class="txt-oflo">April 23, 2017</td>
                                            <td><span class="text-danger">-$14</span></td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td class="txt-oflo">Helping Hands WP Theme</td>
                                            <td><span class="label label-warning label-rouded">member</span></td>
                                            <td class="txt-oflo">April 22, 2017</td>
                                            <td><span class="text-success">$64</span></td>
                                        </tr>
                                    </tbody>
                                </table> <a href="#">Check all the sales</a> </div>
                        </div>
                    </div>
                </div>
                <!-- ============================================================== -->
                <!-- Image widgets -->
                <!-- ============================================================== -->
                <div class="row">
                    <div class="col-md-12">
                        <div class="panel panel-default">
                            <div class="panel-heading">Slide show with owl Carousel</div>
                            <div class="panel-wrapper p-b-10 collapse in">
                                <div id="owl-demo" class="owl-carousel owl-theme">
                                    <div class="item"><img src="console/images/heading-bg/slide6.jpg" alt="Owl Image"></div>
                                    <div class="item"><img src="console/images/heading-bg/slide3.jpg" alt="Owl Image"></div>
                                    <div class="item"><img src="console/images/heading-bg/slide4.jpg" alt="Owl Image"></div>
                                    <div class="item"><img src="console/images/heading-bg/slide6.jpg" alt="Owl Image"></div>
                                    <div class="item"><img src="console/images/heading-bg/slide1.jpg" alt="Owl Image"></div>
                                    <div class="item"><img src="console/images/heading-bg/slide3.jpg" alt="Owl Image"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ============================================================== -->
                <!-- Feed & activity widgets -->
                <!-- ============================================================== -->
                <div class="row">
                    <!-- .col -->
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <div class="white-box">
                            <h3 class="box-title m-b-30">User Activity</h3>
                            <div class="steamline">
                                <div class="sl-item">
                                    <div class="sl-left bg-success"> <i class="ti-user"></i></div>
                                    <div class="sl-right">
                                        <div><a href="#">Tohnathan Doe</a> <span class="sl-date">5 minutes ago</span></div>
                                        <div class="desc">Contrary to popular belief</div>
                                    </div>
                                </div>
                                <div class="sl-item">
                                    <div class="sl-left bg-info"><i class="fa fa-image"></i></div>
                                    <div class="sl-right">
                                        <div><a href="#">Hritik Roshan</a> <span class="sl-date">5 minutes ago</span></div>
                                        <div class="desc">Lorem Ipsum is simply dummy</div>
                                        <div class="row inline-photos">
                                            <div class="col-xs-4"><img class="img-responsive" alt="user" src="console/images/small/vd1.jpg"></div>
                                            <div class="col-xs-4"><img class="img-responsive" alt="user" src="console/images/small/vd2.jpg"></div>
                                            <div class="col-xs-4"><img class="img-responsive" alt="user" src="console/images/small/vd3.jpg"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sl-item">
                                    <div class="sl-left"> <img class="img-circle" alt="user" src="console/images/users/sonu.jpg"> </div>
                                    <div class="sl-right">
                                        <div><a href="#">Gohn Doe</a> <span class="sl-date">5 minutes ago</span></div>
                                        <div class="desc">The standard chunk of ipsum </div>
                                    </div>
                                </div>
                                <div class="sl-item">
                                    <div class="sl-left"> <img class="img-circle" alt="user" src="console/images/users/ritesh.jpg"> </div>
                                    <div class="sl-right">
                                        <div><a href="#">Varun Dhavan</a> <span class="sl-date">5 minutes ago</span></div>
                                        <div class="desc">Contrary to popular belief</div>
                                    </div>
                                </div>
                                <div class="sl-item">
                                    <div class="sl-left"> <img class="img-circle" alt="user" src="console/images/users/govinda.jpg"> </div>
                                    <div class="sl-right">
                                        <div><a href="#">Tiger Sroff</a> <span class="sl-date">5 minutes ago</span></div>
                                        <div class="desc">The generated lorem ipsum
                                            <br><a href="javascript:void(0)" class="btn m-t-10 m-r-5 btn-rounded btn-outline btn-success">Apporve</a> <a href="javascript:void(0)" class="btn m-t-10 btn-rounded btn-outline btn-danger">Refuse</a> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /.col -->
                    <div class="col-md-12 col-lg-6 col-sm-12">
                        <div class="white-box">
                            <h3 class="box-title">Feeds</h3>
                            <ul class="feeds">
                                <li>
                                    <div class="bg-info"><i class="fa fa-bell-o text-white"></i></div> You have 4 pending tasks. <span class="text-muted">Just Now</span></li>
                                <li>
                                    <div class="bg-success"><i class="ti-server text-white"></i></div> Server #1 overloaded.<span class="text-muted">2 Hours ago</span></li>
                                <li>
                                    <div class="bg-warning"><i class="ti-shopping-cart text-white"></i></div> New order received.<span class="text-muted">31 May</span></li>
                                <li>
                                    <div class="bg-danger"><i class="ti-user text-white"></i></div> New user registered.<span class="text-muted">30 May</span></li>
                                <li>
                                    <div class="bg-inverse"><i class="fa fa-bell-o text-white"></i></div> New Version just arrived. <span class="text-muted">27 May</span></li>
                                <li>
                                    <div class="bg-info"><i class="fa fa-bell-o text-white"></i></div> You have 4 pending tasks. <span class="text-muted">Just Now</span></li>
                                <li>
                                    <div class="bg-success"><i class="ti-server text-white"></i></div> Server #1 overloaded.<span class="text-muted">2 Hours ago</span></li>
                                <li>
                                    <div class="bg-warning"><i class="ti-shopping-cart text-white"></i></div> New order received.<span class="text-muted">31 May</span></li>
                                <li>
                                    <div class="bg-danger"><i class="ti-user text-white"></i></div> New user registered.<span class="text-muted">30 May</span></li>
                                <li>
                                    <div class="bg-danger"><i class="ti-user text-white"></i></div> New user registered.<span class="text-muted">30 May</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- ============================================================== -->
                <!-- chats, message & profile widgets -->
                <!-- ============================================================== -->
                <div class="row">
                    <!-- .col -->
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <div class="panel">
                            <div class="sk-chat-widgets">
                                <div class="bg-info p-30">
                                    <ul class="side-icon-text">
                                        <li><img src="console/images/users/govinda.jpg" width="60" class="img-circle di vm m-r-10" /><span class="di vm"><h2 class="m-b-0 text-white">Daniel Kristeen</h2><h5 class="text-white m-t-0"><i class="fa fa-circle m-r-5 text-success"></i>Available 
                                                    <div class="btn-group">
                                                    <a aria-expanded="false" data-toggle="dropdown" type="button"> <span class="caret text-white"></span></a>
                                            <ul role="menu" class="dropdown-menu">
                                                <li><a href="#"><i class="fa fa-circle m-r-5 text-success"></i>Available</a></li>
                                                <li><a href="#"><i class="fa fa-circle m-r-5 text-warning"></i>Away</a></li>
                                                <li><a href="#"><i class="fa fa-circle m-r-5 text-danger"></i>Do not Disturbe</a></li>
                                                <li class="divider"></li>
                                                <li><a href="#"><i class="fa fa-circle m-r-5 text-dark"></i>invisible</a> </li>
                                            </ul>
                                </div>
                                </h5>
                                </span>
                                </li>
                                </ul>
                            </div>
                            <div class="white-box">
                                <ul class="chatonline">
                                    <li>
                                        <div class="call-chat">
                                            <button class="btn btn-success btn-circle btn-lg" type="button"><i class="fa fa-phone"></i></button>
                                            <button class="btn btn-info btn-circle btn-lg" type="button"><i class="fa fa-comments-o"></i></button>
                                        </div>
                                        <a href="javascript:void(0)"><img src="console/images/users/varun.jpg" alt="user-img" class="img-circle"> <span>Varun Dhavan <small class="text-success">online</small></span></a>
                                    </li>
                                    <li>
                                        <div class="call-chat">
                                            <button class="btn btn-success btn-circle btn-lg" type="button"><i class="fa fa-phone"></i></button>
                                            <button class="btn btn-info btn-circle btn-lg" type="button"><i class="fa fa-comments-o"></i></button>
                                        </div>
                                        <a href="javascript:void(0)"><img src="console/images/users/genu.jpg" alt="user-img" class="img-circle"> <span>Genelia Deshmukh <small class="text-warning">Away</small></span></a>
                                    </li>
                                    <li>
                                        <div class="call-chat">
                                            <button class="btn btn-success btn-circle btn-lg" type="button"><i class="fa fa-phone"></i></button>
                                            <button class="btn btn-info btn-circle btn-lg" type="button"><i class="fa fa-comments-o"></i></button>
                                        </div>
                                        <a href="javascript:void(0)"><img src="console/images/users/ritesh.jpg" alt="user-img" class="img-circle"> <span>Ritesh Deshmukh <small class="text-danger">Busy</small></span></a>
                                    </li>
                                    <li>
                                        <div class="call-chat">
                                            <button class="btn btn-success btn-circle btn-lg" type="button"><i class="fa fa-phone"></i></button>
                                            <button class="btn btn-info btn-circle btn-lg" type="button"><i class="fa fa-comments-o"></i></button>
                                        </div>
                                        <a href="javascript:void(0)"><img src="console/images/users/arijit.jpg" alt="user-img" class="img-circle"> <span>Arijit Sinh <small class="text-muted">Offline</small></span></a>
                                    </li>
                                    <li>
                                        <div class="call-chat">
                                            <button class="btn btn-success btn-circle btn-lg" type="button"><i class="fa fa-phone"></i></button>
                                            <button class="btn btn-info btn-circle btn-lg" type="button"><i class="fa fa-comments-o"></i></button>
                                        </div>
                                        <a href="javascript:void(0)"><img src="console/images/users/govinda.jpg" alt="user-img" class="img-circle"> <span>Govinda Star <small class="text-success">online</small></span></a>
                                    </li>
                                    <li>
                                        <div class="call-chat">
                                            <button class="btn btn-success btn-circle btn-lg" type="button"><i class="fa fa-phone"></i></button>
                                            <button class="btn btn-info btn-circle btn-lg" type="button"><i class="fa fa-comments-o"></i></button>
                                        </div>
                                        <a href="javascript:void(0)"><img src="console/images/users/hritik.jpg" alt="user-img" class="img-circle"> <span>John Abraham<small class="text-success">online</small></span></a>
                                    </li>
                                    <li>
                                        <div class="call-chat">
                                            <button class="btn btn-success btn-circle btn-lg" type="button"><i class="fa fa-phone"></i></button>
                                            <button class="btn btn-info btn-circle btn-lg" type="button"><i class="fa fa-comments-o"></i></button>
                                        </div>
                                        <a href="javascript:void(0)"><img src="console/images/users/arijit.jpg" alt="user-img" class="img-circle"> <span>Arijit Sinh <small class="text-muted">Offline</small></span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.col -->
                <!-- .col -->
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <div class="panel panel-info">
                        <div class="panel-heading"> CHATBOX
                            <div class="pull-right"> <a href="#" data-perform="panel-dismiss"><i class="ti-close"></i></a> </div>
                        </div>
                        <div class="panel-wrapper collapse in" aria-expanded="true">
                            <div class="panel-body">
                                <div class="chat-box" style="height: 530px;">
                                    <ul class="chat-list slimscroll" style="overflow: hidden;" tabindex="5005">
                                        <li>
                                            <div class="chat-image"> <img alt="male" src="console/images/users/sonu.jpg"> </div>
                                            <div class="chat-body">
                                                <div class="chat-text">
                                                    <h4>Sonu Nigam</h4>
                                                    <p> Hi, All! </p> <b>10.00 am</b> </div>
                                            </div>
                                        </li>
                                        <li class="odd">
                                            <div class="chat-image"> <img alt="Female" src="console/images/users/genu.jpg"> </div>
                                            <div class="chat-body">
                                                <div class="chat-text">
                                                    <h4>Genelia</h4>
                                                    <p> Hi, How are you Sonu? ur next concert? </p> <b>10.03 am</b> </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="chat-image"> <img alt="male" src="console/images/users/ritesh.jpg"> </div>
                                            <div class="chat-body">
                                                <div class="chat-text">
                                                    <h4>Ritesh</h4>
                                                    <p> Hi, Sonu and Genelia, </p> <b>10.05 am</b> </div>
                                            </div>
                                        </li>
                                        <li class="odd">
                                            <div class="chat-image"> <img alt="Female" src="console/images/users/genu.jpg"> </div>
                                            <div class="chat-body">
                                                <div class="chat-text">
                                                    <h4>Genelia</h4>
                                                    <p> Hi, How are you Sonu? ur next concert? </p> <b>10.03 am</b> </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="panel-footer">
                                <div class="row">
                                    <div class="col-xs-8">
                                        <textarea placeholder="Type your message here" class="chat-box-input"></textarea>
                                    </div>
                                    <div class="col-xs-4 text-right">
                                        <button class="btn btn-success btn-circle btn-xl" type="button"><i class="fa fa-paper-plane-o"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.col -->
            </div>

@endsection

@push('scripts')

    <!--Morris JavaScript -->
    <script src="console/plugins/raphael/raphael-min.js"></script>
    <script src="console/plugins/morrisjs/morris.js"></script>
    <!-- jQuery for carousel -->
    <script src="console/plugins/owl.carousel/owl.carousel.min.js"></script>
    <script src="console/plugins/owl.carousel/owl.custom.js"></script>
    <!-- Flot Charts JavaScript -->
    <script src="console/plugins/flot/jquery.flot.js"></script>
    <script src="console/plugins/flot.tooltip/js/jquery.flot.tooltip.min.js"></script>
    <!-- Animated skill bar -->
    <script src="console/plugins/AnimatedSkillsDiagram/js/animated-bar.js"></script>
    <!-- Sparkline chart JavaScript -->
    <script src="console/plugins/jquery-sparkline/jquery.sparkline.min.js"></script>
    <!-- chartist chart -->
    <script src="console/plugins/chartist-js/dist/chartist.min.js"></script>
    <script src="console/plugins/chartist-plugin-tooltip-master/dist/chartist-plugin-tooltip.min.js"></script>
    <!-- Guage chart -->
    <script src="console/plugins/Minimal-Gauge-chart/js/cmGauge.js"></script>
    <script src="console/js/widget-ext.js"></script>
    <!-- Custom tab JavaScript -->
    <script src="console/js/cbpFWTabs.js"></script>
    <script type="text/javascript">
        (function() {
            [].slice.call(document.querySelectorAll('.sttabs')).forEach(function(el) {
                new CBPFWTabs(el);
            });
        })();
    </script>

@endpush