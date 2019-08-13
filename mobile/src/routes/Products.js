import React, { useRef, useEffect } from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';
//import BScroll from 'better-scroll';

let page = 1;
const Products = (props) => {

  console.log(props)

  useEffect(() => {
    if(props.location.pathname === '/'){
      props.dispatch({type:'products/firstFetch', payload:{page:1}})
      //return false;
    }
  }, []);

  // 下拉加载下一页
  let productListRef = useRef();
  document.onscroll = function () {
    let $windowHeight = window.innerHeight;
    let $scrollHeight = productListRef.current?productListRef.current.scrollHeight:0;
    let $scrollTop = productListRef.current?productListRef.current.scrollTop || window.pageYOffset || document.body.scrollTop:0;
  
    if ($scrollHeight - $scrollTop - $windowHeight === 0) {
      page = page + 1;
      props.dispatch({type:'products/scrollFetch', payload:page})
    }
  }
  return (
    <div ref={productListRef}>
      <ProductList 
        products={props.products.products.list}
        history ={props.history}
        location ={props.location}
        match ={props.match}
        loading={props.products.loading.global}
      />
    </div>
  );
};

//export default Products;

export default connect(props => ({
  products:{...props},
}))(Products);

