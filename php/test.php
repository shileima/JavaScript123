<?php
header("Content-type:text/html; charset=utf-8");
/**
 * Created by PhpStorm.
 * User: Loading
 * Date: 2017/11/21
 * Time: 18:11
 */

var_dump(00&&true);

echo '<hr>';

$result = Calculator(00,5,'-');

if($result['code'] != 1){
    echo $result['result'];
}else{
    echo $result['msg'];
}

function Calculator($num1,$num2,$op){
    if(!is_numeric($num1) || !is_numeric($num2)){
        return ['code'=>1,'msg'=>'数值不符合要求'];
    }else{
        switch ($op){
            case '+':
                return ['code'=>0,'result'=>$num1 + $num2];
            case '-':
                return ['code'=>0,'result'=>$num1 - $num2];
            case '*':
                return ['code'=>0,'result'=>$num1 * $num2];
            case '/':
                return ['code'=>0,'result'=>$num1 / $num2];
            default :
                return ['code'=>1,'msg'=>'未知运算符'];
        }
    }
}

echo '<hr>';

function test(){ // 函数命名必须使用小写字母,可以使用下划线_分割
    static $count = 0; // 在函数内部定义的static(静态变量)不会随着函数的终止被释放
    $count ++;
    echo $count.' ';

    if($count < 10){
        test();
    }
}

test();