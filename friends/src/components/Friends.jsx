import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "../auth/axiosWithAuth"


export default function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {

    axiosWithAuth()
      .get(`http://localhost:5000/api/friends`)
      .then(res => {
        console.log(res.data)
        setFriends(res.data);
      })
      .catch(error => {
        // alert(error.response.data.message);
        console.log(error.response.data.message);
      });
  }, []);

  return (
    <div>
  
      <div className="friends">
        <h1>List of Friends</h1>
        {friends.map(friend => (
        <li key={friend.id}>{friend.name}   ({friend.age})<br/>{friend.email}</li>
        ))}
      </div>
      
    </div>
  );
}
