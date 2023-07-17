<?php
require_once 'assets/php/auth.php';
$user = new Auth();
$message='';
if (isset($_GET['email']) && isset($_GET['token'])){
    $email = $user->check_input($_GET['email']);
    $token = $user->check_input($_GET['token']);

    $auth_user = $user->reset_password_auth($email, $token);

    if ($auth_user != null){
        if (isset($_POST['submit'])){
            $password = $_POST['password'];
            $confirm_password = $_POST['confirm_password'];

            $hash_new_password = password_hash($password, PASSWORD_DEFAULT);

            if ($password = $confirm_password){
                $user->update_new_password($hash_new_password, $email);
                $message = 'Password Changed Successfully! <br> <a href="index.php">Login Here! </a>';
            }else{
                $message = "Password did not matched!";
                $user->showMessage('danger', $message);
            }
        }
    }else{
        header('Location:index.php');
        exit();
    }
}else{
    header('Location:index.php');
    exit();
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

                <div class="col-8 offset-2 d-flex justify-content-center align-items-center">
                    <div class="card shadow-sm w-100 p-4 p-md-5" style="max-width: 32rem;">
                        <!-- Form -->
                        <form class="row g-3" id="reset-password-form" method="POST">
                            <div class="col-12 text-center mb-5">
                                <img src="assets/dist/assets/images/auth-two-step.svg" class="w180 mb-4" alt="" />
                                <h1>Reset Your Password</h1>
                            </div>
                            <div>
                                <span class="text-danger text-center" id="password-error"><?= $message; ?></span>
                            </div>

                            <div class="col-12">
                                <label class="form-label">New Password</label>
                                <input type="password" name="password" id="password" class="form-control form-control" placeholder="********">
                            </div>
                            <div class="col-12">
                                <label class="form-label">Confirm New Password</label>
                                <input type="password" id="con-password" name="confirm_password" class="form-control form-control" placeholder="********">
                            </div>

                            <div class="col-12 text-center mt-4">
                                <input type="submit" id="register-btn" name="submit" class="btn btn-block btn-outline-dark lift text-uppercase" value="Reset Password">
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

<!-- Jquery Page Js -->

</body>
</html>