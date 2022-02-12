import React, {useState, useEffect} from "react";
import './Login.css';
import { useDispatch, useSelector } from "react-redux";
import { resolvePath, useNavigate, useLocation } from "react-router-dom";

import { login } from "../actions/userActions";
import Button from 'react-bootstrap/Button';


const LoginBus = (props) => {

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, userInfo} = useSelector((state) => {
		return state.userAuth;
	});

  const redirectHome = "/";


  // run login handler to update redux state
  const loginHandler = (event) => {
		event.preventDefault();
		// dispatch(login(email, pwd));
    dispatch(login("xy@progamer.com", "123456", "businesses"));
	};
  
  // Move to home page once userInfo populated
  useEffect(() => {
    if (userInfo) {
      navigate(resolvePath(redirectHome));
		}
	}, [navigate, userInfo, redirectHome]);

  return (
      <div className="Login">
        <header className="Login-main">
          <div className="Login-card">
            <h1>Bizzup</h1>
            <div className="Login-form">
              <form>
                <div className="input-container">
                  <input className="Login-entry"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email" type="text" name="uname" required  />
                </div>
                <div className="input-container">
                  <input className="Login-entry" 
                  onChange={(e) => setPwd(e.target.value)}
                  placeholder="Password" type="password" name="pass" required />
                </div>
                <div className="button-container">
                  <button id="Login-submit" onClick={loginHandler} >Sign In</button>
                </div>
              </form>
            </div>             
          </div>        
        </header>
        
      </div>
      )
}

export default LoginBus;