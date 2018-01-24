@extends('layouts.console')

@push('stylesheets')

    <link rel="stylesheet" type="text/css" href="console/plugins/gallery/css/animated-masonry-gallery.css" />
    <link rel="stylesheet" type="text/css" href="console/plugins/fancybox/ekko-lightbox.min.css" />

@endpush

@section('content')

    <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">Gallery page</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
            <a href="javascript: void(0);" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Sample Pages</a></li>
                <li class="active">Gallery page</li>
            </ol>
        </div>
    </div>
    <!-- /.row -->
    <div class="row">
        <div class="col-md-12">
            <div class="white-box">
                <h3 class="box-title">Gallery Page</h3>
                <div id="gallery">
                    <div id="gallery-header">
                        <div id="gallery-header-center">
                            <div id="gallery-header-center-left">
                                <div class="gallery-header-center-right-links" id="filter-all">All</div>
                                <div class="gallery-header-center-right-links" id="filter-studio">Studio</div>
                                <div class="gallery-header-center-right-links" id="filter-landscape">Landscapes</div>
                            </div>
                        </div>
                    </div>
                    <div id="gallery-content">
                        <div id="gallery-content-center">
                            <a href="console/images/assets/studio1.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/studio1.jpg" alt="gallery" class="all studio" /> </a>
                            <a href="console/images/assets/landscape1.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/landscape1.jpg" class="all landscape" alt="gallery" /> </a>
                            <a href="console/images/assets/studio2.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/studio2.jpg" class="all studio" alt="gallery" /> </a>
                            <a href="console/images/assets/studio25.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/studio25.jpg" class="all studio" alt="gallery" /> </a>
                            <a href="console/images/assets/landscape2.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/landscape2.jpg" class="all landscape" alt="gallery" /></a>
                            <a href="console/images/assets/studio27.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/studio27.jpg" class="all studio" alt="gallery" /> </a>
                            <a href="console/images/assets/studio3.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/studio3.jpg" class="all studio" alt="gallery" /> </a>
                            <a href="console/images/assets/landscape3.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/landscape3.jpg" class="all landscape" alt="gallery" /> </a>
                            <a href="console/images/assets/studio26.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/studio26.jpg" class="all studio" alt="gallery" /> </a>
                            <a href="console/images/assets/studio4.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/studio4.jpg" class="all studio" alt="gallery" /> </a>
                            <a href="console/images/assets/landscape4.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/landscape4.jpg" class="all landscape" alt="gallery" /></a>
                            <a href="console/images/assets/studio5.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/studio5.jpg" class="all studio" alt="gallery" /> </a>
                            <a href="console/images/assets/landscape5.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/landscape5.jpg" class="all landscape" alt="gallery" /></a>
                            <a href="console/images/assets/studio6.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/studio6.jpg" class="all studio" alt="gallery" /></a>
                            <a href="console/images/assets/landscape6.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/landscape6.jpg" class="all landscape" alt="gallery" /> </a>
                            <a href="console/images/assets/studio7.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/studio7.jpg" class="all studio" alt="gallery" /></a>
                            <a href="console/images/assets/landscape7.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/landscape7.jpg" class="all landscape" alt="gallery" /> </a>
                            <a href="console/images/assets/studio8.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/studio8.jpg" class="all studio" alt="gallery" /></a>
                            <a href="console/images/assets/landscape8.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/landscape8.jpg" class="all landscape" alt="gallery" /> </a>
                            <a href="console/images/assets/studio9.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/studio9.jpg" class="all studio" alt="gallery" />
                                <a href="console/images/assets/landscape9.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/landscape9.jpg" class="all landscape" alt="gallery" /> </a>
                                <a href="console/images/assets/studio10.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/studio10.jpg" class="all studio" alt="gallery" /></a>
                                <a href="console/images/assets/landscape10.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/landscape10.jpg" class="all landscape" alt="gallery" /></a>
                                <a href="console/images/assets/studio11.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/studio11.jpg" class="all studio" alt="gallery" /></a>
                                <a href="console/images/assets/landscape11.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/landscape11.jpg" class="all landscape" alt="gallery" /></a>
                                <a href="console/images/assets/studio12.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/studio12.jpg" class="all studio" alt="gallery" /></a>
                                <a href="console/images/assets/landscape12.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/landscape12.jpg" class="all landscape" alt="gallery" /></a>
                                <a href="console/images/assets/studio13.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/studio13.jpg" class="all studio" alt="gallery" /> </a>
                                <a href="console/images/assets/landscape13.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/landscape13.jpg" class="all landscape" alt="gallery" /></a>
                                <a href="console/images/assets/studio14.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/studio14.jpg" class="all studio" alt="gallery" /></a>
                                <a href="console/images/assets/landscape14.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/landscape14.jpg" class="all landscape" alt="gallery" /></a>
                                <a href="console/images/assets/studio15.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/studio15.jpg" class="all studio" alt="gallery" /></a>
                                <a href="console/images/assets/landscape15.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/landscape15.jpg" class="all landscape" alt="gallery" /></a>
                                <a href="console/images/assets/studio16.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/studio16.jpg" class="all studio" alt="gallery" /></a>
                                <a href="console/images/assets/landscape16.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/landscape16.jpg" class="all landscape" alt="gallery" /></a>
                                <a href="console/images/assets/studio17.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/studio17.jpg" class="all studio" alt="gallery" /></a>
                                <a href="console/images/assets/landscape17.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/landscape17.jpg" class="all landscape" alt="gallery" /></a>
                                <a href="console/images/assets/studio18.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/studio18.jpg" class="all studio" alt="gallery" /></a>
                                <a href="console/images/assets/landscape18.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/landscape18.jpg" class="all landscape" alt="gallery" /></a>
                                <a href="console/images/assets/studio19.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/studio19.jpg" class="all studio" alt="gallery" /></a>
                                <a href="console/images/assets/studio20.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/studio20.jpg" class="all studio" alt="gallery" /></a>
                                <a href="console/images/assets/studio21.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/studio21.jpg" class="all studio" alt="gallery" /></a>
                                <a href="console/images/assets/studio22.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/studio22.jpg" class="all studio" alt="gallery" /></a>
                                <a href="console/images/assets/studio23.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/studio23.jpg" class="all studio" alt="gallery" /></a>
                                <a href="console/images/assets/studio24.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be apear here"><img src="console/images/assets/studio24.jpg" class="all studio" alt="gallery" /></a>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>

@endsection

@push('scripts')

    <script type="text/javascript" src="console/plugins/gallery/js/animated-masonry-gallery.js"></script>
    <script type="text/javascript" src="console/plugins/gallery/js/jquery.isotope.min.js"></script>
    <script type="text/javascript" src="console/plugins/fancybox/ekko-lightbox.min.js"></script>
    
    <script type="text/javascript">
        $(document).ready(function($) {
            // delegate calls to data-toggle="lightbox"
            $(document).delegate('*[data-toggle="lightbox"]:not([data-gallery="navigateTo"])', 'click', function(event) {
                event.preventDefault();
                return $(this).ekkoLightbox({
                    onShown: function() {
                        if (window.console) {
                            return console.log('Checking our the events huh?');
                        }
                    },
                    onNavigate: function(direction, itemIndex) {
                        if (window.console) {
                            return console.log('Navigating ' + direction + '. Current item: ' + itemIndex);
                        }
                    }
                });
            });
            //Programatically call
            $('#open-image').click(function(e) {
                e.preventDefault();
                $(this).ekkoLightbox();
            });
            $('#open-youtube').click(function(e) {
                e.preventDefault();
                $(this).ekkoLightbox();
            });
            // navigateTo
            $(document).delegate('*[data-gallery="navigateTo"]', 'click', function(event) {
                event.preventDefault();
                var lb;
                return $(this).ekkoLightbox({
                    onShown: function() {
                        lb = this;
                        $(lb.modal_content).on('click', '.modal-footer a', function(e) {
                            e.preventDefault();
                            lb.navigateTo(2);
                        });
                    }
                });
            });
        });
    </script>

@endpush