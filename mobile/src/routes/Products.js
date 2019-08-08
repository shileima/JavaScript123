import React, { useEffect, useState, useRef } from 'react';
import ProductList from '../components/ProductList';
import { query } from '../services/products';
//import BScroll from 'better-scroll';

const Products = (props) => {
  console.log(props)
  const [products, setproducts] = useState([])
  let productListRef = useRef();
  useEffect(() => {
    console.log('effect')
    query().then(res => {
      //console.log(res.data)
      setproducts(products.push(...res.data))
    });

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
      if ($scrollHeight - $scrollTop - $windowHeight <= -16) {
        query(index++).then(res => {
          //console.log(res.data)
          setproducts(products.push(...res.data))
        });
      }
    }

    return () => { };
  }, [])
  return (
    <div ref={productListRef}>
      <ProductList products={products} />
    </div>
  );
};

export default Products;

