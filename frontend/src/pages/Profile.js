import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, resolvePath } from "react-router-dom";
import './Profile.css';

import pfp from '../images/avatar_female.png';
import { getUser } from "../actions/userActions";

const Profile = () => {

  const [name, setName] = useState("");
  const [location, getLocation] = useState("");
  const [coins, getCoins] = useState("");

  const { loading, error, userInfo } = useSelector((state) => {
		return state.userAuth;
	});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUserInfo = () => {
    dispatch(getUser());
    console.log(userInfo);
    setName(userInfo.name);  
  }


  useEffect(() => {
    console.log('MyComponent onMount');
    return (e) => {
        getUserInfo(e);
        console.log('MyComponent onUnmount');
    };
  }, []);


  return (
      <div className="Profile">
        <header className="Profile-main">
          <div className="Profile-pic">
            <img alt="" src={pfp}/>
          </div>
          <div className="Profile-info">
            <p>
              {name}
            </p>
            <p>
              Location: 
            </p>
            <p>
              points
            </p>
          </div>
          
        </header>
        
      </div>
      )
}

export default Profile;