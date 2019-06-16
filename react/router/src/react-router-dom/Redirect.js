import React, { Component } from 'react';
import RouterContext from './context';

export default class Redirect extends Component {
    static contextType = RouterContext;
    render() {
        this.context.history.push(this.props.to);
        return null;
    }
}
