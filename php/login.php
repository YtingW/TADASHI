<?php
    header("Access-Control-Allow-Origin:*");
    $usr = @$_POST["username"];
    $pwd = @$_POST["password"];
    require("./_connect.php");
    $pwd = md5($pwd);
    $sql_login = "SELECT username,password FROM user_list";
    $result_login = $conn->query($sql_login);
    $hasuser = FALSE; 
    $select_res = FALSE;
    $haspwd = FALSE;
   while($row = $result_login->fetch_assoc()){
        if($row["username"] == $usr){
            $hasuser = TRUE;
            if($row["password"] == $pwd){
                $select_res = json_encode($row);
                $haspwd = TRUE;
                break;
            }
        }
    }
    if($hasuser == TRUE &&  $haspwd == TRUE){
        die("0");//验证登录成功
    }else if($hasuser == TRUE &&  $haspwd == FALSE){
        die("1");//密码错误     
    }else if($hasuser ==  FALSE){
        die("2");//密码错误     
    }
    echo "none";
?>