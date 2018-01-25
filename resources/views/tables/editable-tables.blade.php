@extends('layouts.console')

@push('stylesheets')

    <!-- Editable CSS -->
    <link rel="stylesheet" href="console/plugins/jquery-datatables-editable/datatables.css" />

@endpush

@section('content')

    <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">Editable Tables</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
            <a href="javascript: void(0);" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Tables</a></li>
                <li class="active">Editable Tables</li>
            </ol>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- /row -->
    <div class="row">
        <div class="col-lg-12">
            <div class="white-box">
                <h3 class="box-title">Simple Editable table</h3>
                <p class="text-muted">Just click on word which you want to change and enter</p>
                <table id="mainTable" class="table editable-table table-bordered table-striped m-b-0">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>Profit</th>
                            <th>Fun</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Car</td>
                            <td>100</td>
                            <td>200</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Bike</td>
                            <td>330</td>
                            <td>240</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Plane</td>
                            <td>430</td>
                            <td>540</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>Yacht</td>
                            <td>100</td>
                            <td>200</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Segway</td>
                            <td>330</td>
                            <td>240</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th><strong>TOTAL</strong></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                </table>
            </div>
        </div>
    </div>
    <!-- /.row -->
    <!-- .row -->
    <div class="row">
        <div class="col-lg-12">
            <div class="white-box">
                <h3 class="box-title">Editable with Datatable</h3>
                <p class="text-muted">Just click on word which you want to change and enter</p>
                <table class="table table-striped table-bordered" id="editable-datatable">
                    <thead>
                        <tr>
                            <th>Rendering engine</th>
                            <th>Browser</th>
                            <th>Platform(s)</th>
                            <th>Engine version</th>
                            <th>CSS grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="1" class="gradeX">
                            <td>Trident</td>
                            <td>Internet Explorer 4.0 </td>
                            <td>Win 95+</td>
                            <td class="center">4</td>
                            <td class="center">X</td>
                        </tr>
                        <tr id="2" class="gradeC">
                            <td>Trident</td>
                            <td>Internet Explorer 5.0</td>
                            <td>Win 95+</td>
                            <td class="center">5</td>
                            <td class="center">C</td>
                        </tr>
                        <tr id="3" class="gradeA">
                            <td>Trident</td>
                            <td>Internet Explorer 5.5</td>
                            <td>Win 95+</td>
                            <td class="center">5.5</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="4" class="gradeA">
                            <td>Trident</td>
                            <td>Internet Explorer 6</td>
                            <td>Win 98+</td>
                            <td class="center">6</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="5" class="gradeA">
                            <td>Trident</td>
                            <td>Internet Explorer 7</td>
                            <td>Win XP SP2+</td>
                            <td class="center">7</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="6" class="gradeA">
                            <td>Trident</td>
                            <td>AOL browser (AOL desktop)</td>
                            <td>Win XP</td>
                            <td class="center">6</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="7" class="gradeA">
                            <td>Gecko</td>
                            <td>Firefox 1.0</td>
                            <td>Win 98+ / OSX.2+</td>
                            <td class="center">1.7</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="8" class="gradeA">
                            <td>Gecko</td>
                            <td>Firefox 1.5</td>
                            <td>Win 98+ / OSX.2+</td>
                            <td class="center">1.8</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="9" class="gradeA">
                            <td>Gecko</td>
                            <td>Firefox 2.0</td>
                            <td>Win 98+ / OSX.2+</td>
                            <td class="center">1.8</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="10" class="gradeA">
                            <td>Gecko</td>
                            <td>Firefox 3.0</td>
                            <td>Win 2k+ / OSX.3+</td>
                            <td class="center">1.9</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="11" class="gradeA">
                            <td>Gecko</td>
                            <td>Camino 1.0</td>
                            <td>OSX.2+</td>
                            <td class="center">1.8</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="12" class="gradeA">
                            <td>Gecko</td>
                            <td>Camino 1.5</td>
                            <td>OSX.3+</td>
                            <td class="center">1.8</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="13" class="gradeA">
                            <td>Gecko</td>
                            <td>Netscape 7.2</td>
                            <td>Win 95+ / Mac OS 8.6-9.2</td>
                            <td class="center">1.7</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="14" class="gradeA">
                            <td>Gecko</td>
                            <td>Netscape Browser 8</td>
                            <td>Win 98SE+</td>
                            <td class="center">1.7</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="15" class="gradeA">
                            <td>Gecko</td>
                            <td>Netscape Navigator 9</td>
                            <td>Win 98+ / OSX.2+</td>
                            <td class="center">1.8</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="16" class="gradeA">
                            <td>Gecko</td>
                            <td>Mozilla 1.0</td>
                            <td>Win 95+ / OSX.1+</td>
                            <td class="center">1</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="17" class="gradeA">
                            <td>Gecko</td>
                            <td>Mozilla 1.1</td>
                            <td>Win 95+ / OSX.1+</td>
                            <td class="center">1.1</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="18" class="gradeA">
                            <td>Gecko</td>
                            <td>Mozilla 1.2</td>
                            <td>Win 95+ / OSX.1+</td>
                            <td class="center">1.2</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="19" class="gradeA">
                            <td>Gecko</td>
                            <td>Mozilla 1.3</td>
                            <td>Win 95+ / OSX.1+</td>
                            <td class="center">1.3</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="20" class="gradeA">
                            <td>Gecko</td>
                            <td>Mozilla 1.4</td>
                            <td>Win 95+ / OSX.1+</td>
                            <td class="center">1.4</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="21" class="gradeA">
                            <td>Gecko</td>
                            <td>Mozilla 1.5</td>
                            <td>Win 95+ / OSX.1+</td>
                            <td class="center">1.5</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="22" class="gradeA">
                            <td>Gecko</td>
                            <td>Mozilla 1.6</td>
                            <td>Win 95+ / OSX.1+</td>
                            <td class="center">1.6</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="23" class="gradeA">
                            <td>Gecko</td>
                            <td>Mozilla 1.7</td>
                            <td>Win 98+ / OSX.1+</td>
                            <td class="center">1.7</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="24" class="gradeA">
                            <td>Gecko</td>
                            <td>Mozilla 1.8</td>
                            <td>Win 98+ / OSX.1+</td>
                            <td class="center">1.8</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="25" class="gradeA">
                            <td>Gecko</td>
                            <td>Seamonkey 1.1</td>
                            <td>Win 98+ / OSX.2+</td>
                            <td class="center">1.8</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="26" class="gradeA">
                            <td>Gecko</td>
                            <td>Epiphany 2.20</td>
                            <td>Gnome</td>
                            <td class="center">1.8</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="27" class="gradeA">
                            <td>Webkit</td>
                            <td>Safari 1.2</td>
                            <td>OSX.3</td>
                            <td class="center">125.5</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="28" class="gradeA">
                            <td>Webkit</td>
                            <td>Safari 1.3</td>
                            <td>OSX.3</td>
                            <td class="center">312.8</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="29" class="gradeA">
                            <td>Webkit</td>
                            <td>Safari 2.0</td>
                            <td>OSX.4+</td>
                            <td class="center">419.3</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="30" class="gradeA">
                            <td>Webkit</td>
                            <td>Safari 3.0</td>
                            <td>OSX.4+</td>
                            <td class="center">522.1</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="31" class="gradeA">
                            <td>Webkit</td>
                            <td>OmniWeb 5.5</td>
                            <td>OSX.4+</td>
                            <td class="center">420</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="32" class="gradeA">
                            <td>Webkit</td>
                            <td>iPod Touch / iPhone</td>
                            <td>iPod</td>
                            <td class="center">420.1</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="33" class="gradeA">
                            <td>Webkit</td>
                            <td>S60</td>
                            <td>S60</td>
                            <td class="center">413</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="34" class="gradeA">
                            <td>Presto</td>
                            <td>Opera 7.0</td>
                            <td>Win 95+ / OSX.1+</td>
                            <td class="center">-</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="35" class="gradeA">
                            <td>Presto</td>
                            <td>Opera 7.5</td>
                            <td>Win 95+ / OSX.2+</td>
                            <td class="center">-</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="36" class="gradeA">
                            <td>Presto</td>
                            <td>Opera 8.0</td>
                            <td>Win 95+ / OSX.2+</td>
                            <td class="center">-</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="37" class="gradeA">
                            <td>Presto</td>
                            <td>Opera 8.5</td>
                            <td>Win 95+ / OSX.2+</td>
                            <td class="center">-</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="38" class="gradeA">
                            <td>Presto</td>
                            <td>Opera 9.0</td>
                            <td>Win 95+ / OSX.3+</td>
                            <td class="center">-</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="39" class="gradeA">
                            <td>Presto</td>
                            <td>Opera 9.2</td>
                            <td>Win 88+ / OSX.3+</td>
                            <td class="center">-</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="40" class="gradeA">
                            <td>Presto</td>
                            <td>Opera 9.5</td>
                            <td>Win 88+ / OSX.3+</td>
                            <td class="center">-</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="41" class="gradeA">
                            <td>Presto</td>
                            <td>Opera for Wii</td>
                            <td>Wii</td>
                            <td class="center">-</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="42" class="gradeA">
                            <td>Presto</td>
                            <td>Nokia N800</td>
                            <td>N800</td>
                            <td class="center">-</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="43" class="gradeA">
                            <td>Presto</td>
                            <td>Nintendo DS browser</td>
                            <td>Nintendo DS</td>
                            <td class="center">8.5</td>
                            <td class="center">C/A<sup>1</sup></td>
                        </tr>
                        <tr id="44" class="gradeC">
                            <td>KHTML</td>
                            <td>Konqureror 3.1</td>
                            <td>KDE 3.1</td>
                            <td class="center">3.1</td>
                            <td class="center">C</td>
                        </tr>
                        <tr id="45" class="gradeA">
                            <td>KHTML</td>
                            <td>Konqureror 3.3</td>
                            <td>KDE 3.3</td>
                            <td class="center">3.3</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="46" class="gradeA">
                            <td>KHTML</td>
                            <td>Konqureror 3.5</td>
                            <td>KDE 3.5</td>
                            <td class="center">3.5</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="47" class="gradeX">
                            <td>Tasman</td>
                            <td>Internet Explorer 4.5</td>
                            <td>Mac OS 8-9</td>
                            <td class="center">-</td>
                            <td class="center">X</td>
                        </tr>
                        <tr id="48" class="gradeC">
                            <td>Tasman</td>
                            <td>Internet Explorer 5.1</td>
                            <td>Mac OS 7.6-9</td>
                            <td class="center">1</td>
                            <td class="center">C</td>
                        </tr>
                        <tr id="49" class="gradeC">
                            <td>Tasman</td>
                            <td>Internet Explorer 5.2</td>
                            <td>Mac OS 8-X</td>
                            <td class="center">1</td>
                            <td class="center">C</td>
                        </tr>
                        <tr id="50" class="gradeA">
                            <td>Misc</td>
                            <td>NetFront 3.1</td>
                            <td>Embedded devices</td>
                            <td class="center">-</td>
                            <td class="center">C</td>
                        </tr>
                        <tr id="51" class="gradeA">
                            <td>Misc</td>
                            <td>NetFront 3.4</td>
                            <td>Embedded devices</td>
                            <td class="center">-</td>
                            <td class="center">A</td>
                        </tr>
                        <tr id="52" class="gradeX">
                            <td>Misc</td>
                            <td>Dillo 0.8</td>
                            <td>Embedded devices</td>
                            <td class="center">-</td>
                            <td class="center">X</td>
                        </tr>
                        <tr id="53" class="gradeX">
                            <td>Misc</td>
                            <td>Links</td>
                            <td>Text only</td>
                            <td class="center">-</td>
                            <td class="center">X</td>
                        </tr>
                        <tr id="54" class="gradeX">
                            <td>Misc</td>
                            <td>Lynx</td>
                            <td>Text only</td>
                            <td class="center">-</td>
                            <td class="center">X</td>
                        </tr>
                        <tr id="55" class="gradeC">
                            <td>Misc</td>
                            <td>IE Mobile</td>
                            <td>Windows Mobile 6</td>
                            <td class="center">-</td>
                            <td class="center">C</td>
                        </tr>
                        <tr id="56" class="gradeC">
                            <td>Misc</td>
                            <td>PSP browser</td>
                            <td>PSP</td>
                            <td class="center">-</td>
                            <td class="center">C</td>
                        </tr>
                        <tr id="57" class="gradeU">
                            <td>Other browsers</td>
                            <td>All others</td>
                            <td>-</td>
                            <td class="center">-</td>
                            <td class="center">U</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Rendering engine</th>
                            <th>Browser</th>
                            <th>Platform(s)</th>
                            <th>Engine version</th>
                            <th>CSS grade</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>

@endsection

@push('scripts')

    <!-- Editable -->
    <script src="console/plugins/jquery-datatables-editable/jquery.dataTables.js"></script>
    <script src="console/plugins/datatables/dataTables.bootstrap.js"></script>
    <script src="console/plugins/tiny-editable/mindmup-editabletable.js"></script>
    <script src="console/plugins/tiny-editable/numeric-input-example.js"></script>
    <script>
        $('#mainTable').editableTableWidget().numericInputExample().find('td:first').focus();
        $('#editable-datatable').editableTableWidget().numericInputExample().find('td:first').focus();
        $(document).ready(function() {
            $('#editable-datatable').DataTable();
        });
    </script>

@endpush