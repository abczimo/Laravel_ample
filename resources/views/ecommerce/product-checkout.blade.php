@extends('layouts.console')

@push('stylesheets')

@endpush

@section('content')

    <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">Product Checkout</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
            <a href="javascript: void(0);" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li class="active">Product Checkout</li>
            </ol>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- row -->
    <div class="row">
        <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="white-box">
                <h1 class="m-t-0"><i class="fa fa-cc-visa text-info"></i></h1>
                <h2>**** **** **** 2150</h2> <span class="pull-right">Expiry date: 10/16</span> <span class="font-500">Johnathan Doe</span> </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="white-box">
                <h1 class="m-t-0"><i class="fa fa-cc-mastercard text-danger"></i></h1>
                <h2>**** **** **** 2150</h2> <span class="pull-right">Expiry date: 10/16</span> <span class="font-500">Johnathan Doe</span> </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="white-box">
                <h1 class="m-t-0"><i class="fa fa-cc-discover text-success"></i></h1>
                <h2>**** **** **** 2150</h2> <span class="pull-right">Expiry date: 10/16</span> <span class="font-500">Johnathan Doe</span> </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="white-box">
                <h1 class="m-t-0"><i class="fa fa-cc-amex text-warning"></i></h1>
                <h2>**** **** **** 2150</h2> <span class="pull-right">Expiry date: 10/16</span> <span class="font-500">Johnathan Doe</span> </div>
        </div>
    </div>
    <!--/.row -->
    <!-- /row -->
    <div class="row">
        <div class="col-md-12 col-xs-12">
            <div class="white-box">
                <h3 class="box-title">Product Summary</h3>
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Photo</th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img src="console/images/chair.jpg" alt="iMac" width="80"></td>
                                <td>Rounded Chair</td>
                                <td>20</td>
                                <td class="font-500">$153</td>
                            </tr>
                            <tr>
                                <td colspan="3" class="font-500" align="right">Total Amount</td>
                                <td class="font-500">$153</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <hr>
                <h3 class="box-title">Choose payment Option</h3>
                <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" class="active"><a href="#iprofile" aria-controls="profile" role="tab" data-toggle="tab" aria-expanded="false"><span><i class="fa fa-credit-card"></i></span> Dabit Card</a></li>
                    <li role="presentation" class=""><a href="#ihome" aria-controls="home" role="tab" data-toggle="tab" aria-expanded="true"><span><i class="fa fa-cc-paypal text-info"></i></span> Paypal</a></li>
                </ul>
                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane " id="ihome"> You can pay your money through paypal, for more info <a href="">click here</a>
                        <br>
                        <br>
                        <button class="btn btn-info"><i class="fa fa-cc-paypal"></i> Pay with Paypal</button>
                    </div>
                    <div role="tabpanel" class="tab-pane active" id="iprofile">
                        <div class="col-md-7 col-sm-5">
                            <form>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">CARD NUMBER</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa fa-credit-card"></i></div>
                                        <input type="text" class="form-control" id="exampleInputuname" placeholder="Card Number"> </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-7 col-md-7">
                                        <div class="form-group">
                                            <label>EXPIRATION DATE</label>
                                            <input type="text" class="form-control" name="Expiry" placeholder="MM / YY" required=""> </div>
                                    </div>
                                    <div class="col-xs-5 col-md-5 pull-right">
                                        <div class="form-group">
                                            <label>CV CODE</label>
                                            <input type="text" class="form-control" name="CVC" placeholder="CVC" required=""> </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="form-group">
                                            <label>NAME OF CARD</label>
                                            <input type="text" class="form-control" name="nameCard" placeholder="NAME AND SURNAME"> </div>
                                    </div>
                                </div>
                                <button class="btn btn-info">Make Payment</button>
                            </form>
                        </div>
                        <div class="col-md-4 col-sm-5 pull-right">
                            <h3 class="box-title m-t-10">General Info</h3>
                            <h2><i class="fa fa-cc-visa text-info"></i> <i class="fa fa-cc-mastercard text-danger"></i> <i class="fa fa-cc-discover text-success"></i> <i class="fa fa-cc-amex text-warning"></i></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection

@push('scripts')

@endpush