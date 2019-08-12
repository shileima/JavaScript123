import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';
import { query } from '../services/products';
//import BScroll from 'better-scroll';

const Products = (props) => {
  console.log(props.products.products.list)
  const [products, setproducts] = useState([])
  const [loading, setloading] = useState(true)
  let productListRef = useRef();
  useEffect(() => {
    //console.log('effect')
    /* query().then(res => {
      console.log(res.data)
      setproducts(products.push(...res.data))
      setloading(false)
    }); */


    /* let scroll = new BScroll('.wrapper',{
      scrollY: true,
      click: true
    }) */
    let index = 2;
    document.onscroll = function () {
      let $windowHeight = window.innerHeight;
      let $scrollHeight = productListRef.current?productListRef.current.scrollHeight:0;
      let $scrollTop = productListRef.current?productListRef.current.scrollTop || window.pageYOffset || document.body.scrollTop:0;
    
      //console.log($scrollHeight - $scrollTop - $windowHeight)
      if ($scrollHeight - $scrollTop - $windowHeight === 0) {
        setloading(true)
        /* query(index++).then(res => {
          //console.log(res.data)
          setproducts(products.push(...res.data))
          setloading(false)
        }) */
        props.dispatch({type:'products/scrollFetch'})
      }
    }

    return () => { };
  }, [])
  return (
    <div ref={productListRef}>
      <ProductList products={props.products.products.list} loading={loading} />
    </div>
  );
};

//export default Products;

export default connect(props => ({
  products:{...props},
}))(Products);

