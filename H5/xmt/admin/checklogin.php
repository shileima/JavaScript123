









<?php 

session_start () ;   

$pa='TTyy666';   

$na='loading';   

$username=$_POST['zh'] ;    //获取参数

$password=$_POST['mm'] ;

$_SESSION['fj']=$_POST['zh'] ;

   if($password ===$pa and $username ===$na)

    { 

    header( "location:XX.php");

    } 

    else 

    { 

      echo "<script>alert('用户名或密码错误!');location.href='index.php';</script>";

	  }

?>



















