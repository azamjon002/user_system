<?php
session_start();

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