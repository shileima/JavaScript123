(function(){
    let wrap = document.querySelector('.wrap');
    let list = document.querySelector('.list');
    let navs = document.querySelectorAll('.nav a');
    let slide = new BScroll(wrap,{
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap : {
            loop: true,
            threshold: .2
        }
    });
    list.style.width = list.children.length + "00vw";
    slide.refresh(); // 修改了 dom 后，重新计算一下
    slide.on('scrollEnd',function(){

        let curIndex = slide.getCurrentPage().pageX;
        navs.forEach(((nav)=>{
            nav.classList.remove('active');
        }))
        navs[curIndex].classList.add('active')
    })
    setInterval(()=>{
        slide.next();
    },3000)

})();