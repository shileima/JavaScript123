// JavaScript Document
function startMove(obj,json,fnEnd)
{
   
  obj.timer=null;
  obj.timer=setInterval(function()
	{
	  var bStop=true;
	  for(var attr in json)
	  { 
	     
		  var cur=0;
		  if(attr=='opacity')
		  {
			  cur=Math.round(parseFloat(getStyle(obj,'opacity'))*100);
		  } else
		  {
			  cur=parseInt(getStyle(obj,attr));	
		  }
		  var speed=(json[attr]-cur)/10;
		  speed=speed>0?Math.ceil(speed):Math.floor(speed);
		  
		  if(cur!=json[attr])               //在timer 开启之前假定 bSTop 是true（存在）,在执行for循环中如任意果有一个cur未到达目标值，就设定 bStop为false（不存在），在执行完for循环后，如果仍然存在bStop（if(bStop)）,则说明任意一个cur 都到达了目标（只有这样bStop 才可能存在），则关闭定时器，如果有，则执行附加函数。
		  {
			 bStop=false;  
		  }
		  
/*		  if(cur==json[attr])
		   {
			   clearInterval(obj.timer);
			   if(fnEnd) fnEnd(); 
		   }*/
		   
			   if(attr=='opacity')
			   {
				  obj.style.opacity=(cur+speed)/100;
				  obj.style.filter='alpha(opacity:'+(cur+speed)+')'; 
				  
				  var oTxt=document.getElementById('txt1');
				  oTxt.value=cur;
				  
			   }
			   else
			   {
				  obj.style[attr]=cur+speed+'px';
			   }
	  }
	  if(bStop)
	  {
		 clearInterval(obj.timer);
		 if(fnEnd) fnEnd();  
		  
	  }
	  
	},30);
	
	
  

  
}


function getStyle(obj,name)
{
   if(obj.currentStyle)
   {
	   return obj.currentStyle[name];
   }
   else
   {
	   return getComputedStyle(obj,false)[name];
   }
	
}