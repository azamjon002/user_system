<?php
session_start();

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

require_once 'auth.php';
$user = new Auth();

if (isset($_POST['action']) && $_POST['action'] == 'register'){
    $name = $user->check_input($_POST['name']);
    $email = $user->check_input($_POST['email']);
    $password = $user->check_input($_POST['password']);
    $hash_password = password_hash($password, PASSWORD_DEFAULT);


    if ($user->user_exists($email)){
        echo $user->showMessage('warning','This E-mail is already exists');
    }else{

        if ($user->register($name,$email, $hash_password)){
            echo 'register';
            $_SESSION['user']=$email;
        }else{
            echo  $user->showMessage('danger','Something went wrong! Try again later!');
        }
    }
}


if (isset($_POST['action']) && $_POST['action'] == 'login'){
    $email = $user->check_input($_POST['email']);
    $password = $user->check_input($_POST['password']);

    $loggedInUser = $user->login($email);

    if ($loggedInUser){
        if (password_verify($password, $loggedInUser['password'])){

            if (!empty($_POST['rem'])){
                setcookie('email', $email, time()+(30*24*60*60), '/');
                setcookie('password', $password, time()+(30*24*60*60), '/');

            }else{
                setcookie('email','',1,'/');
                setcookie('password','',1,'/');
            }

            echo 'login';
            $_SESSION['user'] = $email;
        }else{
            echo $user->showMessage('danger','Password is incorrect!');
        }
    }else{
        echo $user->showMessage('danger','User not found!');
    }
}


if (isset($_POST['action']) && $_POST['action'] == 'forgot'){

    $email = $user->check_input($_POST['email']);
    $user_found = $user->currentUser($email);

    if ($user_found){
        $token = uniqid();
        $token = str_shuffle($token);

        $user->forgot_password($token, $email);

        try {
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = Database::USERNAME;
            $mail->Password = Database::PASSWORD;
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 587;
            $mail->setFrom(Database::USERNAME, 'Azamjon');
            $mail->addAddress($email);
            $mail->isHTML(true);
            $mail->Subject = 'Reset Password';
            $mail->Body = '<h3>Click the below link to reset your password. <br>
                    <a href="http://localhost/user-system/pass-reset.php?email='.$email.'&token='.$token.'">
                    http://localhost/user-system/pas-reset.php?email='.$email.'&token='.$token.'</a><br>
                    Regards
                    </h3>';

            $mail->send();
            echo $user->showMessage('success','We have send you the reset link in your e-mail ID, please check your e-mail');

        }catch (Exception $exception){
            echo $user->showMessage('danger', 'Something went wrong please try again later!');
//            echo $exception;
        }
    }
    else{
        echo $user->showMessage('info', 'This e-mail is not registered');
    }
}