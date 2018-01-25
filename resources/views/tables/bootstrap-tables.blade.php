@extends('layouts.console')

@push('stylesheets')

    <link href="console/plugins/bootstrap-table/dist/bootstrap-table.min.css" rel="stylesheet" type="text/css" />

@endpush

@section('content')

    <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">Bootstrap Table</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
            <a href="javascript: void(0);" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Table</a></li>
                <li class="active">Bootstrap Table</li>
            </ol>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- /row -->
    <div class="row">
        <div class="col-sm-12">
            <div class="white-box">
                <h3 class="box-title m-b-0">Bootstrap Simple Table</h3>
                <p class="text-muted m-b-30">Simple table example</p>
                <table data-toggle="table" data-height="250" data-mobile-responsive="true" class="table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Stars</th>
                            <th>Forks</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="tr-id-1" class="tr-class-1">
                            <td id="td-id-1" class="td-class-1"> bootstrap-table </td>
                            <td>526</td>
                            <td>122</td>
                            <td>An extended Bootstrap table with radio, checkbox, sort, pagination, and other added features. (supports twitter bootstrap v2 and v3) </td>
                        </tr>
                        <tr id="tr-id-2" class="tr-class-2">
                            <td id="td-id-2" class="td-class-2"> multiple-select </td>
                            <td>288</td>
                            <td>150</td>
                            <td>A jQuery plugin to select multiple elements with checkboxes :) </td>
                        </tr>
                        <tr id="tr-id-3" class="tr-class-3">
                            <td id="td-id-3" class="td-class-3"> bootstrap-show-password </td>
                            <td>32</td>
                            <td>11</td>
                            <td>Show/hide password plugin for twitter bootstrap. </td>
                        </tr>
                        <tr id="tr-id-4" class="tr-class-4">
                            <td id="td-id-4" class="td-class-4"> blog </td>
                            <td>13</td>
                            <td>4</td>
                            <td>my blog</td>
                        </tr>
                        <tr id="tr-id-5" class="tr-class-5">
                            <td id="td-id-5" class="td-class-5"> scutech-redmine
                                <td>6</td>
                                <td>3</td>
                                <td>Redmine notification tools for chrome extension.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-sm-12">
            <div class="white-box">
                <h3 class="box-title m-b-0">Bootstrap Data From js</h3>
                <p class="text-muted m-b-30">Sample data From js</p>
                <table id="smptable" class="table">
                    <thead>
                        <tr>
                            <th data-field="name">Name</th>
                            <th data-field="stargazers_count">Stars</th>
                            <th data-field="forks_count">Forks</th>
                            <th data-field="description">Description</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
        <div class="col-sm-12">
            <div class="white-box">
                <h3 class="box-title m-b-0">Sortable table</h3>
                <p class="text-muted m-b-30">Basic sortable table</p>
                <table data-toggle="table" data-url="https://api.github.com/users/wenzhixin/repos?type=owner&sort=full_name&direction=asc&per_page=100&page=1" data-sort-name="stargazers_count" data-height="280" data-mobile-responsive="true" data-sort-order="desc" class="table">
                    <thead>
                        <tr>
                            <th data-field="name" data-sortable="true"> Name </th>
                            <th data-field="stargazers_count" data-sortable="true" data-width="100"> Stars </th>
                            <th data-field="forks_count" data-sortable="true" data-width="100"> Forks </th>
                            <th data-field="description" data-sortable="true"> Description </th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
        <div class="col-sm-12">
            <div class="white-box">
                <h3 class="box-title m-b-0">Sortable table</h3>
                <p class="text-muted m-b-30">Basic sortable table</p>
                <table id="clmtable" data-show-columns="true" data-height="300"> </table>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="white-box">
                <h3 class="box-title m-b-0">Table with radio button</h3>
                <p class="text-muted m-b-30">data with radiobutton</p>
                <table data-toggle="table" data-url="http://themedesigner.in/demo/myadmin/myadmin/bower_components/bootstrap-table/bootstrap-test.json" data-click-to-select="true" data-select-item-name="myRadioName" data-height="295">
                    <thead>
                        <tr>
                            <th data-field="state" data-radio="true"></th>
                            <th data-field="name">Name</th>
                            <th data-field="price">Price</th>
                            <th data-field="column1">Columns1</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="white-box">
                <h3 class="box-title m-b-0">Table with checkbox</h3>
                <p class="text-muted m-b-30">data with checkbox</p>
                <table data-toggle="table" data-url="http://themedesigner.in/demo/myadmin/myadmin/bower_components/bootstrap-table/bootstrap-test.json" data-click-to-select="true" data-height="295">
                    <thead>
                        <tr>
                            <th data-field="state" data-checkbox="true"></th>
                            <th data-field="name">Name</th>
                            <th data-field="price">Price</th>
                            <th data-field="column1">Columns1</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>

@endsection

@push('scripts')

    <!-- Custom Theme JavaScript -->
    <script src="console/plugins/bootstrap-table/dist/bootstrap-table.min.js"></script>
    <script src="console/plugins/bootstrap-table/dist/bootstrap-table.ints.js"></script>

@endpush