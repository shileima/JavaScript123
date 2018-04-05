<?php

$username = isset($_POST['username']) ? htmlspecialchars($_POST['username']) : '' ;

$age = isset($_POST['age']) ? htmlspecialchars($_POST['age']) : '' ;

echo "提交成功: {$username}"

?>