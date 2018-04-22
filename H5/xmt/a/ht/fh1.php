
<?php
session_start () ; 
if($_SESSION['fj']!=="admin") { 
	exit(授权登录失败);
}




$SBXBXMID =$_GET['id']; 
$time=date('Y-m-d H:i:s',time()); //

$bj="2";
 $link = mysql_connect("118.145.6.205","s220162","jizv%g-8");//连接MySQL服务器
 $db  = mysql_select_db("s220162");//选择数据库
 mysql_query("set names GB2312",$link);//设定编码方式
 
$sqlw="update dd set bj='$bj' where id ='$SBXBXMID'";
 

$resultw = mysql_query($sqlw);

?>

<?php 
date_default_timezone_set('PRC');
$TIMEA =date('Y-m-d H:i:s',time()); 

?>

<style type="text/css">
<!--
.STYLE13 {font-size: 14px; font-weight: bold; color: #FFFFCC;}
.STYLE15 {
	font-size: 12px;
	color: #000000;
}
.STYLE16 {font-size: 12}
.STYLE26 {font-size: 12px}
.STYLE28 {font-size: 12px; font-weight: bold; color: #000000; }
-->
</style>


<?php
 $link = mysql_connect("118.145.6.205","s220162","jizv%g-8");//连接MySQL服务器
 $db  = mysql_select_db("s220162");//选择数据库
 mysql_query("set names GB2312",$link);
 $sql = "select *  , (case bj when '1'then '待发货'  when '2' then '已发货'when '3' then '作废'end ) AS bja   from dd order by id";
 $result = mysql_query($sql,$link);//执行SELECT查询 
 $num = mysql_num_rows($result);//获取记录条数"
?>
<body>
<form name="form1" method="post" action="file:///E|/www/thx/it/xbzfcxdo.php">
<table width="841" border="0" align="left" cellpadding="8" cellspacing="1" bgcolor="#335EA8">
  <tr>
    <td width="17%" height="13" align="center" bgcolor="#FFFFFF"><span class="STYLE26">当前时间</span></td>
    <td width="83%" height="13" bgcolor="#FFFFFF" ><span class="STYLE26"><?php echo $TIMEA ?></span></td>
  </tr>
</table>
</form>
<p><br>
<br>
  <?php
 if($num > 0)
 {
?>
</p><table width="849" border="0" align="left" cellpadding="2" cellspacing="1" bordercolor="#315DAD" bgcolor="#315DAD">
        <tr align="center" bgcolor="#FFFFf0"> 
          <td height="15" colspan="8" valign="middle" bgcolor="#FFFFFF"><strong>订单信息</strong></td>
      </tr>
        <tr align="center" bgcolor="#ffaaaa">
       <td width="124" height="23" align="center" valign="middle" bgcolor="#FFFFFF" class="STYLE28"><span class="STYLE26">订购时间</span></td>
       <td width="78" align="center" valign="middle" bgcolor="#FFFFFF" class="STYLE13"><span class="STYLE28"><strong>客户</strong>姓名</span></td>
       <td width="75" valign="middle" bgcolor="#FFFFFF" class="STYLE28"><strong>客户电话</strong></td>
       <td width="74" height="23" valign="middle" bgcolor="#FFFFFF" class="STYLE28">订购产品       </td>
       <td width="213" valign="middle" bgcolor="#FFFFFF" class="STYLE28">客户地址</td>
          <td width="66" valign="middle" bgcolor="#FFFFFF" class="STYLE28">订购数量</td>
          <td width="55" valign="middle" bgcolor="#FFFFFF" class="STYLE28"><span class="STYLE26">状态</span></td>
          <td width="123" align="center" valign="middle" bgcolor="#FFFFFF" class="STYLE28">操作</td>
        </tr>
<?php
  while($row = mysql_fetch_array($result))
  {
  ?>
  
 
  
  
<tr align="center"> 
<td height="8" align="center" valign="middle" bgcolor="#F3F7FC" class="STYLE16"><div align="center" class="STYLE26"><?php echo $row['time']?></div></td>
<td height="8" align="center" valign="middle" bgcolor="#F3F7FC" class="STYLE16"><span class="STYLE26"><?php echo $row['xm']?></span></td>
<td valign="middle" bgcolor="#F3F7FC" class="STYLE16"><div align="center" class="STYLE26"><?php echo $row['tel']?></div></td>
<td height="8" valign="middle" bgcolor="#F3F7FC" class="STYLE16"><span class="STYLE26"><?php echo $row['lx']
?></span></td>
<td height="8" valign="middle" bgcolor="#F3F7FC" class="STYLE16"><span class="STYLE26"><?php echo $row['dz']
?></span></td>
<td height="8" valign="middle" bgcolor="#F3F7FC" class="STYLE16"><span class="STYLE26"><?php echo $row['sl']
?></span></td>
<td valign="middle" bgcolor="#F3F7FC" class="STYLE16"><div align="center" class="STYLE26"><?php echo $row['bja']
?></div></td>
<td width="123" height="8" align="center" valign="middle" bgcolor="#F3F7FC" class="STYLE26"><a href="fh.php?id=<?PHP echo $row['id']?>">发货</a>&nbsp;&nbsp;<a href="zf.php?id=<?PHP echo $row['id']?>">作废</a></td>
</tr>  
<?php 
  }
?>
</table>
<p>
  <?php
 }
 else
 {
  echo "无数据";
 }
 
  mysql_close($link) ;
?>
  <br>
  <br>
</p>
<p>&nbsp;</p>
</body>
</html>









