import React from 'react';
import './Friend.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Friend = (props) => {
 // console.log(props);
  const {name,phone,picture,email,gender,annualSalary}=props.friend;

  return (
    <div className="friend">
      <img src={picture} alt=""/>
      
      <div>

      </div>
      <div className="friend-info">
      <h2> {name}</h2>
      <p>{email}</p>
      <p>Gender: <small>{gender}</small></p>
      <p> Phone: {phone}</p>
       <p>Annual salary: ${annualSalary}</p>
      <button className="main-button" onClick={() =>props.handleAddFriend(props.friend)}> <FontAwesomeIcon icon={faUserPlus} />  Add Friend</button>

      </div>

      
    </div>
  );
};

export default Friend;