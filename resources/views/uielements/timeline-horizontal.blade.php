@extends('layouts.console')

@push('stylesheets')

    <!-- Timeline CSS -->
    <link href="console/plugins/horizontal-timeline/css/horizontal-timeline.css" rel="stylesheet">

@endpush

@section('content')

    <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">Timeline</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
            <a href="javascript: void(0);" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Ui Elements</a></li>
                <li class="active">Timeline</li>
            </ol>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- .row -->
    <div class="row">
        <div class="col-md-12">
            <div class="white-box">
                <section class="cd-horizontal-timeline">
                    <div class="timeline">
                        <div class="events-wrapper">
                            <div class="events">
                                <ol>
                                    <li><a href="#0" data-date="16/01/2014" class="selected">16 Jan</a></li>
                                    <li><a href="#0" data-date="28/02/2014">28 Feb</a></li>
                                    <li><a href="#0" data-date="20/04/2014">20 Mar</a></li>
                                    <li><a href="#0" data-date="20/05/2014">20 May</a></li>
                                    <li><a href="#0" data-date="09/07/2014">09 Jul</a></li>
                                    <li><a href="#0" data-date="30/08/2014">30 Aug</a></li>
                                    <li><a href="#0" data-date="15/09/2014">15 Sep</a></li>
                                    <li><a href="#0" data-date="01/11/2014">01 Nov</a></li>
                                    <li><a href="#0" data-date="10/12/2014">10 Dec</a></li>
                                    <li><a href="#0" data-date="19/01/2015">29 Jan</a></li>
                                    <li><a href="#0" data-date="03/03/2015">3 Mar</a></li>
                                </ol> <span class="filling-line" aria-hidden="true"></span> </div>
                            <!-- .events -->
                        </div>
                        <!-- .events-wrapper -->
                        <ul class="cd-timeline-navigation">
                            <li><a href="#0" class="prev inactive">Prev</a></li>
                            <li><a href="#0" class="next">Next</a></li>
                        </ul>
                        <!-- .cd-timeline-navigation -->
                    </div>
                    <!-- .timeline -->
                    <div class="events-content">
                        <ol>
                            <li class="selected" data-date="16/01/2014">
                                <h2><img class="img-responsive img-circle pull-left m-r-20 m-b-10" width="60" alt="user" src="console/images/users/genu.jpg"> Horizontal Timeline<br/><small>January 16th, 2014</small></h2>
                                <hr class="m-t-40">
                                <p class="m-t-40"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                    <button class="btn btn-info btn-rounded btn-outline m-t-20">Read more</button>
                                </p>
                            </li>
                            <li data-date="28/02/2014">
                                <h2><img class="img-responsive img-circle pull-left m-r-20 m-b-10" width="60" alt="user" src="console/images/users/govinda.jpg"> Horizontal Timeline<br/><small>Feb 28th, 2014</small></h2>
                                <hr class="m-t-40">
                                <p class="m-t-40"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                    <button class="btn btn-info btn-rounded btn-outline m-t-20">Read more</button>
                                </p>
                            </li>
                            <li data-date="20/04/2014">
                                <h2><img class="img-responsive img-circle pull-left m-r-20 m-b-10" width="60" alt="user" src="console/images/users/salman.jpg"> Horizontal Timeline<br/><small>March 20th, 2014</small></h2>
                                <hr class="m-t-40">
                                <p class="m-t-40"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                    <button class="btn btn-info btn-rounded btn-outline m-t-20">Read more</button>
                                </p>
                            </li>
                            <li data-date="20/05/2014">
                                <h2><img class="img-responsive img-circle pull-left m-r-20 m-b-10" width="60" alt="user" src="console/images/users/varun.jpg"> Horizontal Timeline<br/><small>May 20th, 2014</small></h2>
                                <hr class="m-t-40">
                                <p class="m-t-40"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                    <button class="btn btn-info btn-rounded btn-outline m-t-20">Read more</button>
                                </p>
                            </li>
                            <li data-date="09/07/2014">
                                <h2><img class="img-responsive img-circle pull-left m-r-20 m-b-10" width="60" alt="user" src="console/images/users/genu.jpg"> Horizontal Timeline<br/><small>July 9th, 2014</small></h2>
                                <hr class="m-t-40">
                                <p class="m-t-40"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                    <button class="btn btn-info btn-rounded btn-outline m-t-20">Read more</button>
                                </p>
                            </li>
                            <li data-date="30/08/2014">
                                <h2><img class="img-responsive img-circle pull-left m-r-20 m-b-10" width="60" alt="user" src="console/images/users/sonu.jpg"> Horizontal Timeline<br/><small>August 30th, 2014</small></h2>
                                <hr class="m-t-40">
                                <p class="m-t-40"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                    <button class="btn btn-info btn-rounded btn-outline m-t-20">Read more</button>
                                </p>
                            </li>
                            <li data-date="15/09/2014">
                                <h2><img class="img-responsive img-circle pull-left m-r-20 m-b-10" width="60" alt="user" src="console/images/users/hritik.jpg"> Horizontal Timeline<br/><small>September 15th, 2014</small></h2>
                                <hr class="m-t-40">
                                <p class="m-t-40"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                    <button class="btn btn-info btn-rounded btn-outline m-t-20">Read more</button>
                                </p>
                            </li>
                            <li data-date="01/11/2014">
                                <h2><img class="img-responsive img-circle pull-left m-r-20 m-b-10" width="60" alt="user" src="console/images/users/varun.jpg"> Horizontal Timeline<br/><small>November 01st, 2014</small></h2>
                                <hr class="m-t-40">
                                <p class="m-t-40"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                    <button class="btn btn-info btn-rounded btn-outline m-t-20">Read more</button>
                                </p>
                            </li>
                            <li data-date="10/12/2014">
                                <h2><img class="img-responsive img-circle pull-left m-r-20 m-b-10" width="60" alt="user" src="console/images/users/ritesh.jpg"> Horizontal Timeline<br/><small>December 10th, 2014</small></h2>
                                <hr class="m-t-40">
                                <p class="m-t-40"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                    <button class="btn btn-info btn-rounded btn-outline m-t-20">Read more</button>
                                </p>
                            </li>
                            <li data-date="19/01/2015">
                                <h2>Event title here</h2> <em>January 19th, 2015</em>
                                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus. </p>
                            </li>
                            <li data-date="03/03/2015">
                                <h2>Event title here</h2> <em>March 3rd, 2015</em>
                                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus. </p>
                            </li>
                        </ol>
                    </div>
                    <!-- .events-content -->
                </section>
            </div>
        </div>
    </div>

@endsection

@push('scripts')

    <!-- Horizontal-timeline JavaScript -->
    <script src="console/plugins/horizontal-timeline/js/horizontal-timeline.js"></script>

@endpush