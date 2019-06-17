const local = {
    getList(){
        let userStr = localStorage.getItem('userlist');
        // JSON.parse 会返回 JSON 字符串转换后的对象，
        // 可能是Array或JSON，localStaorage 是一个类数组字符串
        let users = userStr?JSON.parse(userStr):[];
        return users;
    },
    add(user){
        let oldUsers = local.getList();
        console.log(Array.isArray(oldUsers))
        oldUsers.push(user);
        localStorage.setItem('userlist',JSON.stringify(oldUsers))
    }
}

export default local;