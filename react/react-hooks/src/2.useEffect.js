import React, {useState,useLayoutEffect,useEffect,useRef} from 'react';
import {render} from 'react-dom';

function LayoutEffect(){
    const bgRef = useRef();
    let [color,setColor] = useState('red');
    let currentText = 'loading...';
    
    useLayoutEffect(() => { // 生成render dom树后，即将渲染前执行，同步
        console.log('useLayoutEffect color:',color)
        //alert('useLayoutEffect color:'+color)
        bgRef.current.innerHTML = currentText;
    },[color]);
    useEffect(() => { // 页面渲染完后执行，异步
        console.log('useEffect color:',color)
        setTimeout(()=>{bgRef.current.innerHTML = '背景颜色';},1000)
    },[color]);
    return (
        <>
            <div id="myDiv" style={{background:color,color:'#fff'}} ref={bgRef}>{currentText}</div>
            <button onClick={()=>setColor('red')}>红</button>
            <button onClick={()=>setColor('purple')}>紫</button>
            <button onClick={()=>setColor('blue')}>蓝</button>
        </>
    )
}

render(<LayoutEffect />,window.root)  