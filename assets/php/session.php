<?php
session_start();
require_once  "auth.php";
$current_user = new Auth();

if (!isset($_SESSION['user'])){
    header('location:index.php');
    die;
}

$current_email = $_SESSION['user'];

$data = $current_user->currentUser($current_email);