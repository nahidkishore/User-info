import React, { useState,useEffect } from 'react';
import fakeData from '../fakeData/Data';
import './User.css';
import Friend from '../Friend/Friend';
import Info from '../Info/Info';


const User = () => {
  //const first10=
  const [users,setUsers] =useState(fakeData);
  useEffect(() =>{
     setUsers(users);
    //console.log(users);
  },[])
  const[info,setInfo] =useState([]);
  const handleAddFriend=(add) => {
    const newInfo =[...info,add];
    setInfo(newInfo);

  }
  return (
    <div className="user-container">
      
      <div className="user-list">
        
       {
         users.map(user =><Friend 
         friend={user}
         handleAddFriend={handleAddFriend}
         key={user.id}
         
         > 
         
         </Friend>)
       }

      </div>
      <div className="user-info">
        
        <Info info={info}></Info>

      </div>




      
    </div>
  );
};

export default User;