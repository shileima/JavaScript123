import React from 'react';
import moment from 'moment';
import 'moment/locale/zh-cn'

import {Consumer} from '../context';

moment.locale('zh-cn');

export default class MessageItem extends React.Component {
    agreeClick = ()=>{
      
    }
    render() {
      let {avatar,message,time} = this.props;
      return (
        <Consumer>
        {
          obj=>{
            //console.log(obj)
            return (
              <div className="media" key={this.props.index}>
                  <div className="media-left">
                      <img className="media-object" alt={message} src={avatar} />
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">{message}</h4>
                    {/* <span>{moment(time).format('YYYY-MM-DD')}</span> */}
                    <span>{moment(time).fromNow()}</span>
                    <button className="btn btn-success btn-xs pull-right" 
                            onClick={()=>obj.add()}>点赞</button>
                  </div>
            </div>
            )
          }
        }
        </Consumer>
      )
    }
}

/* 


*/


