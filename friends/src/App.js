import React from 'react';
import { Route, NavLink } from "react-router-dom";
import Friends from "./components/Friends";
import Login from "./components/Login";
import AddFriendForm from "./components/AddFriend";



import './App.css';


function App() {
  return (
    <div className="App">
      
          Friends <br/>
          <NavLink to="/friends">Friends</NavLink>&nbsp;&nbsp;&nbsp;
          <NavLink to="/addfriend">Add a Friend</NavLink>&nbsp;&nbsp;&nbsp;
          <NavLink to="/login">Login</NavLink>
          <Route path="/friends" component={Friends} />
          <Route path="/login" component={Login} />
          <Route path="/addfriend" component={AddFriendForm } />

         </div>
     

  );
  

     
}

export default App;
