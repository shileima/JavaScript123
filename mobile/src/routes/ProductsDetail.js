import React, {useEffect,useState} from 'react';
import CourseDetails from '../components/CourseDetails';
import {query} from '../services/product';

const CourseDetail = (props) => {
  const [details, setdetails] = useState([])
  //let detailstRef = useRef();
  
  useEffect(() => {
    console.log('effect')
    query(props.match.params.id).then(res=>{
      console.log(res)
      setdetails(details.detail = res.data)
    });

    return () => {};
  },[])

  return (
    <div>
      <CourseDetails detail={details} />
    </div>
  );
};

export default CourseDetail;