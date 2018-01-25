@extends('layouts.console')

@push('stylesheets')

@endpush

@section('content')

    <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">Product Edit</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
            <a href="javascript: void(0);" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li class="active">Product Edit</li>
            </ol>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-info">
                <div class="panel-heading"> Edit Product</div>
                <div class="panel-wrapper collapse in" aria-expanded="true">
                    <div class="panel-body">
                        <form action="#">
                            <div class="form-body">
                                <h3 class="box-title">About Product</h3>
                                <hr>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label">Product Name</label>
                                            <input type="text" id="firstName" class="form-control" placeholder="Rounded Chair"> </div>
                                    </div>
                                    <!--/span-->
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label">Sub text</label>
                                            <input type="text" id="lastName" class="form-control" placeholder="globe type chair for rest"> </div>
                                    </div>
                                    <!--/span-->
                                </div>
                                <!--/row-->
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
                                            <label class="control-label">Status</label>
                                            <div class="radio-list">
                                                <label class="radio-inline p-0">
                                                    <div class="radio radio-info">
                                                        <input type="radio" name="radio" id="radio1" value="option1">
                                                        <label for="radio1">Published</label>
                                                    </div>
                                                </label>
                                                <label class="radio-inline">
                                                    <div class="radio radio-info">
                                                        <input type="radio" name="radio" id="radio2" value="option2">
                                                        <label for="radio2">Draft</label>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <!--/span-->
                                </div>
                                <!--/row-->
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Price</label>
                                            <div class="input-group">
                                                <div class="input-group-addon"><i class="ti-money"></i></div>
                                                <input type="text" class="form-control" id="exampleInputuname" placeholder="153"> </div>
                                        </div>
                                    </div>
                                    <!--/span-->
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Discount</label>
                                            <div class="input-group">
                                                <div class="input-group-addon"><i class="ti-cut"></i></div>
                                                <input type="text" class="form-control" id="exampleInputuname" placeholder="36%"> </div>
                                        </div>
                                    </div>
                                    <!--/span-->
                                </div>
                                <h3 class="box-title m-t-40">Product Description</h3>
                                <div class="row">
                                    <div class="col-md-12 ">
                                        <div class="form-group">
                                            <textarea class="form-control" rows="4">Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. but the majority have suffered alteration in some form, by injected humour</textarea>
                                        </div>
                                    </div>
                                </div>
                                <!--/row-->
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Meta Title</label>
                                            <input type="text" class="form-control"> </div>
                                    </div>
                                    <!--/span-->
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Meta Keyword</label>
                                            <input type="text" class="form-control"> </div>
                                    </div>
                                    <!--/span-->
                                    <div class="col-md-3">
                                        <h3 class="box-title m-t-20">Upload Image</h3>
                                        <div class="product-img"> <img src="console/images/chair.jpg">
                                            <div class="pro-img-overlay"><a href="javascript:void(0)" class="bg-info"><i class="ti-marker-alt"></i></a> <a href="javascript:void(0)" class="bg-danger"><i class="ti-trash"></i></a></div>
                                            <div class="fileupload btn btn-info waves-effect waves-light"><span><i class="ion-upload m-r-5"></i>Upload Anonther Image</span>
                                                <input type="file" class="upload"> </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <h3 class="box-title m-t-40">GENERAL INFO</h3>
                                        <div class="table-responsive">
                                            <table class="table table-bordered td-padding">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <input type="text" class="form-control" placeholder="Brand">
                                                        </td>
                                                        <td>
                                                            <input type="text" class="form-control" placeholder="Stellar">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <input type="text" class="form-control" placeholder="Delivery Condition">
                                                        </td>
                                                        <td>
                                                            <input type="text" class="form-control" placeholder="Knock Down">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <input type="text" class="form-control" placeholder="Seat Lock Included">
                                                        </td>
                                                        <td>
                                                            <input type="text" class="form-control" placeholder="Yes">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <input type="text" class="form-control" placeholder="Type">
                                                        </td>
                                                        <td>
                                                            <input type="text" class="form-control" placeholder="Office Chair">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <input type="text" class="form-control" placeholder="Style">
                                                        </td>
                                                        <td>
                                                            <input type="text" class="form-control" placeholder="Contemporary & Modern">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <input type="text" class="form-control" placeholder="Wheels Included">
                                                        </td>
                                                        <td>
                                                            <input type="text" class="form-control" placeholder="Yes">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <input type="text" class="form-control" placeholder="Upholstery Included">
                                                        </td>
                                                        <td>
                                                            <input type="text" class="form-control" placeholder="Yes">
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <hr> </div>
                            <div class="form-actions m-t-40">
                                <button type="submit" class="btn btn-success"> <i class="fa fa-check"></i> Save</button>
                                <button type="button" class="btn btn-default">Cancel</button>
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