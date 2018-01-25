@extends('errors.layout')

@section('error-body')

    <div class="error-body text-center">
        <h1 class="text-danger">400</h1>
        <h3 class="text-uppercase">Page Not Found !</h3>
        <p class="text-muted m-t-30 m-b-30">YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>
        <a href="index.html" class="btn btn-danger btn-rounded waves-effect waves-light m-b-40">Back to home</a> 
    </div>

@endsection