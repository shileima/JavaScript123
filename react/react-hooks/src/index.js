import React,{useState,useEffect,useRef,createRef,forwardRef,useImperativeHandle} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
class Counter extends React.Component{
    state = {number:0}
    add = () => {
        this.setState({number:this.state.number+1})
    }
    componentDidMount(){
        document.title = `您已经点击了${this.state.number}`;
    }
    componentDidUpdate(){
        document.title = `您已经点击了${this.state.number}`;
    }
    render(){
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={this.add}> + </button>
            </div>
        )
    }
}
function Counter2() {
    let [number,setNumber] = useState(0);
    function add(){
        setNumber(number+1)
    }
    // useEffect 会在第一次渲染后和更新完完成
    useEffect(()=>{
        document.title = `您已经点击了${number}`;
    })
    return (
        <div>
            <p>{number}</p>
            <button onClick={add}> + </button>
        </div>
    )
}  
function Counter3() {
    const [number,setNumber] = useState(0);
    const [text,setText] = useState('');

    function add(){
        //The setState function is used to update the state. 
        //It accepts a new state value and enqueues a re-render of the component.
        setNumber(number+1)
    }
    // useEffect 会在第一次渲染后和更新完完成
    useEffect(()=>{
        console.log('use Effetct')
        // let $timer = setInterval(()=>{
        //     console.log('use Effetct')
        //     setNumber(number+1)
        // },1000);
        // return () => {
        //     console.log('clear Effect')
        //     clearInterval($timer)
        // };
        
        setInterval(()=>{
            // 异步函数里设置状态参数必须为函数，否则试图不更新
            setNumber(number=>number+1)
            // setNumber(number+1)
        },1000)
    },[text]) // []告诉 React 你的 effect 不依赖于 props 或 state 中的任何值,永远都不需要重复执行
    return (
        <div>
            <input type='text' onChange={event=>setText(event.target.value)} value={text}/>
            <p>{number}</p>
            <button onClick={()=>{setNumber(number+1)}}> + </button>
        </div>
    )
}
// use nore State Hook or Effect Hook
function Form(){
    const [name,setName] = useState('Mary');
    
    useEffect(function persistForm(){
        localStorage.setItem('formData',name);
    });

    const [surname,setSurname] = useState('Poppins');

    useEffect(()=>{document.title = name + ' ' + surname})

    return (
        <div>
            <p>{localStorage.getItem('formData')}{' ' + surname}</p>
        </div>
    )
}
// createRef or useRef
// useRef 性能更好 createRef会每次新建一个ref
function Parent(){
    let [number,setNumber] = useState(0);
    return (
        <>
            <Child />
            <button onClick={()=>{setNumber(number+1)}}>点击：{number}</button>
        </>
    )
}
let myInput;
function Child(){
    //const inputRef = createRef();
    const inputRef = useRef();
    // createRef 永远false ；useRef 第二次true
    console.log('myInput===inputRef：', myInput === inputRef)
    myInput = inputRef;
    function focus(){
        inputRef.current.focus();
    }
    return (
        <div>
            <input ref={inputRef} />
            <button onClick={focus}>聚焦</button>
        </div>
    )
}

// forwardRef: Input
function Son(props,ref){
    return ( 
        <div>
            <input ref={ref} />
        </div>
    )
}
let ForwardSon = forwardRef(Son);
function Father(){
    const inputRef = useRef();
    function focus(){
        inputRef.current.focus();
    }
    return (
        <>
            <ForwardSon ref={inputRef}/>
            <button onClick={focus}>聚焦</button>
        </>
    )
}

// forwardRef: Button
// now,you can reuse the button component more times
const FancyButton = forwardRef((props,ref) => (
    <button ref={ref} className="fancy">
        {props.children}
    </button>
))
function ForwardButton(){
    const buttonRef = useRef();
    return (
        <FancyButton ref={buttonRef}>Click me</FancyButton>
    )
}
// useImperativeHandle
const FancyInput = forwardRef((props,ref) => {
    const inputRef = useRef();
    useImperativeHandle(ref,() => {
        return {
            focus: ()=>inputRef.current.focus(),
            changeText: text=>inputRef.current.value = text,
            a:123
        }
        /* return {
            focus(){
                inputRef.current.focus()
            }
        } */
    })
    return (
        <>
            <input ref={inputRef} />
        </>
    )
})
function ForwardInput(){
    const forwardInputRef = useRef();
    const textInputRef = useRef();
    function focus(){
        forwardInputRef.current.focus();
        textInputRef.current.changeText('<script>alert(1)</script>');
        console.log(forwardInputRef.current) // {focus: ƒ, a: 123}
    }
    return (
        <div>
            <FancyInput ref={forwardInputRef} />
            <FancyInput ref={textInputRef} />
            <button onClick={focus}>focus</button>
        </div>
    )
}
ReactDOM.render(<ForwardInput />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
