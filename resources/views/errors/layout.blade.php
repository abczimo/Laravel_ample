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
<!-- animation CSS -->
<!-- <link href="console/css/animate.css" rel="stylesheet"> -->

<!-- Custom CSS -->
<link href="console/css/style.css" rel="stylesheet">
<!-- color CSS -->
<!-- <link href="console/css/colors/default.css" id="theme"  rel="stylesheet"> -->

<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->

</head>
<body>
<!-- Preloader -->

<section id="wrapper" class="error-page">
	
	<div class="error-box">

		@yield('error-body')

		<footer class="footer text-center">2018 © Ample Admin.</footer>
	</div>

</section>

{{--
<!-- jQuery -->
<script src="console/plugins/jquery/dist/jquery.min.js"></script>
<!-- Bootstrap Core JavaScript -->
<script src="console/bootstrap/js/bootstrap.min.js"></script>
--}}

</body>
</html>
