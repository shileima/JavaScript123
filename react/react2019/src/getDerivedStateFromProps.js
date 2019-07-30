import React from 'react';

class DerivedStateFromProps extends React.Component {
    /* ES7 写法 */
    state = {
        num: 0
    }
    static getDerivedStateFromProps(props,state){
      
      console.log('props:',props)
      console.log('state:',state)
      return {
        num:props.a
      }
    }

    render(){
      return ( <h4>getDerivedStateFromProps {this.state.num}</h4> )
    }
}

export default DerivedStateFromProps;