@extends('layouts.console')

@push('stylesheets')

@endpush

@section('content')

    <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">Utility Classes</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
            <a href="javascript: void(0);" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li class="active">Utility Classes</li>
            </ol>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- .row -->
    <div class="row">
        <div class="col-md-12">
            <div class="white-box">
                <!-- .row -->
                <div class="row">
                    <!-- .col -->
                    <div class="col-sm-6">
                        <h3 class="box-title">Float Classes</h3>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-nowrap" width="150">Class</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-nowrap"> <code>.pull-left</code> </td>
                                    <td>Element to the left (float:left).</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.pull-right</code> </td>
                                    <td>Element to the right(float:right).</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.clearfix</code> </td>
                                    <td>To Clear floats.(clreafix)</td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-nowrap" width="150">Class</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-nowrap"> <code>.show</code> </td>
                                    <td>Element to Show (display: block)</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.hidden</code> </td>
                                    <td>Element to hide (display: none)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.col -->
                    <!-- .col -->
                    <div class="col-sm-6">
                        <h3 class="box-title">Text Color Classes</h3>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-nowrap">Class</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-nowrap"> <code>.text-muted</code> </td>
                                    <td class="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.text-primary</code> </td>
                                    <td class="text-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.text-success</code> </td>
                                    <td class="text-success">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.text-info</code> </td>
                                    <td class="text-info">Nullam id dolor id nibh ultricies vehicula ut id elit.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.text-warning</code> </td>
                                    <td class="text-warning">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.text-danger</code> </td>
                                    <td class="text-danger">Nullam id dolor id nibh ultricies vehicula ut id elit.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.col -->
                    <div class="col-sm-12 m-t-40 m-b-40">
                        <hr/>
                    </div>
                    <!-- .col -->
                    <div class="col-sm-3">
                        <h3 class="box-title">Padding Classes</h3>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-nowrap">Class</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-nowrap"> <code>.p-0</code> </td>
                                    <td>Padding will be 0px from all side.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.p-10</code> </td>
                                    <td>Padding will be 10px from all side.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.p-20</code> </td>
                                    <td>Padding will be 20px from all side</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.col -->
                    <!-- .col -->
                    <div class="col-sm-3">
                        <h3 class="box-title">Padding Left Classes</h3>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-nowrap">Class</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-nowrap"> <code>.p-l-0</code> </td>
                                    <td>Only Padding Left will be 0px.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.p-l-10 </code> </td>
                                    <td>Only Padding Left will be 10px.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.p-l-20</code> </td>
                                    <td>Only Padding Left will be 20px.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.col -->
                    <!-- .col -->
                    <div class="col-sm-3">
                        <h3 class="box-title">Padding right Classes</h3>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-nowrap">Class</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-nowrap"> <code>.p-r-0</code> </td>
                                    <td>Only Padding right will be 0px.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.p-r-10 </code> </td>
                                    <td>Only Padding right will be 10px.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.p-r-20</code> </td>
                                    <td>Only Padding right will be 20px.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.col -->
                    <!-- .col -->
                    <div class="col-sm-3">
                        <h3 class="box-title">Padding top Classes</h3>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-nowrap">Class</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-nowrap"> <code>.p-t-0</code> </td>
                                    <td>Only Padding top will be 0px.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.p-t-10 </code> </td>
                                    <td>Only Padding top will be 10px.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.p-t-20</code> </td>
                                    <td>Only Padding top will be 20px.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.col -->
                    <div class="col-sm-12 m-t-40 m-b-40">
                        <hr/>
                    </div>
                    <!-- .col -->
                    <div class="col-sm-3">
                        <h3 class="box-title">Margin top Classes</h3>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-nowrap">Class</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-nowrap"> <code>.m-t-5</code> </td>
                                    <td>Only Margin top will be 5px.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.m-t-10 </code> </td>
                                    <td>Only Margin top will be 10px.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.m-t-15 </code> </td>
                                    <td>Only Margin top will be 15px.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.m-t-20</code> </td>
                                    <td>Only Margin top will be 20px.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.m-t-30</code> </td>
                                    <td>Only Margin top will be 30px.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.m-t-40</code> </td>
                                    <td>Only Margin top will be 40px.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.col -->
                    <!-- .col -->
                    <div class="col-sm-3">
                        <h3 class="box-title">Margin Bottom Classes</h3>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-nowrap">Class</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-nowrap"> <code>.m-b-5</code> </td>
                                    <td>Only Margin Bottom will be 5px.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.m-b-10 </code> </td>
                                    <td>Only Margin Bottom will be 10px.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.m-b-15 </code> </td>
                                    <td>Only Margin Bottom will be 15px.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.m-b-20</code> </td>
                                    <td>Only Margin Bottom will be 20px.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.m-b-30</code> </td>
                                    <td>Only Margin Bottom will be 30px.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.m-t-40</code> </td>
                                    <td>Only Margin top will be 40px.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.col -->
                    <!-- .col -->
                    <div class="col-sm-3">
                        <h3 class="box-title">Margin Right Classes</h3>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-nowrap">Class</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-nowrap"> <code>.m-r-5</code> </td>
                                    <td>Only Margin Right will be 5px.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.m-r-10 </code> </td>
                                    <td>Only Margin Right will be 10px.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.m-r-15 </code> </td>
                                    <td>Only Margin Right will be 15px.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.m-r-20</code> </td>
                                    <td>Only Margin Right will be 20px.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.m-r-30</code> </td>
                                    <td>Only Margin Right will be 30px.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.m-r-40</code> </td>
                                    <td>Only Margin Right will be 40px.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.col -->
                    <!-- .col -->
                    <div class="col-sm-3">
                        <h3 class="box-title">Margin Left Classes</h3>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-nowrap">Class</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-nowrap"> <code>.m-l-5</code> </td>
                                    <td>Only Margin Left will be 5px.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.m-l-10 </code> </td>
                                    <td>Only Margin Left will be 10px.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.m-l-15 </code> </td>
                                    <td>Only Margin Left will be 15px.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.m-l-20</code> </td>
                                    <td>Only Margin Left will be 20px.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.m-l-30</code> </td>
                                    <td>Only Margin Left will be 30px.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.m-l-40</code> </td>
                                    <td>Only Margin Left will be 40px.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.col -->
                    <div class="col-sm-12 m-t-40 m-b-40">
                        <hr/>
                    </div>
                    <!-- .col -->
                    <div class="col-sm-3">
                        <h3 class="box-title">Vertical Align</h3>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-nowrap">Class</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-nowrap"> <code>.vt</code> </td>
                                    <td>Element - vertical align top.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.vb</code> </td>
                                    <td>Element - vertical align bottom.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.vertical-middle </code> </td>
                                    <td>Element - vertical align middle.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.col -->
                    <!-- .col -->
                    <div class="col-sm-3">
                        <h3 class="box-title">Font Weight</h3>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-nowrap">Class</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-nowrap"> <code>.font-light</code> </td>
                                    <td>Font weight will be light (300).</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.font-normal</code> </td>
                                    <td>Font weight will be normal</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.font-bold </code> </td>
                                    <td>Font weight will be bold (700)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.col -->
                    <!-- .col -->
                    <div class="col-sm-3">
                        <h3 class="box-title">Border</h3>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-nowrap">Class</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-nowrap"> <code>.b-all</code> </td>
                                    <td>Border 1px all side.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.b-none</code> </td>
                                    <td>border none all side</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.b-t </code> </td>
                                    <td>border top 1px </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.col -->
                    <!-- .col -->
                    <div class="col-sm-3">
                        <h3 class="box-title">&nbsp;</h3>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-nowrap">Class</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-nowrap"> <code>.b-b</code> </td>
                                    <td>Border bottom 1px.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.b-l</code> </td>
                                    <td>border left 1px.</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.b-r</code> </td>
                                    <td>border right 1px </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.col -->
                    <div class="col-sm-12 m-t-40 m-b-40">
                        <hr>
                    </div>
                    <!-- /.col -->
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped responsive-utilities">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th> Extra small devices <small>Phones (&lt;768px)</small> </th>
                                        <th> Small devices <small>Tablets (≥768px)</small> </th>
                                        <th> Medium devices <small>Desktops (≥992px)</small> </th>
                                        <th> Large devices <small>Desktops (≥1200px)</small> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row"><code>.visible-xs-*</code></th>
                                        <td class="is-visible">Visible</td>
                                        <td class="is-hidden">Hidden</td>
                                        <td class="is-hidden">Hidden</td>
                                        <td class="is-hidden">Hidden</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><code>.visible-sm-*</code></th>
                                        <td class="is-hidden">Hidden</td>
                                        <td class="is-visible">Visible</td>
                                        <td class="is-hidden">Hidden</td>
                                        <td class="is-hidden">Hidden</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><code>.visible-md-*</code></th>
                                        <td class="is-hidden">Hidden</td>
                                        <td class="is-hidden">Hidden</td>
                                        <td class="is-visible">Visible</td>
                                        <td class="is-hidden">Hidden</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><code>.visible-lg-*</code></th>
                                        <td class="is-hidden">Hidden</td>
                                        <td class="is-hidden">Hidden</td>
                                        <td class="is-hidden">Hidden</td>
                                        <td class="is-visible">Visible</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <th scope="row"><code>.hidden-xs</code></th>
                                        <td class="is-hidden">Hidden</td>
                                        <td class="is-visible">Visible</td>
                                        <td class="is-visible">Visible</td>
                                        <td class="is-visible">Visible</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><code>.hidden-sm</code></th>
                                        <td class="is-visible">Visible</td>
                                        <td class="is-hidden">Hidden</td>
                                        <td class="is-visible">Visible</td>
                                        <td class="is-visible">Visible</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><code>.hidden-md</code></th>
                                        <td class="is-visible">Visible</td>
                                        <td class="is-visible">Visible</td>
                                        <td class="is-hidden">Hidden</td>
                                        <td class="is-visible">Visible</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><code>.hidden-lg</code></th>
                                        <td class="is-visible">Visible</td>
                                        <td class="is-visible">Visible</td>
                                        <td class="is-visible">Visible</td>
                                        <td class="is-hidden">Hidden</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- /.col -->
                    <div class="col-sm-12 m-t-40 m-b-40">
                        <hr>
                    </div>
                    <!-- /.col -->
                    <div class="col-sm-4">
                        <h3 class="box-title">Background Colors</h3>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-nowrap">Class</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-nowrap"> <code>.bg-primary</code> </td>
                                    <td>For Primary background color</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.bg-success</code> </td>
                                    <td>For Success (green) background color</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.bg-info</code> </td>
                                    <td>For info (Blue) background color</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.col -->
                    <!-- /.col -->
                    <div class="col-sm-4">
                        <h3 class="box-title">&nbsp;</h3>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-nowrap">Class</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-nowrap"> <code>.bg-warning</code> </td>
                                    <td>For Warning (yellow) background color</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.bg-danger</code> </td>
                                    <td>For Danger (red) background color</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.bg-theme</code> </td>
                                    <td>For Theme background color</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.col -->
                    <!-- /.col -->
                    <div class="col-sm-4">
                        <h3 class="box-title">&nbsp;</h3>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-nowrap">Class</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-nowrap"> <code>.bg-theme-dark</code> </td>
                                    <td>For theme dark background color</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.bg-inverse </code> </td>
                                    <td>For inverse (dark) background color</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap"> <code>.bg-purple</code> </td>
                                    <td>For Purple background color</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.col -->
                </div>
                <!-- /.row -->
            </div>
        </div>
    </div>

@endsection

@push('scripts')

@endpush