@extends('layouts.console')

@push('stylesheets')

@endpush

@section('content')

    <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">Chat Page</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
            <a href="javascript: void(0);" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li class="active">Chat Page</li>
            </ol>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- .chat-row -->
    <div class="chat-main-box">
        <!-- .chat-left-panel -->
        <div class="chat-left-aside">
            <div class="open-panel"><i class="ti-angle-right"></i></div>
            <div class="chat-left-inner">
                <div class="form-material">
                    <input class="form-control p-20" type="text" placeholder="Search Contact">
                </div>
                <ul class="chatonline style-none ">
                    <li>
                        <a href="javascript:void(0)"><img src="console/images/users/varun.jpg" alt="user-img" class="img-circle"> <span>Varun Dhavan <small class="text-success">online</small></span></a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" class="active"><img src="console/images/users/genu.jpg" alt="user-img" class="img-circle"> <span>Genelia Deshmukh <small class="text-warning">Away</small></span></a>
                    </li>
                    <li>
                        <a href="javascript:void(0)"><img src="console/images/users/ritesh.jpg" alt="user-img" class="img-circle"> <span>Ritesh Deshmukh <small class="text-danger">Busy</small></span></a>
                    </li>
                    <li>
                        <a href="javascript:void(0)"><img src="console/images/users/arijit.jpg" alt="user-img" class="img-circle"> <span>Arijit Sinh <small class="text-muted">Offline</small></span></a>
                    </li>
                    <li>
                        <a href="javascript:void(0)"><img src="console/images/users/govinda.jpg" alt="user-img" class="img-circle"> <span>Govinda Star <small class="text-success">online</small></span></a>
                    </li>
                    <li>
                        <a href="javascript:void(0)"><img src="console/images/users/hritik.jpg" alt="user-img" class="img-circle"> <span>John Abraham<small class="text-success">online</small></span></a>
                    </li>
                    <li>
                        <a href="javascript:void(0)"><img src="console/images/users/john.jpg" alt="user-img" class="img-circle"> <span>Hritik Roshan<small class="text-success">online</small></span></a>
                    </li>
                    <li>
                        <a href="javascript:void(0)"><img src="console/images/users/pawandeep.jpg" alt="user-img" class="img-circle"> <span>Pwandeep rajan <small class="text-success">online</small></span></a>
                    </li>
                    <li class="p-20"></li>
                </ul>
            </div>
        </div>
        <!-- .chat-left-panel -->
        <!-- .chat-right-panel -->
        <div class="chat-right-aside">
            <div class="chat-main-header">
                <div class="p-20 b-b">
                    <h3 class="box-title">Chat Message</h3> </div>
            </div>
            <div class="chat-box">
                <ul class="chat-list slimscroll p-t-30">
                    <li>
                        <div class="chat-image"> <img alt="male" src="console/images/users/ritesh.jpg"> </div>
                        <div class="chat-body">
                            <div class="chat-text">
                                <h4>Ritesh</h4>
                                <p> Hi, Genelia how are you and my son? </p> <b>10.00 am</b> </div>
                        </div>
                    </li>
                    <li class="odd">
                        <div class="chat-image"> <img alt="Female" src="console/images/users/genu.jpg"> </div>
                        <div class="chat-body">
                            <div class="chat-text">
                                <h4>Genelia</h4>
                                <p> Hi, How are you Ritesh!!! We both are fine sweetu. </p> <b>10.03 am</b> </div>
                        </div>
                    </li>
                    <li>
                        <div class="chat-image"> <img alt="male" src="console/images/users/ritesh.jpg"> </div>
                        <div class="chat-body">
                            <div class="chat-text">
                                <h4>Ritesh</h4>
                                <p> Oh great!!! just enjoy you all day and keep rocking</p> <b>10.05 am</b> </div>
                        </div>
                    </li>
                    <li class="odd">
                        <div class="chat-image"> <img alt="Female" src="console/images/users/genu.jpg"> </div>
                        <div class="chat-body">
                            <div class="chat-text">
                                <h4>Genelia</h4>
                                <p> Your movei was superb and your acting is mindblowing </p> <b>10.07 am</b> </div>
                        </div>
                    </li>
                </ul>
                <div class="row send-chat-box">
                    <div class="col-sm-12">
                        <textarea class="form-control" placeholder="Type your message"></textarea>
                        <div class="custom-send"><a href="javacript:void(0)" class="cst-icon" data-toggle="tooltip" title="Insert Emojis"><i class="ti-face-smile"></i></a> <a href="javacript:void(0)" class="cst-icon" data-toggle="tooltip" title="File Attachment"><i class="fa fa-paperclip"></i></a>
                            <button class="btn btn-danger btn-rounded" type="button">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- .chat-right-panel -->
    </div>
    <!-- /.chat-row -->

@endsection

@push('scripts')

@endpush