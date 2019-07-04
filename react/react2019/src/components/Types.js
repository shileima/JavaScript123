import React from 'react';
import PropTypes from 'prop-types';

export default class Types extends React.Component {
  static propTypes = {
    name:PropTypes.string.isRequired,
    age:PropTypes.number,
    gender:PropTypes.oneOf(["男","女"]),
    hobby:PropTypes.arrayOf(['string']),
    salary(a,b,c){
      console.log(a[b])
      if(typeof a[b] != 'number') throw new Error("工资必须是数字")
   },
   position: PropTypes.shape({
     x:PropTypes.string,
     y:PropTypes.string
   })
  }
  render(){
    //console.log(this.props)
    return (<>
        <h1>hello</h1>
    </>)
  }
}



