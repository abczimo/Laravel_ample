@extends('layouts.console')

@push('stylesheets')

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
                <ul class="timeline">
                    <li>
                        <div class="timeline-badge success"><img class="img-responsive" alt="user" src="console/images/users/genu.jpg"> </div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4 class="timeline-title">Genelia</h4>
                                <p><small class="text-muted"><i class="fa fa-clock-o"></i> 11 hours ago via Twitter</small> </p>
                            </div>
                            <div class="timeline-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero laboriosam dolor perspiciatis omnis exercitationem. Beatae, officia pariatur? Est cum veniam excepturi. Maiores praesentium, porro voluptas suscipit facere rem dicta, debitis.</p>
                            </div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-badge warning"><img class="img-responsive" alt="user" src="console/images/users/ritesh.jpg"> </div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4 class="timeline-title">Ritesh Deshmukh</h4> </div>
                            <div class="timeline-body">
                                <p><img class="img-responsive" alt="user" src="console/images/big/img1.jpg"></p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores odit qui est tempora eos, nostrum provident explicabo dignissimos debitis vel! Adipisci eius voluptates, ad aut recusandae minus eaque facere.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-badge danger"><i class="fa fa-bomb"></i> </div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4 class="timeline-title">Lorem ipsum dolor</h4> </div>
                            <div class="timeline-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam facilis enim eaque, tenetur nam id qui vel velit similique nihil iure molestias aliquam, voluptatem totam quaerat, magni commodi quisquam.</p>
                            </div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4 class="timeline-title">Lorem ipsum dolor</h4> </div>
                            <div class="timeline-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates est quaerat asperiores sapiente, eligendi, nihil. Itaque quos, alias sapiente rerum quas odit! Aperiam officiis quidem delectus libero, omnis ut debitis!</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-badge info"><i class="fa fa-save"></i> </div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4 class="timeline-title">Lorem ipsum dolor</h4> </div>
                            <div class="timeline-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minus modi quam ipsum alias at est molestiae excepturi delectus nesciunt, quibusdam debitis amet, beatae consequuntur impedit nulla qui! Laborum, atque.</p>
                                <hr>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-primary btn-sm dropdown-toggle" data-toggle="dropdown"> <i class="fa fa-gear"></i> <span class="caret"></span> </button>
                                    <ul class="dropdown-menu" role="menu">
                                        <li><a href="#">Action</a> </li>
                                        <li><a href="#">Another action</a> </li>
                                        <li><a href="#">Something else here</a> </li>
                                        <li class="divider"></li>
                                        <li><a href="#">Separated link</a> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-badge success"><i class="fa fa-graduation-cap"></i> </div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4 class="timeline-title">Lorem ipsum dolor</h4> </div>
                            <div class="timeline-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt obcaecati, quaerat tempore officia voluptas debitis consectetur culpa amet, accusamus dolorum fugiat, animi dicta aperiam, enim incidunt quisquam maxime neque eaque.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

@endsection

@push('scripts')

@endpush