import React, { useState } from "react";
import { Route, NavLink, Redirect, withRouter } from "react-router-dom";
import Friends from "./components/Friends";
import Login from "./components/Login";
import AddFriendForm from "./components/AddFriend";
import { axiosWithAuth } from "./auth/axiosWithAuth";
import { Menu, Button } from "antd";
import Navigation from "./components/Navigation";
import "./App.css";
import "antd/dist/antd.css";
import { Layout } from "antd";

function App(props) {
  const [friends, setFriends] = useState([]);
  const [friend, setFriend] = useState({ name: "", age: "", email: "" });

  const deleteFriend = (event, id) => {
    event.preventDefault();
    axiosWithAuth()
      .delete(`http://localhost:5000/api/friends/${id}`)
      .then(response => {
        setFriends(friends.filter(friend => friend.id != id));
      })
      .catch(error => console.log(error.message));
  };

  const onLogout = props => {
    localStorage.removeItem("token");
    //neither work:
    // props.history.push("/login");
    // < Redirect to= "/login"/>
  };

  return (
    <div className="App">
      <Navigation />
      <Button onClick={onLogout} type="primary">LogOut</Button>
      <br />

      <Route path="/login" component={Login} />
      <RouteProtected exact path="/friends">
        <Friends
          friends={friends}
          setFriends={setFriends}
          deleteFriend={deleteFriend}
        />
      </RouteProtected>

      <RouteProtected exact path="/addfriend" {...props}>
        <AddFriendForm {...props} />
      </RouteProtected>
    </div>
  );
}

function RouteProtected({ children, ...rest }) {
  const tokenExists = localStorage.getItem("token");
  return (
    <Route {...rest}>{tokenExists ? children : <Redirect to="/login" />}</Route>
  );
}

export default withRouter(App);
