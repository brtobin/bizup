import React, {useState, useEffect} from "react";
import './GetStarted.css';
import { useDispatch, useSelector } from "react-redux";
import { resolvePath, useNavigate } from "react-router-dom";

const GetStarted = () => {

    const navigate = useNavigate();

    const redirectUser = "/login/user";
    const redirectBus = "/login/business"

    const loginBusiness = () => {
        navigate(resolvePath(redirectBus));
    }

    const loginUser = () => {
        navigate(resolvePath(redirectUser));
    }

    return (
        <div className="Getstarted">
            <header className="GetStarted-main">
                <h1>Bizzup</h1> 
                <div className="GetStarted-buttons">
                    <button onClick={loginBusiness}>I'm a Business</button>
                    <button onClick={loginUser}>I'm a Community Member</button>
                </div>                  
            </header>
            
        </div>
        )
}

export default GetStarted;