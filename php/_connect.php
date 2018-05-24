<?php
      $servername = "localhost:3306";
      $username = "root";
      $password = "";
      $dbname = "tadashi_user";
      $conn = new mysqli($servername, $username, $password,$dbname);
      if ($conn->connect_error) {
          die("连接失败: " . $conn->connect_error);
      }
?>