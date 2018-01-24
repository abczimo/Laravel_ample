<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" type="image/png" sizes="16x16" href="console/images/favicon.png">

    <title>Ample Admin Template - The Ultimate Multipurpose admin template</title>

    <!-- Bootstrap Core CSS -->
    <link href="console/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- Menu CSS -->
    <link href="console/plugins/sidebar-nav/dist/sidebar-nav.min.css" rel="stylesheet">
    <!-- toast CSS -->
    <link href="console/plugins/toast-master/css/jquery.toast.css" rel="stylesheet">

    @stack('stylesheets')

    <!-- animation CSS -->
    <link href="console/css/animate.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link href="console/css/style.css" rel="stylesheet">
    <!-- color CSS -->
    <link href="console/css/colors/default.css" id="theme" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body class="fix-header">
    <!-- ============================================================== -->
    <!-- Preloader -->
    <!-- ============================================================== -->
    <div class="preloader">
        <svg class="circular" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
        </svg>
    </div>
    <!-- ============================================================== -->
    <!-- Wrapper -->
    <!-- ============================================================== -->
    <div id="wrapper">
        
        @include('partials.topbar')

        @include('partials.sidebar')

        <!-- ============================================================== -->
        <!-- Page Content -->
        <!-- ============================================================== -->
        <div id="page-wrapper">
            <div class="container-fluid">

                @yield('content')

                
                
                @include('partials.aside')
                
            </div>
            <!-- /.container-fluid -->
            <footer class="footer text-center"> 2017 &copy; Ample Admin brought to you by themedesigner.in </footer>
        </div>
        <!-- ============================================================== -->
        <!-- End Page Content -->
        <!-- ============================================================== -->
    </div>
    <!-- ============================================================== -->
    <!-- End Wrapper -->
    <!-- ============================================================== -->

    <!-- ============================================================== -->
    <!-- All Jquery -->
    <!-- ============================================================== -->
    <script src="console/plugins/jquery/dist/jquery.min.js"></script>
    <!-- Bootstrap Core JavaScript -->
    <script src="console/bootstrap/js/bootstrap.min.js"></script>
    <!-- Menu Plugin JavaScript -->
    <script src="console/plugins/sidebar-nav/dist/sidebar-nav.min.js"></script>
    <!--slimscroll JavaScript -->
    <script src="console/js/jquery.slimscroll.js"></script>
    <!--Wave Effects -->
    <script src="console/js/waves.js"></script>    
    <!-- Custom Theme JavaScript -->
    <script src="console/js/custom.min.js"></script>

    @stack('scripts')

    <script src="console/plugins/toast-master/js/jquery.toast.js"></script>
    <!--Style Switcher -->
    <script src="console/plugins/styleswitcher/jQuery.style.switcher.js"></script>
</body>

</html>
