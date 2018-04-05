

function ajax(method, url, data, success){	

	var xhr = new XMLHttpRequest();
	
	
	   if(method == 'get' && data) { //当method= ‘get’ 且存在 data，则url 要加上？ 链接上 数据；
		  url += '?' + data;  
		   
	   }

		xhr.open(method,url,true);
		
		if(method == 'get'){
			
			xhr.send();
			
		} else {
			
			xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
		    xhr.send(data);
			
		}
		
		xhr.onreadystatechange = function() {

			if(xhr.readyState == 4){

			  if(xhr.status == 200)
			  {
				   success && success(xhr.responseText);

			  }  else {

				alert('出错了，Error：' + xhr.status)

				}	

			}

		}


}

        