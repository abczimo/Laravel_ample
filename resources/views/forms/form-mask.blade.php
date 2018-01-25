@extends('layouts.console')

@push('stylesheets')

@endpush

@section('content')

    <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">Form Mask</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
            <a href="javascript: void(0);" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Forms</a></li>
                <li class="active">Form Mask</li>
            </ol>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- .row -->
    <div class="row">
        <div class="col-sm-12">
            <div class="white-box">
                <h3 class="box-title m-b-0">Form Addons</h3>
                <p class="text-muted m-b-30 font-13"> Use the button classes on an <code>data-mask</code> to the input element.</p>
                <div class="row">
                    <div class="col-md-12">
                        <form action="#">
                            <div class="form-group">
                                <label>Phone</label>
                                <input type="text" placeholder="" data-mask="(999) 999-9999" class="form-control"> <span class="font-13 text-muted">(999) 999-9999</span> </div>
                            <div class="form-group">
                                <label>Date</label>
                                <input type="text" placeholder="" data-mask="99/99/9999" class="form-control"> <span class="font-13 text-muted">dd/mm/yyyy</span> </div>
                            <div class="form-group">
                                <label>SSN field 1</label>
                                <input type="text" placeholder="" data-mask="999-99-9999" class="form-control"> <span class="font-13 text-muted">e.g "999-99-9999"</span> </div>
                            <div class="form-group">
                                <label>Phone field + ext.</label>
                                <input type="text" placeholder="" data-mask="+40 999 999 999" class="form-control"> <span class="font-13 text-muted">+40 999 999 999</span> </div>
                            <div class="form-group">
                                <label>Product Key</label>
                                <input type="text" placeholder="" data-mask="a*-999-a999" class="form-control"> <span class="font-13 text-muted">e.g a*-999-a999</span> </div>
                        </form>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <form action="#">
                            <div class="form-group">
                                <label>Currency</label>
                                <input type="text" placeholder="" data-mask="$ 999,999,999.99" class="form-control"> <span class="font-13 text-muted">$ 999,999,999.99</span> </div>
                            <div class="form-group">
                                <label>Date 2</label>
                                <input type="text" placeholder="" data-mask="99-99-9999" class="form-control"> <span class="font-13 text-muted">dd-mm-yyyy</span> </div>
                            <div class="form-group">
                                <label>Eye Script</label>
                                <input type="text" placeholder="" data-mask="~9.99 ~9.99 999" class="form-control"> <span class="font-13 text-muted">~9.99 ~9.99 999</span> </div>
                            <div class="form-group">
                                <label>Percent</label>
                                <input type="text" placeholder="" data-mask="99%" class="form-control"> <span class="font-13 text-muted">e.g "99%"</span> </div>
                            <div class="form-group m-b-0">
                                <label>Pc Ip</label>
                                <input type="text" placeholder="" data-mask="999.999.999.9999" class="form-control"> <span class="font-13 text-muted">e.g "999.999.999.9999"</span> </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection

@push('scripts')

    <script src="console/js/mask.js"></script>

@endpush