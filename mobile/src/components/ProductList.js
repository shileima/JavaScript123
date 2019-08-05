import React from 'react';
import PropTypes from 'prop-types';
import { Card, WhiteSpace } from 'antd-mobile';
import moment from 'moment';

/* const users2 = [
  {"id":10,"name":"jone"},
  {"id":11,"name":"wrer"},
]
const UserList = ({users}) => users.map(user=>(
  <List renderHeader={() => 'Basic Style' } key={user.id} className="my-list">
    <Item extra={'extra content'} key={user.id}>{user.name}</Item>
  </List>
)) */

class ProductList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      products:props.products
    }
  }
  componentDidMount(){
    console.log('componentDidMount')
    console.log(this.state.products) // []
  }
  componentDidUpdate(){
    console.log('componentDidUpdate')
    console.log(this.state.products) // 非[] (2) [{…}, {…}]
  }
  static getDerivedStateFromProps(props,state){
    console.log('getDerivedStateFromProps')
    return {...state}
  }

  changePicUrl=(str)=>'http://cdn.chinahadoop.cn/files/' + str.slice(9)
  render(){
    console.log(this.state.products)
    const list = this.state.products.map(product=>(
      <>
        <WhiteSpace size="lg" />
        <Card full>
          <img style={{height:'180px'}} src={this.changePicUrl(product.mobileLargePicture)} />
          <Card.Body>
            <div>{product.title}</div>
          </Card.Body>
          <Card.Footer content={product.lessonNum + '课时'} extra={<div>{moment(product.startDate*1000).format("YYYY-MM-DD HH:mm:ss")}</div>} />
        </Card>
      </>
    ))
    return (
      <div>{list}</div>
    )
  }
}

ProductList.propTypes = {
  //onDelete: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};

export default ProductList;