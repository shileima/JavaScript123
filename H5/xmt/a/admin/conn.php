<?php

 $link = mysql_connect("localhost","s220162","jizv%g-8");//连接MySQL服务器

 $db  = mysql_select_db("s220162");//选择数据库


 mysql_query("set names GB2312",$link);
 
 ?>