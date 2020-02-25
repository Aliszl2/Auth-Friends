import React, { useState } from "react";
import { Route, NavLink, Redirect } from "react-router-dom";
import Friends from "./components/Friends";
import Login from "./components/Login";
import AddFriendForm from "./components/AddFriend";

import "./App.css";

function App() {
  const onLogout = (props) => {
    localStorage.removeItem("token");
    //neither work:
    // props.history.push("/login");
    // < Redirect to= "/login"/>
  };


  return (
    <div className="App">
      Friends <br />
      <NavLink to="/friends">Friends</NavLink>&nbsp;&nbsp;&nbsp;
      <NavLink to="/addfriend">Add a Friend</NavLink>&nbsp;&nbsp;&nbsp;
      <NavLink to="/login">Login</NavLink>&nbsp;&nbsp;&nbsp;
      <button onClick={onLogout}>LogOut</button>
      <Route path="/friends" component={Friends} />
      <Route path="/login" component={Login} />

      <Route 
      path="/addfriend" 
      component={AddFriendForm}
          />
    </div>
  );
}

export default App;
