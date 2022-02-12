import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css";
import { Link, useNavigate, resolvePath } from "react-router-dom";

import { logout } from "../actions/userActions";

const Navbar = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, userInfo } = useSelector((state) => {
		return state.userAuth;
	});
  const redirectLogin = "/getstarted";

  const logoutUser = (e) => {
    console.log("Logging out");
    dispatch(logout());
    console.log("Redirecting because userInfo = " + userInfo);
    navigate(resolvePath(redirectLogin), { replace: true });
  } 

  const loginNavHandler = (e) => {
    navigate(resolvePath(redirectLogin), { replace: true });
  } 

  return (
    <nav>
      <div className="container">
        <h2>Bizzup</h2>
        <div className="navbar-right">
          <Link to="/">Feed</Link>
          { userInfo ?
            (
              <button onClick={(e) => logoutUser(e)}>Logout</button> 
            )
            :
            (
              <button onClick={(e) => loginNavHandler(e)}>Sign In</button> 
            ) 
          }
      </div>
      </div>
    </nav>
  );
  
}

export default Navbar;