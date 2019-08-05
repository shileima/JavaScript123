import React, {useEffect,useState} from 'react';
import UserList from '../components/UserList';
import {query} from '../services/users';

const Users = (props) => {
  console.log(props)
  const [users, setusers] = useState([])
  
  useEffect(() => {
    query().then(res=>{
      console.log(res.data)
      setusers(users.push(...res.data.data))
    })
    
    return () => {};
  },[])
  return (
    <div>
      <UserList users={users} />
    </div>
  );
};

// export default Products;
export default Users;

