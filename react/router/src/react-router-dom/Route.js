import React, { Component } from 'react';
import RouterContext from './context';

export default class Route extends Component {
  static contextType = RouterContext;
  render() {
    /* 获取当前页面的pathname */
    console.log(this.context.location)
    let {pathname} = this.context.location;
    let {path='/',component:Component,exact=false} = this.props;
    console.log(pathname,path)
    if(pathname === path){
      return <Component/>
    }
    return null;
    
  }
}
