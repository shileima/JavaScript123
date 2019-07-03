import React from 'react';
import PropTypes from 'prop-types';

export default class Types extends React.Component {
  static propTypes = {
    name:PropTypes.string.isRequired,
    age:PropTypes.number,
    hobby:PropTypes.array
  }
  render(){
    console.log(this.props)
    return (<>
        <h1>hello</h1>
    </>)
  }
}



