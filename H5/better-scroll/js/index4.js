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
    let list = document.querySelector('.list');
    let bscroll = new BScroll(wrap,{
        pullUpLoad: {
            threshold: 0
        },
        pullDownRefresh: {
            threshold: -50,
            stop: 50
        }
    });
    var b = 0;
    bscroll.on("pullingUp",function(){
        list.classList.add("pullUp")
        setTimeout(function(){
            let inner = '';
            for(var i=0;i<10;i++){
                inner += "<li>这是新加的第"+i+"个</li>";
                b++;
            }
            list.innerHTML += inner;
            list.classList.remove("pullUp")
            bscroll.finishPullUp();
            console.log(b)
            if(b >= 30){
                bscroll.closePullUp();
            }
            bscroll.refresh();
        },1000)
    })

    bscroll.on("pullingDown",function(){
        list.classList.add("pullDown")
        setTimeout(function(){
            let inner = '';
            for(var i=0;i<10;i++){
                inner += "<li>这是新加的第"+i+"个</li>";
                b++;
            }
            list.innerHTML = inner + list.innerHTML;
            bscroll.refresh();
            list.classList.remove("pullDown")
            bscroll.finishPullDown();

            //bscroll.refresh();
        },1000)
    })

})();