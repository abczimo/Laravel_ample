@extends('layouts.console')

@push('stylesheets')

@endpush

@section('content')

    <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">Documentation Page</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button> <a href="javascript: void(0);" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li class="active">Documentation Page</li>
            </ol>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!--row-->
    <div class="row">
        <div class="col-md-12">
            <div class="white-box">
                <h3 class="box-title">Introduction</h3>
                <p>Ample Admin is a popular open source WebApp template for admin dashboards and control panels. It is a responsive HTML template that is based on the CSS framework Bootstrap 3.3.7 It utilizes all of the Bootstrap components in its design and re-styles many commonly used plugins to create a consistent design that can be used as a user interface for backend applications. Ample Admin is based on a modular design, which allows it to be easily customized and built upon. This documentation will guide you through installing the template and exploring the various components that are bundled with the template.</p>
                <hr>
                <h3 class="box-title">Installation Guide for ampleadmin</h3> First of all, choose you desire folder & copy that folder and also copy that plugins folder.
                <br/>
                <br/> example : <i class="fa fa-folder text-warning"></i> <strong>ampleadmin</strong> + <i class="fa fa-folder text-warning"></i> <strong>plugins (Required)</strong> + <i class="fa fa-folder text-warning"></i> <strong>email-template</strong> (this is optional if you want to use Email template then put otherwise not) <strong>= Enjoy your demo.</strong>
                <hr>
                <h3 class="box-title">Template Structure</h3>
                <p>All template files have fixed structure consisting of <code>.navbar-header</code>, <code>.sidebar</code> <code>.page-wrapper</code>, <code>.mega-dropdown-menu</code>, <code>.footer</code></p> <img src="console/images/docs/template-structure.jpg" class="img-responsive" />
                <hr>
                <h3 class="box-title">Beginig of page</h3>
                <p>Below code is used at the beginning of all HTML pages</p> <pre class="prettyprint">
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
&lt;meta charset=&quot;utf-8&quot;&gt;
&lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
&lt;!-- Tell the browser to be responsive to screen width --&gt;
&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;
&lt;meta name=&quot;description&quot; content=&quot;&quot;&gt;
&lt;meta name=&quot;author&quot; content=&quot;&quot;&gt;
&lt;!-- Favicon icon --&gt;
&lt;link rel=&quot;icon&quot; type=&quot;image/png&quot; sizes=&quot;16x16&quot; href=&quot;../plugins/images/favicon.png&quot;&gt;
&lt;title&gt;Ample Admin Template - The Ultimate Multipurpose admin template&lt;/title&gt;
&lt;!-- Bootstrap Core CSS --&gt;
&lt;link href=&quot;bootstrap/dist/css/bootstrap.min.css&quot; rel=&quot;stylesheet&quot;&gt;
&lt;!-- This is Sidebar menu CSS --&gt;
&lt;link href=&quot;../plugins/bower_components/sidebar-nav/dist/sidebar-nav.min.css&quot; rel=&quot;stylesheet&quot;&gt;
&lt;!-- This is a Animation CSS --&gt;
&lt;link href=&quot;css/animate.css&quot; rel=&quot;stylesheet&quot;&gt;
&lt;!-- This is a Custom CSS --&gt;
&lt;link href=&quot;css/style.css&quot; rel=&quot;stylesheet&quot;&gt;
&lt;!-- color CSS you can use different color css from css/colors folder --&gt;
&lt;!-- We have chosen the skin-blue (default.css) for this starter
page. However, you can choose any other skin from folder css / colors .
--&gt;
&lt;link href=&quot;css/colors/blue-dark.css&quot; id=&quot;theme&quot; rel=&quot;stylesheet&quot;&gt;
&lt;!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries --&gt;
&lt;!-- WARNING: Respond.js doesn't work if you view the page via file:// --&gt;
&lt;!--[if lt IE 9]&gt;
&lt;script src=&quot;https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js&quot;&gt;&lt;/script&gt;
&lt;![endif]--&gt;
&lt;/head&gt;</pre>
                <hr>
                <h3 class="box-title">Preloader (Spinner)</h3>
                <p>Below code is used for loading spinner for the template. </p> <pre class="prettyprint">
&lt;!-- Preloader --&gt;
&lt;div class=&quot;preloader&quot;&gt;
&lt;svg class=&quot;circular&quot; viewBox=&quot;25 25 50 50&quot;&gt;
&lt;circle class=&quot;path&quot; cx=&quot;50&quot; cy=&quot;50&quot; r=&quot;20&quot; fill=&quot;none&quot; stroke-width=&quot;2&quot; stroke-miterlimit=&quot;10&quot;/&gt;
&lt;/svg&gt;
&lt;/div&gt;</pre>
                <hr>
                <h3 class="box-title">Logo</h3>
                <p>Below code is used for ampleadmin logo. you can change it by text or image or icon. if your image height is bigger then 60px, you need to resize your logo or give height="60" to your logo image.</p> <pre class="prettyprint">
&lt;!-- Logo --&gt;
&lt;a class=&quot;logo&quot; href=&quot;index.html&quot;&gt;
&lt;!-- Logo icon image, you can use font-icon also --&gt;
&lt;b&gt;
&lt;!--This is dark logo icon--&gt;
&lt;img src=&quot;../plugins/images/admin-logo.png&quot; alt=&quot;home&quot; class=&quot;dark-logo&quot; /&gt;
&lt;!--This is light logo icon--&gt;
&lt;img src=&quot;../plugins/images/admin-logo-dark.png&quot; alt=&quot;home&quot; class=&quot;light-logo&quot; /&gt;
&lt;/b&gt;
&lt;!-- Logo text image you can use text also --&gt;
&lt;span class=&quot;hidden-xs&quot;&gt;
&lt;!--This is dark logo text--&gt;
&lt;img src=&quot;../plugins/images/admin-text.png&quot; alt=&quot;home&quot; class=&quot;dark-logo&quot; /&gt;
&lt;!--This is light logo text--&gt;
&lt;img src=&quot;../plugins/images/admin-text-dark.png&quot; alt=&quot;home&quot; class=&quot;light-logo&quot; /&gt;
&lt;/span&gt; 
&lt;/a&gt;</pre>
                <hr>
                <h3 class="box-title">Left Sidebar menu</h3>
                <p>Below code is used for left sidebar menu.</p>
                <div class="row">
                    <div class="col-md-8 col-sm-8"><pre class="prettyprint">
&lt;!-- Left navbar-header --&gt;
&lt;div class=&quot;navbar-default sidebar&quot; role=&quot;navigation&quot;&gt;
&lt;div class=&quot;sidebar-nav slimscrollsidebar&quot;&gt;
&lt;div class=&quot;sidebar-head&quot;&gt;
&lt;h3&gt;&lt;span class=&quot;fa-fw open-close&quot;&gt;&lt;i class=&quot;ti-menu hidden-xs&quot;&gt;&lt;/i&gt;&lt;i class=&quot;ti-close visible-xs&quot;&gt;&lt;/i&gt;&lt;/span&gt; &lt;span class=&quot;hide-menu&quot;&gt;Navigation&lt;/span&gt;&lt;/h3&gt; 
&lt;/div&gt;
&lt;ul class=&quot;nav&quot; id=&quot;side-menu&quot;&gt;
&lt;li&gt;&lt;a href=&quot;javascript:void(0)&quot; class=&quot;waves-effect active&quot;&gt;&lt;i data-icon=&quot;7&quot; class=&quot;linea-icon linea-basic fa-fw&quot;&gt;&lt;/i&gt;&lt;span class=&quot;hide-menu&quot;&gt;Link type &lt;/span&gt;&lt;/a&gt; &lt;/li&gt;
&lt;li&gt; &lt;a href=&quot;javascript:void(0)&quot; class=&quot;waves-effect&quot;&gt;&lt;i data-icon=&quot;/&quot; class=&quot;linea-icon linea-basic fa-fw&quot;&gt;&lt;/i&gt;&lt;span class=&quot;hide-menu&quot;&gt;Dropdown Link&lt;span class=&quot;fa arrow&quot;&gt;&lt;/span&gt;&lt;span class=&quot;label label-rouded label-purple pull-right&quot;&gt;2&lt;/span&gt;&lt;/span&gt;&lt;/a&gt;
    &lt;ul class=&quot;nav nav-second-level&quot;&gt;
        &lt;li&gt;&lt;a href=&quot;javascript:void(0)&quot;&gt;&lt;i data-icon=&quot;)&quot; class=&quot;linea-icon linea-basic fa-fw&quot;&gt;&lt;/i&gt;&lt;span class=&quot;hide-menu&quot;&gt;Second Level Item&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href=&quot;javascript:void(0)&quot;&gt;&lt;i class=&quot;fa-fw&quot;&gt;S&lt;/i&gt;&lt;span class=&quot;hide-menu&quot;&gt; Second Level Item&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/li&gt;
&lt;li&gt; &lt;a href=&quot;javascript:void(0)&quot; class=&quot;waves-effect&quot;&gt;&lt;i data-icon=&quot;&amp;#57355;&quot; class=&quot;linea-icon linea-basic fa-fw&quot;&gt;&lt;/i&gt;&lt;span class=&quot;hide-menu&quot;&gt;Multi Dropdown&lt;span class=&quot;fa arrow&quot;&gt;&lt;/span&gt;&lt;/span&gt;&lt;/a&gt;
    &lt;ul class=&quot;nav nav-second-level&quot;&gt;
        &lt;li&gt; &lt;a href=&quot;javascript:void(0)&quot;&gt;&lt;i data-icon=&quot;/&quot; class=&quot;linea-icon linea-basic fa-fw&quot;&gt;&lt;/i&gt;&lt;span class=&quot;hide-menu&quot;&gt;Second Level Item&lt;/span&gt;&lt;/a&gt; &lt;/li&gt;
        &lt;li&gt; &lt;a href=&quot;javascript:void(0)&quot;&gt;&lt;i data-icon=&quot;7&quot; class=&quot;linea-icon linea-basic fa-fw&quot;&gt;&lt;/i&gt;&lt;span class=&quot;hide-menu&quot;&gt;Second Level Item&lt;/span&gt;&lt;/a&gt; &lt;/li&gt;
        &lt;li&gt; &lt;a href=&quot;javascript:void(0)&quot; class=&quot;waves-effect&quot;&gt;&lt;i data-icon=&quot;&amp;#xe008;&quot; class=&quot;linea-icon linea-basic fa-fw&quot;&gt;&lt;/i&gt;&lt;span class=&quot;hide-menu&quot;&gt;Third Level &lt;/span&gt;&lt;span class=&quot;fa arrow&quot;&gt;&lt;/span&gt;&lt;/a&gt;
            &lt;ul class=&quot;nav nav-third-level&quot;&gt;
                &lt;li&gt; &lt;a href=&quot;javascript:void(0)&quot;&gt;&lt;i class=&quot; fa-fw&quot;&gt;T&lt;/i&gt;&lt;span class=&quot;hide-menu&quot;&gt;Third Level Item&lt;/span&gt;&lt;/a&gt; &lt;/li&gt;
                &lt;li&gt; &lt;a href=&quot;javascript:void(0)&quot;&gt;&lt;i class=&quot; fa-fw&quot;&gt;M&lt;/i&gt;&lt;span class=&quot;hide-menu&quot;&gt;Third Level Item&lt;/span&gt;&lt;/a&gt; &lt;/li&gt;
                &lt;li&gt; &lt;a href=&quot;javascript:void(0)&quot;&gt;&lt;i class=&quot; fa-fw&quot;&gt;R&lt;/i&gt;&lt;span class=&quot;hide-menu&quot;&gt;Third Level Item&lt;/span&gt;&lt;/a&gt; &lt;/li&gt;
                &lt;li&gt; &lt;a href=&quot;javascript:void(0)&quot;&gt;&lt;i class=&quot; fa-fw&quot;&gt;G&lt;/i&gt;&lt;span class=&quot;hide-menu&quot;&gt;Third Level Item&lt;/span&gt;&lt;/a&gt; &lt;/li&gt;
            &lt;/ul&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;!-- Left navbar-header end --&gt;</pre> </div>
                    <div class="col-md-4 col-sm-4"><img src="console/images/docs/sidebar.jpeg" alt="sidebar" /></div>
                </div>
                <hr>
                <h3 class="box-title">Page content, right sidebar and footer</h3>
                <p>Below code is used for content, right sidebar and footer in all pages of ampleadmin.</p> <pre class="prettyprint">
&lt;!-- Page Content --&gt;
&lt;div id=&quot;page-wrapper&quot;&gt;
&lt;div class=&quot;container-fluid&quot;&gt;
&lt;div class=&quot;row bg-title&quot;&gt;
&lt;!-- .page title --&gt;
&lt;div class=&quot;col-lg-3 col-md-4 col-sm-4 col-xs-12&quot;&gt;
    &lt;h4 class=&quot;page-title&quot;&gt;Starter Page&lt;/h4&gt; &lt;/div&gt;
&lt;!-- /.page title --&gt;
&lt;!-- .breadcrumb --&gt;
&lt;div class=&quot;col-lg-9 col-sm-8 col-md-8 col-xs-12&quot;&gt; &lt;button class=&quot;right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20&quot;&gt;&lt;i class=&quot;ti-settings text-white&quot;&gt;&lt;/i&gt;&lt;/button&gt;
    &lt;a href=&quot;javascript:void(0)&quot; target=&quot;_blank&quot; class=&quot;btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light&quot;&gt;Buy Admin Now&lt;/a&gt;
    &lt;ol class=&quot;breadcrumb&quot;&gt;
        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Dashboard&lt;/a&gt;&lt;/li&gt;
        &lt;li class=&quot;active&quot;&gt;Starter Page&lt;/li&gt;
    &lt;/ol&gt;
&lt;/div&gt;
&lt;!-- /.breadcrumb --&gt;
&lt;/div&gt;
&lt;!-- .row --&gt;
&lt;div class=&quot;row&quot;&gt;
&lt;div class=&quot;col-md-12&quot;&gt;
    &lt;div class=&quot;white-box&quot;&gt;
        &lt;h3 class=&quot;box-title&quot;&gt;Blank Starter page&lt;/h3&gt; &lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;!-- .row --&gt;
&lt;!-- .right-sidebar --&gt;
&lt;div class=&quot;right-sidebar&quot;&gt;
&lt;div class=&quot;slimscrollright&quot;&gt;
    &lt;div class=&quot;rpanel-title&quot;&gt; Service Panel &lt;span&gt;&lt;i class=&quot;ti-close right-side-toggle&quot;&gt;&lt;/i&gt;&lt;/span&gt; &lt;/div&gt;
    &lt;div class=&quot;r-panel-body&quot;&gt;
        &lt;ul class=&quot;m-t-20 chatonline&quot;&gt;
            &lt;li&gt;&lt;b&gt;Chat option&lt;/b&gt;&lt;/li&gt;
            &lt;li&gt;
                &lt;a href=&quot;javascript:void(0)&quot;&gt;&lt;img src=&quot;../plugins/images/users/varun.jpg&quot; alt=&quot;user-img&quot; class=&quot;img-circle&quot;&gt; &lt;span&gt;Varun Dhavan &lt;small class=&quot;text-success&quot;&gt;online&lt;/small&gt;&lt;/span&gt;&lt;/a&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;a href=&quot;javascript:void(0)&quot;&gt;&lt;img src=&quot;../plugins/images/users/genu.jpg&quot; alt=&quot;user-img&quot; class=&quot;img-circle&quot;&gt; &lt;span&gt;Genelia Deshmukh &lt;small class=&quot;text-warning&quot;&gt;Away&lt;/small&gt;&lt;/span&gt;&lt;/a&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;a href=&quot;javascript:void(0)&quot;&gt;&lt;img src=&quot;../plugins/images/users/ritesh.jpg&quot; alt=&quot;user-img&quot; class=&quot;img-circle&quot;&gt; &lt;span&gt;Ritesh Deshmukh &lt;small class=&quot;text-danger&quot;&gt;Busy&lt;/small&gt;&lt;/span&gt;&lt;/a&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;a href=&quot;javascript:void(0)&quot;&gt;&lt;img src=&quot;../plugins/images/users/arijit.jpg&quot; alt=&quot;user-img&quot; class=&quot;img-circle&quot;&gt; &lt;span&gt;Arijit Sinh &lt;small class=&quot;text-muted&quot;&gt;Offline&lt;/small&gt;&lt;/span&gt;&lt;/a&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;a href=&quot;javascript:void(0)&quot;&gt;&lt;img src=&quot;../plugins/images/users/govinda.jpg&quot; alt=&quot;user-img&quot; class=&quot;img-circle&quot;&gt; &lt;span&gt;Govinda Star &lt;small class=&quot;text-success&quot;&gt;online&lt;/small&gt;&lt;/span&gt;&lt;/a&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;a href=&quot;javascript:void(0)&quot;&gt;&lt;img src=&quot;../plugins/images/users/hritik.jpg&quot; alt=&quot;user-img&quot; class=&quot;img-circle&quot;&gt; &lt;span&gt;John Abraham&lt;small class=&quot;text-success&quot;&gt;online&lt;/small&gt;&lt;/span&gt;&lt;/a&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;a href=&quot;javascript:void(0)&quot;&gt;&lt;img src=&quot;../plugins/images/users/john.jpg&quot; alt=&quot;user-img&quot; class=&quot;img-circle&quot;&gt; &lt;span&gt;Hritik Roshan&lt;small class=&quot;text-success&quot;&gt;online&lt;/small&gt;&lt;/span&gt;&lt;/a&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;a href=&quot;javascript:void(0)&quot;&gt;&lt;img src=&quot;../plugins/images/users/pawandeep.jpg&quot; alt=&quot;user-img&quot; class=&quot;img-circle&quot;&gt; &lt;span&gt;Pwandeep rajan &lt;small class=&quot;text-success&quot;&gt;online&lt;/small&gt;&lt;/span&gt;&lt;/a&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;!-- /.right-sidebar --&gt;
&lt;/div&gt;
&lt;!-- /.container-fluid --&gt;
&lt;footer class=&quot;footer text-center&quot;&gt; 2017 &amp;copy; Ample Admin brought to you by themedesigner.in &lt;/footer&gt;
&lt;/div&gt;
&lt;!-- /#page-wrapper --&gt;
</pre>
                <hr>
                <h3 class="box-title">Theme setting in (custom.js)</h3>
                <p>Below js code is used for theme setting , fix header , fix sidebar , toggle sidebar and right sidebar open close.</p> <pre class="prettyprint">
// Theme settings
$(".open-close").click(function () {
$("body").toggleClass("show-sidebar");
});
//Open-Close-right sidebar
$(".right-side-toggle").click(function () {
$(".right-sidebar").slideDown(50);
$(".right-sidebar").toggleClass("shw-rside");
// Fix header
$(".fxhdr").click(function () {
$("body").toggleClass("fix-header");
});
// Fix sidebar
$(".fxsdr").click(function () {
$("body").toggleClass("fix-sidebar");
});
// Service panel js
if ($("body").hasClass("fix-header")) {
$('.fxhdr').attr('checked', true);
}
else {
$('.fxhdr').attr('checked', false);
}
});
</pre>
                <hr>
                <h3 class="box-title">Custom js for sidebar navigation on window resize and set min height to page wrapper</h3>
                <p>Below js code is used for sidebar open close, changing view in all device code and toggle sidebar.</p> <pre class="prettyprint">
//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function () {
$(window).bind("load resize", function () {
topOffset = 60;
width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
if (width < 768) {
$('div.navbar-collapse').addClass('collapse');
topOffset = 100; // 2-row-menu
}
else {
$('div.navbar-collapse').removeClass('collapse');
}
height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
height = height - topOffset;
if (height < 1) height = 1;
if (height > topOffset) {
$("#page-wrapper").css("min-height", (height) + "px");
}
});
var url = window.location;
var element = $('ul.nav a').filter(function () {
return this.href == url || url.href.indexOf(this.href) == 0;
}).addClass('active').parent().parent().addClass('in').parent();
if (element.is('li')) {
element.addClass('active');
}
});
</pre>
                <hr>
                <h3>Font family</h3>
                <p>Change the font family of whole template by simply change the google font link, just change in variable.less file</p> <pre class="prettyprint">
@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900);
@basefont1:'Rubik', sans-serif;;
</pre>
                <hr>
                <h3>Css</h3>
                <p>We made five different less files for customization.</p> <pre class="prettyprint">
variable.less (this less include all variables of the template)
common.less (this less include all general elements)
pages.less (this less include for the different pages)
widget.less (this less include for the core apps of the pages)
responsive.less (this less include for responsive layout of the template)
</pre>
                <div class="alert alert-info"> Note: we recomonded you to please make your one own css and one own js files and add that in your page, so whenever the update of ampleadmin comes it does not affect your code. </div>
                <hr>
                <h3>Horizontal menu</h3>
                <p>for horizontal menu we have made one demo. See the below screenshot:</p> <img src="console/images/docs/horizontal-menu.png" class="img-responsive" height="400" width="700" />
                <hr>
                <h3>Starter kit page ( Create new page )</h3>
                <p>You can start your project with starter-page.html , in that page all the unnecessary script and html code is removed, so you can start with the new page.</p> <img src="console/images/docs/starter-kit.jpg" class="img-responsive" />
                <hr>
                <h3>Helper Classes</h3>
                <p>we make classes to help you in your developement process, and make it fast. checkout the below link for the helper classes</p> <a href="../ampleadmin/utility-classes.html" target="_blank" class="btn btn-success btn-rounded">click for the Utility Classes</a>
                <hr>
                <div class="clear"></div>
            </div>
        </div>
    </div>
    <!--/row-->
    <!--row-->
    <div class="row">
        <div class="col-md-12">
            <div class="white-box">
                <h3 class="box-title" id="structure">Structure</h3> <pre>
    <p>
      HTML
      ├── 
      │   └── Ampleadmin/
      │       └── Css
      │            └── All Css files
      │       └── Js
      │            └── All Js files
      │       └── Less
      │            └── All Less files
      │       └── Bootstrap
      │            └── Bootstrap 3.3.6 files
      │       └── All Html Pages
      │
      │   └── Plugins/
      │       └── bower_component
      │            └── All Required plugins files
      │       └── Images
      │             └── All Theme Images
      └── 
    </p>
  </pre> </div>
        </div>
    </div>
    <!--/row-->
    <!--row-->
    <div class="row">
        <div class="col-md-12">
            <div class="white-box">
                <h3 class="box-title" id="html">Html Structure</h3> <pre class="prettyprint">
&lt;html&gt;
&lt;body&gt;

&lt;!-- Preloader --&gt;
&lt;div class=&quot;preloader&quot;&gt;
&lt;svg class=&quot;circular&quot; viewBox=&quot;25 25 50 50&quot;&gt;
&lt;circle class=&quot;path&quot; cx=&quot;50&quot; cy=&quot;50&quot; r=&quot;20&quot; fill=&quot;none&quot; stroke-width=&quot;2&quot; stroke-miterlimit=&quot;10&quot;/&gt;
&lt;/svg&gt;
&lt;/div&gt;
&lt;!-- End Preloader --&gt;

&lt;!-- Wrapper --&gt;
&lt;div id="wrapper"&gt;
&lt;!-- Top Section --&gt;
&lt;nav class="navbar navbar-default navbar-static-top"&gt;
&lt;!-- Your Logo --&gt;
&lt;div class="top-left-part"&gt;
&lt;a href="index.html" class="logo"&gt; ... &lt;/a&gt; 
&lt;/div&gt;
&lt;!-- End Your Logo --&gt;
&lt;/nav&gt;
&lt;!-- Top Section End --&gt;

&lt;!-- Left Navigation --&gt;
&lt;div class="navbar-default sidebar slimscroll"&gt; &lt;/div&gt;
&lt;!-- Left Navigation End --&gt;

&lt;!-- Main Content --&gt;
&lt;!-- Start Page wrapper --&gt;
&lt;div class="page-wrapper"&gt;
&lt;!-- Start Container --&gt;
&lt;div class="container-fluid"&gt; ... &lt;/div&gt;
&lt;!-- End container --&gt;
&lt;/div&gt;
&lt;!-- End Page wrapper --&gt;

&lt;!-- footer --&gt;
&lt;footer class="footer text-center"&gt; 
2017 © Ampleadmin brought to you by themedesigner.in 
&lt;/footer&gt;
&lt;!-- End footer --&gt;
&lt;/div&gt;
&lt;!-- End Wrapper --&gt;

&lt;/body&gt;
&lt;/html&gt;</pre> </div>
        </div>
    </div>
    <!--/row-->
    <!--row-->
    <div class="row">
        <div class="col-md-12">
            <div class="white-box">
                <h3 class="box-title" id="colors">For Colors</h3> Just replce the
                <br/>
                <br/> &lt;!-- color CSS --&gt;
                <br/> &lt;link href="css/colors/default.css" id="theme" rel="stylesheet"&gt;
                <br/>
                <br/> &lt;link href="css/colors/green.css" id="theme" rel="stylesheet"&gt;
                <br/>
                <br/> &lt;link href="css/colors/gray.css" id="theme" rel="stylesheet"&gt;
                <br/>
                <br/> &lt;link href="css/colors/blue.css" id="theme" rel="stylesheet"&gt;
                <br/>
                <br/> &lt;link href="css/colors/purple.css" id="theme" rel="stylesheet"&gt;
                <br/>
                <br/> &lt;link href="css/colors/megna.css" id="theme" rel="stylesheet"&gt; </div>
        </div>
    </div>
    <!--/row-->
    <!--row-->
    <div class="row">
        <div class="col-md-12">
            <div class="white-box">
                <h3 class="box-title" id="less">Less - Css</h3>
                <table class="table table-bordered m-0">
                    <thead>
                        <tr>
                            <th style="width: 20%;">File</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>bootstrap.css</code> </td>
                            <td> I use the bootstrap v3.3.6. you can update bootstrapversion any time </td>
                        </tr>
                        <tr>
                            <td><code>spinners.css</code>/<code>spinners.css</code> </td>
                            <td> This file is has preloader css. </td>
                        </tr>
                        <tr>
                            <td><code>common.less</code>/<code>common.css</code> </td>
                            <td> This file is has all the classes for the template. </td>
                        </tr>
                        <tr>
                            <td><code>variable.less</code>/<code>variable.css</code> </td>
                            <td> This file is has all the predefine classes for the template. </td>
                        </tr>
                        <tr>
                            <td><code>sidebar-nav.less</code>/<code>sidebar-nav.css</code> </td>
                            <td> this file content sidebar-nav for css. </td>
                        </tr>
                        <tr>
                            <td><code>widgets.less</code>/<code>widgets.css</code> </td>
                            <td> This file contains the styles for all the components, ui elements, and some other parts of the theme. </td>
                        </tr>
                        <tr>
                            <td><code>responsive.less</code>/<code>responsive.css</code> </td>
                            <td> This file is containing the styles related to responsiveness support. </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!--/row-->
    <!--row-->
    <div class="row">
        <div class="col-md-12">
            <div class="white-box">
                <h3 class="box-title" id="js">Js Files</h3>
                <table class="table table-bordered m-0">
                    <thead>
                        <tr>
                            <th style="width: 30%;">File</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>jquery.js</code>, <code>bootstrap.js</code>, <code>jquery.slimscroll</code> </td>
                            <td> These files are used at main files of the theme. and nicescroll is for sidebarscroll </td>
                        </tr>
                        <tr>
                            <td><code>custom.js</code> </td>
                            <td> This is a main function js file. it contain sidebar and other basic js</td>
                        </tr>
                        <tr>
                            <td><code>sidebar-nav.js</code> </td>
                            <td> This file contains sidebarnavigation js</td>
                        </tr>
                        <tr>
                            <td><code>wave.js</code> </td>
                            <td> This is for wave effects on buttons and other elements</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!--/row-->
    <!-- row -->
    <div class="row">
        <div class="col-md-12">
            <div class="white-box">
                <h3 class="box-title" id="plugins">Plugins</h3>
                <h5>Select Plugin</h5>
                <select id="pluginslist" onchange="showPluginDetails();">
                    <option value="blockui">blockUI</option>
                    <option value="bt-datepicker">bootstrap-datepicker</option>
                    <option value="bt-daterangepicker">bootstrap-daterangepicker</option>
                    <option value="bt-rtl">bootstrap-rtl-master</option>
                    <option value="bt-select">bootstrap-select</option>
                    <option value="bt-social">bootstrap-social</option>
                    <option value="bt-table">bootstrap-table</option>
                    <option value="bt-tagsinput">bootstrap-tagsinput</option>
                    <option value="bt-touchspin">bootstrap-touchspin</option>
                    <option value="bt-treeview">bootstrap-treeview-master</option>
                    <option value="calendar">calendar</option>
                    <option value="chart-js">chart.js</option>
                    <option value="clockpicker">clockpicker</option>
                    <option value="counterup">counterup</option>
                    <option value="cropper">cropper</option>
                    <option value="css-chart">css-chart</option>
                    <option value="custom-select">custom-select</option>
                    <option value="datatables">datatables</option>
                    <option value="dropify">dropify</option>
                    <option value="dropzone">dropzone-master</option>
                    <option value="fancybox">fancybox</option>
                    <option value="flot">flot</option>
                    <option value="flot-tooltip">flot-tooltip</option>
                    <option value="footable">footable</option>
                    <option value="gallery">gallery</option>
                    <option value="gmaps">gmaps</option>
                    <option value="horizontal-timeline">horizontal-timeline</option>
                    <option value="html5-editor">html5-editor</option>
                    <option value="ion-rangeslider">ion-rangeslider</option>
                    <option value="jquery-easy-pie-chart">jquery.easy-pie-chart</option>
                    <option value="jquery-asColorPicker-master">jquery-asColorPicker-master</option>
                    <option value="jquery-sparkline">jquery-sparkline</option>
                    <option value="jquery-wizard-master">jquery-wizard-master</option>
                    <option value="jsgrid">jsgrid</option>
                    <option value="knob">knob</option>
                    <option value="magnific-popup">magnific-popup</option>
                    <option value="moment">moment</option>
                    <option value="morrisjs">morrisjs</option>
                    <option value="multiselect">multiselect</option>
                    <option value="nestable">nestable</option>
                    <option value="owl-carousel">owl-carousel</option>
                    <option value="peity">peity</option>
                    <option value="sidebar-nav">sidebar-nav</option>
                    <option value="skycons">skycons</option>
                    <option value="summernote">summernote</option>
                    <option value="sweetalert">sweetalert</option>
                    <option value="switchery">switchery</option>
                    <option value="tablesaw">tablesaw-master</option>
                    <option value="timepicker">timepicker</option>
                    <option value="tiny-editable">tiny-editable</option>
                    <option value="tinymce">tinymce</option>
                    <option value="toast">toast-master</option>
                    <option value="typeahead">typeahead.js-master</option>
                    <option value="vectormap">vectormap</option>
                    <option value="waypoints">waypoints</option>
                    <option value="x-editable">x-editable</option>
                </select>
                <script>
                function showPluginDetails() {
                    var id = $('#pluginslist').val();
                    $('.plugin-details').hide();
                    $('#' + id).show();
                    return;
                }
                </script>
                <div id="blockui" class="plugin-details plugin-details-active">
                    <h3 class="box-title m-t-20">jQuery Block-UI</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">No CSS available</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/blockUI/jquery.blockUI.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="bt-datepicker" class="plugin-details">
                    <h3 class="box-title m-t-20">Bootstrap Datepicker</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/bootstrap-datepicker/bootstrap-datepicker.min.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/bootstrap-datepicker/bootstrap-datepicker.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="bt-daterangepicker" class="plugin-details">
                    <h3 class="box-title m-t-20">bootstrap-daterangepicker</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/bootstrap-daterangepicker/daterangepicker.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/bootstrap-daterangepicker/daterangepicker.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="bt-rtl" class="plugin-details">
                    <h3 class="box-title m-t-20">bootstrap-rtl-master</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/bootstrap-rtl-master/dist/css/bootstrap-rtl.min.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/bootstrap-rtl-master/dist/js/bootstrap-rtl.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="bt-select" class="plugin-details">
                    <h3 class="box-title m-t-20">bootstrap-select</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/bootstrap-select/bootstrap-select.min.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/bootstrap-select/bootstrap-select.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="bt-social" class="plugin-details">
                    <h3 class="box-title m-t-20">bootstrap-social</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/bootstrap-social/bootstrap-social.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">No JS available</pre> </div>
                <div id="bt-table" class="plugin-details">
                    <h3 class="box-title m-t-20">bootstrap-table</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/bootstrap-table/dist/bootstrap-table.min.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/bootstrap-table/dist/bootstrap-table.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/bootstrap-table/dist/bootstrap-table.ints.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="bt-tagsinput" class="plugin-details">
                    <h3 class="box-title m-t-20">bootstrap-tagsinput</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/bootstrap-tagsinput/dist/bootstrap-tagsinput.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="bt-touchspin" class="plugin-details">
                    <h3 class="box-title m-t-20">bootstrap-touchspin</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="bt-treeview" class="plugin-details">
                    <h3 class="box-title m-t-20">bootstrap-treeview</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">No CSS available</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/bootstrap-treeview-master/dist/bootstrap-treeview.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/bootstrap-treeview-master/dist/bootstrap-treeview-init.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="calendar" class="plugin-details">
                    <h3 class="box-title m-t-20">Calendar</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/calendar/dist/fullcalendar.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/calendar/jquery-ui.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/calendar/dist/fullcalendar.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/calendar/dist/jquery.fullcalendar.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="chart-js" class="plugin-details">
                    <h3 class="box-title m-t-20">Chart.js</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">No CSS available</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/Chart.js/chartjs.init.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/Chart.js/Chart.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
</pre> </div>
                <div id="clockpicker" class="plugin-details">
                    <h3 class="box-title m-t-20">clockpicker</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/clockpicker/dist/jquery-clockpicker.min.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/clockpicker/dist/jquery-clockpicker.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="counterup" class="plugin-details">
                    <h3 class="box-title m-t-20">counterup</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">No CSS available</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/counterup/jquery.counterup.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="cropper" class="plugin-details">
                    <h3 class="box-title m-t-20">cropper</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/cropper/cropper.min.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/cropper/cropper.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/cropper/cropper-init.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="css-chart" class="plugin-details">
                    <h3 class="box-title m-t-20">css-chart</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/css-chart/css-chart.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">No JS available</pre> </div>
                <div id="custom-select" class="plugin-details">
                    <h3 class="box-title m-t-20">custom-select</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/custom-select/custom-select.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/custom-select/custom-select.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="dropify" class="plugin-details">
                    <h3 class="box-title m-t-20">dropify</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/dropify/dist/css/dropify.min.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/dropify/dist/js/dropify.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="dropzone" class="plugin-details">
                    <h3 class="box-title m-t-20">dropzone master</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/dropzone-master/dist/dropzone.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/dropzone-master/dist/dropzone.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="fancybox" class="plugin-details">
                    <h3 class="box-title m-t-20">fancybox</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/fancybox/ekko-lightbox.min.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/fancybox/ekko-lightbox.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="flot" class="plugin-details">
                    <h3 class="box-title m-t-20">flot</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">No CSS available</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/flot/excanvas.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/flot/jquery.flot.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/flot/jquery.flot.pie.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/flot/jquery.flot.resize.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/flot/jquery.flot.time.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/flot/jquery.flot.stack.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/flot/jquery.flot.crosshair.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="flot-tooltip" class="plugin-details">
                    <h3 class="box-title m-t-20">flot-tooltip</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">No CSS available</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/flot.tooltip/js/jquery.flot.tooltip.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="footable" class="plugin-details">
                    <h3 class="box-title m-t-20">footable</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/footable/css/footable.core.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/footable/js/footable.all.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="gallery" class="plugin-details">
                    <h3 class="box-title m-t-20">gallery</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/gallery/css/animated-masonry-gallery.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/gallery/js/animated-masonry-gallery.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/gallery/js/jquery.isotope.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="gmaps" class="plugin-details">
                    <h3 class="box-title m-t-20">gmaps</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">No CSS available</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/gmaps/gmaps.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/gmaps/jquery.gmaps.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="horizontal-timeline" class="plugin-details">
                    <h3 class="box-title m-t-20">horizontal-timeline</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/horizontal-timeline/css/horizontal-timeline.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/horizontal-timeline/js/horizontal-timeline.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="html5-editor" class="plugin-details">
                    <h3 class="box-title m-t-20">html5-editor</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/html5-editor/bootstrap-wysihtml5.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/html5-editor/wysihtml5-0.3.0.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/html5-editor/bootstrap-wysihtml5.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="ion-rangeslider" class="plugin-details">
                    <h3 class="box-title m-t-20">ion-rangeslider</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/ion-rangeslider/css/ion.rangeSlider.css&quot; /&gt;
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/ion-rangeslider/css/ion.rangeSlider.skinModern.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/ion-rangeslider/js/ion-rangeSlider/ion.rangeSlider.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/ion-rangeslider/js/ion-rangeSlider/ion.rangeSlider-init.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="jquery-easy-pie-chart" class="plugin-details">
                    <h3 class="box-title m-t-20">jquery-easy-pie-chart</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">No CSS available</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/jquery.easy-pie-chart/easy-pie-chart.init.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="jquery-asColorPicker-master" class="plugin-details">
                    <h3 class="box-title m-t-20">jquery-asColorPicker</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/jquery-asColorPicker-master/css/asColorPicker.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/jquery-asColorPicker-master/libs/jquery-asColor.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/jquery-asColorPicker-master/libs/jquery-asGradient.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/jquery-asColorPicker-master/libs/jquery-asColorPicker.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="jquery-sparkline" class="plugin-details">
                    <h3 class="box-title m-t-20">jquery-sparkline</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">No CSS available</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/jquery-sparkline/jquery.sparkline.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/jquery-sparkline/jquery.charts-sparkline.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="jquery-wizard-master" class="plugin-details">
                    <h3 class="box-title m-t-20">jquery-wizard-master</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/jquery-wizard-master/css/wizard.css&quot; /&gt;
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/jquery-wizard-master/libs/formvalidation/formValidation.min.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/jquery-wizard-master/dist/jquery-wizard.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/jquery-wizard-master/libs/formvalidation/formValidation.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/jquery-wizard-master/libs/formvalidation/bootstrap.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="jsgrid" class="plugin-details">
                    <h3 class="box-title m-t-20">jsgrid</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/jsgrid/dist/jsgrid.min.css&quot; /&gt;
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/jsgrid/dist/jsgrid-theme.min.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/jsgrid/db.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/jsgrid/dist/jsgrid.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;js/jsgrid-init.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="knob" class="plugin-details">
                    <h3 class="box-title m-t-20">knob chart</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">No CSS available</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/knob/jquery.knob.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="magnific-popup" class="plugin-details">
                    <h3 class="box-title m-t-20">magnific-popup</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/Magnific-Popup-master/dist/magnific-popup.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/Magnific-Popup-master/dist/jquery.magnific-popup.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/Magnific-Popup-master/dist/jquery.magnific-popup-init.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="moment" class="plugin-details">
                    <h3 class="box-title m-t-20">moment</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">No CSS available</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/moment/moment.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="morrisjs" class="plugin-details">
                    <h3 class="box-title m-t-20">morrisjs</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/morrisjs/morris.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/raphael/raphael-min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/morrisjs/morris.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;js/morris-data.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="multiselect" class="plugin-details">
                    <h3 class="box-title m-t-20">multiselect</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/multiselect/css/multi-select.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/multiselect/js/jquery.multi-select.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="nestable" class="plugin-details">
                    <h3 class="box-title m-t-20">nestable</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/nestable/nestable.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/nestable/jquery.nestable.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="owl-carousel" class="plugin-details">
                    <h3 class="box-title m-t-20">owl-carousel</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/owl.carousel/owl.carousel.min.css&quot; /&gt;
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/owl.carousel/owl.theme.default.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/owl.carousel/owl.carousel.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/owl.carousel/owl.custom.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="peity" class="plugin-details">
                    <h3 class="box-title m-t-20">peity charts</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">No CSS Available</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/peity/jquery.peity.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/peity/jquery.peity.init.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="sidebar-nav" class="plugin-details">
                    <h3 class="box-title m-t-20">sidebar-nav</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/sidebar-nav/dist/sidebar-nav.min.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/sidebar-nav/dist/sidebar-nav.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="skycons" class="plugin-details">
                    <h3 class="box-title m-t-20">skycons</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">No CSS available</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/skycons/skycons.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="summernote" class="plugin-details">
                    <h3 class="box-title m-t-20">summernote</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/summernote/dist/summernote.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/summernote/dist/summernote.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="sweetalert" class="plugin-details">
                    <h3 class="box-title m-t-20">sweetalert</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/sweetalert/sweetalert.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/sweetalert/sweetalert.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/sweetalert/jquery.sweet-alert.custom.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="switchery" class="plugin-details">
                    <h3 class="box-title m-t-20">switchery</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/switchery/dist/switchery.min.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/switchery/dist/switchery.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="tablesaw" class="plugin-details">
                    <h3 class="box-title m-t-20">tablesaw</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/tablesaw-master/dist/tablesaw.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/tablesaw-master/dist/tablesaw.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/tablesaw-master/dist/tablesaw-init.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="timepicker" class="plugin-details">
                    <h3 class="box-title m-t-20">timepicker</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/timepicker/bootstrap-timepicker.min.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/timepicker/bootstrap-timepicker.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="tiny-editable" class="plugin-details">
                    <h3 class="box-title m-t-20">tiny-editable</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">No CSS available</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/tiny-editable/mindmup-editabletable.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/tiny-editable/numeric-input-example.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="tinymce" class="plugin-details">
                    <h3 class="box-title m-t-20">tinymce</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">No CSS available</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/tinymce/tinymce.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="toast" class="plugin-details">
                    <h3 class="box-title m-t-20">toast</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/toast-master/css/jquery.toast.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/toast-master/js/jquery.toast.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;js/toastr.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="typeahead" class="plugin-details">
                    <h3 class="box-title m-t-20">typeahead</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/typeahead.js-master/dist/typehead-min.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/typeahead.js-master/dist/typeahead.bundle.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/typeahead.js-master/dist/typeahead-init.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="vectormap" class="plugin-details">
                    <h3 class="box-title m-t-20">vectormap</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/vectormap/jquery-jvectormap-2.0.2.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/vectormap/jquery-jvectormap-2.0.2.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/vectormap/jquery-jvectormap-world-mill-en.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/vectormap/jquery-jvectormap-in-mill.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/vectormap/jquery-jvectormap-us-aea-en.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/vectormap/jquery-jvectormap-uk-mill-en.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/vectormap/jquery-jvectormap-au-mill.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../plugins/bower_components/vectormap/jvectormap.custom.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="waypoints" class="plugin-details">
                    <h3 class="box-title m-t-20">waypoints</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">No CSS available</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/waypoints/lib/jquery.waypoints.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="x-editable" class="plugin-details">
                    <h3 class="box-title m-t-20">x-editable</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/x-editable/dist/bootstrap3-editable/css/bootstrap-editable.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/x-editable/dist/bootstrap3-editable/js/bootstrap-editable.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
                <div id="datatables" class="plugin-details">
                    <h3 class="box-title m-t-20">datatables</h3>
                    <h5>CSS Files</h5> <pre class="prettyprint">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../plugins/bower_components/datatables/jquery.dataTables.min.css&quot; /&gt;</pre>
                    <h5>JavaScript Files</h5> <pre class="prettyprint">
&lt;script src=&quot;../plugins/bower_components/datatables/jquery.dataTables.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</pre> </div>
            </div>
        </div>
    </div>
    <!-- /row -->
    <!--row-->
    <div class="row">
        <div class="col-md-12">
            <div class="white-box">
                <h3 class="box-title" id="creadit">Creadits</h3>
                <ul class="common">
                    <li><a href="http://getbootstrap.com/">Bootstrap</a></li>
                    <li><a href="https://jquery.com/">Jquery</a></li>
                    <li><a href="http://fortawesome.github.io/Font-Awesome/">Font-Awesome</a></li>
                    <li><a href="http://tristanedwards.me/sweetalert">Sweet-Alert</a></li>
                    <li><a href="http://dbushell.com/">Nestable</a></li>
                    <li><a href="http://areaaperta.com/nicescroll/">Nicescroll</a></li>
                    <li><a href="http://arshaw.com/fullcalendar/">Full Calendar</a></li>
                    <li><a href="http://jqueryvalidation.org/">Form Validator</a></li>
                    <li><a href="http://jdewit.github.com/bootstrap-timepicker">Bootstrap-timepicker</a></li>
                    <li><a href="http://www.eyecon.ro/bootstrap-colorpicker">Bootstrap Colorpicker</a></li>
                    <li><a href="http://loudev.com/">Multi-select</a></li>
                    <li><a href="https://select2.github.io/">Select2</a></li>
                    <li><a href="https://github.com/xing/wysihtml5">Wysihtml5</a></li>
                    <li><a href="https://www.datatables.net">Datatables</a></li>
                    <li><a href="http://morrisjs.github.io/morris.js/">Morris</a></li>
                    <li><a href="http://chartjs.org/">Chartjs</a></li>
                    <li><a href="http://omnipotent.net/jquery.sparkline/">Sparkline</a> </li>
                    <li><a href="https://hpneo.github.io/gmaps/">Gmaps</a></li>
                    <li><a href="http://jqvmap.com">Vector Maps</a></li>
                    <li><a href="https://pexels.com/">Pexels (images)</a></li>
                    <li><a href="http://www.flotcharts.org/">Flot-charts</a></li>
                    <li><a href="https://github.com/dixso/custombox"> Custombox</a></li>
                    <li><a href="http://owlgraphic.com/owlcarousel/"> Owl carousel</a></li>
                    <li><a href="https://themify.me/themify-icons">Themify-icons</a></li>
                    <li><a href="https://erikflowers.github.io/weather-icons/"> Weather icons</a></li>
                    <li><a href="https://github.com/abpetkov/switchery"> Switchery</a></li>
                    <li><a href="https://github.com/silviomoreto/bootstrap-select"> Bootstrap select</a></li>
                    <li><a href="http://www.tinymce.com/">Wysiwig Editor</a></li>
                    <li><a href="https://github.com/wenzhixin/bootstrap-table-examples"> Bootstrap tables</a></li>
                    <li><a href="https://gionkunz.github.io/chartist-js/"> Chartist chart</a></li>
                </ul>
            </div>
        </div>
    </div>
    <!--/row-->
    <!--row-->
    <div class="row">
        <div class="col-md-12">
            <div class="white-box">
                <h3 class="box-title" id="support">Support</h3>
                <p>If you need any help or feel any query don't hasitate just mail me (with licence key) on <strong>niravjoshi87@gmail.com</strong>, i would love to help you, Once again thanks for purchasing the ampleadmin template, i hope you enjoy it. Thanks</p>
            </div>
        </div>
    </div>
    <!--/row-->

@endsection

@push('scripts')

@endpush