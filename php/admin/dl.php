
<?php


session_start () ; 
if($_SESSION['fj']!=="loading") { 
	exit(��Ȩ��¼ʧ��);
}



$SBXBXMID =$_GET['id']; 
$time=date('Y-m-d H:i:s',time()); //




$bj="3";
 $link = mysql_connect("localhost","s220162","jizv%g-8");//����MySQL������
 $db  = mysql_select_db("s220162");//ѡ�����ݿ�
 mysql_query("set names GB2312",$link);//�趨���뷽ʽ
 
$sqld="delete FROM dd WHERE id =$SBXBXMID";
 

$result = mysql_query($sqld);

?>

<?php require_once "XX.php"; ?>