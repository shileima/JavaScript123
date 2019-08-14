import React from 'react';
import PropTypes from 'prop-types';
import { Card, WhiteSpace } from 'antd-mobile';
import Spinner from './Spinner';

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
    let {course} = this.state.detail;   
    
    if(course){
      console.log(course.id)
      return (<div>
        <Card full>
          <img style={{height:'180px'}} src={course.mobileLargePicture} alt={course.title} />
          <Card.Body>
            <div>{course.title}</div>
          </Card.Body>
          <Card.Footer content={'$'+course.price} extra={<div>{course.lessonNum + '课时'}</div>} />
          <WhiteSpace size="lg" />
          <div className="main_imgs">
            {
              course.courseDesc ?
              <img src={course.courseDesc} alt="课程详情" /> :
              ''
            }
            {
              course.outline ?
              <img src={course.outline} alt="课程大纲" /> :
              ''
            }
            {
              course.teachersTeam ?
              <img src={course.teachersTeam} alt="教学团队" /> :
              ''
            }
            {
              course.actualCombatProject ?
              <img src={course.actualCombatProject} alt="实战训练" /> :
              ''
            }
            {
              course.qa ?
              <img src={course.qa} alt="在线问答" /> :
              ''
            }
          </div>
        </Card>
        <WhiteSpace size="lg" />
      </div>)
    }else{
      return (
        <div><Spinner loading={true}/></div>
      )
    }
    
  }
}

CourseDetails.propTypes = {
  //onDelete: PropTypes.func.isRequired,
  //detail: PropTypes.object.isRequired,
};

export default CourseDetails;