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
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
<title>无标题文档</title>
<!-- <link rel="stylesheet" type="text/css" href="Huploadify.css"/> -->
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript" src="jquery.Huploadify.js"></script>
<style type="text/css">
body {max-width: 550px; min-width: 320px; margin: 0 auto;}

article { text-align: center;}

input {width: 90%; height: 30px; line-height: 30px; border-radius: 6px;}

h1 {    
    text-align: center;
    font-family: 'FangSong';
    font-size: 24px;
    color: #a61f1f;
  }

.uploadify-button{
  display:inline-block;
  margin:12px;
  border:1px solid #808080;
  background-color: #707070;
  line-height:24px;
  border-radius:12px;
  padding:0 18px;
    font-size:12px;
    font-weight: 600;
    font-family: '微软雅黑';
  color:#FFF;
  cursor:pointer;
  text-decoration:none;
}
.uploadify-button:hover{
  background-color: #888;
}
.uploadfile{
  width:0;
  }
.uploadify-queue .uploadify-queue-item{
  list-style-type:none;
  margin-top:5px;
  }
.uploadbtn,.delfilebtn{
  display:inline-block;
  border:1px solid #999;
  line-height:24px;
  border-radius:4px;
  padding:0 18px;
    font-size:12px;
  color:#666;
  cursor:pointer;
  background:url(images/btnbg.png) repeat-x 0 0;
  text-decoration:none;
  margin-top:5px; 
  }
.up_filename,.progressnum,.delfilebtn,.uploadbtn,.up_percent{
  font-size:12px;
  color:#666;
  margin-left:10px;
  }
.uploadify-progress{
   display:inline-block; 
   width:90%; 
   height:10px; 
   background-color:white;
   border-radius:20px;
   border:2px groove #666;
   vertical-align:middle;
   padding:0;
   }
.uploadify-progress-bar{
  width:0;
  height:100%;
  border-radius:20px;
  background-color: #0099FF;
  }

#upload {margin-bottom: 10px;}
</style>
<script type="text/javascript">
$(function(){
    var api = "://pv.sohu.com/cityjson";//前面加上http
    //这里api是搜狐IP地址查询接口
    $.get(api,function(data){
        var script = $('<script type="text/javascript"/>')[0];
        script.defer = true;
        script.text = data;
        $(script).appendTo("head");
        console.log("cid : " + returnCitySN.cid);
        console.log("cip : " + returnCitySN.cip);//得到IP
        console.log("cname : " + returnCitySN.cname);//得到城市
    },"text");

	$('#upload').Huploadify({
		auto:true,
		fileTypeExts:'*.jpg;*.png;*.exe;*.PNG;*.JPG;*.gif',
		multi:true,
		formData:{key:123456,key2:'vvvv'},
		fileSizeLimit:9999,
		showUploadedPercent:true,//是否实时显示上传的百分比，如20%
		showUploadedSize:true,
		removeTimeout:9999999,
		uploader:'upload.php',
		onUploadStart:function(){
			//alert('开始上传');
			},
		onInit:function(){
			//alert('初始化');
			},
		onUploadComplete:function(){

     // console.log($('.up_filename').eq(0).text());

 
    
			},
		onDelete:function(file){
			console.log('删除的文件：'+file);
			console.log(file);
		}
		});
	});
</script>
</head>

<body>
  <h1>天意商城免费鉴宝活动</h1>
  <article style="">
	<form enctype="multipart/form-data" id="form1" name="form1" method="post" action="add.php" onsubmit="return yanzheng()">
       <p style="display:none;">
        <span>url <i>*</i> ：</span>
          <input type="text" name="url" id="url">
          <input type="text" name="addr" id="addr">
          <input type="text" name="tc" id="tc">
          <input type="text" name="tc2" id="tc2">
          <input type="text" name="tc3" id="tc3">
          <input type="text" name="tc4" id="tc4">
          <input type="text" name="tc5" id="tc5">

      </p>
      <p>
          <input type="text" name="xm" id="xm" placeholder="请输入姓名">
      </p>
    <p>
          <input type="text" name="tel" id="tel" placeholder="请输入手机号码">
    </p>

<div id="upload"></div>

         <input id="dz" type="text" name="dz" placeholder="留言">
    </p>
    <p style="padding: 0 0 0; text-align: center;">
        <input style="height: 30px; width: 80%; box-shadow: 5px 5px 5px #666; color:#fff;background-color: #ff5600;border-radius: 6px;  text-align: center; cursor: pointer; border: 0 " type="submit" name="button" id="subbox" value="提交">
        <br>
    </p>

    </form>

    </article>

</body>
<script>
$(document).ready(function() {
    // var h = $(window).width();
    // $("img").css("width", h);

	  var url = document.location;
    $('input').eq(0).attr('value',url);


});

window.onresize = function()
{
     // var h = $(window).width();
     // $("img").css("width", h);	
}

</script>
<script type="text/javascript">

function yanzheng()
{

   if($('#xm').val() =='')
    {
       alert('请输入姓名');
       $('#xm').focus();
       $('#xm').css('background','#fab9b9');
       return false;
       
    }
    if($('#tel').val() =='')
    {
       alert('手机号码不能为空！请重新输入11位手机号码');
       $('#xm').css('background','#fff');
       $('#tel').css('background','#fab9b9');
       $('#tel').focus();
       return false;    
    }

    if(isNaN($('#tel').val())||$('#tel').val().length!=11)
    {
       alert('请输入11位手机号码,您已经输入了'+$('#tel').val().length+'位数字');
       $('#xm').css('background','#fff');
       $('#tel').css('background','#fab9b9');
       $('#tel').focus();
       return false;    
    }
    


          var iipp = "<?php echo $iipp?>";

  

          var arrUrls = [] ;
		  
		  for(var i=0; i<$('#upload').find('.up_filename').length; i++)
		  {
			  
			  arrUrls[i] = iipp + '/' + $('#upload').find('.up_filename').eq(i).text(); 
			  
			  $('input').eq(i+2).attr('value',arrUrls[i]);
			  
			  }

/*             arrUrls[0] = iipp + '/' + $('#upload').find('.up_filename').eq(0).text(); 
			 arrUrls[1] = iipp + '/' + $('#upload').find('.up_filename').eq(1).text(); 
			 arrUrls[2] = iipp + '/' + $('#upload').find('.up_filename').eq(2).text(); 
			 arrUrls[3] = iipp + '/' + $('#upload').find('.up_filename').eq(3).text(); 
			 arrUrls[4] = iipp + '/' + $('#upload').find('.up_filename').eq(4).text(); 
             

               
        if(arrUrls[0]){$('input').eq(2).attr('value',arrUrls[0]);}else{$('input').eq(2).attr('value','no');}
		if(arrUrls[1]){$('input').eq(3).attr('value',arrUrls[1]);}else{$('input').eq(3).attr('value','no');}
		if(arrUrls[2]){$('input').eq(4).attr('value',arrUrls[2]);}else{$('input').eq(4).attr('value','no');}
		if(arrUrls[3]){$('input').eq(5).attr('value',arrUrls[3]);}else{$('input').eq(5).attr('value','no');}
		if(arrUrls[4]){$('input').eq(6).attr('value',arrUrls[4]);}else{$('input').eq(6).attr('value','no');}*/
    

}


</script>
</html>
