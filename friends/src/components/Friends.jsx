import React, { useEffect } from "react";
import { axiosWithAuth } from "../auth/axiosWithAuth";

export default function Friends({ friends, setFriends, deleteFriend }) {
  useEffect(() => {
    axiosWithAuth()
      .get(`http://localhost:5000/api/friends`)
      .then(res => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch(error => {
        console.log(error.response.data.message);
      });
  }, []);

  return (
    <div>
      <div className="friends">
        <h1>Friends:</h1>
        {friends.map(friend => (
          <li key={friend.id}>
            {friend.name}({friend.age})<br />
            {friend.email}
            <button onClick={event => deleteFriend(event, friend.id)}>
              Delete
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}
