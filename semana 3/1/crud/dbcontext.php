<?php
function conectar(){
    $host = "127.0.0.1";
    $user = "root";
    $pass = "bankai24";
    $db="iceppracticas";
    $conn = new mysqli($host,$user,$pass,$db);
    if($conn->connect_error){
        die("conexion fallida". $conn->connect_error);
    }
    return $conn;
}
?>  
