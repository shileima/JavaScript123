import React, {useEffect,useState} from 'react';
import ProductList from '../components/ProductList';
import {query} from '../services/products';

const Products = (props) => {
  console.log(props)
  const [products, setproducts] = useState([])
  
  useEffect(() => {
    console.log('effect')
    query().then(res=>{
      console.log(res.data)
      setproducts(products.push(...res.data))
    })
    
    return () => {};
  },[])
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default Products;

