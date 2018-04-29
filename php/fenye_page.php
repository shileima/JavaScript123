<center>
<a href="index.php">首页</a>&nbsp;&nbsp;<a href="liuyan.php">留言</a>&nbsp;&nbsp;<a href="./admin/login.php">后台登陆</a>
<br /><marquee direction=left>给我留言吧 ^_^ ......</marquee> 
<hr width="100%" color="#666666" noshade="noshade" />



<?php
include 'conn.php';
$perNumber=2; //每页显示的记录数
$page=isset($_GET['page'])?$_GET['page']:1; //获得当前的页面值
$count=mysql_query("select count(*) from tb_liuyan"); //获得记录总数
$rs=mysql_fetch_array($count); //获得记录总数
$totalNumber=$rs[0];//获得记录总数
$totalPage=ceil($totalNumber/$perNumber); //计算出总页数

$startCount=($page-1)*$perNumber; //分页开始,根据此方法计算出开始的记录
$result=mysql_query("select * from tb_liuyan limit $startCount,$perNumber"); //根据前面的计算出开始的记录和记录数
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
echo "<span>页次:". $page."/".$totalPage."页 记录:".$totalNumber."条</span>&nbsp;";
if($page!=1){
	echo "<a href=index.php?page=1>首页</a>&nbsp;";
	echo "<a href=index.php?page=".($page-1).">上一页</a>";
	}
if($page<$totalPage){
	echo "<a href=index.php?page=".($page+1).">下一页</a>&nbsp;";
	echo "<a href=index.php?page=".$totalPage.">尾页</a>";
	}
				
?>


</center>