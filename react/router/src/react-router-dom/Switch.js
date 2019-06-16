import React, { Component } from 'react';
import pathToRegexp from 'path-to-regexp';
import RouterContext from './context';

export default class Switch extends Component {
    static contextType = RouterContext;
    render() {
        let children = Array.isArray(this.props.children)?this.props.children:[this.props.children];
        let {pathname} =this.context.location;
        for(let i=0;i<children.length;i++){
            let child = children[i];
            let {path="/",exact=false} = child.props;
            let paramNames = [];
            let regexp = pathToRegexp(path,paramNames,{end:exact});
            let result = pathname.match(regexp);
            if(result){
                return child;
            }
        }
        return null;
    }
}
