@extends('layouts.console')

@push('stylesheets')

@endpush

@section('content')

    <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">Typography</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
            <a href="javascript: void(0);" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Ui Elements</a></li>
                <li class="active">Typography</li>
            </ol>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="white-box">
                <div class="row">
                    <div class="col-lg-6 col-sm-6 col-xs-12">
                        <h3 class="m-b-0 box-title">Headings</h3>
                        <p class="text-muted">Use tags <code>h1 to h6</code> for get desire heading.</p>
                        <h1>h1. Bootstrap heading</h1>
                        <h2>h2. Bootstrap heading</h2>
                        <h3>h3. Bootstrap heading</h3>
                        <h4>h4. Bootstrap heading</h4>
                        <h5>h5. Bootstrap heading</h5>
                        <h6>h6. Bootstrap heading</h6> </div>
                    <div class="col-lg-6 col-sm-6 col-xs-12">
                        <h3 class="m-b-0 box-title">Headings with subheading</h3>
                        <p class="text-muted">Use tags <code>h1 to h6</code> for get desire heading.</p>
                        <h1>Heading 1 <small>Sub-heading</small></h1>
                        <h2>Heading 2 <small>Sub-heading</small></h2>
                        <h3>Heading 3 <small>Sub-heading</small></h3>
                        <h4>Heading 4 <small>Sub-heading</small></h4>
                        <h5>Heading 5 <small>Sub-heading</small></h5>
                        <h6>Heading 6 <small>Sub-heading</small></h6> </div>
                    <div class="col-lg-12 m-t-30">
                        <hr/> </div>
                    <div class="col-lg-4 col-sm-4 col-xs-12 m-t-40">
                        <h3 class="m-b-0 box-title">Body</h3>
                        <p class="text-muted">This template has default body <code>font</code>size is <code>14px</code> and <code>line-height</code> <b>1.57142857</b>.</p>
                    </div>
                    <div class="col-lg-4 col-sm-4 col-xs-12 m-t-40">
                        <h3 class="m-b-0 box-title">Highlighted text</h3>
                        <p class="text-muted">This template has default highlighted text tag
                            <mark>highlight</mark> so you can use <code> mark </code> tag to display highlighted text.</p>
                    </div>
                    <div class="col-lg-4 col-sm-4 col-xs-12 m-t-40">
                        <h3 class="m-b-0 box-title">Alignment text</h3>
                        <p class="text-left">Left aligned text.</p>
                        <p class="text-center">Center aligned text.</p>
                        <p class="text-right">Right aligned text.</p>
                    </div>
                    <div class="col-lg-12 m-t-30">
                        <hr/> </div>
                    <div class="col-lg-4 col-sm-4 col-xs-12 m-t-40">
                        <h3 class="box-title">Text Colors</h3>
                        <p class="text-muted">This is an example of muted text. Add class <code>text-muted</code></p>
                        <p class="text-primary">This is an example of primary text. Add class <code>text-primary</code></p>
                        <p class="text-success">This is an example of success text. Add class <code>text-success</code></p>
                        <p class="text-info">This is an example of info text. Add class <code>text-info</code></p>
                        <p class="text-warning">This is an example of warning text. Add class <code>text-warning</code></p>
                        <p class="text-danger">This is an example of danger text. Add class <code>text-danger</code></p>
                    </div>
                    <div class="col-lg-4 col-sm-4 col-xs-12 m-t-40">
                        <h3 class="box-title">Address</h3>
                        <address>
                            <strong>Twitter, Inc.</strong>
                            <br> 795 Folsom Ave, Suite 600
                            <br> San Francisco, CA 94107
                            <br>
                            <abbr title="Phone">P:</abbr>(123) 456-7890
                        </address>
                        <address>
                            <strong>George Belly</strong>
                            <br>
                            <a href="mailto:#">first.last@example.com</a>
                        </address>
                    </div>
                    <div class="col-lg-4 col-sm-4 col-xs-12 m-t-40">
                        <h3 class="box-title">Default Blockquote</h3>
                        <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</blockquote>
                        <blockquote>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p> <small>Someone famous in <cite title="Source Title">Source Title</cite></small> </blockquote>
                    </div>
                    <div class="col-lg-12 m-t-30">
                        <hr/> </div>
                    <div class="col-lg-4 col-sm-4 col-xs-12 m-t-40">
                        <h3 class="box-title">Ol Listing</h3>
                        <ol>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetur adipiscing elit</li>
                            <li>Integer molestie lorem at massa </li>
                        </ol>
                    </div>
                    <div class="col-lg-4 col-sm-4 col-xs-12 m-t-40">
                        <h3 class="box-title">Ul Listing</h3>
                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetur adipiscing elit</li>
                            <li>Integer molestie lorem at massa </li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-sm-4 col-xs-12 m-t-40">
                        <h3 class="box-title">Description Text</h3>
                        <dl>
                            <dt>Standard Description List</dt>
                            <dd>Description Text</dd>
                            <dt>Description List Title</dt>
                            <dd>Description List Text</dd>
                        </dl>
                    </div>
                    <div class="col-lg-12 m-t-30">
                        <hr/> </div>
                    <div class="col-lg-3 col-sm-3 col-xs-12 m-t-40">
                        <h3 class="box-title">Fancy Listing 1</h3>
                        <ul class="list-icons">
                            <li><i class="ti-angle-right"></i> Lorem ipsum dolor sit amet</li>
                            <li><i class="ti-angle-right"></i> Consectetur adipiscing elit</li>
                            <li><i class="ti-angle-right"></i> Integer molestie lorem at massa </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-sm-3 col-xs-12 m-t-40">
                        <h3 class="box-title">Fancy Listing 2</h3>
                        <ul class="list-icons">
                            <li><i class="fa fa-check text-success"></i> Lorem ipsum dolor sit amet</li>
                            <li><i class="fa fa-check text-success"></i> Consectetur adipiscing elit</li>
                            <li><i class="fa fa-check text-success"></i> Integer molestie lorem at massa </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-sm-3 col-xs-12 m-t-40">
                        <h3 class="box-title">Fancy Listing 3</h3>
                        <ul class="list-icons">
                            <li><i class="fa fa-caret-right text-info"></i> Lorem ipsum dolor sit amet</li>
                            <li><i class="fa fa-caret-right text-info"></i> Consectetur adipiscing elit</li>
                            <li><i class="fa fa-caret-right text-info"></i> Integer molestie lorem at massa </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-sm-3 col-xs-12 m-t-40">
                        <h3 class="box-title">Fancy Listing 4</h3>
                        <ul class="list-icons">
                            <li><i class="fa fa-chevron-right text-danger"></i> Lorem ipsum dolor sit amet</li>
                            <li><i class="fa fa-chevron-right text-danger"></i> Consectetur adipiscing elit</li>
                            <li><i class="fa fa-chevron-right text-danger"></i> Integer molestie lorem at massa </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection

@push('scripts')

@endpush