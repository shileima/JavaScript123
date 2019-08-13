import React, {useEffect,useState} from 'react';
import OrderList from '../components/OrderList';
import {query} from '../services/users';

const Orders = (props) => {
  console.log(props)
  const [orders, setorders] = useState([])
  
  // useEffect(() => {
  //   query().then(res=>{
  //     console.log(res.data)
  //     setorders(orders.push(...res.data.data))
  //   })
    
  //   return () => {};
  // },[])
  return (
    <div>
      <OrderList />
    </div>
  );
};

// export default Products;
export default Orders;

