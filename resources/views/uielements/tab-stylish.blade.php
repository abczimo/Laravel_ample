@extends('layouts.console')

@push('stylesheets')

@endpush

@section('content')

    <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">Tabs</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
            <a href="javascript: void(0);" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Ui Elements</a></li>
                <li class="active">Tabs</li>
            </ol>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- .row -->
    <div class="row">
        <div class="col-md-12">
            <div class="white-box">
                <!-- Tabstyle start -->
                <h3 class="box-title m-b-0">Tabstyle 1 </h3> <code>sttabs tabs-style-bar</code>
                <hr>
                <section>
                    <div class="sttabs tabs-style-bar">
                        <nav>
                            <ul>
                                <li><a href="#section-bar-1" class="sticon ti-home"><span>Home</span></a></li>
                                <li><a href="#section-bar-2" class="sticon ti-trash"><span>Archive</span></a></li>
                                <li><a href="#section-bar-3" class="sticon ti-stats-up"><span>Analytics</span></a></li>
                                <li><a href="#section-bar-4" class="sticon ti-upload"><span>Upload</span></a></li>
                                <li><a href="#section-bar-5" class="sticon ti-settings"><span>Settings</span></a></li>
                            </ul>
                        </nav>
                        <div class="content-wrap">
                            <section id="section-bar-1">
                                <h3>Best Clean Tab ever</h3>
                                <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                            </section>
                            <section id="section-bar-2">
                                <h2>Tabbing 2</h2></section>
                            <section id="section-bar-3">
                                <h2>Tabbing 3</h2></section>
                            <section id="section-bar-4">
                                <h2>Tabbing 4</h2></section>
                            <section id="section-bar-5">
                                <h2>Tabbing 5</h2></section>
                        </div>
                        <!-- /content -->
                    </div>
                    <!-- /tabs -->
                </section>
                <!-- Tabstyle start -->
                <hr>
                <h3 class="box-title m-b-0">Tabstyle 2 </h3> <code>sttabs tabs-style-iconbox</code>
                <section class="m-t-40">
                    <div class="sttabs tabs-style-iconbox">
                        <nav>
                            <ul>
                                <li><a href="#section-iconbox-1" class="sticon ti-home"><span>Home</span></a></li>
                                <li><a href="#section-iconbox-2" class="sticon ti-gift"><span>Deals</span></a></li>
                                <li><a href="#section-iconbox-3" class="sticon ti-upload"><span>Upload</span></a></li>
                                <li><a href="#section-iconbox-4" class="sticon ti-trash"><span>Delete</span></a></li>
                                <li><a href="#section-iconbox-5" class="sticon ti-settings"><span>Settings</span></a></li>
                            </ul>
                        </nav>
                        <div class="content-wrap">
                            <section id="section-iconbox-1">
                                <h3>Best Clean Tab ever</h3>
                                <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                            </section>
                            <section id="section-iconbox-2">
                                <h2>Tabbing 2</h2></section>
                            <section id="section-iconbox-3">
                                <h2>Tabbing 3</h2></section>
                            <section id="section-iconbox-4">
                                <h2>Tabbing 4</h2></section>
                            <section id="section-iconbox-5">
                                <h2>Tabbing 5</h2></section>
                        </div>
                        <!-- /content -->
                    </div>
                    <!-- /tabs -->
                </section>
                <!-- Tabstyle start -->
                <hr>
                <h3 class="box-title m-b-0 m-t-40">Tabstyle 3 </h3> <code>sttabs tabs-style-underline</code>
                <section class="m-t-40">
                    <div class="sttabs tabs-style-underline">
                        <nav>
                            <ul>
                                <li><a href="#section-underline-1" class="sticon ti-home"><span>Home</span></a></li>
                                <li><a href="#section-underline-2" class="sticon ti-gift"><span>Deals</span></a></li>
                                <li><a href="#section-underline-3" class="sticon ti-upload"><span>Upload</span></a></li>
                                <li><a href="#section-underline-4" class="sticon ti-trash"><span>Delete</span></a></li>
                                <li><a href="#section-underline-5" class="sticon ti-settings"><span>Settings</span></a></li>
                            </ul>
                        </nav>
                        <div class="content-wrap">
                            <section id="section-underline-1">
                                <h3>Best Clean Tab ever</h3>
                                <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                            </section>
                            <section id="section-underline-2">
                                <h2>Tabbing 2</h2></section>
                            <section id="section-underline-3">
                                <h2>Tabbing 3</h2></section>
                            <section id="section-underline-4">
                                <h2>Tabbing 4</h2></section>
                            <section id="section-underline-5">
                                <h2>Tabbing 5</h2></section>
                        </div>
                        <!-- /content -->
                    </div>
                    <!-- /tabs -->
                </section>
                <!-- Tabstyle start -->
                <hr>
                <h3 class="box-title m-b-0 m-t-40">Tabstyle 4 </h3> <code>sttabs tabs-style-linetriangle</code>
                <section class="m-t-40">
                    <div class="sttabs tabs-style-linetriangle">
                        <nav>
                            <ul>
                                <li><a href="#section-linetriangle-1"><span>All Products</span></a></li>
                                <li><a href="#section-linetriangle-2"><span>Electronics</span></a></li>
                                <li><a href="#section-linetriangle-3"><span>Clothing</span></a></li>
                                <li><a href="#section-linetriangle-4"><span>Multimedia</span></a></li>
                                <li><a href="#section-linetriangle-5"><span>Toys</span></a></li>
                            </ul>
                        </nav>
                        <div class="content-wrap">
                            <section id="section-linetriangle-1">
                                <h3>Best Clean Tab ever</h3>
                                <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                            </section>
                            <section id="section-linetriangle-2">
                                <h2>Tabbing 2</h2></section>
                            <section id="section-linetriangle-3">
                                <h2>Tabbing 3</h2></section>
                            <section id="section-linetriangle-4">
                                <h2>Tabbing 4</h2></section>
                            <section id="section-linetriangle-5">
                                <h2>Tabbing 5</h2></section>
                        </div>
                        <!-- /content -->
                    </div>
                    <!-- /tabs -->
                </section>
                <!-- Tabstyle start -->
                <hr>
                <h3 class="box-title m-b-0 m-t-40">Tabstyle 5</h3> <code>sttabs tabs-style-iconfall</code>
                <section class="m-t-40">
                    <div class="sttabs tabs-style-iconfall">
                        <nav>
                            <ul>
                                <li><a href="#section-iconfall-1" class="sticon ti-home"><span>Home</span></a></li>
                                <li><a href="#section-iconfall-2" class="sticon ti-gift"><span>Deals</span></a></li>
                                <li><a href="#section-iconfall-3" class="sticon ti-upload"><span>Upload</span></a></li>
                                <li><a href="#section-iconfall-4" class="sticon ti-trash"><span>Delete</span></a></li>
                                <li><a href="#section-iconfall-5" class="sticon ti-settings"><span>Settings</span></a></li>
                            </ul>
                        </nav>
                        <div class="content-wrap text-center">
                            <section id="section-iconfall-1">
                                <h2>Tabbing 1</h2></section>
                            <section id="section-iconfall-2">
                                <h2>Tabbing 2</h2></section>
                            <section id="section-iconfall-3">
                                <h2>Tabbing 3</h2></section>
                            <section id="section-iconfall-4">
                                <h2>Tabbing 4</h2></section>
                            <section id="section-iconfall-5">
                                <h2>Tabbing 5</h2></section>
                        </div>
                        <!-- /content -->
                    </div>
                    <!-- /tabs -->
                </section>
                <!-- Tabstyle start -->
                <hr>
                <h3 class="box-title m-b-0 m-t-40">Tabstyle 6</h3> <code>sttabs tabs-style-linemove</code>
                <section class="m-t-40">
                    <div class="sttabs tabs-style-linemove">
                        <nav>
                            <ul>
                                <li><a href="#section-linemove-1" class="sticon ti-home"><span>Home</span></a></li>
                                <li><a href="#section-linemove-2" class="sticon ti-gift"><span>Archive</span></a></li>
                                <li><a href="#section-linemove-3" class="sticon ti-trash"><span>Delete</span></a></li>
                                <li><a href="#section-linemove-4" class="sticon ti-upload"><span>Upload</span></a></li>
                                <li><a href="#section-linemove-5" class="sticon ti-settings"><span>Settings</span></a></li>
                            </ul>
                        </nav>
                        <div class="content-wrap text-center">
                            <section id="section-linemove-1">
                                <h2>Tabbing 1</h2></section>
                            <section id="section-linemove-2">
                                <h2>Tabbing 2</h2></section>
                            <section id="section-linemove-3">
                                <h2>Tabbing 3</h2></section>
                            <section id="section-linemove-4">
                                <h2>Tabbing 4</h2></section>
                            <section id="section-linemove-5">
                                <h2>Tabbing 5</h2></section>
                        </div>
                        <!-- /content -->
                    </div>
                    <!-- /tabs -->
                </section>
                <!-- Tabstyle start -->
                <hr>
                <h3 class="box-title m-b-0 m-t-40">Tabstyle 7</h3> <code>sttabs tabs-style-line</code>
                <section>
                    <div class="sttabs tabs-style-line">
                        <nav>
                            <ul>
                                <li><a href="#section-line-1"><span>Our Controls</span></a></li>
                                <li><a href="#section-line-2"><span>Sony Playstation 4</span></a></li>
                                <li><a href="#section-line-3"><span>Microsoft Xbox One</span></a></li>
                                <li><a href="#section-line-4"><span>Nintendo Wii U</span></a></li>
                                <li><a href="#section-line-5"><span>Microconsoles</span></a></li>
                            </ul>
                        </nav>
                        <div class="content-wrap">
                            <section id="section-line-1">
                                <h3>Best Clean Tab ever</h3>
                                <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                            </section>
                            <section id="section-line-2">
                                <h2>Tabbing 2</h2></section>
                            <section id="section-line-3">
                                <h2>Tabbing 3</h2></section>
                            <section id="section-line-4">
                                <h2>Tabbing 4</h2></section>
                            <section id="section-line-5">
                                <h2>Tabbing 5</h2></section>
                        </div>
                        <!-- /content -->
                    </div>
                    <!-- /tabs -->
                </section>
                <!-- Tabstyle start -->
                <hr>
                <h3 class="box-title m-b-0 m-t-40">Tabstyle 8</h3> <code>sttabs tabs-style-circle</code>
                <section class="m-b-40">
                    <div class="sttabs tabs-style-circle">
                        <nav>
                            <ul>
                                <li><a href="#section-circle-1" class="sticon ti-home"><span>Connect</span></a></li>
                                <li><a href="#section-circle-2" class="sticon ti-gift"><span>Gifts</span></a></li>
                                <li><a href="#section-circle-3" class="sticon ti-trash"><span>Boxes</span></a></li>
                                <li><a href="#section-circle-4" class="sticon ti-upload"><span>Prints</span></a></li>
                                <li><a href="#section-circle-5" class="sticon ti-settings"><span>Fun</span></a></li>
                            </ul>
                        </nav>
                        <div class="content-wrap text-center">
                            <section id="section-circle-1">
                                <h3>Best Clean Tab ever</h3>
                                <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                            </section>
                            <section id="section-circle-2">
                                <h2>Tabbing 2</h2></section>
                            <section id="section-circle-3">
                                <h2>Tabbing 3</h2></section>
                            <section id="section-circle-4">
                                <h2>Tabbing 4</h2></section>
                            <section id="section-circle-5">
                                <h2>Tabbing 5</h2></section>
                        </div>
                        <!-- /content -->
                    </div>
                    <!-- /tabs -->
                </section>
                <!-- Tabstyle start -->
                <hr>
                <h3 class="box-title m-b-0 m-t-40">Tabstyle 9</h3> <code>sttabs tabs-style-shape</code> and put some svg like in demo
                <svg class="hidden">
                    <defs>
                        <path id="tabshape" d="M80,60C34,53.5,64.417,0,0,0v60H80z" /> </defs>
                </svg>
                <section class="m-t-40">
                    <div class="sttabs tabs-style-shape">
                        <nav>
                            <ul>
                                <li>
                                    <a href="#section-shape-1">
                                        <svg viewBox="0 0 80 60" preserveAspectRatio="none">
                                            <use xlink:href="#tabshape"></use>
                                        </svg> <span>Home</span> </a>
                                </li>
                                <li>
                                    <a href="#section-shape-2">
                                        <svg viewBox="0 0 80 60" preserveAspectRatio="none">
                                            <use xlink:href="#tabshape"></use>
                                        </svg>
                                        <svg viewBox="0 0 80 60" preserveAspectRatio="none">
                                            <use xlink:href="#tabshape"></use>
                                        </svg> <span>Design</span> </a>
                                </li>
                                <li>
                                    <a href="#section-shape-3">
                                        <svg viewBox="0 0 80 60" preserveAspectRatio="none">
                                            <use xlink:href="#tabshape"></use>
                                        </svg>
                                        <svg viewBox="0 0 80 60" preserveAspectRatio="none">
                                            <use xlink:href="#tabshape"></use>
                                        </svg> <span>Work</span> </a>
                                </li>
                                <li>
                                    <a href="#section-shape-4">
                                        <svg viewBox="0 0 80 60" preserveAspectRatio="none">
                                            <use xlink:href="#tabshape"></use>
                                        </svg>
                                        <svg viewBox="0 0 80 60" preserveAspectRatio="none">
                                            <use xlink:href="#tabshape"></use>
                                        </svg> <span>Portfolio</span> </a>
                                </li>
                                <li>
                                    <a href="#section-shape-5">
                                        <svg viewBox="0 0 80 60" preserveAspectRatio="none">
                                            <use xlink:href="#tabshape"></use>
                                        </svg> <span>Contact</span> </a>
                                </li>
                            </ul>
                        </nav>
                        <div class="content-wrap">
                            <section id="section-shape-1">
                                <h3>Best Clean Tab ever</h3>
                                <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                            </section>
                            <section id="section-shape-2">
                                <h2>Tabbing 2</h2></section>
                            <section id="section-shape-3">
                                <h2>Tabbing 3</h2></section>
                            <section id="section-shape-4">
                                <h2>Tabbing 4</h2></section>
                            <section id="section-shape-5">
                                <h2>Tabbing 5</h2></section>
                        </div>
                        <!-- /content -->
                    </div>
                    <!-- /tabs -->
                </section>
                <!-- Tabstyle start -->
                <hr>
                <h3 class="box-title m-b-0 m-t-40">Tabstyle 10</h3> <code>sttabs tabs-style-linebox</code>
                <section class="m-t-40">
                    <div class="sttabs tabs-style-linebox">
                        <nav>
                            <ul>
                                <li><a href="#section-linebox-5"><span>Airline</span></a></li>
                                <li><a href="#section-linebox-4"><span>Schedule</span></a></li>
                                <li><a href="#section-linebox-2"><span>Deals</span></a></li>
                                <li><a href="#section-linebox-3"><span>Drinks</span></a></li>
                                <li><a href="#section-linebox-5"><span>Settings</span></a></li>
                            </ul>
                        </nav>
                        <div class="content-wrap text-center">
                            <section id="section-linebox-1">
                                <h3>Best Clean Tab ever</h3>
                                <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                            </section>
                            <section id="section-linebox-2">
                                <h2>Tabbing 2</h2></section>
                            <section id="section-linebox-3">
                                <h2>Tabbing 3</h2></section>
                            <section id="section-linebox-4">
                                <h2>Tabbing 4</h2></section>
                            <section id="section-linebox-5">
                                <h2>Tabbing 5</h2></section>
                        </div>
                        <!-- /content -->
                    </div>
                    <!-- /tabs -->
                </section>
                <!-- Tabstyle start -->
                <hr>
                <h3 class="box-title m-b-0 m-t-40">Tabstyle 11</h3> <code>sttabs tabs-style-flip</code>
                <section class="m-t-40">
                    <div class="sttabs tabs-style-flip">
                        <nav>
                            <ul>
                                <li><a href="#section-flip-5" class="sticon ti-home"><span>Airline</span></a></li>
                                <li><a href="#section-flip-4" class="sticon ti-trash"><span>Schedule</span></a></li>
                                <li><a href="#section-flip-2" class="sticon ti-gift"><span>Deals</span></a></li>
                                <li><a href="#section-flip-3" class="sticon ti-gift"><span>Drinks</span></a></li>
                                <li><a href="#section-flip-5" class="sticon ti-settings"><span>Settings</span></a></li>
                            </ul>
                        </nav>
                        <div class="content-wrap">
                            <section id="section-flip-1">
                                <h2>Tabbing 1</h2></section>
                            <section id="section-flip-2">
                                <h2>Tabbing 2</h2></section>
                            <section id="section-flip-3">
                                <h2>Tabbing 3</h2></section>
                            <section id="section-flip-4">
                                <h2>Tabbing 4</h2></section>
                            <section id="section-flip-5">
                                <h2>Tabbing 5</h2></section>
                        </div>
                        <!-- /content -->
                    </div>
                    <!-- /tabs -->
                </section>
                <!-- Tabstyle start -->
                <hr>
                <h3 class="box-title m-b-0 m-t-40">Tabstyle 12</h3> <code>sttabs tabs-style-circlefill</code>
                <section class="m-t-40">
                    <div class="sttabs tabs-style-circlefill">
                        <nav>
                            <ul>
                                <li><a href="#section-circlefill-1" class="ti-home"><span>Connect</span></a></li>
                                <li><a href="#section-circlefill-2" class="ti-gift"><span>Gifts</span></a></li>
                                <li><a href="#section-circlefill-3" class="ti-trash"><span>Boxes</span></a></li>
                                <li><a href="#section-circlefill-4" class="ti-settings"><span>Prints</span></a></li>
                                <li><a href="#section-circlefill-5" class="ti-upload"><span>Fun</span></a></li>
                            </ul>
                        </nav>
                        <div class="content-wrap">
                            <section id="section-circlefill-1">
                                <p>1</p>
                            </section>
                            <section id="section-circlefill-2">
                                <p>2</p>
                            </section>
                            <section id="section-circlefill-3">
                                <p>3</p>
                            </section>
                            <section id="section-circlefill-4">
                                <p>4</p>
                            </section>
                            <section id="section-circlefill-5">
                                <p>5</p>
                            </section>
                        </div>
                        <!-- /content -->
                    </div>
                    <!-- /tabs -->
                </section>
            </div>
        </div>
    </div>

@endsection

@push('scripts')

    <script src="console/js/cbpFWTabs.js"></script>
    <script type="text/javascript">
        (function() {
            [].slice.call(document.querySelectorAll('.sttabs')).forEach(function(el) {
                new CBPFWTabs(el);
            });
        })();
    </script>

@endpush