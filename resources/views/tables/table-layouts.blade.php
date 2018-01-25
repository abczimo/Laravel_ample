@extends('layouts.console')

@push('stylesheets')

@endpush

@section('content')

    <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">Table Layouts</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
            <a href="javascript: void(0);" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Table</a></li>
                <li class="active">Table Layouts</li>
            </ol>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- /row -->
    <div class="row">
        <div class="col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Primary Table</h3>
                <p class="text-muted">Add class <code>.color-table .primary-table</code></p>
                <div class="table-responsive">
                    <table class="table color-table primary-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nigam</td>
                                <td>Eichmann</td>
                                <td>@Sonu</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Deshmukh</td>
                                <td>Prohaska</td>
                                <td>@Genelia</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Roshan</td>
                                <td>Rogahn</td>
                                <td>@Hritik</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Success Table</h3>
                <p class="text-muted">Add class <code>.color-table .success-table</code></p>
                <div class="table-responsive">
                    <table class="table color-table success-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nigam</td>
                                <td>Eichmann</td>
                                <td>@Sonu</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Deshmukh</td>
                                <td>Prohaska</td>
                                <td>@Genelia</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Roshan</td>
                                <td>Rogahn</td>
                                <td>@Hritik</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Info Table</h3>
                <p class="text-muted">Add class <code>.color-table .info-table</code></p>
                <div class="table-responsive">
                    <table class="table color-table info-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nigam</td>
                                <td>Eichmann</td>
                                <td>@Sonu</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Deshmukh</td>
                                <td>Prohaska</td>
                                <td>@Genelia</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Roshan</td>
                                <td>Rogahn</td>
                                <td>@Hritik</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Warning Table</h3>
                <p class="text-muted">Add class <code>.color-table .warning-table</code></p>
                <div class="table-responsive">
                    <table class="table color-table warning-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nigam</td>
                                <td>Eichmann</td>
                                <td>@Sonu</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Deshmukh</td>
                                <td>Prohaska</td>
                                <td>@Genelia</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Roshan</td>
                                <td>Rogahn</td>
                                <td>@Hritik</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Danger Table</h3>
                <p class="text-muted">Add class <code>.color-table .danger-table</code></p>
                <div class="table-responsive">
                    <table class="table color-table danger-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nigam</td>
                                <td>Eichmann</td>
                                <td>@Sonu</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Deshmukh</td>
                                <td>Prohaska</td>
                                <td>@Genelia</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Roshan</td>
                                <td>Rogahn</td>
                                <td>@Hritik</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Inverse Table</h3>
                <p class="text-muted">Add class <code>.color-table .inverse-table</code></p>
                <div class="table-responsive">
                    <table class="table color-table inverse-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nigam</td>
                                <td>Eichmann</td>
                                <td>@Sonu</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Deshmukh</td>
                                <td>Prohaska</td>
                                <td>@Genelia</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Roshan</td>
                                <td>Rogahn</td>
                                <td>@Hritik</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Dark Table</h3>
                <p class="text-muted">Add class <code>.color-table .dark-table</code></p>
                <div class="table-responsive">
                    <table class="table color-table dark-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nigam</td>
                                <td>Eichmann</td>
                                <td>@Sonu</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Deshmukh</td>
                                <td>Prohaska</td>
                                <td>@Genelia</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Roshan</td>
                                <td>Rogahn</td>
                                <td>@Hritik</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Red Table</h3>
                <p class="text-muted">Add class <code>.color-table .red-table</code></p>
                <div class="table-responsive">
                    <table class="table color-table red-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nigam</td>
                                <td>Eichmann</td>
                                <td>@Sonu</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Deshmukh</td>
                                <td>Prohaska</td>
                                <td>@Genelia</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Roshan</td>
                                <td>Rogahn</td>
                                <td>@Hritik</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Purple Table</h3>
                <p class="text-muted">Add class <code>.color-table .purple-table</code></p>
                <div class="table-responsive">
                    <table class="table color-table purple-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nigam</td>
                                <td>Eichmann</td>
                                <td>@Sonu</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Deshmukh</td>
                                <td>Prohaska</td>
                                <td>@Genelia</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Roshan</td>
                                <td>Rogahn</td>
                                <td>@Hritik</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Muted Table</h3>
                <p class="text-muted">Add class <code>.color-table .muted-table</code></p>
                <div class="table-responsive">
                    <table class="table color-table muted-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nigam</td>
                                <td>Eichmann</td>
                                <td>@Sonu</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Deshmukh</td>
                                <td>Prohaska</td>
                                <td>@Genelia</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Roshan</td>
                                <td>Rogahn</td>
                                <td>@Hritik</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Primary Table</h3>
                <p class="text-muted">Add class <code>.color-bordered-table .primary-bordered-table</code></p>
                <div class="table-responsive">
                    <table class="table color-bordered-table primary-bordered-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nigam</td>
                                <td>Eichmann</td>
                                <td>@Sonu</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Deshmukh</td>
                                <td>Prohaska</td>
                                <td>@Genelia</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Roshan</td>
                                <td>Rogahn</td>
                                <td>@Hritik</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Success Table</h3>
                <p class="text-muted">Add class <code>.color-bordered-table .success-bordered-table</code></p>
                <div class="table-responsive">
                    <table class="table color-bordered-table success-bordered-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nigam</td>
                                <td>Eichmann</td>
                                <td>@Sonu</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Deshmukh</td>
                                <td>Prohaska</td>
                                <td>@Genelia</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Roshan</td>
                                <td>Rogahn</td>
                                <td>@Hritik</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Info Table</h3>
                <p class="text-muted">Add class <code>.color-bordered-table .info-bordered-table</code></p>
                <div class="table-responsive">
                    <table class="table color-bordered-table info-bordered-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nigam</td>
                                <td>Eichmann</td>
                                <td>@Sonu</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Deshmukh</td>
                                <td>Prohaska</td>
                                <td>@Genelia</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Roshan</td>
                                <td>Rogahn</td>
                                <td>@Hritik</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Warning Table</h3>
                <p class="text-muted">Add class <code>.color-bordered-table .warning-bordered-table</code></p>
                <div class="table-responsive">
                    <table class="table color-bordered-table warning-bordered-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nigam</td>
                                <td>Eichmann</td>
                                <td>@Sonu</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Deshmukh</td>
                                <td>Prohaska</td>
                                <td>@Genelia</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Roshan</td>
                                <td>Rogahn</td>
                                <td>@Hritik</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Danger Table</h3>
                <p class="text-muted">Add class <code>.color-bordered-table .danger-bordered-table</code></p>
                <div class="table-responsive">
                    <table class="table color-bordered-table danger-bordered-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nigam</td>
                                <td>Eichmann</td>
                                <td>@Sonu</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Deshmukh</td>
                                <td>Prohaska</td>
                                <td>@Genelia</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Roshan</td>
                                <td>Rogahn</td>
                                <td>@Hritik</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Inverse Table</h3>
                <p class="text-muted">Add class <code>.color-bordered-table .inverse-bordered-table</code></p>
                <div class="table-responsive">
                    <table class="table color-bordered-table inverse-bordered-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nigam</td>
                                <td>Eichmann</td>
                                <td>@Sonu</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Deshmukh</td>
                                <td>Prohaska</td>
                                <td>@Genelia</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Roshan</td>
                                <td>Rogahn</td>
                                <td>@Hritik</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Dark Table</h3>
                <p class="text-muted">Add class <code>.color-bordered-table .dark-bordered-table</code></p>
                <div class="table-responsive">
                    <table class="table color-bordered-table dark-bordered-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nigam</td>
                                <td>Eichmann</td>
                                <td>@Sonu</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Deshmukh</td>
                                <td>Prohaska</td>
                                <td>@Genelia</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Roshan</td>
                                <td>Rogahn</td>
                                <td>@Hritik</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Red Table</h3>
                <p class="text-muted">Add class <code>.color-bordered-table .red-bordered-table</code></p>
                <div class="table-responsive">
                    <table class="table color-bordered-table red-bordered-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nigam</td>
                                <td>Eichmann</td>
                                <td>@Sonu</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Deshmukh</td>
                                <td>Prohaska</td>
                                <td>@Genelia</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Roshan</td>
                                <td>Rogahn</td>
                                <td>@Hritik</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Purple Table</h3>
                <p class="text-muted">Add class <code>.color-bordered-table .purple-bordered-table</code></p>
                <div class="table-responsive">
                    <table class="table color-bordered-table purple-bordered-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nigam</td>
                                <td>Eichmann</td>
                                <td>@Sonu</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Deshmukh</td>
                                <td>Prohaska</td>
                                <td>@Genelia</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Roshan</td>
                                <td>Rogahn</td>
                                <td>@Hritik</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Muted Table</h3>
                <p class="text-muted">Add class <code>.color-bordered-table .muted-bordered-table</code></p>
                <div class="table-responsive">
                    <table class="table color-bordered-table muted-bordered-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nigam</td>
                                <td>Eichmann</td>
                                <td>@Sonu</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Deshmukh</td>
                                <td>Prohaska</td>
                                <td>@Genelia</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Roshan</td>
                                <td>Rogahn</td>
                                <td>@Hritik</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Primary Table</h3>
                <p class="text-muted">Add class <code>.full-color-table .full-primary-table .hover-table</code></p>
                <div class="table-responsive">
                    <table class="table full-color-table full-primary-table hover-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nigam</td>
                                <td>Eichmann</td>
                                <td>@Sonu</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Deshmukh</td>
                                <td>Prohaska</td>
                                <td>@Genelia</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Roshan</td>
                                <td>Rogahn</td>
                                <td>@Hritik</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Success Table</h3>
                <p class="text-muted">Add class <code>.full-color-table .full-success-table .hover-table</code></p>
                <div class="table-responsive">
                    <table class="table full-color-table full-success-table hover-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nigam</td>
                                <td>Eichmann</td>
                                <td>@Sonu</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Deshmukh</td>
                                <td>Prohaska</td>
                                <td>@Genelia</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Roshan</td>
                                <td>Rogahn</td>
                                <td>@Hritik</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Info Table</h3>
                <p class="text-muted">Add class <code>.full-color-table .full-info-table .hover-table</code></p>
                <div class="table-responsive">
                    <table class="table full-color-table full-info-table hover-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nigam</td>
                                <td>Eichmann</td>
                                <td>@Sonu</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Deshmukh</td>
                                <td>Prohaska</td>
                                <td>@Genelia</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Roshan</td>
                                <td>Rogahn</td>
                                <td>@Hritik</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Warning Table</h3>
                <p class="text-muted">Add class <code>.full-color-table .full-warning-table .hover-table</code></p>
                <div class="table-responsive">
                    <table class="table full-color-table full-warning-table hover-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nigam</td>
                                <td>Eichmann</td>
                                <td>@Sonu</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Deshmukh</td>
                                <td>Prohaska</td>
                                <td>@Genelia</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Roshan</td>
                                <td>Rogahn</td>
                                <td>@Hritik</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Danger Table</h3>
                <p class="text-muted">Add class <code>.full-color-table .full-danger-table .hover-table</code></p>
                <div class="table-responsive">
                    <table class="table full-color-table full-danger-table hover-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nigam</td>
                                <td>Eichmann</td>
                                <td>@Sonu</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Deshmukh</td>
                                <td>Prohaska</td>
                                <td>@Genelia</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Roshan</td>
                                <td>Rogahn</td>
                                <td>@Hritik</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Inverse Table</h3>
                <p class="text-muted">Add class <code>.full-color-table .full-inverse-table .hover-table</code></p>
                <div class="table-responsive">
                    <table class="table full-color-table full-inverse-table hover-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nigam</td>
                                <td>Eichmann</td>
                                <td>@Sonu</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Deshmukh</td>
                                <td>Prohaska</td>
                                <td>@Genelia</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Roshan</td>
                                <td>Rogahn</td>
                                <td>@Hritik</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Dark Table</h3>
                <p class="text-muted">Add class <code>.full-color-table .full-dark-table .hover-table</code></p>
                <div class="table-responsive">
                    <table class="table full-color-table full-dark-table hover-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nigam</td>
                                <td>Eichmann</td>
                                <td>@Sonu</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Deshmukh</td>
                                <td>Prohaska</td>
                                <td>@Genelia</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Roshan</td>
                                <td>Rogahn</td>
                                <td>@Hritik</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Red Table</h3>
                <p class="text-muted">Add class <code>.full-color-table .full-red-table .hover-table</code></p>
                <div class="table-responsive">
                    <table class="table full-color-table full-red-table hover-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nigam</td>
                                <td>Eichmann</td>
                                <td>@Sonu</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Deshmukh</td>
                                <td>Prohaska</td>
                                <td>@Genelia</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Roshan</td>
                                <td>Rogahn</td>
                                <td>@Hritik</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Purple Table</h3>
                <p class="text-muted">Add class <code>.full-color-table .full-purple-table .hover-table</code></p>
                <div class="table-responsive">
                    <table class="table full-color-table full-purple-table hover-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nigam</td>
                                <td>Eichmann</td>
                                <td>@Sonu</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Deshmukh</td>
                                <td>Prohaska</td>
                                <td>@Genelia</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Roshan</td>
                                <td>Rogahn</td>
                                <td>@Hritik</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Muted Table</h3>
                <p class="text-muted">Add class <code>.full-color-table .full-muted-table .hover-table</code></p>
                <div class="table-responsive">
                    <table class="table full-color-table full-muted-table hover-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nigam</td>
                                <td>Eichmann</td>
                                <td>@Sonu</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Deshmukh</td>
                                <td>Prohaska</td>
                                <td>@Genelia</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Roshan</td>
                                <td>Rogahn</td>
                                <td>@Hritik</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

@endsection

@push('scripts')

    <!-- jQuery peity -->
    <script src="console/plugins/peity/jquery.peity.min.js"></script>
    <script src="console/plugins/peity/jquery.peity.init.js"></script>

@endpush