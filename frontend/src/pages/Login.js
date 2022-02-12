import React, {useState, useEffect} from "react";
import './Login.css';
import { useDispatch, useSelector } from "react-redux";
import { resolvePath, useNavigate } from "react-router-dom";
import axios from 'axios';

import { login } from "../actions/userActions";


const Login = () => {

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, userInfo } = useSelector((state) => {
		return state.userAuth;
	});

  const redirectHome = "/";

  // run login handler to update redux state
  const loginHandler = (event) => {
		event.preventDefault();
		dispatch(login(email, pwd));
	};

  // Move to home page once userInfo populated
  useEffect(() => {
		if (userInfo) {
			navigate(resolvePath(redirectHome), { replace: true });
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
                  <input type="submit" onClick={loginHandler} />
                </div>
              </form>
            </div>             
          </div>        
        </header>
        
      </div>
      )
}

export default Login;