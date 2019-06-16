import React, { Component } from 'react';
import RouterContext from './context';
import pathToRegexp from 'path-to-regexp';

export default class Route extends Component {
  static contextType = RouterContext;
  render() {
    let {pathname} = this.context.location;
    let {path='/',component:Component,exact=false} = this.props; 
    let paramNames = [];
    let regexp = pathToRegexp(path,paramNames,{end:exact})
    let result = pathname.match(regexp);
    if(result){console.log(result)
      paramNames = paramNames.map(item=>item.name);
      let [url,...values] = result;
      let params = {};
      for(let i=0;i<paramNames.length;i++){
          params[paramNames[i]] = values[i];
      }
      console.log(params)
      if(Component){
        return <Component/>
      }
    }

    return null;
    
  }
}
