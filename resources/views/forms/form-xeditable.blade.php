@extends('layouts.console')

@push('stylesheets')

    <!-- xeditable css -->
    <link href="console/plugins/x-editable/dist/bootstrap3-editable/css/bootstrap-editable.css" rel="stylesheet" />

@endpush

@section('content')

     <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">Form Dropzone</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
            <a href="javascript: void(0);" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Forms</a></li>
                <li class="active">Form Dropzone</li>
            </ol>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- .row -->
    <div class="row">
        <div class="col-sm-12">
            <div class="white-box">
                <h3 class="box-title m-b-0">X -Editable</h3>
                <p class="text-muted m-b-30 font-13"> Inline editor</p>
                <div class="row">
                    <div class="col-md-12">
                        <table style="clear: both" class="table table-bordered table-striped" id="user">
                            <tbody>
                                <tr>
                                    <td width="35%">Simple text field</td>
                                    <td width="65%"><a href="#" id="inline-username" data-type="text" data-pk="1" data-title="Enter username">superuser</a></td>
                                </tr>
                                <tr>
                                    <td>Empty text field, required</td>
                                    <td>
                                        <a href="#" id="inline-firstname" data-type="text" data-pk="1" data-placement="right" data-placeholder="Required" data-title="Enter your firstname"></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Select, local array, custom display</td>
                                    <td>
                                        <a href="#" id="inline-sex" data-type="select" data-pk="1" data-value="" data-title="Select sex"></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Select, error while loading</td>
                                    <td><a href="#" id="inline-status" data-type="select" data-pk="1" data-value="0" data-source="/status" data-title="Select status">Active</a></td>
                                </tr>
                                <tr>
                                    <td>Combodate</td>
                                    <td>
                                        <a href="#" id="inline-dob" data-type="combodate" data-value="2015-09-24" data-format="YYYY-MM-DD" data-viewformat="DD/MM/YYYY" data-template="D / MMM / YYYY" data-pk="1" data-title="Select Date of birth"></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Textarea, buttons below</td>
                                    <td><a href="#" id="inline-comments" data-type="textarea" data-pk="1" data-placeholder="Your comments here..." data-title="Enter comments">awesome user!</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /.row -->
    <!-- .row -->
    <div class="row">
        <div class="col-sm-12">
            <div class="white-box">
                <h3 class="box-title m-b-0">X -Editable</h3>
                <p class="text-muted m-b-30 font-13"> Popup editor</p>
                <div class="row">
                    <div class="col-md-12">
                        <table style="clear: both" class="table table-bordered table-striped" id="user">
                            <tbody>
                                <tr>
                                    <td width="35%">Simple text field</td>
                                    <td width="65%"><a href="#" id="username" data-type="text" data-pk="1" data-title="Enter username">superuser</a></td>
                                </tr>
                                <tr>
                                    <td>Empty text field, required</td>
                                    <td>
                                        <a href="#" id="firstname" data-type="text" data-pk="1" data-placement="right" data-placeholder="Required" data-title="Enter your firstname"></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Select, local array, custom display</td>
                                    <td>
                                        <a href="#" id="sex" data-type="select" data-pk="1" data-value="" data-title="Select sex"></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Select, error while loading</td>
                                    <td><a href="#" id="status" data-type="select" data-pk="1" data-value="0" data-source="/status" data-title="Select status">Active</a></td>
                                </tr>
                                <tr>
                                    <td>Combodate</td>
                                    <td>
                                        <a href="#" id="dob" data-type="combodate" data-value="1984-05-15" data-format="YYYY-MM-DD" data-viewformat="DD/MM/YYYY" data-template="D / MMM / YYYY" data-pk="1" data-title="Select Date of birth"></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Textarea, buttons below</td>
                                    <td><a href="#" id="comments" data-type="textarea" data-pk="1" data-placeholder="Your comments here..." data-title="Enter comments">awesome user!</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection

@push('scripts')

    <!-- jQuery x-editable -->
    <script src="console/plugins/moment/moment.js"></script>
    <script type="text/javascript" src="console/plugins/x-editable/dist/bootstrap3-editable/js/bootstrap-editable.min.js"></script>
    <script type="text/javascript">
        $(function() {
            //editables 
            $('#username').editable({
                type: 'text',
                pk: 1,
                name: 'username',
                title: 'Enter username'
            });
            $('#firstname').editable({
                validate: function(value) {
                    if ($.trim(value) == '') return 'This field is required';
                }
            });
            $('#sex').editable({
                prepend: "not selected",
                source: [{
                    value: 1,
                    text: 'Male'
                }, {
                    value: 2,
                    text: 'Female'
                }],
                display: function(value, sourceData) {
                    var colors = {
                            "": "#98a6ad",
                            1: "#5fbeaa",
                            2: "#5d9cec"
                        },
                        elem = $.grep(sourceData, function(o) {
                            return o.value == value;
                        });
                    if (elem.length) {
                        $(this).text(elem[0].text).css("color", colors[value]);
                    } else {
                        $(this).empty();
                    }
                }
            });
            $('#status').editable();
            $('#group').editable({
                showbuttons: false
            });
            $('#dob').editable();
            $('#comments').editable({
                showbuttons: 'bottom'
            });
            //inline
            $('#inline-username').editable({
                type: 'text',
                pk: 1,
                name: 'username',
                title: 'Enter username',
                mode: 'inline'
            });
            $('#inline-firstname').editable({
                validate: function(value) {
                    if ($.trim(value) == '') return 'This field is required';
                },
                mode: 'inline'
            });
            $('#inline-sex').editable({
                prepend: "not selected",
                mode: 'inline',
                source: [{
                    value: 1,
                    text: 'Male'
                }, {
                    value: 2,
                    text: 'Female'
                }],
                display: function(value, sourceData) {
                    var colors = {
                            "": "#98a6ad",
                            1: "#5fbeaa",
                            2: "#5d9cec"
                        },
                        elem = $.grep(sourceData, function(o) {
                            return o.value == value;
                        });
                    if (elem.length) {
                        $(this).text(elem[0].text).css("color", colors[value]);
                    } else {
                        $(this).empty();
                    }
                }
            });
            $('#inline-status').editable({
                mode: 'inline'
            });
            $('#inline-group').editable({
                showbuttons: false,
                mode: 'inline'
            });
            $('#inline-dob').editable({
                mode: 'inline'
            });
            $('#inline-comments').editable({
                showbuttons: 'bottom',
                mode: 'inline'
            });
        });
    </script>

@endpush