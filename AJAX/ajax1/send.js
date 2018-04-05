// JavaScript Document

<script type="text/javascript">
 $(function(){
  $("#send").click(function(){
   var cont = {username:$("input")[0].value,age:$("input")[1].value,job:$("input")[2].value};
   var url = 'ab.php';
   $.post(url,cont,function(data){
    var res = eval("(" + data + ")");//转为Object对象（Json对象）加上圆括号的目的是迫使eval函数在处理JavaScript代码的时候强制将括号内的表达式（expression）转化为对象，而不是作为语句（statement）来执行。
    var str = res.username + res.age + res.job;
    $("#result").html(str);
   });
  })
 });
</script>