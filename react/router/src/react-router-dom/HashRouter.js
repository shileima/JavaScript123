import React, { Component } from 'react'
import Context from './context';

export default class HashRouter extends Component {
  state = {
    location:{ pathname:window.location.hash.slice(1) }
  }
  componentDidMount(){
    window.location.hash = window.location.hash || "/"; 
    window.addEventListener('hashchange',()=>{
      this.setState({
        location:{
          ...this.state.location,
        pathname:window.location.hash.slice(1)
        }
      })
    })
  }
  render() {
    let value = {
      location:this.state.location
    }
    console.log('value:',value)
    return (
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
