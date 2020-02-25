import React, { useState } from "react";
import { axiosWithAuth } from "../auth/axiosWithAuth";

const AddFriendForm = props => {
  console.log(props);
  const [friend, setFriend] = useState({ name: "", age: "", email: "" });
  const onInputChange = evt => {
    console.log(evt.target.value);
    setFriend({ ...friend, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.name);

    axiosWithAuth()
      .post("http://localhost:5000/api/friends", friend)
      .then(res => {
        props.history.push("./friends");
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className="New-friend-form">
      <h1>Enter New friend:</h1>
      <form className="form" onSubmit={e => handleSubmit(e)}>
        <label>
          name:
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={friend.name}
            onChange={e => onInputChange(e)}
          />
        </label>{" "}
        <br /> <br />
        <label>
          age:
          <input
            type="number"
            name="age"
            value={friend.age}
            onChange={e => onInputChange(e)}
          />
        </label>{" "}
        <br /> <br />
        <label>
          email:
          <input
            type="email"
            name="email"
            value={friend.email}
            onChange={e => onInputChange(e)}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default AddFriendForm;
