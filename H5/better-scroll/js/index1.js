(function(){
    let list = document.querySelector(".list");
    let inner = "";

    for (let index = 0; index < 50; index++) {
        inner += "<li>这是第" + index + "</li>";
    }
    list.innerHTML = inner;
})();

(function(){
    let wrap = document.querySelector('.wrap');
    let bscroll = new BScroll(wrap,{
        /* startX: 50,
         startY: 30, */
        scrollX: false,
        scrollY: true
    });

})();