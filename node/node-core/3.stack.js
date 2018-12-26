/* 执行上下文环境栈 */
function f1() {
    console.log(1)
    let a ='a';
    f2()
    function f2() {
        console.log(2);
        let b = 'b';
        f3()
        function f3() {
            let c = 'c';
            console.log(3,a);
        }
    }
}
f1()

/* 程序是自上而下执行，栈是先进后出的 */