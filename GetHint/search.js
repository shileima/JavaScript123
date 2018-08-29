// JavaScript Document

$(document).ready(function() {
	//这里面的内容就是页面装载完成后需要执行的代码
	//var userNameNode = $("#userName");	
	//需要找到button按扭，注册事件
	$('#btn').click(function() {
		//1.获取文本框的内容
		//var userName = userNameNode.val();
		//2.将这个内容发送给服务器端
		var str = $('#txt1').val();
			
		$.get("gethint.php?q="+str+"&sid="+Math.random(),null,function(response){
					//3.接收服务器端返回的数据，填充到div中	

					$("#txtHint").html(response);
				});		
	});
	//需要找到文本框，注册事件
/*	userNameNode.keyup(function(){
		//获取当前文本框中的内容
		var value = userNameNode.val();
		if (value == "") {
			//让边框变成红色，并且带背景图
			userNameNode.addClass("userText");
		} else {
			//去掉边框和背景图
			userNameNode.removeClass("userText");
			
		}
	});*/
});