import React from 'react';
import './Login.css';

import elephant from '../Assets/Untitled_Artwork15.PNG';
import elephantExpand from '../Assets/Untitled_Artwork16.PNG';
import email from '../Assets/email.png'

const Login = () => {
    return (
        <div className='container'>
            <div className='header'>
                <div className="text">
                    SignUp
                </div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={email} alt=""/>
                    <input type="text"/>
                </div>
                <div className="input">
                    <img src= " " alt=""/>
                    <input type="email"/>
                </div>
                <div className="input">
                    <img src= " " alt=""/>
                    <input type="password"/>
                </div>
            </div>
        </div>
    );
}

export default Login;
