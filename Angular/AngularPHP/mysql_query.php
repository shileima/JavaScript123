<?php

$mysql_server_name='localhost'; //改成自己的mysql数据库服务器
 
$mysql_username='wordpress'; //改成自己的mysql数据库用户名
 
$mysql_password='Iq04Iphq8m'; //改成自己的mysql数据库密码
 
$mysql_database='jq_ajax'; //改成自己的mysql数据库名

$conn=mysql_connect($mysql_server_name,$mysql_username,$mysql_password) or die("error connecting") ; //连接数据库
 
mysql_query("set names 'utf8'"); //数据库输出编码 应该与你的数据库编码保持一致.南昌网站建设公司百恒网络PHP工程师建议用UTF-8 国际标准编码.
 
mysql_select_db($mysql_database); //打开数据库
 
$sql ="select * from yytt_users "; //SQL语句
 
$result = mysql_query($sql,$conn); //查询

while($row = mysql_fetch_array($result))
 
{
 
echo "<div style=\"height:24px; line-height:24px; font-weight:bold;\">"; //排版代码
 
echo $row['user_email'] . "<br/>";
 
echo "</div>"; //排版代码
 
}

$conn=mysql_connect($mysql_server_name,$mysql_username,$mysql_password); //连接数据库
 
mysql_query("set names 'utf8'"); //数据库输出编码
 
mysql_select_db($mysql_database); //打开数据库
 
$sql = "insert into news (Topic,Content,Enabled,Date) values ('topics 1','Content 1','1','2012-01-12')";
 
mysql_query($sql);
 
mysql_close(); //关闭MySQL连接

