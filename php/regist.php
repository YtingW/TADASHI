<?php
    header("Access-Control-Allow-Origin:*");
    $usr = @$_POST["username"];
    $pwd = @$_POST["password"];
    require("./_connect.php");
    $pwd = md5($pwd);
    $sql_login = "SELECT username,password FROM user_list";
    $result_login = $conn->query($sql_login);
    $sql_register = "INSERT into user_list(
        username,password
    )
        VALUES 
    ('{$usr}','{$pwd}')
    ";
    $hasuser = FALSE; 
   while($row = $result_login->fetch_assoc()){
        if($row["username"] == $usr){
            $hasuser = TRUE;
        }
    }
    if($hasuser == TRUE){
        die("0");
    }else{
    	$result_register = $conn->query($sql_register);
        die("1");    
    }
    echo "none";
?>