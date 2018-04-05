
<?php

    $username1 = $_POST['username'];
    $password1 = $_POST['password'];

    $username = $_GET['username'];
    $password = $_GET['password'];




    echo "这是通过ajax的 GET 方式获取过来的数据,用户名: {$username} , 密码是: {$password} \n" ;
    echo "这是通过ajax的 POST 方式获取过来的数据,用户名: {$username1} , 密码是: {$password1}" ;


?>
