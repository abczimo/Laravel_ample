@extends('layouts.console')

@push('stylesheets')

@endpush

@section('content')

	<div class="row bg-title">
	    <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
	        <h4 class="page-title">Product Orders</h4> </div>
	    <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
	        <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
	        <a href="javascript: void(0);" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
	        <ol class="breadcrumb">
	            <li><a href="#">Dashboard</a></li>
	            <li class="active">Product Orders</li>
	        </ol>
	    </div>
	    <!-- /.col-lg-12 -->
	</div>
	<div class="row">
	    <div class="white-box">
	        <div class="table-responsive">
	            <table class="table product-overview" id="myTable">
	                <thead>
	                    <tr>
	                        <th>Customer</th>
	                        <th>Order ID</th>
	                        <th>Photo</th>
	                        <th>Product</th>
	                        <th>Quantity</th>
	                        <th>Date</th>
	                        <th>Status</th>
	                        <th>Actions</th>
	                    </tr>
	                </thead>
	                <tbody>
	                    <tr>
	                        <td>Steave Jobs</td>
	                        <td>#85457898</td>
	                        <td> <img src="console/images/chair.jpg" alt="iMac" width="80"> </td>
	                        <td>Rounded Chair</td>
	                        <td>20</td>
	                        <td>10-7-2017</td>
	                        <td> <span class="label label-success font-weight-100">Paid</span> </td>
	                        <td><a href="javascript:void(0)" class="text-inverse p-r-10" data-toggle="tooltip" title="Edit"><i class="ti-marker-alt"></i></a> <a href="javascript:void(0)" class="text-inverse" title="Delete" data-toggle="tooltip"><i class="ti-trash"></i></a></td>
	                    </tr>
	                    <tr>
	                        <td>Varun Dhavan</td>
	                        <td>#95457898</td>
	                        <td> <img src="console/images/chair2.jpg" alt="iPhone" width="80"> </td>
	                        <td>Wooden Chair</td>
	                        <td>25</td>
	                        <td>09-7-2017</td>
	                        <td> <span class="label label-warning font-weight-100">Pending</span> </td>
	                        <td><a href="javascript:void(0)" class="text-inverse p-r-10" data-toggle="tooltip" title="Edit"><i class="ti-marker-alt"></i></a> <a href="javascript:void(0)" class="text-inverse" title="Delete" data-toggle="tooltip"><i class="ti-trash"></i></a></td>
	                    </tr>
	                    <tr>
	                        <td>Ritesh Desh</td>
	                        <td>#68457898</td>
	                        <td> <img src="console/images/chair3.jpg" alt="apple_watch" width="80"> </td>
	                        <td>Gray Chair</td>
	                        <td>12</td>
	                        <td>08-7-2017</td>
	                        <td> <span class="label label-success font-weight-100">Paid</span> </td>
	                        <td><a href="javascript:void(0)" class="text-inverse p-r-10" data-toggle="tooltip" title="Edit"><i class="ti-marker-alt"></i></a> <a href="javascript:void(0)" class="text-inverse" title="Delete" data-toggle="tooltip"><i class="ti-trash"></i></a></td>
	                    </tr>
	                    <tr>
	                        <td>Hrithik</td>
	                        <td>#45457898</td>
	                        <td> <img src="console/images/chair4.jpg" alt="mac_mouse" width="80"> </td>
	                        <td>Pure Wooden chair</td>
	                        <td>18</td>
	                        <td>02-7-2017</td>
	                        <td> <span class="label label-default font-weight-100">Failed</span> </td>
	                        <td><a href="javascript:void(0)" class="text-inverse p-r-10" data-toggle="tooltip" title="Edit"><i class="ti-marker-alt"></i></a> <a href="javascript:void(0)" class="text-inverse" title="Delete" data-toggle="tooltip"><i class="ti-trash"></i></a></td>
	                    </tr>
	                    <tr>
	                        <td>Genelia Jobs</td>
	                        <td>#65257898</td>
	                        <td> <img src="console/images/chair.jpg" alt="iMac" width="80"> </td>
	                        <td>Globe Rounded Chair</td>
	                        <td>25</td>
	                        <td>08-7-2017</td>
	                        <td> <span class="label label-success font-weight-100">Paid</span> </td>
	                        <td><a href="javascript:void(0)" class="text-inverse p-r-10" data-toggle="tooltip" title="Edit"><i class="ti-marker-alt"></i></a> <a href="javascript:void(0)" class="text-inverse" title="Delete" data-toggle="tooltip"><i class="ti-trash"></i></a></td>
	                    </tr>
	                    <tr>
	                        <td>Sonu Nigam</td>
	                        <td>#15457898</td>
	                        <td> <img src="console/images/chair2.jpg" alt="iPhone" width="80"> </td>
	                        <td>Gold Wooden Chair</td>
	                        <td>15</td>
	                        <td>06-7-2017</td>
	                        <td> <span class="label label-warning font-weight-100">Pending</span> </td>
	                        <td><a href="javascript:void(0)" class="text-inverse p-r-10" data-toggle="tooltip" title="Edit"><i class="ti-marker-alt"></i></a> <a href="javascript:void(0)" class="text-inverse" title="Delete" data-toggle="tooltip"><i class="ti-trash"></i></a></td>
	                    </tr>
	                    <tr>
	                        <td>Pawan Trivedi</td>
	                        <td>#56457898</td>
	                        <td> <img src="console/images/chair3.jpg" alt="apple_watch" width="80"> </td>
	                        <td>Still Gray Chair</td>
	                        <td>11</td>
	                        <td>05-7-2017</td>
	                        <td> <span class="label label-success font-weight-100">Paid</span> </td>
	                        <td><a href="javascript:void(0)" class="text-inverse p-r-10" data-toggle="tooltip" title="Edit"><i class="ti-marker-alt"></i></a> <a href="javascript:void(0)" class="text-inverse" title="Delete" data-toggle="tooltip"><i class="ti-trash"></i></a></td>
	                    </tr>
	                    <tr>
	                        <td>Ranbir kapoor</td>
	                        <td>#35457898</td>
	                        <td> <img src="console/images/chair4.jpg" alt="mac_mouse" width="80"> </td>
	                        <td>Comfirtable chair</td>
	                        <td>28</td>
	                        <td>01-7-2017</td>
	                        <td> <span class="label label-default font-weight-100">Failed</span> </td>
	                        <td><a href="javascript:void(0)" class="text-inverse p-r-10" data-toggle="tooltip" title="Edit"><i class="ti-marker-alt"></i></a> <a href="javascript:void(0)" class="text-inverse" title="Delete" data-toggle="tooltip"><i class="ti-trash"></i></a></td>
	                    </tr>
	                </tbody>
	            </table>
	        </div>
	    </div>
	</div>

@endsection

@push('scripts')

@endpush