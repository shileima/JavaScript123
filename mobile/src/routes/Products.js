import React, {useEffect,useState, useRef} from 'react';
import ProductList from '../components/ProductList';
import {query} from '../services/products';
//import BScroll from 'better-scroll';

const Products = (props) => {
  console.log(props)
  const [products, setproducts] = useState([])
  let productListRef = useRef();
  useEffect(() => {
    console.log('effect')
    query().then(res=>{
      console.log(res.data)
      setproducts(products.push(...res.data))
    });

    /* let scroll = new BScroll('.wrapper',{
      scrollY: true,
      click: true
    }) */
    document.onscroll = function(){
      
      let $windowHeight = window.innerHeight;
      let $scrollHeight = productListRef.current.scrollHeight;
      let $scrollTop = productListRef.current.scrollTop || window.pageYOffset || document.body.scrollTop;
      console.log("$windowHeight:", $windowHeight)
      console.log('$scrollHeight:', $scrollHeight);
      console.log('$scrollTop:', $scrollTop);
      if($scrollHeight - $scrollTop - $windowHeight == 0){
        query(2).then(res=>{
          console.log(res.data)
          setproducts(products.push(...res.data))
        });
      }


    }

    return () => {};
  },[])
  return (
    <div ref={productListRef}>
      <ProductList products={products} />
    </div>
  );
};

export default Products;

