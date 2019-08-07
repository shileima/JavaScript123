import React, {useEffect,useState, useRef} from 'react';
import Detail from '../components/CourseDetail';
import {query} from '../services/product';

const CourseDetail = (props) => {
  const [details, setdetails] = useState([])
  let detailstRef = useRef();
  
  useEffect(() => {
    console.log('effect')
    query(props.match.params.id).then(res=>{
      console.log(res)

      //setproducts(products.push(...res.data))
    });

    return () => {};
  },[])

  return (
    <div>
      hello world
    </div>
  );
};

export default CourseDetail;