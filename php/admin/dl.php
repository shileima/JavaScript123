
<?php


session_start () ; 
if($_SESSION['fj']!=="loading") { 
	exit(授权登录失败);
}



$SBXBXMID =$_GET['id']; 
$time=date('Y-m-d H:i:s',time()); //




$bj="3";
 $link = mysql_connect("localhost","s220162","jizv%g-8");//连接MySQL服务器
 $db  = mysql_select_db("s220162");//选择数据库
 mysql_query("set names GB2312",$link);//设定编码方式
 
$sqld="delete FROM dd WHERE id =$SBXBXMID";
 

$result = mysql_query($sqld);

?>

<?php require_once "XX.php"; ?>