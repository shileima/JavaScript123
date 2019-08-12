import React from 'react';
import PropTypes from 'prop-types';
import { Card, WhiteSpace } from 'antd-mobile';

class CourseDetails extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      detail:{}
    }
  }
  componentDidMount(){
    console.log('componentDidMount')
    //console.log(this.state.detail) // []
  }
/*   componentDidUpdate(){
    console.log('componentDidUpdate')
    console.log(this.state.detail) // 非[] (2) [{…}, {…}]
  } */
  static getDerivedStateFromProps(props,state){
    console.log('getDerivedStateFromProps')
    console.log(props)
    return {...state,...props}
  }

  //changePicUrl= (str)=> str ? 'http://cdn.chinahadoop.cn/files/' + str.slice(9) : 'http://cdn.chinahadoop.cn/files/default/2015/08-08/104441957e14483026.png'
  render(){
    console.log('render')
    let {ismember, course} = this.state.detail;   
    
    if(course){
      console.log(course.mobileLargePicture)
      return (<div>
        <Card full>
          <img style={{height:'180px'}} src={course.mobileLargePicture} alt={course.title} />
          <Card.Body>
            <div>{course.title}</div>
          </Card.Body>
          <Card.Footer content={course.price} extra={<div>{course.lessonNum + '课时'}</div>} />
        </Card>
        <WhiteSpace size="lg" />
      </div>)
    }else{
      return (
        <div>loading...</div>
      )
    }
    
  }
}

CourseDetails.propTypes = {
  //onDelete: PropTypes.func.isRequired,
  detail: PropTypes.object.isRequired,
};

export default CourseDetails;