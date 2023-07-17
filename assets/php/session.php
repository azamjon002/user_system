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

$current_id = $data['id'];
$current_name = $data['name'];
$current_gender = $data['gender'];
$current_password = $data['password'];
$current_phone = $data['phone'];
$current_dob = $data['dob'];
$current_photo = $data['photo'];
$current_created_at = $data['created_at'];
$current_verified = $data['verified'];
