import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

import elephant from '../Assets/Untitled_Artwork15.PNG';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Perform login logic here (dummy logic for now)
        // This will be used to check if valid within an SQL database, blah blah
        navigate('/home');
    };

    return (
        <div className='container'>
            <div className='blob'>
                
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FFAACE">
                        <animate
                            attributeName='d'
                            dur='100000ms'
                            repeatCount='indefinite'
                            values="M51.3,-55.4C63.1,-39.6,66.9,-19.8,65.2,-1.7C63.5,16.4,56.4,32.9,44.6,43.5C32.9,54.1,16.4,59,-0.8,59.8C-18.1,60.6,-36.2,57.5,-48.1,46.8C-59.9,36.2,-65.6,18.1,-65,0.5C-64.5,-17,-57.8,-34,-45.9,-49.9C-34,-65.7,-17,-80.4,1.4,-81.8C19.8,-83.2,39.6,-71.3,51.3,-55.4Z;
                                M58,-55.9C71,-44.9,74.8,-22.4,73.7,-1.1C72.7,20.3,66.8,40.7,53.7,55.5C40.7,70.4,20.3,79.9,-1,80.9C-22.4,81.9,-44.8,74.5,-61.3,59.6C-77.8,44.8,-88.4,22.4,-88,0.3C-87.7,-21.7,-76.4,-43.4,-59.9,-54.5C-43.4,-65.5,-21.7,-65.9,0.4,-66.3C22.4,-66.7,44.9,-67,58,-55.9Z;
                                M51,-50.2C62.6,-39.4,66.1,-19.7,64.3,-1.8C62.5,16.1,55.5,32.3,43.9,43.4C32.3,54.5,16.1,60.5,0.6,59.9C-15,59.3,-30,52.2,-42.7,41.1C-55.3,30,-65.7,15,-65.6,0C-65.6,-15,-55.3,-29.9,-42.6,-40.7C-29.9,-51.5,-15,-58.1,2.4,-60.5C19.7,-62.8,39.4,-61,51,-50.2Z;
                                M51.5,-55.7C63.3,-39.8,66.8,-19.9,65.6,-1.3C64.3,17.4,58.3,34.8,46.5,45.4C34.8,56.1,17.4,60,-0.3,60.3C-18,60.6,-36,57.3,-47.9,46.7C-59.8,36,-65.5,18,-67.6,-2.1C-69.7,-22.1,-68,-44.3,-56.2,-60.2C-44.3,-76.2,-22.1,-85.9,-1.1,-84.8C19.9,-83.6,39.8,-71.7,51.5,-55.7Z">
                            </animate>
                    </path>
                </svg>
            </div>

            <div className='blobdos'>
                
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FFAACE">
                        <animate
                            attributeName='d'
                            dur='100000ms'
                            repeatCount='indefinite'
                            values="M51.3,-55.4C63.1,-39.6,66.9,-19.8,65.2,-1.7C63.5,16.4,56.4,32.9,44.6,43.5C32.9,54.1,16.4,59,-0.8,59.8C-18.1,60.6,-36.2,57.5,-48.1,46.8C-59.9,36.2,-65.6,18.1,-65,0.5C-64.5,-17,-57.8,-34,-45.9,-49.9C-34,-65.7,-17,-80.4,1.4,-81.8C19.8,-83.2,39.6,-71.3,51.3,-55.4Z;
                                M58,-55.9C71,-44.9,74.8,-22.4,73.7,-1.1C72.7,20.3,66.8,40.7,53.7,55.5C40.7,70.4,20.3,79.9,-1,80.9C-22.4,81.9,-44.8,74.5,-61.3,59.6C-77.8,44.8,-88.4,22.4,-88,0.3C-87.7,-21.7,-76.4,-43.4,-59.9,-54.5C-43.4,-65.5,-21.7,-65.9,0.4,-66.3C22.4,-66.7,44.9,-67,58,-55.9Z;
                                M51,-50.2C62.6,-39.4,66.1,-19.7,64.3,-1.8C62.5,16.1,55.5,32.3,43.9,43.4C32.3,54.5,16.1,60.5,0.6,59.9C-15,59.3,-30,52.2,-42.7,41.1C-55.3,30,-65.7,15,-65.6,0C-65.6,-15,-55.3,-29.9,-42.6,-40.7C-29.9,-51.5,-15,-58.1,2.4,-60.5C19.7,-62.8,39.4,-61,51,-50.2Z;
                                M51.5,-55.7C63.3,-39.8,66.8,-19.9,65.6,-1.3C64.3,17.4,58.3,34.8,46.5,45.4C34.8,56.1,17.4,60,-0.3,60.3C-18,60.6,-36,57.3,-47.9,46.7C-59.8,36,-65.5,18,-67.6,-2.1C-69.7,-22.1,-68,-44.3,-56.2,-60.2C-44.3,-76.2,-22.1,-85.9,-1.1,-84.8C19.9,-83.6,39.8,-71.7,51.5,-55.7Z">
                            </animate>
                    </path>
                </svg>
            </div>

            <div className='header'>
                <div className='elephant'>
                    <img src={elephant} alt='Elephant' className='elephantimg' />
                </div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='inputBox'>
                    <input type='email' placeholder='Email' />
                </div>
                <div className='inputBox'>
                    <input type='password' placeholder='Password' />
                </div>
            </div>
            <div className='submit-container'>
                <div className='submit' onClick={handleLogin}>
                    Login
                </div>
            </div>
        </div>
    );
};

export default Login;

/* Your CSS file remains unchanged */
