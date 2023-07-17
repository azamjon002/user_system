<!doctype html>
<html class="no-js " lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Responsive Bootstrap 5 admin template and web Application ui kit.">
    <meta name="keyword"
          content="LUNO, Bootstrap 5, ReactJs, Angular, Laravel, VueJs, ASP .Net, Admin Dashboard, Admin Theme">
    <title>:: LUNO ::</title>
    <link rel="icon" href="favicon.ico" type="image/x-icon"> <!-- Favicon-->

    <!-- project css file  -->
    <link rel="stylesheet" href="../dist/assets/css/luno.style.min.css">
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
                        <form class="row g-3" id="forgot-form">
                            <div class="col-12 text-center mb-5">
                                <img src="../dist/assets/images/auth-password-reset.svg" class="w120 mb-4" alt=""/>
                                <h1>Forgot password?</h1>
                                <span>Enter the email address you used when you joined and we'll send you instructions to reset your password.</span>
                            </div>
                            <div id="forgotAlert"></div>
                            <div class="col-12">
                                <div class="mb-2">
                                    <label class="form-label">Email address</label>
                                    <input type="email" name="email" class="form-control">
                                </div>
                            </div>
                            <div class="col-12 text-center mt-4">
                                <input type="button" id="forgot-btn"
                                       class="btn btn-block btn-outline-dark lift text-uppercase"
                                       value="Reset Password">
                            </div>
                            <div class="col-12 text-center mt-4">
                                <span class="text-muted"><a href="../../index.php">Back to Sign in</a></span>
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
<script src="../dist/assets/bundles/libscripts.bundle.js"></script>
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js" integrity="sha512-3gJwYpMe3QewGELv8k/BX9vcqhryRdzRMxVfq6ngyWXwo03GFEzjsUm8Q7RZcHPHksttq7/GFoxjCVUjkjvPdw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>-->
<!-- Jquery Page Js -->

<script>
    $('#forgot-btn').click(function (e) {
        if ($('#forgot-form')[0].checkValidity()) {
            e.preventDefault();
            $('#forgot-btn').val('Please Wait...');
        }

        $.ajax({
            url: 'action.php',
            method: 'POST',
            data: $('#forgot-form').serialize() + '&action=forgot',
            success: function (response) {
                $('#forgot-btn').val('Reset Password');
                $('#forgot-form')[0].reset();
                $('#forgotAlert').html(response);
            }
        })


    })
</script>

</body>
</html>