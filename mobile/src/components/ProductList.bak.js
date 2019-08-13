import React from 'react';
//import PropTypes from 'prop-types';
import Spinner from './Spinner';
import {Link} from 'dva/router';
import { Card, WhiteSpace } from 'antd-mobile';
import moment from 'moment';

class ProductList extends React.PureComponent {
  constructor(props){
    super(props)
    this.state = {
      products:[],
      loading:true
    }
  }
  componentDidMount(){
    this.setState({loading:false})
  }
  componentDidUpdate(){
  }
  
  static getDerivedStateFromProps(nextProps,prevState){
    return {
      products: [...prevState.products,...nextProps.products]
    }
    
  }

  changePicUrl= (str)=> str ? 'http://cdn.chinahadoop.cn/files/' + str.slice(9) : 'http://cdn.chinahadoop.cn/files/default/2015/08-08/104441957e14483026.png'
  render(){
    console.log(this.state)
    const list = this.state.products.map(product=>(
      <Link to={"/course/" + product.id} key={product.id} >
        <li list-item={product.id}>
        <Card full>
          <img style={{height:'180px'}} src={this.changePicUrl(product.mobileLargePicture)} alt={product.title} />
          <Card.Body>
            <div>{product.title}</div>
          </Card.Body>
          <Card.Footer content={product.lessonNum + '课时'} extra={<div>{moment(product.startDate*1000).format("YYYY-MM-DD HH:mm:ss")}</div>} />
        </Card>
        <WhiteSpace size="lg" />
      </li>
      </Link>
    ))
    return (
      <div>
        <Spinner loading={this.state.loading}/>
        {list}
      </div>
    )
  }
}

ProductList.propTypes = {
  //onDelete: PropTypes.func.isRequired,
  //products: PropTypes.array.isRequired,
};

export default ProductList;