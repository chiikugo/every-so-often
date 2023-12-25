import React from 'react';
import './Landing.css';
import { useNavigate } from 'react-router-dom';

import elephants from '../Assets/Untitled_Artwork16.PNG'

const Landing = () => {

    const navigate = useNavigate();
    /*
    function for re routing the one below is an arrow function for an onlcick event bringing
    the user to a certain page. ex. home page
     */
    const homeReload = () => {
        navigate('/home');
    }
  return (
    <div className='containertwo'>
        <div className = 'headertwo'>
            <div className = 'texttwo'>
                <nav className = 'navbar'>
                    <ul>
                    <img src= {elephants} alt ='elephantlogo' onClick={homeReload}/>
                        <li><a>Contacts</a></li>
                        <li><a>Journal</a></li>
                        <li><a>Suggestion</a></li>
                    </ul>
                </nav>
                

            </div>

        </div>
        
    </div>
  );
}

export default Landing;
