<?php
 $filename = $_FILES['file']['name'];
//$filename = date("Y").date("m").date("d").date("H").date("i").date("s").rand(100, 999).".".jpg;
$key = $_POST['key'];
$key2 = $_POST['key2'];
$iipp=$_SERVER["REMOTE_ADDR"];  
if (!file_exists($iipp)){ mkdir ("uploads/".$iipp);}
if ($filename) {
    move_uploaded_file($_FILES["file"]["tmp_name"],
      "uploads/".$iipp."/". $filename);
}
echo $key;
echo $key2;
?>
<script>

function getFileType(str){

		
		var a = str.split(".").pop();
		alert(a);
		
		
	}


</script>