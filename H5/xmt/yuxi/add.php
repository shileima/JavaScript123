<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>回归玉玺</title>
</head>

<body>


<?php 
date_default_timezone_set('PRC');
$time=date('Y-m-d H:i:s',time()); 

?>
<style type="text/css">
<!--
.STYLE13 {font-size: 14px; font-weight: bold; color: #FFFFCC;}
.STYLE15 {
	font-size: 12px;
	color: #FFFFCC;
}
.STYLE16 {font-size: 12}
.STYLE22 {font-size: 12px; font-weight: bold; }
.STYLE23 {font-size: 12px; font-weight: bold; color: #FFFFFF; }
-->
</style>
<?php

session_start () ;

$xm=$_REQUEST['xm'] ; 
$tel=$_REQUEST['tel'] ; 
$dz=$_REQUEST['dz'] ; 
$addr=$_REQUEST['addr'];
$tc=$_REQUEST['tc'] ;
$url=$_REQUEST['url'] ;

$sl=$_REQUEST['sl'] ; 
$lx="回归玉玺" ;
$pt="看url" ;
$bj="1" ;
 // if(strlen($tel)!==11 ) { 
 // 	exit(请输入正确手机号码);
 // }
 // if($dz=='' ) { 
 // 	exit(详细地址不能为空)
 // }

 $link = mysql_connect("localhost","s220162","jizv%g-8");//连接MySQL服务器
 $db  = mysql_select_db("s220162");//选择数据库
 mysql_query("set names UTF8",$link);//设定编码方式utf8");是什么意思

$query_insert="insert dd (xm,tel,time,sl,dz,tc,url,bj,lx,pt) values('$xm','$tel','$time','$sl','$addr $dz','$tc','$url','$bj','$lx','$pt') ";
$result_insert=mysql_db_query("s220162","$query_insert");
if($result_insert)
{
echo "<script>alert('恭喜您订购成功！我们将尽快安排发货。');</script>";
 echo " <script>location='http://shop.cacca.cn/';</script>";
}
 else 
    { 
      echo "订购失败";
	  }
?>




</body>
</html>
