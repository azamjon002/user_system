<?php
session_start();
if (isset($_SESSION['user'])){
    header('location:home.php');
    die;
}
?>
<!doctype html>
<html class="no-js " lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Responsive Bootstrap 5 admin template and web Application ui kit.">
    <meta name="keyword" content="LUNO, Bootstrap 5, ReactJs, Angular, Laravel, VueJs, ASP .Net, Admin Dashboard, Admin Theme">
    <title>:: LUNO ::</title>
    <link rel="icon" href="favicon.ico" type="image/x-icon"> <!-- Favicon-->

    <!-- project css file  -->
    <link rel="stylesheet" href="assets/dist/assets/css/luno.style.min.css">
</head>

<body id="layout-1" data-luno="theme-blue">

<!-- start: body area -->
<div class="wrapper">

    <!-- start: page body -->
    <div class="page-body auth px-xl-4 px-sm-2 px-0 py-lg-2 py-1">
        <div class="container-fluid">
            <div class="row">
                <div class="col-8 offset-2 d-flex justify-content-center align-items-center" id="sign-in-div">
                    <div class="card shadow-sm w-100 p-4 p-md-5" style="max-width: 32rem;">
                        <!-- Form -->
                        <form class="row g-3" id="sign-in-form">
                            <div class="col-12 text-center mb-2">
                                <h1>Sign in</h1>
                            </div>
                            <div id="loginAlert"></div>
                            <div class="col-12 text-center mb-4">
                                <a class="btn btn btn-outline-secondary btn-block" href="#">
                                        <span class="d-flex justify-content-center align-items-center">
                                            <img class="avatar xs me-2" src="assets/dist/assets/images/google.svg" alt="Image Description">
                                            Sign in with Google
                                        </span>
                                </a>
                                <span class="dividers text-muted mt-4">OR</span>
                            </div>
                            <div class="col-12 mt-0">
                                <div class="mb-2">
                                    <label class="form-label">Email address</label>
                                    <input type="email" name="email" value="<?php if (isset($_COOKIE['email'])) { echo $_COOKIE['email']; } ?>" class="form-control form-control">
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="mb-2">
                                    <div class="form-label">
                                            <span class="d-flex justify-content-between align-items-center">
                                                Password
                                                <a class="text-primary" href="#">Forgot Password?</a>
                                            </span>
                                    </div>
                                    <input type="password" name="password" value="<?php if (isset($_COOKIE['password'])) { echo $_COOKIE['password']; } ?>" class="form-control form-control" >
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input" <?php if (isset($_COOKIE['email'])) { echo 'checked'; } ?> type="checkbox" name="rem" id="rem">
                                    <label class="form-check-label" for="rem">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <div class="col-12 text-center mt-4">
                                <input type="button" class="btn btn-block btn-outline-dark lift text-uppercase" value="SIGN IN" id="sign-in-btn">
                            </div>
                            <div class="col-12 text-center mt-4">
                                <span class="text-muted">Don't have an account yet? <a href="javascript:void(0);" id="signup">Sign up here</a></span>
                            </div>
                        </form>
                        <!-- End Form -->
                    </div>
                </div>

                <div class="col-8 offset-2 d-none d-flex justify-content-center align-items-center" id="sign-up-div">
                    <div class="card shadow-sm w-100 p-4 p-md-5" style="max-width: 32rem;">
                        <!-- Form -->
                        <form class="row g-3" id="register-form">
                            <div class="col-12 text-center mb-2">
                                <h1>Create account</h1>
                            </div>
                            <div>
                                <span class="text-danger" id="password-error"></span>
                            </div>
                            <div class="col-12">
                                <label class="form-label">Full name</label>
                                <input type="text" class="form-control form-control" name="name">
                            </div>
                            <div class="col-12">
                                <label class="form-label">Email address</label>
                                <input type="email" class="form-control form-control" name="email">
                            </div>
                            <div class="col-6">
                                <label class="form-label">Password</label>
                                <input type="password" name="password" id="password" class="form-control form-control" placeholder="8+ characters required">
                            </div>
                            <div class="col-6">
                                <label class="form-label">Confirm password</label>
                                <input type="password" id="con-password" class="form-control form-control" placeholder="8+ characters required">
                            </div>

                            <div class="col-12 text-center mt-4">
                                <input type="submit" id="register-btn" class="btn btn-block btn-outline-dark lift text-uppercase" value="SIGN UP">
                            </div>
                            <div class="col-12 text-center mt-4">
                                <span class="text-muted">Already have an account? <a href="javascript:void(0);" id="signin">Sign in here</a></span>
                            </div>
                        </form>
                        <!-- End Form -->
                    </div>
                </div>
            </div> <!-- End Row -->

        </div>
    </div>
</div>
<!-- Jquery Core Js -->
<script src="assets/dist/assets/bundles/libscripts.bundle.js"></script>

<script>
    document.getElementById('signup').addEventListener('click', function (){
        document.getElementById('sign-up-div').classList.remove('d-none')
        document.getElementById('sign-in-div').classList.add('d-none')
    })

    document.getElementById('signin').addEventListener('click', function (){
        document.getElementById('sign-in-div').classList.remove('d-none')
        document.getElementById('sign-up-div').classList.add('d-none')
    })

    $('#register-btn').click(function (e){
        if ($('#register-form')[0].checkValidity()){
            e.preventDefault();
            $('#register-btn').val('Please Wait...');


            if ($('#password').val() !== $('#con-password').val()){
                $('#password-error').text('* Password did not match');
                $('#register-btn').val('Sign Up');
            }else {
                $.ajax({
                    url:'assets/php/action.php',
                    method: 'post',
                    data:$('#register-form').serialize()+'&action=register',
                    success:function (response){
                        $('#register-btn').val('Sign Up');
                        if (response === 'register'){
                            window.location = 'home.php';
                        }else {
                            $('#password-error').html(response);
                        }
                    }
                })
            }
        }
    })

    $('#sign-in-btn').click(function (e){
        if ($('#sign-in-form')[0].checkValidity()){
            e.preventDefault();
            $('#sign-in-btn').val('Please Wait...');
        }

        $.ajax({
            url: 'assets/php/action.php',
            method:'POST',
            data:$('#sign-in-form').serialize()+'&action=login',
            success: function (response){
                $('#sign-in-btn').val('Sign In');

                if (response === 'login'){
                    window.location = 'home.php';
                }else {
                    $('#loginAlert').html(response);
                }
            }
        })
    })
</script>

<!-- Jquery Page Js -->

</body>
</html>