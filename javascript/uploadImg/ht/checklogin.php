




<?php 
session_start () ;   
$pa='1qaz2wsx';   
$na='admin';   
$username=$_POST['zh'] ;    //��ȡ����
$password=$_POST['mm'] ;
$_SESSION['fj']=$_POST['zh'] ;
   if($password ===$pa and $username ===$na)
    { 
    header( "location:XX.php");
    } 
    else 
    { 
      echo "<script>alert('�û������������!');location.href='index.php';</script>";
	  }
?>









