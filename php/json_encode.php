<?php
header("Content-type:text/html;charset=utf-8");
$arr = array
       (
	      'Address'=>'Beijing',
          'Name'=>'希亚',
          'Age'=>20
       );
	   
	   
$arr2 = array('张三','loading','123321');

$jsonencode = json_encode($arr); 
$jsonencode2 = json_encode($arr2);

echo $jsonencode; 
echo '</br>';
echo '</br>';
echo $jsonencode2;

?>