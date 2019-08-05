import request from '../utils/request';

export function query() {
  console.log('query')
  return request('/ajax/find/course/homepage');
  //return request('./user.json');
}
