// 确保字符串的每个单词首字母都大写，其余部分小写
let str2 = 'i am titlE Case';

function titleCase(str) {
    let arr = str.toLowerCase().split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr.join(' ')
}

console.log(titleCase(str2));
