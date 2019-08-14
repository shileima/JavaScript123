import React, {useEffect,useState} from 'react';
import CourseDetails from '../components/CourseDetails';
import {query} from '../services/product';

const CourseDetail = (props) => {
  const [details, setdetails] = useState([])

  //let detailstRef = useRef();
  
  useEffect(() => {
    console.log(props)
    query(props.match.params.id).then(res=>{
      //console.log(res)
      setdetails(details.detail = res.data)
    });

    return () => {};
  },[props.location.pathname])

  return (
    <div>
      <CourseDetails detail={details} />
    </div>
  );
};

export default CourseDetail;