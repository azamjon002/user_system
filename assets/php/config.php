<?php

class Database{
    private $dsn ="mysql:host=localhost;dbname=db_user_system";
    private $dbuser = 'newuser';
    private $dbpas = 'password';

    public $conn;

    public function __construct()
    {
        try {
            $this->conn = new PDO($this->dsn,$this->dbuser,$this->dbpas);
        }catch (PDOException $exception){
            echo "Error: ".$exception->getMessage();
        }
        return $this->conn;
    }

    public function check_input($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    public function showMessage($type, $message)
    {
        return '<div class="alert alert-'.$type.' alert-dismissible d-flex justify-content-between align-items-center">
                <strong class="text-center">'.$message.'</strong>
                    <span class="close" style="font-size: 18px;cursor:pointer;" data-bs-dismiss="alert">&times;</span>
                   
                </div>';
    }
}