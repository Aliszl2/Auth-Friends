import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "../auth/axiosWithAuth";

export default function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`http://localhost:5000/api/friends`)
      .then(res => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch(error => {
        // alert(error.response.data.message);
        console.log(error.response.data.message);
      });
  }, []);

  const deleteFriend = (event, id) => {
    event.preventDefault();
    axiosWithAuth()
      .delete(`http://localhost:5000/api/friends/${id}`)
      .then(response => {
        setFriends(friends.filter(friend => friend.id != id));
      })
      .catch(error => console.log(error.message));
  };

  return (
    <div>
      <div className="friends">
        <h1>List of Friends</h1>
        {friends.map(friend => (
          <li key={friend.id}>
            {friend.name}({friend.age})<br />
            {friend.email}
            <button onClick={(event) => deleteFriend(event, friend.id)}>Delete</button>
          </li>
        ))}
      </div>
    </div>
  );
}
