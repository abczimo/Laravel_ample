@extends('layouts.console')

@push('stylesheets')

    <!-- FormValidation -->
    <link rel="stylesheet" href="console/plugins/jquery-wizard-master/libs/formvalidation/formValidation.min.css">
    <!--alerts CSS -->
    <link href="console/plugins/sweetalert/sweetalert.css" rel="stylesheet" type="text/css">
    <!-- Wizard CSS -->
    <link href="console/plugins/jquery-wizard-master/css/wizard.css" rel="stylesheet">

@endpush

@section('content')

      <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">Form Wizard</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <button class="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i class="ti-settings text-white"></i></button>
            <a href="javascript: void(0);" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Forms</a></li>
                <li class="active">Form Wizard</li>
            </ol>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- .row -->
    <div class="row">
        <div class="col-sm-12">
            <div class="white-box">
                <h3 class="box-title m-b-0">Basic</h3>
                <p class="text-muted m-b-30 font-13"> This is the basic wizrd without validation.</p>
                <div id="exampleBasic" class="wizard">
                    <ul class="wizard-steps" role="tablist">
                        <li class="active" role="tab">
                            <h4><span>1</span>Step</h4> </li>
                        <li role="tab">
                            <h4><span>2</span>Step</h4> </li>
                        <li role="tab">
                            <h4><span>3</span>Step</h4> </li>
                    </ul>
                    <div class="wizard-content">
                        <div class="wizard-pane active" role="tabpanel">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</div>
                        <div class="wizard-pane" role="tabpanel">Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</div>
                        <div class="wizard-pane" role="tabpanel">Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /.row -->
    <!-- .row -->
    <div class="row">
        <div class="col-sm-12">
            <div class="white-box">
                <h3 class="box-title m-b-0">With Icon</h3>
                <p class="text-muted m-b-30 font-13"> This is the Icon wizrd without validation.</p>
                <div id="exampleBasic2" class="wizard">
                    <ul class="wizard-steps" role="tablist">
                        <li class="active" role="tab">
                            <h4><span><i class="ti-user"></i></span>Account</h4> </li>
                        <li role="tab">
                            <h4><span><i class="ti-credit-card"></i></span>Billing</h4> </li>
                        <li role="tab">
                            <h4><span><i class="ti-check"></i></span>Confirmation</h4> </li>
                    </ul>
                    <div class="wizard-content">
                        <div class="wizard-pane active" role="tabpanel">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</div>
                        <div class="wizard-pane" role="tabpanel">Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</div>
                        <div class="wizard-pane" role="tabpanel">Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /.row -->
    <!-- .row -->
    <div class="row">
        <div class="col-sm-12">
            <div class="white-box">
                <h3 class="box-title m-b-0">Validation</h3>
                <p class="text-muted m-b-30 font-13"> This is the Validation wizard with validation.</p>
                <div id="exampleValidator" class="wizard">
                    <ul class="wizard-steps" role="tablist">
                        <li class="active" role="tab">
                            <h4><span><i class="ti-user"></i></span>Username</h4> </li>
                        <li role="tab">
                            <h4><span><i class="ti-credit-card"></i></span>Email ID</h4> </li>
                        <li role="tab">
                            <h4><span><i class="ti-check"></i></span>Password</h4> </li>
                    </ul>
                    <form id="validation" class="form-horizontal">
                        <div class="wizard-content">
                            <div class="wizard-pane active" role="tabpanel">
                                <div class="form-group">
                                    <label class="col-xs-3 control-label">Username</label>
                                    <div class="col-xs-5">
                                        <input type="text" class="form-control" name="username" /> </div>
                                </div>
                            </div>
                            <div class="wizard-pane" role="tabpanel">
                                <div class="form-group">
                                    <label class="col-xs-3 control-label">Email address</label>
                                    <div class="col-xs-5">
                                        <input type="text" class="form-control" name="email" /> </div>
                                </div>
                            </div>
                            <div class="wizard-pane" role="tabpanel">
                                <div class="form-group">
                                    <label class="col-xs-3 control-label">Password</label>
                                    <div class="col-xs-5">
                                        <input type="password" class="form-control" name="password" /> </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- /.row -->
    <!-- .row -->
    <div class="row">
        <div class="col-sm-12">
            <h4 class="box-title m-b-0 m-t-40">WITH ACCORDION</h4>
            <p class="text-muted m-b-30 font-13"> This is the Accordion wizard without validation.</p>
            <div class="panel-group wiz-aco" id="accordion" role="tablist" aria-multiselectable="true">
                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingOne">
                        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Collapsible Group Item #1
          </a>
        </h4> </div>
                    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                        <div class="panel-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </div>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingTwo">
                        <h4 class="panel-title">
          <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Collapsible Group Item #2
          </a>
        </h4> </div>
                    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                        <div class="panel-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </div>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingThree">
                        <h4 class="panel-title">
          <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Collapsible Group Item #3
          </a>
        </h4> </div>
                    <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                        <div class="panel-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection

@push('scripts')

    <!-- Form Wizard JavaScript -->
    <script src="console/plugins/jquery-wizard-master/dist/jquery-wizard.min.js"></script>
    <!-- FormValidation plugin and the class supports validating Bootstrap form -->
    <script src="console/plugins/jquery-wizard-master/libs/formvalidation/formValidation.min.js"></script>
    <script src="console/plugins/jquery-wizard-master/libs/formvalidation/bootstrap.min.js"></script>
    <!-- Sweet-Alert  -->
    <script src="console/plugins/sweetalert/sweetalert.min.js"></script>
    <script type="text/javascript">
        (function() {
            $('#exampleBasic').wizard({
                onFinish: function() {
                    swal("Message Finish!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat eleifend ex semper, lobortis purus sed.");
                }
            });
            $('#exampleBasic2').wizard({
                onFinish: function() {
                    swal("Message Finish!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat eleifend ex semper, lobortis purus sed.");
                }
            });
            $('#exampleValidator').wizard({
                onInit: function() {
                    $('#validation').formValidation({
                        framework: 'bootstrap',
                        fields: {
                            username: {
                                validators: {
                                    notEmpty: {
                                        message: 'The username is required'
                                    },
                                    stringLength: {
                                        min: 6,
                                        max: 30,
                                        message: 'The username must be more than 6 and less than 30 characters long'
                                    },
                                    regexp: {
                                        regexp: /^[a-zA-Z0-9_\.]+$/,
                                        message: 'The username can only consist of alphabetical, number, dot and underscore'
                                    }
                                }
                            },
                            email: {
                                validators: {
                                    notEmpty: {
                                        message: 'The email address is required'
                                    },
                                    emailAddress: {
                                        message: 'The input is not a valid email address'
                                    }
                                }
                            },
                            password: {
                                validators: {
                                    notEmpty: {
                                        message: 'The password is required'
                                    },
                                    different: {
                                        field: 'username',
                                        message: 'The password cannot be the same as username'
                                    }
                                }
                            }
                        }
                    });
                },
                validator: function() {
                    var fv = $('#validation').data('formValidation');
                    var $this = $(this);
                    // Validate the container
                    fv.validateContainer($this);
                    var isValidStep = fv.isValidContainer($this);
                    if (isValidStep === false || isValidStep === null) {
                        return false;
                    }
                    return true;
                },
                onFinish: function() {
                    $('#validation').submit();
                    swal("Message Finish!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat eleifend ex semper, lobortis purus sed.");
                }
            });
            $('#accordion').wizard({
                step: '[data-toggle="collapse"]',
                buttonsAppendTo: '.panel-collapse',
                templates: {
                    buttons: function() {
                        var options = this.options;
                        return '<div class="panel-footer"><ul class="pager">' + '<li class="previous">' + '<a href="#' + this.id + '" data-wizard="back" role="button">' + options.buttonLabels.back + '</a>' + '</li>' + '<li class="next">' + '<a href="#' + this.id + '" data-wizard="next" role="button">' + options.buttonLabels.next + '</a>' + '<a href="#' + this.id + '" data-wizard="finish" role="button">' + options.buttonLabels.finish + '</a>' + '</li>' + '</ul></div>';
                    }
                },
                onBeforeShow: function(step) {
                    step.$pane.collapse('show');
                },
                onBeforeHide: function(step) {
                    step.$pane.collapse('hide');
                },
                onFinish: function() {
                    swal("Message Finish!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat eleifend ex semper, lobortis purus sed.");
                }
            });
        })();
    </script>

@endpush