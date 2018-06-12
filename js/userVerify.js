/*
 * 需要通过Javascript代码来做两件事情
 * 1.button被按下的时候，需要将文本框中的数据获取到，然后发送给服务器端，最后接受服务器返回的数据，填充到我们预留的div中，这样用户就可以看到结果
 * 2.文本框上，用户按键之后，需要判断文本框中的内容是否为空，如果不为空，红色的边框和背景图就应该取消，否则保留
 * */

/*
 * 需要在页面装载完成是注册上这些工作
 * */
$(document).ready(function() {
	//这里面的内容就是页面装载完成后需要执行的代码
	var userNameNode = $("#userName");	
	//需要找到button按扭，注册事件
	$("#verifyButton").click(function() {
		//1.获取文本框的内容
		var userName = userNameNode.val();
		//2.将这个内容发送给服务器端
		if (userName == "") {
			alert("用户名不能为空");
		} else {
			$.get("http://123.57.138.127/UserVerify.html?userName="+ userName,null,function(response){
					//3.接收服务器端返回的数据，填充到div中	

					$("#result").html(response);
				});		
			
		}
	});
	//需要找到文本框，注册事件
	userNameNode.keyup(function(){
		//获取当前文本框中的内容
		var value = userNameNode.val();
		if (value == "") {
			//让边框变成红色，并且带背景图
			userNameNode.addClass("userText");
		} else {
			//去掉边框和背景图
			userNameNode.removeClass("userText");
			
		}
	});
});


