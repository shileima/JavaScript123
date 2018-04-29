<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="http://apps.bdimg.com/libs/bootstrap/3.3.4/css/bootstrap.css">
    <title>PHP 简易评论</title>
</head>
<style>
    #comment {margin-top: 40px;}
</style>
<body>
<div id="container" style="margin: 50px;">
        <div class="form-group">
            <label for="exampleInputEmail1">用户名:</label>
            <input id="username" type="text" class="form-control" name="username" placeholder="username">
        </div>
        <div class="form-group">
            <label for="content">评论:</label>
            <textarea id="content" type="text" class="form-control" name="content" placeholder="content"></textarea>
        </div>
        <button id="submit" type="submit" class="btn btn-default">提交</button>

    <div id="comment">
        <?php
        $commentList = unserialize(file_get_contents('commentBook.txt'));
        $totalCount = count($commentList);

        $page = isset($_GET['page'])?intval($_GET['page']):1;
        $limit = isset($_GET['limit'])?intval($_GET['limit']):3;
        $totalPage = ceil($totalCount/$limit);

        $page = max(1,$page);
        $page = min($totalPage,$page);

        $start = ($page-1)*$limit;

        for($i=$start;$i<$start+$limit;$i++){
            if(isset($commentList[$i])){
                echo '用户名: '.$commentList[$i]['username'].'<br>'.'内容: '.$commentList[$i]['content'].'<hr>';
            } else {
                break;
            }
        }
        print_r($totalCount);
        ?>
    </div>

  <nav aria-label="...">
      <ul class="pagination">
          <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>

          <?php

          for($i=1;$i<=$totalPage;$i++){
              if($i == $page){
                  echo "<li class='active'><a href='commentBook.php?page=$i&&limit=$limit'>$i </a></li>";
              }else {
                  echo "<li><a href='commentBook.php?page=$i&&limit=$limit'>$i </a></li>";
              }
          }
          ?>

      </ul>
  </nav>

</div>
<script src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $('#submit').on('click',function(){
        $.ajax({
            type: 'POST',
            url: 'addComment.php',
            dataType: 'json',
            data: {'username':$('#username').val(),'content':$('#content').val()},
            success: function(data){
                console.log(data)
                /*if(!data.code){
                    window.location.reload();
                }*/
            }
        })
    })
})


</script>
</body>
</html>
