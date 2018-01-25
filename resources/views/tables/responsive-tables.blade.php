@extends('layouts.console')

@push('stylesheets')

    <link href="console/plugins/tablesaw-master/dist/tablesaw.css" rel="stylesheet">

@endpush

@section('content')

    <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">Responsive Table</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
            <a href="javascript: void(0);" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Table</a></li>
                <li class="active">Responsive Table</li>
            </ol>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- /row -->
    <div class="row">
        <div class="col-lg-12">
            <div class="white-box">
                <h3 class="box-title m-b-0">Kitchen Sink</h3>
                <p class="text-muted m-b-20">Swipe Mode, ModeSwitch, Minimap, Sortable, SortableSwitch</p>
                <table class="tablesaw table-bordered table-hover table" data-tablesaw-mode="swipe" data-tablesaw-sortable data-tablesaw-sortable-switch data-tablesaw-minimap data-tablesaw-mode-switch>
                    <thead>
                        <tr>
                            <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="persist">Movie Title</th>
                            <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority="3">Rank</th>
                            <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="2">Year</th>
                            <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="1">
                                <abbr title="Rotten Tomato Rating">Rating</abbr>
                            </th>
                            <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="4">Gross</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="title"><a href="javascript:void(0)">Avatar</a></td>
                            <td>1</td>
                            <td>2009</td>
                            <td>83%</td>
                            <td>$2.7B</td>
                        </tr>
                        <tr>
                            <td class="title"><a href="javascript:void(0)">Titanic</a></td>
                            <td>2</td>
                            <td>1997</td>
                            <td>88%</td>
                            <td>$2.1B</td>
                        </tr>
                        <tr>
                            <td class="title"><a href="javascript:void(0)">The Avengers</a></td>
                            <td>3</td>
                            <td>2012</td>
                            <td>92%</td>
                            <td>$1.5B</td>
                        </tr>
                        <tr>
                            <td class="title"><a href="javascript:void(0)">Harry Potter and the Deathly Hallows—Part 2</a></td>
                            <td>4</td>
                            <td>2011</td>
                            <td>96%</td>
                            <td>$1.3B</td>
                        </tr>
                        <tr>
                            <td class="title"><a href="javascript:void(0)">Frozen</a></td>
                            <td>5</td>
                            <td>2013</td>
                            <td>89%</td>
                            <td>$1.2B</td>
                        </tr>
                        <tr>
                            <td class="title"><a href="javascript:void(0)">Iron Man 3</a></td>
                            <td>6</td>
                            <td>2013</td>
                            <td>78%</td>
                            <td>$1.2B</td>
                        </tr>
                        <tr>
                            <td class="title"><a href="javascript:void(0)">Transformers: Dark of the Moon</a></td>
                            <td>7</td>
                            <td>2011</td>
                            <td>36%</td>
                            <td>$1.1B</td>
                        </tr>
                        <tr>
                            <td class="title"><a href="javascript:void(0)">The Lord of the Rings: The Return of the King</a></td>
                            <td>8</td>
                            <td>2003</td>
                            <td>95%</td>
                            <td>$1.1B</td>
                        </tr>
                        <tr>
                            <td class="title"><a href="javascript:void(0)">Skyfall</a></td>
                            <td>9</td>
                            <td>2012</td>
                            <td>92%</td>
                            <td>$1.1B</td>
                        </tr>
                        <tr>
                            <td class="title"><a href="javascript:void(0)">Transformers: Age of Extinction</a></td>
                            <td>10</td>
                            <td>2014</td>
                            <td>18%</td>
                            <td>$1.0B</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!-- /.row -->
    <!-- .row -->
    <div class="row">
        <div class="col-lg-12">
            <div class="white-box">
                <h3 class="box-title m-b-0">Column Toggle Table</h3>
                <p class="text-muted m-b-20">The Column Toggle Table allows the user to select which columns they want to be visible.</p>
                <table class="tablesaw table-striped table-hover table-bordered table" data-tablesaw-mode="columntoggle">
                    <thead>
                        <tr>
                            <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="persist">Movie Title</th>
                            <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority="3">Rank</th>
                            <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="2">Year</th>
                            <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="1">
                                <abbr title="Rotten Tomato Rating">Rating</abbr>
                            </th>
                            <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="4">Gross</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="title"><a href="javascript:void(0)">Avatar</a></td>
                            <td>1</td>
                            <td>2009</td>
                            <td>83%</td>
                            <td>$2.7B</td>
                        </tr>
                        <tr>
                            <td class="title"><a href="javascript:void(0)">Titanic</a></td>
                            <td>2</td>
                            <td>1997</td>
                            <td>88%</td>
                            <td>$2.1B</td>
                        </tr>
                        <tr>
                            <td class="title"><a href="javascript:void(0)">The Avengers</a></td>
                            <td>3</td>
                            <td>2012</td>
                            <td>92%</td>
                            <td>$1.5B</td>
                        </tr>
                        <tr>
                            <td class="title"><a href="javascript:void(0)">Harry Potter and the Deathly Hallows—Part 2</a></td>
                            <td>4</td>
                            <td>2011</td>
                            <td>96%</td>
                            <td>$1.3B</td>
                        </tr>
                        <tr>
                            <td class="title"><a href="javascript:void(0)">Frozen</a></td>
                            <td>5</td>
                            <td>2013</td>
                            <td>89%</td>
                            <td>$1.2B</td>
                        </tr>
                        <tr>
                            <td class="title"><a href="javascript:void(0)">Iron Man 3</a></td>
                            <td>6</td>
                            <td>2013</td>
                            <td>78%</td>
                            <td>$1.2B</td>
                        </tr>
                        <tr>
                            <td class="title"><a href="javascript:void(0)">Transformers: Dark of the Moon</a></td>
                            <td>7</td>
                            <td>2011</td>
                            <td>36%</td>
                            <td>$1.1B</td>
                        </tr>
                        <tr>
                            <td class="title"><a href="javascript:void(0)">The Lord of the Rings: The Return of the King</a></td>
                            <td>8</td>
                            <td>2003</td>
                            <td>95%</td>
                            <td>$1.1B</td>
                        </tr>
                        <tr>
                            <td class="title"><a href="javascript:void(0)">Skyfall</a></td>
                            <td>9</td>
                            <td>2012</td>
                            <td>92%</td>
                            <td>$1.1B</td>
                        </tr>
                        <tr>
                            <td class="title"><a href="javascript:void(0)">Transformers: Age of Extinction</a></td>
                            <td>10</td>
                            <td>2014</td>
                            <td>18%</td>
                            <td>$1.0B</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!-- /.row -->
    <!-- .row -->
    <div class="row">
        <div class="col-lg-12">
            <div class="white-box">
                <h3 class="box-title m-b-0">Swipe Table</h3>
                <p class="text-muted m-b-20">The Column Swipe Table allows the user to select which columns they want to be visible.</p>
                <table class="tablesaw table-bordered table-hover table" data-tablesaw-mode="swipe">
                    <thead>
                        <tr>
                            <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="persist">Movie Title</th>
                            <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority="3">Rank</th>
                            <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="2">Year</th>
                            <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="1">
                                <abbr title="Rotten Tomato Rating">Rating</abbr>
                            </th>
                            <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="4">Gross</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="title"><a href="javascript:void(0)">Avatar</a></td>
                            <td>1</td>
                            <td>2009</td>
                            <td>83%</td>
                            <td>$2.7B</td>
                        </tr>
                        <tr>
                            <td class="title"><a href="javascript:void(0)">Titanic</a></td>
                            <td>2</td>
                            <td>1997</td>
                            <td>88%</td>
                            <td>$2.1B</td>
                        </tr>
                        <tr>
                            <td class="title"><a href="javascript:void(0)">The Avengers</a></td>
                            <td>3</td>
                            <td>2012</td>
                            <td>92%</td>
                            <td>$1.5B</td>
                        </tr>
                        <tr>
                            <td class="title"><a href="javascript:void(0)">Harry Potter and the Deathly Hallows—Part 2</a></td>
                            <td>4</td>
                            <td>2011</td>
                            <td>96%</td>
                            <td>$1.3B</td>
                        </tr>
                        <tr>
                            <td class="title"><a href="javascript:void(0)">Frozen</a></td>
                            <td>5</td>
                            <td>2013</td>
                            <td>89%</td>
                            <td>$1.2B</td>
                        </tr>
                        <tr>
                            <td class="title"><a href="javascript:void(0)">Iron Man 3</a></td>
                            <td>6</td>
                            <td>2013</td>
                            <td>78%</td>
                            <td>$1.2B</td>
                        </tr>
                        <tr>
                            <td class="title"><a href="javascript:void(0)">Transformers: Dark of the Moon</a></td>
                            <td>7</td>
                            <td>2011</td>
                            <td>36%</td>
                            <td>$1.1B</td>
                        </tr>
                        <tr>
                            <td class="title"><a href="javascript:void(0)">The Lord of the Rings: The Return of the King</a></td>
                            <td>8</td>
                            <td>2003</td>
                            <td>95%</td>
                            <td>$1.1B</td>
                        </tr>
                        <tr>
                            <td class="title"><a href="javascript:void(0)">Skyfall</a></td>
                            <td>9</td>
                            <td>2012</td>
                            <td>92%</td>
                            <td>$1.1B</td>
                        </tr>
                        <tr>
                            <td class="title"><a href="javascript:void(0)">Transformers: Age of Extinction</a></td>
                            <td>10</td>
                            <td>2014</td>
                            <td>18%</td>
                            <td>$1.0B</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

@endsection

@push('scripts')

 <!-- jQuery peity -->
    <script src="console/plugins/tablesaw-master/dist/tablesaw.js"></script>
    <script src="console/plugins/tablesaw-master/dist/tablesaw-init.js"></script>

@endpush