@extends('layouts.authentication')

@push('stylesheets')

	<style type="text/css">
		.login-register {
	    	background-image: url(../../console/images/login-register.jpg) !important;
		}
	</style>

@endpush

@section('content')

	<section id="wrapper" class="login-register">
		<div class="login-box">
			<div class="white-box">
				<form class="form-horizontal form-material" id="loginform" action="index.html">
					<h3 class="box-title m-b-20">Recover Password</h3>
					<div class="form-group ">
						<div class="col-xs-12">
							<input class="form-control" type="text" required="" placeholder="Name">
						</div>
					</div>
					<div class="form-group">
						<div class="col-xs-12">
							<input class="form-control" type="text" required="" placeholder="Email">
						</div>
					</div>
					<div class="form-group text-center m-t-20">
						<div class="col-xs-12">
							<button class="btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Reset</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</section>
	
@endsection

@push('scripts')

@endpush
