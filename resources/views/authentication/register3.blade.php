@extends('layouts.authentication')

@push('stylesheets')

	<!-- animation CSS -->
	<link href="console/css/animate.css" rel="stylesheet">
	<!-- Wizard CSS -->
	<link href="console/plugins/register-steps/steps.css" rel="stylesheet">

@endpush

@section('content')
	
	<section id="wrapper" class="step-register">
		<div class="register-box">
			<div class="">
				<a href="javascript:void(0)" class="text-center db m-b-40"><img src="console/images/admin-logo-dark.png" alt="Home" /><br/><img src="console/images/admin-text-dark.png" alt="Home" /></a>
				<!-- multistep form -->
				<form id="msform">
					<!-- progressbar -->
					<ul id="eliteregister">
						<li class="active">Account Setup</li>
						<li>Social Profiles</li>
						<li>Personal Details</li>
					</ul>
					<!-- fieldsets -->
					<fieldset>
						<h2 class="fs-title">Create your account</h2>
						<h3 class="fs-subtitle">This is step 1</h3>
						<input type="text" name="email" placeholder="Email" />
						<input type="password" name="pass" placeholder="Password" />
						<input type="password" name="cpass" placeholder="Confirm Password" />
						<input type="button" name="next" class="next action-button" value="Next" />
					</fieldset>
					<fieldset>
						<h2 class="fs-title">Social Profiles</h2>
						<h3 class="fs-subtitle">Your presence on the social network</h3>
						<input type="text" name="twitter" placeholder="Twitter" />
						<input type="text" name="facebook" placeholder="Facebook" />
						<input type="text" name="gplus" placeholder="Google Plus" />
						<input type="button" name="previous" class="previous action-button" value="Previous" />
						<input type="button" name="next" class="next action-button" value="Next" />
					</fieldset>
					<fieldset>
						<h2 class="fs-title">Personal Details</h2>
						<h3 class="fs-subtitle">We will never sell it</h3>
						<input type="text" name="fname" placeholder="First Name" />
						<input type="text" name="lname" placeholder="Last Name" />
						<input type="text" name="phone" placeholder="Phone" />
						<textarea name="address" placeholder="Address"></textarea>
						<input type="button" name="previous" class="previous action-button" value="Previous" />
						<input type="submit" name="submit" class="submit action-button" value="Submit" />
					</fieldset>
				</form>
				<div class="clear"></div>
			</div>
		</div>
	</section>

@endsection

@push('scripts')

	<script src="console/plugins/register-steps/jquery.easing.min.js"></script>
	<script src="console/plugins/register-steps/register-init.js"></script>

@endpush
