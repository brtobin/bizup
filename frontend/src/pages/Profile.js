import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, resolvePath } from "react-router-dom";
import './Profile.css';

import pfp from '../images/avatar_female.png';
import { getUser } from "../actions/userActions";

const Profile = () => {

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [coins, setCoins] = useState("");

  const { loading, error, userInfo } = useSelector((state) => {
		return state.userAuth;
	});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUserInfo = () => {
    dispatch(getUser());
    console.log(userInfo);
    setName(userInfo.name);
    setLocation(userInfo.location);
    setCoins(userInfo.coins);
  }


  useEffect(() => {
    console.log('MyComponent onMount');
    getUserInfo();
    return () => {
        console.log('MyComponent onUnmount: ' + userInfo);
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
              Location: {location}
            </p>
            <p>
              {coins} points
            </p>
          </div>
          <div className="Profile-QR">
            <button>Get QR Code</button>
          </div>
        </header>
        
      </div>
      )
}

export default Profile;