<center>
<a href="index.php">��ҳ</a>&nbsp;&nbsp;<a href="liuyan.php">����</a>&nbsp;&nbsp;<a href="./admin/login.php">��̨��½</a>
<br /><marquee direction=left>�������԰� ^_^ ......</marquee> 
<hr width="100%" color="#666666" noshade="noshade" />



<?php
include 'conn.php';
$perNumber=2; //ÿҳ��ʾ�ļ�¼��
$page=isset($_GET['page'])?$_GET['page']:1; //��õ�ǰ��ҳ��ֵ
$count=mysql_query("select count(*) from tb_liuyan"); //��ü�¼����
$rs=mysql_fetch_array($count); //��ü�¼����
$totalNumber=$rs[0];//��ü�¼����
$totalPage=ceil($totalNumber/$perNumber); //�������ҳ��

$startCount=($page-1)*$perNumber; //��ҳ��ʼ,���ݴ˷����������ʼ�ļ�¼
$result=mysql_query("select * from tb_liuyan limit $startCount,$perNumber"); //����ǰ��ļ������ʼ�ļ�¼�ͼ�¼��
?>


<table width='200px' border='1px'>
				 <tr>
					 <th>id</th>
					<th>name</th>
					<th>liuyan</th>
                    <th>time</th>
				</tr>
                
                
<?php				
while($rows=mysql_fetch_assoc($result)){
						echo "<tr>";
						echo "<td>{$rows['id']}</td>";
						echo "<td>{$rows['name']}</td>";
						echo "<td>{$rows['liuyan']}</td>";
						echo "<td>{$rows['time']}</td>";
						echo "</tr>";
					}
?>
</table>
<br />

<?php
echo "<span>ҳ��:". $page."/".$totalPage."ҳ ��¼:".$totalNumber."��</span>&nbsp;";
if($page!=1){
	echo "<a href=index.php?page=1>��ҳ</a>&nbsp;";
	echo "<a href=index.php?page=".($page-1).">��һҳ</a>";
	}
if($page<$totalPage){
	echo "<a href=index.php?page=".($page+1).">��һҳ</a>&nbsp;";
	echo "<a href=index.php?page=".$totalPage.">βҳ</a>";
	}
				
?>


</center>