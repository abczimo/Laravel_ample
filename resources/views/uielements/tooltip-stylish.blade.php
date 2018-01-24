@extends('layouts.console')

@push('stylesheets')

    <style type="text/css">
        .tooltip-content2::after {
            background-image: url(console/images/tooltip/tooltip1.svg) !important;
        }

        .tooltip-content3 {
            background-image: url(console/images/tooltip/shape1.svg) !important;
        }
    </style>

@endpush

@section('content')

    <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">Stylish Tooltips</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
            <a href="javascript: void(0);" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Ui Elements</a></li>
                <li class="active">Stylish Tooltips</li>
            </ol>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- row -->
    <div class="row">
        <div class="col-md-3 col-xs-12 col-sm-6">
            <div class="white-box">
                <h3 class="box-title m-b-0">Tooltip Style 1 <a class="get-code" data-toggle="collapse" href="#tt1" aria-expanded="true"><i class="fa fa-code" title="Get Code" data-toggle="tooltip"></i></a></h3>
                <div class="collapse m-t-15" id="tt1" aria-expanded="true"> <code>&lt;span class="mytooltip tooltip-effect-2"&gt;
        &lt;span class="tooltip-item"&gt;Euclid&lt;/span&gt;
          &lt;span class="tooltip-content clearfix"&gt;
          &lt;img src="console/images/tooltip/Euclid.png" /&gt;
          &lt;span class="tooltip-text">Also known as Euclid of andria, was a Greek mathematician, often referred.&lt;/span&gt;
        &lt;/span&gt;
       &lt;/span&gt;</code> </div>
                <hr>
                <p>Tesseract, finite but unbounded take root and flourish, <span class="mytooltip tooltip-effect-1">
        <span class="tooltip-item">Euclid</span> <span class="tooltip-content clearfix">
          <img src="console/images/tooltip/Euclid.png" />
          <span class="tooltip-text">Also known as Euclid of andria, was a Greek mathematician, often referred.</span> </span>
                    </span> rogue laws of physics, star stuff harvesting star light.</p>
            </div>
        </div>
        <div class="col-md-3 col-xs-12 col-sm-6">
            <div class="white-box">
                <h3 class="box-title m-b-0">Tooltip Style 2 
        <a class="get-code" data-toggle="collapse" href="#tt2" aria-expanded="true"><i class="fa fa-code" title="Get Code" data-toggle="tooltip"></i></a></h3>
                <div class="collapse m-t-15" id="tt2" aria-expanded="true"> <code>&lt;span class="mytooltip tooltip-effect-2"&gt;
        &lt;span class="tooltip-item"&gt;Euclid&lt;/span&gt;
          &lt;span class="tooltip-content clearfix"&gt;
          &lt;img src="console/images/tooltip/Euclid.png" /&gt;
          &lt;span class="tooltip-text">Also known as Euclid of andria, was a Greek mathematician, often referred.&lt;/span&gt;
        &lt;/span&gt;
       &lt;/span&gt;</code> </div>
                <hr>
                <p>Tesseract, finite but unbounded take root and flourish, <span class="mytooltip tooltip-effect-2">
        <span class="tooltip-item">Euclid</span> <span class="tooltip-content clearfix">
          <img src="console/images/tooltip/Euclid.png" />
          <span class="tooltip-text">Also known as Euclid of andria, was a Greek mathematician, often referred.</span> </span>
                    </span> rogue laws of physics, star stuff harvesting star light.</p>
            </div>
        </div>
        <div class="col-md-3 col-xs-12 col-sm-6">
            <div class="white-box">
                <h3 class="box-title m-b-0">Tooltip Style 4 
        <a class="get-code" data-toggle="collapse" href="#tt3" aria-expanded="true"><i class="fa fa-code" title="Get Code" data-toggle="tooltip"></i></a></h3>
                <div class="collapse m-t-15" id="tt3" aria-expanded="true"> <code>&lt;span class="mytooltip tooltip-effect-2"&gt;
        &lt;span class="tooltip-item"&gt;Euclid&lt;/span&gt;
          &lt;span class="tooltip-content clearfix"&gt;
          &lt;img src="console/images/tooltip/Euclid.png" /&gt;
          &lt;span class="tooltip-text">Also known as Euclid of andria, was a Greek mathematician, often referred.&lt;/span&gt;
        &lt;/span&gt;
       &lt;/span&gt;</code> </div>
                <hr>
                <p>Tesseract, finite but unbounded take root and flourish, <span class="mytooltip tooltip-effect-4">
        <span class="tooltip-item">Euclid</span> <span class="tooltip-content clearfix">
          <img src="console/images/tooltip/Euclid.png" />
          <span class="tooltip-text">Also known as Euclid of andria, was a Greek mathematician, often referred.</span> </span>
                    </span> rogue laws of physics, star stuff harvesting star light.</p>
            </div>
        </div>
        <div class="col-md-3 col-xs-12 col-sm-6">
            <div class="white-box">
                <h3 class="box-title m-b-0">Tooltip Style 5
      <a class="get-code" data-toggle="collapse" href="#tt4" aria-expanded="true"><i class="fa fa-code" title="Get Code" data-toggle="tooltip"></i></a></h3>
                <div class="collapse m-t-15" id="tt4" aria-expanded="true"> <code>&lt;span class="mytooltip tooltip-effect-2"&gt;
        &lt;span class="tooltip-item"&gt;Euclid&lt;/span&gt;
          &lt;span class="tooltip-content clearfix"&gt;
          &lt;img src="console/images/tooltip/Euclid.png" /&gt;
          &lt;span class="tooltip-text">Also known as Euclid of andria, was a Greek mathematician, often referred.&lt;/span&gt;
        &lt;/span&gt;
       &lt;/span&gt;</code> </div>
                <hr>
                <p>Tesseract, finite but unbounded take root and flourish, <span class="mytooltip tooltip-effect-5">
        <span class="tooltip-item">Euclid</span> <span class="tooltip-content clearfix">
          <span class="tooltip-text">Also known as Euclid of andria was a Greek mamatician, own as Euclid of andria, was a Greek mathe often referred.</span> </span>
                    </span> rogue laws of physics, star stuff harvesting star light.</p>
            </div>
        </div>
    </div>
    <!-- /.row -->
    <!-- row -->
    <div class="row">
        <div class="col-md-3 col-xs-12 col-sm-6">
            <div class="white-box">
                <h3 class="box-title m-b-0">Icon Tooltip 6 <a class="get-code" data-toggle="collapse" href="#pgr1" aria-expanded="true"><i class="fa fa-code" title="Get Code" data-toggle="tooltip"></i></a></h3>
                <div class="collapse m-t-15" id="pgr1" aria-expanded="true"> <code>&lt;a class="mytooltip tooltip-effect-6" href="#"&gt;Photography&lt;span class="tooltip-content2"&gt;&lt;i class="fa fa-camera-retro"&gt;&lt;/i&gt;&lt;/span&gt;&lt;/a&gt;</code> </div>
                <hr>
                <p>rogue laws of physics, star stuff <a class="mytooltip tooltip-effect-6" href="#">Home<span class="tooltip-content2"><i class="fa fa-home"></i></span></a> harvesting star light. </p>
            </div>
        </div>
        <div class="col-md-3 col-xs-12 col-sm-6">
            <div class="white-box">
                <h3 class="box-title m-b-0">Icon Tooltip 7 <a class="get-code" data-toggle="collapse" href="#pgr2" aria-expanded="true"><i class="fa fa-code" title="Get Code" data-toggle="tooltip"></i></a></h3>
                <div class="collapse m-t-15" id="pgr2" aria-expanded="true"> <code>&lt;a class="mytooltip tooltip-effect-7" href="#"&gt;Photography&lt;span class="tooltip-content2"&gt;&lt;i class="fa fa-camera-retro"&gt;&lt;/i&gt;&lt;/span&gt;&lt;/a&gt;</code> </div>
                <hr>
                <p>rogue laws of physics, star stuff <a class="mytooltip tooltip-effect-7" href="#">About me<span class="tooltip-content2"><i class="fa fa-user"></i></span></a> harvesting star light.</p>
            </div>
        </div>
        <div class="col-md-3 col-xs-12 col-sm-6">
            <div class="white-box">
                <h3 class="box-title m-b-0">Icon Tooltip 8 
      <a class="get-code" data-toggle="collapse" href="#pgr3" aria-expanded="true"><i class="fa fa-code" title="Get Code" data-toggle="tooltip"></i></a></h3>
                <div class="collapse m-t-15" id="pgr3" aria-expanded="true"> <code>&lt;a class="mytooltip tooltip-effect-8" href="#"&gt;Photography&lt;span class="tooltip-content2"&gt;&lt;i class="fa fa-camera-retro"&gt;&lt;/i&gt;&lt;/span&gt;&lt;/a&gt;</code> </div>
                <hr>
                <p>rogue laws of physics, star stuff <a class="mytooltip tooltip-effect-8" href="#">Photography<span class="tooltip-content2"><i class="fa fa-camera-retro"></i></span></a> harvesting star light.</p>
            </div>
        </div>
        <div class="col-md-3 col-xs-12 col-sm-6">
            <div class="white-box">
                <h3 class="box-title m-b-0">Icon Tooltip 9<a class="get-code" data-toggle="collapse" href="#pgr4" aria-expanded="true"><i class="fa fa-code" title="Get Code" data-toggle="tooltip"></i></a></h3>
                <div class="collapse m-t-15" id="pgr4" aria-expanded="true"> <code>&lt;a class="mytooltip tooltip-effect-9" href="#"&gt;Photography&lt;span class="tooltip-content2"&gt;&lt;i class="fa fa-camera-retro"&gt;&lt;/i&gt;&lt;/span&gt;&lt;/a&gt;</code> </div>
                <hr>
                <p>rogue laws of physics, star stuff <a class="mytooltip tooltip-effect-9" href="#">Work<span class="tooltip-content2"><i class="fa fa-briefcase"></i></span></a> harvesting star light. </p>
            </div>
        </div>
    </div>
    <!-- /.row -->
    <!-- row -->
    <div class="row">
        <div class="col-md-3 col-xs-12 col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Bloated Tooltip<a class="get-code" data-toggle="collapse" href="#pgr5" aria-expanded="true"><i class="fa fa-code" title="Get Code" data-toggle="tooltip"></i></a></h3>
                <div class="collapse m-t-15" id="pgr5" aria-expanded="true"> <code>&lt;a class="mytooltip" href="javascript:void(0)"&gt;
                &lt;i class="fa fa-fw fa-car"&gt;&lt;/i&gt;Car 
                &lt;span class="tooltip-content3">You can easily navigate the city by car.&lt;/span&gt;
                &lt;/a&gt;
          </code> </div> Star stuff harvesting <a class="mytooltip" href="javascript:void(0)"><i class="fa fa-fw fa-car"></i> Car <span class="tooltip-content3">You can easily navigate the city by car.</span></a>star light, encyclopaedia galactica are creatures of the cosmos. </div>
        </div>
        <div class="col-md-3 col-xs-12 col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Bloated Tooltip<a class="get-code" data-toggle="collapse" href="#pgr6" aria-expanded="true"><i class="fa fa-code" title="Get Code" data-toggle="tooltip"></i></a></h3>
                <div class="collapse m-t-15" id="pgr6" aria-expanded="true"> <code>&lt;a class="mytooltip" href="javascript:void(0)"&gt;
                &lt;i class="fa fa-fw fa-car"&gt;&lt;/i&gt;Car 
                &lt;span class="tooltip-content3">You can easily navigate the city by car.&lt;/span&gt;
                &lt;/a&gt;
          </code> </div> Star stuff harvesting <a class="mytooltip" href="javascript:void(0)"><i class="fa fa-bicycle"></i> Car <span class="tooltip-content3">You can easily navigate the city by car.</span></a>star light, encyclopaedia galactica are creatures of the cosmos. </div>
        </div>
        <div class="col-md-3 col-xs-12 col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Bloated Tooltip<a class="get-code" data-toggle="collapse" href="#pgr7" aria-expanded="true"><i class="fa fa-code" title="Get Code" data-toggle="tooltip"></i></a></h3>
                <div class="collapse m-t-15" id="pgr7" aria-expanded="true"> <code>&lt;a class="mytooltip" href="javascript:void(0)"&gt;
                &lt;i class="fa fa-fw fa-car"&gt;&lt;/i&gt;Car 
                &lt;span class="tooltip-content3">You can easily navigate the city by car.&lt;/span&gt;
                &lt;/a&gt;
          </code> </div> Star stuff harvesting <a class="mytooltip" href="javascript:void(0)"><i class="fa fa-fw fa-car"></i> Car <span class="tooltip-content3">You can easily navigate the city by car.</span></a>star light, encyclopaedia galactica are creatures of the cosmos. </div>
        </div>
        <div class="col-md-3 col-xs-12 col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Bloated Tooltip<a class="get-code" data-toggle="collapse" href="#pgr8" aria-expanded="true"><i class="fa fa-code" title="Get Code" data-toggle="tooltip"></i></a></h3>
                <div class="collapse m-t-15" id="pgr8" aria-expanded="true"> <code>&lt;a class="mytooltip" href="javascript:void(0)"&gt;
                &lt;i class="fa fa-fw fa-car"&gt;&lt;/i&gt;Car 
                &lt;span class="tooltip-content3">You can easily navigate the city by car.&lt;/span&gt;
                &lt;/a&gt;
          </code> </div> Star stuff harvesting <a class="mytooltip" href="javascript:void(0)"><i class="fa fa-bicycle"></i> Car <span class="tooltip-content3">You can easily navigate the city by car.</span></a>star light, encyclopaedia galactica are creatures of the cosmos. </div>
        </div>
    </div>
    <!-- /.row -->
    <!-- .row -->
    <div class="row">
        <div class="col-md-12 col-xs-12">
            <div class="white-box">
                <h3 class="box-title">Box Tooltip<a class="get-code" data-toggle="collapse" href="#pgr9" aria-expanded="true"><i class="fa fa-code" title="Get Code" data-toggle="tooltip"></i></a></h3>
                <div class="collapse m-t-15" id="pgr9" aria-expanded="true"> <code>&lt;span class="mytooltip tooltip-effect-1"&gt;
                &lt;span class="tooltip-item2">Euclid&lt;/span&gt;
                &lt;span class="tooltip-content4 clearfix"&gt;
                &lt;span class="tooltip-text2"&gt;
                &lt;strong&gt;Euclid&lt;/strong&gt;
          </code> </div>
                <p>Tesseract, finite but unbounded take root and flourish, <span class="mytooltip tooltip-effect-1"><span class="tooltip-item2">Euclid</span><span class="tooltip-content4 clearfix"><span class="tooltip-text2"><strong>Euclid</strong>, also known as Euclid of Alexandria, was a Greek mathematician, often referred to as the "Father of Geometry". He was active in Alexandria during the reign of Ptolemy I. <a href="http://en.wikipedia.org/wiki/Euclid">Wikipedia</a></span></span>
                    </span> rogue laws of physics, star stuff harvesting star light, encyclopaedia galactica are creatures of the cosmos the only home we've ever known ship of the imagination prime number <span class="mytooltip tooltip-effect-2"><span class="tooltip-item2">quasar</span><span class="tooltip-content4 clearfix"><span class="tooltip-text2"><strong>Quasars</strong> are believed to be powered by accretion of material into supermassive black holes in the nuclei of distant galaxies, making these luminous versions of the general... <a href="http://en.wikipedia.org/wiki/Quasar">Wikipedia</a></span></span>
                    </span> courage of our questions.</p>
                <p>Colonies. Jean-François Champollion, billions upon billions descended from astronomers the sky calls to us! Made in the interiors of collapsing stars, billions upon billions radio telescope paroxysm of global death not a sunrise but a galaxyrise, gathered by gravity permanence of the stars?</p>
            </div>
        </div>
    </div>
    <!-- /.row -->
    <!-- .row -->
    <div class="row">
        <div class="col-md-3 col-xs-12 col-sm-6">
            <div class="white-box">
                <h3 class="box-title">Line Tooltip</h3> Tar light, encyclopaedia <a class="mytooltip" href="javascript:void(0)"> Line tooltip<span class="tooltip-content5"><span class="tooltip-text3"><span class="tooltip-inner2">Howdy, Ben!<br /> There are 13 unread messages in your inbox.</span></span></span></a> galactica are creatures of the cosmos. </div>
        </div>
    </div>

@endsection

@push('scripts')


@endpush