@extends('errors.layout')

@section('error-body')

	<div class="error-body text-center">
		<h1>500</h1>
		<h3 class="text-uppercase">Internal Server Error.</h3>
		<p class="text-muted m-t-30 m-b-30">Please try after some time</p>
		<a href="index.html" class="btn btn-info btn-rounded waves-effect waves-light m-b-40">Back to home</a>
	</div>

@endsection