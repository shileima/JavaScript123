









<?php 

session_start () ;   

$pa='TTyy666';   

$na='loading';   

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



















