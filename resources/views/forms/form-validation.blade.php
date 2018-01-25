@extends('layouts.console')

@push('stylesheets')

@endpush

@section('content')

    <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">Validation Forms Page</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
            <a href="javascript: void(0);" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Forms</a></li>
                <li class="active">Validation Forms Page</li>
            </ol>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- .row -->
    <div class="row">
        <div class="col-sm-12">
            <div class="white-box">
                <h3 class="box-title m-b-0">Form Validation</h3>
                <p class="text-muted m-b-30"> Bootstrap Form Validation</p>
                <form data-toggle="validator">
                    <div class="form-group">
                        <label for="inputName1" class="control-label">Name</label>
                        <input type="text" class="form-control" id="inputName1" placeholder="Cina Saffary" required> </div>
                    <div class="form-group">
                        <label for="inputEmail" class="control-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail" placeholder="Email" data-error="Bruh, that email address is invalid" required>
                        <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group">
                        <label for="textarea" class="control-label">Text area</label>
                        <textarea id="textarea" class="form-control" required></textarea> <span class="help-block with-errors">Hey look, this one has feedback icons!</span> </div>
                    <div class="form-group">
                        <label for="inputPassword" class="control-label">Password</label>
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <input type="password" data-toggle="validator" data-minlength="6" class="form-control" id="inputPassword" placeholder="Password" required> <span class="help-block">Minimum of 6 characters</span> </div>
                            <div class="form-group col-sm-6">
                                <input type="password" class="form-control" id="inputPasswordConfirm" data-match="#inputPassword" data-match-error="Whoops, these don't match" placeholder="Confirm" required>
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="radio">
                            <input type="radio" name="underwear" id="out" required>
                            <label for="out"> Boxers </label>
                        </div>
                        <div class="radio">
                            <input type="radio" name="underwear" id="in" required>
                            <label for="in"> Briefs </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="checkbox">
                            <input type="checkbox" id="terms" data-error="Before you wreck yourself" required>
                            <label for="terms"> Check yourself </label>
                            <div class="help-block with-errors"></div>
                        </div>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="white-box">
                <h3 class="box-title m-b-0">Form Validation</h3>
                <p class="text-muted m-b-30"> Bootstrap Form Validation</p>
                <form data-toggle="validator">
                    <div class="form-group">
                        <label for="inputName" class="control-label">Name</label>
                        <input type="text" class="form-control" id="inputName" placeholder="Cina Saffary" required> </div>
                    <div class="form-group">
                        <label for="inputEmail2" class="control-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail2" placeholder="Email" data-error="Bruh, that email address is invalid" required>
                        <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group">
                        <label for="inputPassword2" class="control-label">Password</label>
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <input type="password" data-toggle="validator" data-minlength="6" class="form-control" id="inputPassword2" placeholder="Password" required> <span class="help-block">Minimum of 6 characters</span> </div>
                            <div class="form-group col-sm-6">
                                <input type="password" class="form-control" id="inputPasswordConfirm2" data-match="#inputPassword" data-match-error="Whoops, these don't match" placeholder="Confirm" required>
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="checkbox">
                            <input type="checkbox" id="terms2" data-error="Before you wreck yourself" required>
                            <label for="terms"> Remember Me?</label>
                            <div class="help-block with-errors"></div>
                        </div>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-success">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="white-box">
                <h3 class="box-title m-b-0">Horizontal Form Validation</h3>
                <p class="text-muted m-b-30"> Bootstrap Form Validation </p>
                <form data-toggle="validator" class="form-horizontal">
                    <div class="form-group">
                        <label for="inputName4" class="control-label col-sm-3">Name</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="inputName4" placeholder="Cina Saffary" required>
                            <div class="help-block with-errors"></div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputEmail4" class="control-label col-sm-3">Email</label>
                        <div class="col-sm-9">
                            <input type="email" class="form-control" id="inputEmail4" placeholder="Email" data-error="Bruh, that email address is invalid" required>
                            <div class="help-block with-errors"></div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputPassword4" class="control-label col-sm-3">Password</label>
                        <div class="col-sm-4">
                            <input type="password" data-toggle="validator" data-minlength="6" class="form-control" id="inputPassword4" placeholder="Password" required> <span class="help-block">Minimum of 6 characters</span> </div>
                        <div class="col-sm-4">
                            <input type="password" class="form-control" id="inputPasswordConfirm4" data-match="#inputPassword" data-match-error="Whoops, these don't match" placeholder="Confirm" required>
                            <div class="help-block with-errors"></div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="checkbox">
                            <div class="col-sm-9  col-sm-offset-3">
                                <input type="checkbox" id="terms4" data-error="Before you wreck yourself" required>
                                <label for="terms4"> Remember Me?</label>
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-9 col-sm-offset-3">
                            <button type="submit" class="btn btn-info">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

@endsection

@push('scripts')

@endpush