import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// These two containers are siblings in the DOM
const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
    el = document.createElement('div');
    componentDidMount(){
        modalRoot.appendChild(this.el)
    }
    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }
    render() {
        /* ReactDOM.createPortal(element,container) 
           允许获取父节点的事件，但html元素可以不在父节点内展示
        */
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        )

        // 这样不使用ReactDOM.createPortal()的话，元素会被渲染到父节点上
        /* return (
            this.props.children
        ) */
    }
}

class Parent extends React.Component{
    state = {clicks:0}
    handleClick = ()=>{
        this.setState({
            clicks:this.state.clicks + 1
        })
    }
    render(){

        return (
            <div onClick={this.handleClick}>
                    <p>Number of clicks: {this.state.clicks}</p>
                    <p>
                    Open up the browser DevTools
                    to observe that the button
                    is not a child of the div
                    with the onClick handler.
                    </p>
                    <Modal>
                        <Button/>
                    </Modal>
            </div>
        )
    }
}

function Button() {
    return (
        <div className="modal">
            <button>Click</button>
        </div>
    )
}

ReactDOM.render(<Parent/>, appRoot);

