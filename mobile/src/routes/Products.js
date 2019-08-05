import React, {useEffect} from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

const Products = (props) => {
  console.log(props.products['userList'])
  function handleDelete(id) {
    props.dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  function handleAdd(){
      props.dispatch({
          type:'count/add'
      })
  }
  useEffect(() => {
    props.dispatch({
      type: 'products/fetch',
      payload:{a:1}
    })
    return () => {
      
    };
  }, [])
  return (
    <div>
      <h2>List of Products</h2>
      <button onClick={handleAdd}>{props.count}</button>
      <ProductList onDelete={handleDelete} products={props.products} />
    </div>
  );
};

// export default Products;
export default connect((state) => {
  console.log(state)
  return { products:state.products, count:state.count.count,number:state.counter.number }
})(Products);

