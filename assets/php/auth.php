<?php

require_once 'config.php';

class Auth extends Database{


    public function register($name, $email,$password)
    {
        $sql = "INSERT INTO users (name,email, password) VALUES (?, ?, ?)";

        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(1,$name);
        $stmt->bindValue(2,$email);
        $stmt->bindValue(3,$password);

        $test = $stmt->execute();

        if ($test){
            return true;
        }else{
            return false;
        }
    }

    public function user_exists($email)
    {
        $sql = "SELECT email from users where email = :email";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute([':email'=>$email]);

        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        return $result;
    }

    public function login($email)
    {
        $sql = "SELECT email, password FROM users where email= :email AND deleted_at != 0";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute(['email'=>$email]);

        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        return $row;
    }

    public function currentUser($email)
    {
        $stmt = $this->conn->prepare("SELECT * FROM users WHERE email = :email AND deleted_at != 0");
        $stmt->execute(['email'=>$email]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        return $row;
    }

    public function forgot_password($token, $email)
    {
        $stmt = $this->conn->prepare("UPDATE users SET token = :token, token_expire = DATE_ADD(NOW(), INTERVAL 10 MINUTE) WHERE email = :email");
        $test = $stmt->execute(['token'=>$token, 'email'=>$email]);
        if ($test){
            return true;
        }else{
            return false;
        }
    }

    public function reset_password_auth($email, $token)
    {
        $stmt = $this->conn->prepare("SELECT id FROM users WHERE email = :email AND token = :token AND token != '' AND token_expire > NOW() AND deleted_at != 0");
        $stmt->execute(['email'=>$email, 'token'=>$token]);

        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        return $row;
    }

    public function update_new_password($pass, $email)
    {
        $stmt = $this->conn->prepare("UPDATE users SET token = '', password = :$pass, where email = :$email AND deleted_at != 0");
        $stmt->execute(['pass'=>$pass, 'email'=>$email]);

        return true;
    }

}