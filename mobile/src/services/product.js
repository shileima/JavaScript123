import request from '../utils/request';

export function query(courseId) {alert('service')
  console.log('query')
  if(courseId){
    return request(`/mapi_v2/Course/getBootcampCourseDetail?courseId=${courseId}`);
  }else{
    alert('courseId 不能为空！')
  }
  //return request('./user.json');
}