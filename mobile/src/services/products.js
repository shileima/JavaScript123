import request from '../utils/request';

export function query(page) {
  console.log('query')
  page = page? page : 1;
  return request(`/ajax/find/course/homepage?page=${page}`);
  //return request('./user.json');
}
