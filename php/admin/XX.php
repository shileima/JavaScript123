<?php 



date_default_timezone_set('PRC');


$TIMEA =date('Y-m-d H:i:s',time()); 

session_start () ; 

if($_SESSION['fj']!=="loading") { 

	exit(��Ȩ��¼ʧ��);


}


?>


<style type="text/css">


<!--

.STYLE13 {font-size: 14px; font-weight: bold; color: #FFFFCC;}

.STYLE15 {
font-size: 12px;color: #000000;}


.STYLE16 {font-size: 12}

.STYLE26 {font-size: 12px}

.STYLE28 {font-size: 12px; font-weight: bold; color: #000000; }

-->

</style>


<?php


/* $link = mysql_connect("localhost","s220162","jizv%g-8");//����MySQL������

 $db  = mysql_select_db("s220162");//ѡ�����ݿ�

 mysql_query("set names GB2312",$link);*/
 
 include 'conn.php';
 

 $perNumber=20; //ÿҳ��ʾ�ļ�¼��
 
 $page=isset($_GET['page'])?$_GET['page']:1; //��õ�ǰ��ҳ��ֵ
 
 $count=mysql_query("select count(*) from dd"); //��ü�¼����
 
 $rs=mysql_fetch_array($count); //��ü�¼����
 
 $totalNumber=$rs[0];//��ü�¼����


 
 $totalPage=ceil($totalNumber/$perNumber); //�������ҳ��
 
 
 $startCount=($page-1)*$perNumber; //��ҳ��ʼ,���ݴ˷����������ʼ�ļ�¼
 

 $sql = "select * , (case bj when '1'then '������'  when '2' then '�ѷ���'when '3' then '����'end ) AS bja   from dd order by id desc limit $startCount,$perNumber";

 $result = mysql_query($sql,$link);//ִ��SELECT��ѯ 
 
 $num = mysql_num_rows($result);//��ȡ��¼����"


?>

<body>


<form name="form1" method="post" action="file:///E|/www/thx/it/xbzfcxdo.php">


<table width="1300" border="0" align="left" cellpadding="8" cellspacing="1" bgcolor="#335EA8">


  <tr>

    <td width="17%" height="13" align="center" bgcolor="#FFFFFF"><span class="STYLE26">��ǰʱ��</span></td>


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


</p>


<?php
echo "<span>ҳ��:". $page."/".$totalPage."ҳ ��¼:".$totalNumber."��</span>&nbsp;";
if($page!=1){
	echo "<a href=XX.php?page=1>��ҳ</a>&nbsp;";
	echo "<a href=XX.php?page=".($page-1).">��һҳ</a>";
	}
if($page<$totalPage){
	echo "<a href=XX.php?page=".($page+1).">��һҳ</a>&nbsp;";
	echo "<a href=XX.php?page=".$totalPage.">βҳ</a>";
	}
				
?>

<br />
<p></p>
<table width="1400" border="0" align="left" cellpadding="2" cellspacing="1" bordercolor="#315DAD" bgcolor="#315DAD">







        <tr align="center" bgcolor="#FFFFf0"> 







          <td height="18" colspan="9" valign="middle" bgcolor="#FFFFFF"><strong>�����ض�����Ϣ</strong></td>







      </tr>







        <tr align="center" bgcolor="#ffaaaa">







        <td width="86" align="center" valign="middle" bgcolor="#FFFFFF" class="STYLE13"><span class="STYLE28"><strong>�������</strong></span></td>







       <td width="137" height="23" align="center" valign="middle" bgcolor="#FFFFFF" class="STYLE28"><span class="STYLE26">����ʱ��</span></td>







       <td width="86" align="center" valign="middle" bgcolor="#FFFFFF" class="STYLE13"><span class="STYLE28"><strong>�ͻ�</strong>����</span></td>







       <td width="100" valign="middle" bgcolor="#FFFFFF" class="STYLE28"><strong>�ͻ��绰</strong></td>







       <td width="200" height="23" valign="middle" bgcolor="#FFFFFF" class="STYLE28">������Ʒ       </td>







        <td width="300" height="23" valign="middle" bgcolor="#FFFFFF" class="STYLE28">�����ײ�</td>







         <td width="300" height="23" valign="middle" bgcolor="#FFFFFF" class="STYLE28">�µ�����</td>







       <td width="70" valign="middle" bgcolor="#FFFFFF" class="STYLE28">ƽ̨</td>







       <td width="450" valign="middle" bgcolor="#FFFFFF" class="STYLE28">�ͻ���ַ</td>







          <td width="100" valign="middle" bgcolor="#FFFFFF" class="STYLE28">����</td>







          <td width="80" valign="middle" bgcolor="#FFFFFF" class="STYLE28"><span class="STYLE26">״̬</span></td>







          <td width="200" align="center" valign="middle" bgcolor="#FFFFFF" class="STYLE28">����</td>







        </tr>







<?php







  while($row = mysql_fetch_array($result))



  {




  ?>



<tr align="center"> 







<td height="8" align="center" valign="middle" bgcolor="#F3F7FC" class="STYLE16"><span class="STYLE26"><?php echo $row['id']?></span></td>







<td height="8" align="center" valign="middle" bgcolor="#F3F7FC" class="STYLE16"><div align="center" class="STYLE26"><?php echo $row['time']?></div></td>







<td height="8" align="center" valign="middle" bgcolor="#F3F7FC" class="STYLE16"><span class="STYLE26"><?php echo $row['xm']?></span></td>







<td valign="middle" bgcolor="#F3F7FC" class="STYLE16"><div align="center" class="STYLE26"><?php echo $row['tel']?></div></td>







<td height="8" valign="middle" bgcolor="#F3F7FC" class="STYLE16"><span class="STYLE26"><?php echo $row['lx']







?></span></td>







<td width="300" height="8" valign="middle" bgcolor="#F3F7FC" class="STYLE16"><span class="STYLE26"><?php echo $row['tc']







?></span></td>







<td height="8" valign="middle" bgcolor="#F3F7FC" class="STYLE16"><span class="STYLE26"><?php echo $row['url']







?></span></td>







<td height="8" valign="middle" bgcolor="#F3F7FC" class="STYLE16"><span class="STYLE26"><?php echo $row['pt']

?></span></td>

<td height="8" valign="middle" bgcolor="#F3F7FC" class="STYLE16"><div align="left"><span class="STYLE26"><?php echo $row['dz']

?></span></div></td>


<td height="8" valign="middle" bgcolor="#F3F7FC" class="STYLE16"><span class="STYLE26"><?php echo $row['sl']

?></span></td>


<td valign="middle" bgcolor="#F3F7FC" class="STYLE16"><div align="center" class="STYLE26"><?php echo $row['bja']


?></div></td>


<td width="84" height="8" align="center" valign="middle" bgcolor="#F3F7FC" class="STYLE26"><a href="fh.php?id=<?PHP echo $row['id']?>">����</a>&nbsp;<a href="zf.php?id=<?PHP echo $row['id']?>">����</a>&nbsp;<a href="dl.php?id=<?PHP echo $row['id']?>">ɾ��</a></td>

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

  echo "������";

 }

  mysql_close($link) ;

?>

  <br>


</p>

<p>&nbsp;</p>

</body>

</html>















































































