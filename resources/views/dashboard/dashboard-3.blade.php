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
	        <h4 class="page-title">Dashboard 2</h4>
	    </div>
	    <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
	        <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
	        <a href="javascript:void(0)" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
	        <ol class="breadcrumb">
	            <li><a href="index.html">Dashboard</a></li>
	            <li class="active">Dashboard 2</li>
	        </ol>
	    </div>
	    <!-- /.col-lg-12 -->
	</div>
	<!-- ============================================================== -->
	<!-- Sales different chart widgets -->
	<!-- ============================================================== -->
	<!-- .row -->
	<div class="row">
	    <div class="col-md-12 col-lg-4">
	        <div class="white-box">
	            <div class="row">
	                <div class="col-sm-6">
	                    <h2 class="m-b-0 font-medium">$354.50</h2>
	                    <h5 class="text-muted m-t-0">Total Income</h5></div>
	                <div class="col-sm-6">
	                    <div id="ct-bar-chart" class="pull-right"></div>
	                </div>
	            </div>
	        </div>
	    </div>
	    <div class="col-md-12 col-lg-4">
	        <div class="white-box">
	            <div class="row">
	                <div class="col-sm-6">
	                    <h2 class="m-b-0 font-medium">4567</h2>
	                    <h5 class="text-muted m-t-0">Yearly Sales</h5></div>
	                <div class="col-sm-6">
	                    <div id="ct-main-bal" style="height: 70px"></div>
	                </div>
	            </div>
	        </div>
	    </div>
	    <div class="col-md-12 col-lg-4">
	        <div class="white-box">
	            <div class="row">
	                <div class="col-sm-6">
	                    <h2 class="m-b-0 font-medium">356</h2>
	                    <h5 class="text-muted m-t-0">Monthly Sales</h5></div>
	                <div class="col-sm-6">
	                    <div id="ct-extra" style="height: 70px" class="pull-right"></div>
	                </div>
	            </div>
	        </div>
	    </div>
	</div>
	<!-- /.row -->
	<!-- ============================================================== -->
	<!-- Sales, finance & Expance widgets -->
	<!-- ============================================================== -->
	<!-- .row -->
	<div class="row">
	    <div class="col-md-7 col-sm-12 col-lg-8">
	        <div class="white-box b-b bg-extralight m-b-0">
	            <h3 class="box-title">Expence</h3>
	            <div class="demo-container" style="height:140px;">
	                <div id="placeholder" class="demo-placeholder"></div>
	            </div>
	        </div>
	        <div class="white-box p-b-0">
	            <div class="row">
	                <div class="col-xs-8">
	                    <h2 class="font-medium m-t-0">$458.50</h2>
	                    <h5 class="text-muted m-t-0">Expence for December 1 to 10</h5>
	                </div>
	                <div class="col-xs-4">
	                    <div class="circle-md pull-right circle bg-info"><i class="ti-plus"></i></div>
	                </div>
	            </div>
	            <div class="row m-t-30 minus-margin">
	                <div class="col-sm-12 col-sm-6 b-t b-r">
	                    <ul class="expense-box">
	                        <li><i class="ti-headphone-alt text-info"></i>
	                            <div>
	                                <h2>$250</h2>
	                                <h4>Entertainment</h4>
	                            </div>
	                        </li>
	                    </ul>
	                </div>
	                <div class="col-sm-12 col-sm-6  b-t">
	                    <ul class="expense-box">
	                        <li><i class="ti-home text-info"></i>
	                            <div>
	                                <h2>$60.50</h2>
	                                <h4>House Rent</h4>
	                            </div>
	                        </li>
	                    </ul>
	                </div>
	            </div>
	            <div class="row minus-margin">
	                <div class="col-sm-12 col-sm-6  b-t b-r">
	                    <ul class="expense-box">
	                        <li><i class="fa fa-paper-plane-o text-info"></i>
	                            <div>
	                                <h2>$28</h2>
	                                <h4>Travel</h4>
	                            </div>
	                        </li>
	                    </ul>
	                </div>
	                <div class="col-sm-12 col-sm-6  b-t">
	                    <ul class="expense-box">
	                        <li><i class="ti-shopping-cart text-info"></i>
	                            <div>
	                                <h2>$70</h2>
	                                <h4>Shopping</h4>
	                            </div>
	                        </li>
	                    </ul>
	                </div>
	            </div>
	        </div>
	    </div>
	    <!-- col-md-3 -->
	    <div class="col-md-5 col-sm-12 col-lg-4">
	        <div class="white-box">
	            <h3 class="box-title">Sales</h3>
	            <div id="morris-donut-chart" style="height:318px; padding-top: 50px;"></div>
	            <div class="row p-t-30">
	                <div class="col-xs-8 p-t-30">
	                    <h3 class="font-medium">TOTAL SALES</h3>
	                    <h5 class="text-muted m-t-0">160 sales monthly</h5>
	                </div>
	                <div class="col-xs-4 p-t-30">
	                    <div class="circle-md pull-right circle bg-info"><i class="ti-shopping-cart"></i></div>
	                </div>
	            </div>
	        </div>
	    </div>
	</div>
	<!-- /.row -->
	<div class="row">
	    <!-- col-md-3 -->
	    <div class="col-md-12 col-lg-5">
	        <div class="white-box">
	            <h3 class="box-title">Finance</h3>
	            <div id="diagram"></div>
	            <div class="get">
	                <div class="arc"> <span class="text">Aug</span>
	                    <input type="hidden" class="percent" value="95" />
	                    <input type="hidden" class="color" value="#7ace4c" /> </div>
	                <div class="arc"> <span class="text">Sep</span>
	                    <input type="hidden" class="percent" value="90" />
	                    <input type="hidden" class="color" value="#f33155" /> </div>
	                <div class="arc"> <span class="text">Oct</span>
	                    <input type="hidden" class="percent" value="80" />
	                    <input type="hidden" class="color" value="#11a0f8" /> </div>
	                <div class="arc"> <span class="text">Nov</span>
	                    <input type="hidden" class="percent" value="53" />
	                    <input type="hidden" class="color" value="#cfecfe" /> </div>
	                <div class="arc"> <span class="text">Dec</span>
	                    <input type="hidden" class="percent" value="45" />
	                    <input type="hidden" class="color" value="#EDEBEE" /> </div>
	            </div>
	            <div class="row p-t-30">
	                <div class="col-xs-8">
	                    <h1 class="font-medium m-t-0">56%</h1>
	                    <h5 class="text-muted m-t-0">increase in Nov</h5>
	                </div>
	                <div class="col-xs-4">
	                    <div class="circle-md pull-right circle bg-success"><i class="ti-stats-up"></i></div>
	                </div>
	            </div>
	        </div>
	    </div>
	    <!-- col-md-3 -->
	    <div class="col-md-12 col-lg-7 col-sm-12">
	        <div class="calendar-widget m-b-30">
	            <div class="cal-left">
	                <h1>23</h1>
	                <h4>Thursday</h4> <span></span>
	                <h5>March 2017</h5>
	                <div class="cal-btm-text"> <a href="">3 TASKS</a>
	                    <h5>Prepare project</h5>
	                </div>
	            </div>
	            <div class="cal-right bg-extralight">
	                <table class="cal-table">
	                    <tbody>
	                        <tr>
	                            <td colspan="5">
	                                <h1>March</h1>
	                            </td>
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
	</div>
	<!-- ============================================================== -->
	<!-- Sales, weather & calander widgets -->
	<!-- ============================================================== -->
	<!-- .row -->
	<div class="row">
	    <div class="col-md-6 col-sm-6">
	        <div class="white-box">
	            <h3 class="box-title m-b-0">WEEKLY USAGE</h3>
	            <h1 class="m-b-30 m-t-0 font-medium">$58.50</h1>
	            <div class="m-t-20 m-b-20  p-t-10"></div>
	            <ul class="dp-table m-t-30">
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
	    <div class="col-md-6 col-sm-6">
	        <div class="mt-gauge text-center p-t-30">
	            <div id="gaugeDemo" class="gauge gauge-big gauge-red">
	                <div class="gauge-arrow" data-percentage="40" style="transform: rotate(0deg);"> </div>
	            </div>
	        </div>
	        <div class="panel p-t-30">
	            <div class="panel-footer p-t-30">
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
	</div>
	<!-- /.row -->
	<!-- ============================================================== -->
	<!-- Recent comment, table & feed widgets -->
	<!-- ============================================================== -->
	<div class="row">
	    <div class="col-md-12 col-lg-6 col-sm-12">
	        <div class="white-box">
	            <h3 class="box-title">Recent Comments</h3>
	            <div class="comment-center p-t-10">
	                <div class="comment-body">
	                    <div class="user-img"> <img src="console/images/users/pawandeep.jpg" alt="user" class="img-circle"></div>
	                    <div class="mail-contnet">
	                        <h5>Pavan kumar</h5><span class="time">10:20 AM   20  may 2016</span> <span class="label label-rouded label-info">PENDING</span>
	                        <br/><span class="mail-desc">Donec ac condimentum massa. Etiam pellentesque pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo dui pellentesque molestie feugiat. Aenean commodo dui pellentesque molestie feugiat</span> <a href="javacript:void(0)" class="btn btn btn-rounded btn-default btn-outline m-r-5"><i class="ti-check text-success m-r-5"></i>Approve</a><a href="javacript:void(0)" class="btn-rounded btn btn-default btn-outline"><i class="ti-close text-danger m-r-5"></i> Reject</a> </div>
	                </div>
	                <div class="comment-body">
	                    <div class="user-img"> <img src="console/images/users/sonu.jpg" alt="user" class="img-circle"> </div>
	                    <div class="mail-contnet">
	                        <h5>Sonu Nigam</h5><span class="time">10:20 AM   20  may 2016</span> <span class="label label-rouded label-success">APPROVED</span>
	                        <br/><span class="mail-desc">Donec ac condimentum massa. Etiam pellentesque pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo dui pellentesque molestie feugiat. Aenean commodo dui pellentesque molestie feugiat</span> </div>
	                </div>
	                <div class="comment-body b-none">
	                    <div class="user-img"> <img src="console/images/users/arijit.jpg" alt="user" class="img-circle"> </div>
	                    <div class="mail-contnet">
	                        <h5>Arijit singh</h5><span class="time">10:20 AM   20  may 2016</span> <span class="label label-rouded label-danger">REJECTED</span>
	                        <br/><span class="mail-desc">Donec ac condimentum massa. Etiam pellentesque pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo dui pellentesque molestie feugiat. Aenean commodo dui pellentesque molestie feugiat</span> </div>
	                </div>
	            </div>
	        </div>
	    </div>
	    <div class="col-md-12 col-lg-6 col-sm-12">
	        <div class="white-box">
	            <div class="col-md-3 col-sm-4 col-xs-6 pull-right">
	                <select class="form-control pull-right row b-none">
	                    <option>March 2017</option>
	                    <option>April 2017</option>
	                    <option>May 2017</option>
	                    <option>June 2017</option>
	                    <option>July 2017</option>
	                </select>
	            </div>
	            <h3 class="box-title">Recent sales</h3>
	            <div class="row sales-report">
	                <div class="col-md-6 col-sm-6 col-xs-6">
	                    <h2>March 2017</h2>
	                    <p>SALES REPORT</p>
	                </div>
	                <div class="col-md-6 col-sm-6 col-xs-6 ">
	                    <h1 class="text-right text-info m-t-20">$3,690</h1>
	                </div>
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
	                            <td>3</td>
	                            <td class="txt-oflo">Ample Admin</td>
	                            <td><span class="label label-info label-rouded">EXTENDED</span></td>
	                            <td class="txt-oflo">April 19, 2017</td>
	                            <td><span class="text-info">$1250</span></td>
	                        </tr>
	                        <tr>
	                            <td>4</td>
	                            <td class="txt-oflo">Medical Pro WP Theme</td>
	                            <td><span class="label label-danger label-rouded">TAX</span></td>
	                            <td class="txt-oflo">April 20, 2017</td>
	                            <td><span class="text-danger">-$24</span></td>
	                        </tr>
	                        <tr>
	                            <td>5</td>
	                            <td class="txt-oflo">Hosting press html</td>
	                            <td><span class="label label-warning label-rouded">SALE</span></td>
	                            <td class="txt-oflo">April 21, 2017</td>
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
	                </table>
	            </div>
	        </div>
	    </div>
	</div>
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
	                        <h3 class="m-b-0">Daniel Kristeen</h3>
	                        <h5 class="m-t-0">UIUX Designer</h5><a href="javascript:void(0)" class="btn btn-rounded btn-success"><i class="ti-plus m-r-5"></i> FOLLOW</a></div>
	                </div>
	                <div class="row text-center m-t-30">
	                    <div class="col-xs-4 b-r">
	                        <h2>14</h2>
	                        <h4>PHOTOS</h4>
	                    </div>
	                    <div class="col-xs-4 b-r">
	                        <h2>54</h2>
	                        <h4>VIDEOS</h4></div>
	                    <div class="col-xs-4">
	                        <h2>145</h2>
	                        <h4>TASKS</h4>
	                    </div>
	                </div>
	            </div>
	            <hr class="m-t-10" />
	            <div class="p-20 text-center">
	                <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore adgadg et dolore </p>
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
	        <div class="white-box bg-theme m-b-0 p-b-0 mailbox-widget">
	            <h2 class="text-white p-b-20">Your Mailbox</h2>
	            <ul class="nav customtab nav-tabs" role="tablist">
	                <li role="presentation" class="active"><a href="#home1" role="tab" data-toggle="tab" aria-expanded="true"><span class="visible-xs"><i class="ti-email"></i></span><span class="hidden-xs"> INBOX</span></a></li>
	                <li role="presentation" class=""><a href="#profile1" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-export"></i></span> <span class="hidden-xs">SENT</span></a></li>
	                <li role="presentation" class=""><a href="#messages1" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-panel"></i></span> <span class="hidden-xs">SPAM</span></a></li>
	                <li role="presentation" class=""><a href="#settings1" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-trash"></i></span> <span class="hidden-xs">DELETED</span></a></li>
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
	                        <h3><i class="ti-email"></i> 350 Unread emails</h3>
	                    </div>
	                    <div class="inbox-center table-responsive">
	                        <table class="table table-hover">
	                            <tbody>
	                                <tr class="unread">
	                                    <td>&nbsp;</td>
	                                    <td style="width: 50px;">
	                                        <div class="checkbox checkbox-info m-t-0 m-b-0">
	                                            <input type="checkbox">
	                                            <label></label>
	                                        </div>
	                                    </td>
	                                    <td class="hidden-xs" style="width: 50px;"><i class="fa fa-star-o"></i></td>
	                                    <td class="hidden-xs">Hritik Roshan</td>
	                                    <td class="max-texts"> <a href="inbox-detail.html"><span class="label label-info m-r-10">Work</span> Lorem ipsum perspiciatis unde omnis iste</a></td>
	                                    <td class="hidden-xs"><i class="fa fa-paperclip"></i></td>
	                                    <td class="text-right"> May 13 </td>
	                                    <td>&nbsp;</td>
	                                </tr>
	                                <tr class="unread">
	                                    <td>&nbsp;</td>
	                                    <td>
	                                        <div class="checkbox checkbox-info m-t-0 m-b-0">
	                                            <input type="checkbox">
	                                            <label></label>
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
	                                            <label></label>
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
	                                            <label></label>
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
	                                            <label></label>
	                                        </div>
	                                    </td>
	                                    <td class="hidden-xs"><i class="fa fa-star-o"></i></td>
	                                    <td class="hidden-xs">Ritesh Deshmh</td>
	                                    <td class="max-texts"><a href="inbox-detail.html"><span class="label label-success">Elite</span> Lorem ipsum perspiciatis unde omnis</a></td>
	                                    <td class="hidden-xs"></td>
	                                    <td class="text-right"> May 11 </td>
	                                    <td>&nbsp;</td>
	                                </tr>
	                                <tr>
	                                    <td>&nbsp;</td>
	                                    <td>
	                                        <div class="checkbox checkbox-info m-t-0 m-b-0">
	                                            <input type="checkbox">
	                                            <label></label>
	                                        </div>
	                                    </td>
	                                    <td class="hidden-xs"><i class="fa fa-star-o"></i></td>
	                                    <td class="hidden-xs">Akshay Kumar</td>
	                                    <td class="max-texts"><a href="inbox-detail.html"><span class="label label-warning">Work</span> Lorem ipsum perspiciatis undeem</a></td>
	                                    <td class="hidden-xs"><i class="fa fa-paperclip"></i></td>
	                                    <td class="text-right"> May 11 </td>
	                                    <td>&nbsp;</td>
	                                </tr>
	                                <tr>
	                                    <td>&nbsp;</td>
	                                    <td>
	                                        <div class="checkbox m-t-0 m-b-0">
	                                            <input type="checkbox">
	                                            <label></label>
	                                        </div>
	                                    </td>
	                                    <td class="hidden-xs"><i class="fa fa-star-o"></i></td>
	                                    <td class="hidden-xs">Hritik Roshan</td>
	                                    <td class="max-texts"><a href="inbox-detail.html"><span class="label label-info m-r-10">Work</span> Lorem ipsum perspiciatis undem</a></td>
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
	                        <h4>you can use it with the small code</h4>
	                    </div>
	                    <div class="col-md-5 pull-right">
	                        <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
	                    </div>
	                    <div class="clearfix"></div>
	                </div>
	                <div role="tabpanel" class="tab-pane fade" id="messages1">
	                    <div class="col-md-6">
	                        <h3>Come on you have a lot message</h3>
	                        <h4>you can use it with the small code</h4>
	                    </div>
	                    <div class="col-md-5 pull-right">
	                        <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
	                    </div>
	                    <div class="clearfix"></div>
	                </div>
	                <div role="tabpanel" class="tab-pane fade" id="settings1">
	                    <div class="col-md-6">
	                        <h3>Just do Settings</h3>
	                        <h4>you can use it with the small code</h4>
	                    </div>
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
	<!-- To do list, & Feed widgets -->
	<!-- ============================================================== -->
	<div class="row">
	    <div class="col-lg-6 col-sm-12 col-md-6">
	        <div class="panel">
	            <div class="p-20">
	                <div class="row">
	                    <div class="col-xs-8">
	                        <h4 class="m-b-0">Total Earnings</h4>
	                        <h2 class="m-t-0 font-medium">$580.50</h2>
	                    </div>
	                    <div class="col-xs-4 p-20">
	                        <select class="form-control">
	                            <option>DEC</option>
	                            <option>JAN</option>
	                            <option>FEB</option>
	                        </select>
	                    </div>
	                </div>
	            </div>
	            <div class="panel-footer bg-extralight">
	                <ul class="earning-box">
	                    <li>
	                        <div class="er-row">
	                            <div class="er-pic"><img src="console/images/users/genu.jpg" alt="varun" width="60" class="img-circle"></div>
	                            <div class="er-text">
	                                <h3>Andrew Simon</h3><span class="text-muted">10-11-2016</span></div>
	                            <div class="er-count ">$<span class="counter">46</span></div>
	                        </div>
	                    </li>
	                    <li>
	                        <div class="er-row">
	                            <div class="er-pic"><img src="console/images/users/govinda.jpg" alt="varun" width="60" class="img-circle"></div>
	                            <div class="er-text">
	                                <h3>Daniel Kristeen</h3><span class="text-muted">10-11-2016</span></div>
	                            <div class="er-count ">$<span class="counter">55</span></div>
	                        </div>
	                    </li>
	                    <li>
	                        <div class="er-row">
	                            <div class="er-pic"><img src="console/images/users/hritik.jpg" alt="varun" width="60" class="img-circle"></div>
	                            <div class="er-text">
	                                <h3>Dany John</h3><span class="text-muted">10-11-2016</span></div>
	                            <div class="er-count ">$<span class="counter">72</span></div>
	                        </div>
	                    </li>
	                    <li>
	                        <div class="er-row">
	                            <div class="er-pic"><img src="console/images/users/pawandeep.jpg" alt="varun" width="60" class="img-circle"></div>
	                            <div class="er-text">
	                                <h3>Chris gyle</h3><span class="text-muted">10-11-2016</span></div>
	                            <div class="er-count ">$<span class="counter">66</span></div>
	                        </div>
	                    </li>
	                    <li class="center">
	                        <a class="btn btn-rounded btn-danger btn-block p-10">Withdrow money</a>
	                    </li>
	                </ul>
	            </div>
	        </div>
	    </div>
	    <div class="col-lg-6 col-sm-12 col-md-6">
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
	                    <div class="bg-danger"><i class="ti-user text-white"></i></div> New user registered.<span class="text-muted">30 May</span></li>
	                <li>
	                    <div class="bg-inverse"><i class="fa fa-bell-o text-white"></i></div> New Version just arrived. <span class="text-muted">27 May</span></li>
	                <li>
	                    <div class="bg-purple"><i class="ti-settings text-white"></i></div> You have 4 pending tasks. <span class="text-muted">27 May</span></li>
	            </ul>
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