import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

import elephant from '../Assets/Untitled_Artwork15.PNG';
import email from '../Assets/email.png';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Perform login logic here (dummy logic for now)
        // This will be used to check if valid within an SQL database, blah blah
        navigate('/home');
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className="text">
                    <img src={elephant} alt="Elephant"/>
                </div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src="" alt=""/>
                    <input type="text" placeholder='Name'/>
                </div>
                <div className="input">
                    <img src={email} alt=""/>
                    <input type="email" placeholder='Email'/>
                </div>
                <div className="input">
                    <img src=" " alt=""/>
                    <input type="password" placeholder='Password'/>
                </div>
            </div>
            <div className="submit-container">
                <div className="submit" onClick={handleLogin}>
                    Login
                </div>
            </div>
        </div>
    );
}

export default Login;
