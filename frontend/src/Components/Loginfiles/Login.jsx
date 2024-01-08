import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import KUTE from 'kute.js';
import elephant from '../Assets/Untitled_Artwork15.PNG';

const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const tween = KUTE.fromTo(
            '#blob1',
            { path: '#blob1' },
            { path: '#blob2' },
            { repeat: 999, duration: 3000, yoyo: true }
        );
        tween.start();
    }, []);

    useEffect(() => {
        const tween2 = KUTE.fromTo(
            '#blob3',
            { path: '#blob3' },
            { path: '#blob4' },
            { repeat: 999, duration: 3000, yoyo: true }
        );
        tween2.start();
    }, []);


    const handleLogin = () => {
        // Perform login logic here (dummy logic for now)
        // This will be used to check if valid within an SQL database, blah blah
        navigate('/home');
    };

    return (
        <div className='container'>
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
            <svg
                className="blob-motion1"
                id="visual"
                viewBox="0 0 960 540"
                width="960"
                height="540"
            >
                <g transform="translate(450.7256843113689 283.4942824330989)">
                    <path
                        id="blob1"
                        d="M148.7 -134.9C193.7 -103.7 231.9 -51.9 232.4 0.6C233 53 196.1 106.1 151.1 128.6C106.1 151.1 53 143 -4.4 147.4C-61.8 151.8 -123.5 168.5 -151.2 146C-178.8 123.5 -172.4 61.8 -172.8 -0.4C-173.1 -62.5 -180.3 -124.9 -152.6 -156.1C-124.9 -187.3 -62.5 -187.1 -5.3 -181.8C51.9 -176.5 103.7 -166 148.7 -134.9"
                        fill="#BB004B"
                    ></path>
                </g>
                <g transform="translate(509.54377535978017 281.49390864595887)" style={{ visibility: 'hidden' }}>
                    <path
                        id="blob2"
                        d="M115.4 -137.9C137.9 -92.9 136.4 -46.4 133.6 -2.8C130.8 40.8 126.6 81.6 104.1 118.4C81.6 155.2 40.8 188.1 -8.4 196.5C-57.5 204.8 -115 188.7 -151 151.9C-187 115 -201.5 57.5 -190.8 10.7C-180.1 -36.1 -144.1 -72.1 -108.1 -117.1C-72.1 -162.1 -36.1 -216.1 5.2 -221.2C46.4 -226.4 92.9 -182.9 115.4 -137.9"
                        fill="#BB004B"
                    ></path>
                </g>
            </svg>

            <svg
                className="blob-motion2"
                id="visual"
                viewBox="0 0 960 540"
                width="960"
                height="540"
            >
                <g transform="translate(450.7256843113689 283.4942824330989)">
                    <path
                        id="blob3"
                        d="M148.7 -134.9C193.7 -103.7 231.9 -51.9 232.4 0.6C233 53 196.1 106.1 151.1 128.6C106.1 151.1 53 143 -4.4 147.4C-61.8 151.8 -123.5 168.5 -151.2 146C-178.8 123.5 -172.4 61.8 -172.8 -0.4C-173.1 -62.5 -180.3 -124.9 -152.6 -156.1C-124.9 -187.3 -62.5 -187.1 -5.3 -181.8C51.9 -176.5 103.7 -166 148.7 -134.9"
                        fill="#BB004B"
                    ></path>
                </g>
                <g transform="translate(509.54377535978017 281.49390864595887)" style={{ visibility: 'hidden' }}>
                    <path
                        id="blob4"
                        d="M115.4 -137.9C137.9 -92.9 136.4 -46.4 133.6 -2.8C130.8 40.8 126.6 81.6 104.1 118.4C81.6 155.2 40.8 188.1 -8.4 196.5C-57.5 204.8 -115 188.7 -151 151.9C-187 115 -201.5 57.5 -190.8 10.7C-180.1 -36.1 -144.1 -72.1 -108.1 -117.1C-72.1 -162.1 -36.1 -216.1 5.2 -221.2C46.4 -226.4 92.9 -182.9 115.4 -137.9"
                        fill="#BB004B"
                    ></path>
                </g>
            </svg>
        </div>
    );
};

export default Login;

/* Your CSS file remains unchanged */
