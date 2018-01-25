@extends('layouts.console')

@push('stylesheets')

@endpush

@section('content')

    <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">Treeview</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
            <a href="javascript: void(0);" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li class="active">Treeview</li>
            </ol>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- .row -->
    <div class="row">
        <div class="col-md-12">
            <div class="white-box">
                <div class="row">
                    <div class="col-sm-4 col-xs-12">
                        <h3 class="box-title">Default</h3>
                        <div id="treeview1" class=""></div>
                    </div>
                    <div class="col-sm-4 col-xs-12">
                        <h3 class="box-title">Collapsed</h3>
                        <div id="treeview2" class=""></div>
                    </div>
                    <div class="col-sm-4 col-xs-12">
                        <h3 class="box-title">Tags as Badges</h3>
                        <div id="treeview3" class=""></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--/.row -->
    <!-- .row -->
    <div class="row">
        <div class="col-md-12">
            <div class="white-box">
                <div class="row">
                    <div class="col-sm-4 col-xs-12">
                        <h3 class="box-title">Blue Theme</h3>
                        <div id="treeview4" class=""></div>
                    </div>
                    <div class="col-sm-4 col-xs-12">
                        <h3 class="box-title">Custom Icons</h3>
                        <div id="treeview5" class=""></div>
                    </div>
                    <div class="col-sm-4 col-xs-12">
                        <h3 class="box-title">Expanded</h3>
                        <div id="treeview6" class=""></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--/.row -->
    <!-- .row -->
    <div class="row">
        <div class="col-md-12">
            <div class="white-box">
                <h3 class="box-title">Searchable Tree</h3>
                <div class="row">
                    <div class="col-sm-4">
                        <h2>Input</h2>
                        <!-- <form> -->
                        <div class="form-group">
                            <label for="input-search" class="sr-only">Search Tree:</label>
                            <input type="input" class="form-control" id="input-search" placeholder="Type to search..." value=""> </div>
                        <div class="checkbox checkbox-info">
                            <input type="checkbox" class="checkbox" id="chk-ignore-case" value="false">
                            <label for="chk-ignore-case">Ignore Case</label>
                        </div>
                        <div class="checkbox checkbox-info">
                            <input type="checkbox" class="checkbox" id="chk-exact-match" value="false">
                            <label for="chk-exact-match">Exact Match</label>
                        </div>
                        <div class="checkbox checkbox-info">
                            <input type="checkbox" class="checkbox" id="chk-reveal-results" value="false">
                            <label for="chk-reveal-results">Reveal Results</label>
                        </div>
                        <button type="button" class="btn btn-success" id="btn-search">Search</button>
                        <button type="button" class="btn btn-default" id="btn-clear-search">Clear</button>
                        <!-- </form> -->
                    </div>
                    <div class="col-sm-4">
                        <h2>Tree</h2>
                        <div id="treeview-searchable" class=""></div>
                    </div>
                    <div class="col-sm-4">
                        <h2>Results</h2>
                        <div id="search-output"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection

@push('scripts')

    <!-- Treeview Plugin JavaScript -->
    <script src="console/plugins/bootstrap-treeview-master/dist/bootstrap-treeview.min.js"></script>
    <script src="console/plugins/bootstrap-treeview-master/dist/bootstrap-treeview-init.js"></script>

@endpush