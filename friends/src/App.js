import React from "react";
import { Route, NavLink, Redirect, withRouter } from "react-router-dom";
import Friends from "./components/Friends";
import Login from "./components/Login";
import AddFriendForm from "./components/AddFriend";

import "./App.css";

function App(props) {
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

{/* 
      <Route path="/friends" component={Friends} /> */}
      <Route path="/login" component={Login} />
   <RouteProtected exact path='/friends'>
          <Friends />
        </RouteProtected>
      <Route 
      path="/addfriend" 
      component={AddFriendForm}
          />
    </div>
  );
}

function RouteProtected({ children, ...rest }) {
  // pull token from local storage
  const tokenExists = localStorage.getItem('token')
  return (
    <Route {...rest}>
      {
        tokenExists
          ? children
          : <Redirect to='/login' />
      }
    </Route>
  )
}

export default withRouter(App);
