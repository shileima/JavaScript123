
(function(){
    let wrap = document.querySelector('.wrap');

    let slide = new BScroll(wrap,{
        bounce: true,
        wheel: {
            selectedIndex: 0,
            ajustTime: 400,
            rotate: 30,
            wheelWrapperClass: 'list',
            wheelItemClass: 'list-item'
        }
    });

})();