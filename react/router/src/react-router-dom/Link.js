import React, { Component } from 'react'
import LinkContext from './context';

export default class Link extends Component {
  static contextType = LinkContext;
  render() {
    return (
      <a href="javascript:;" onClick={()=>{this.context.history.push(this.props.to)}}>{this.props.children}</a>
    )
  }
}