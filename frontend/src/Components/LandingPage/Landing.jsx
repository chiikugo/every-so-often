import React, { useState } from 'react';
import './Landing.css';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import elephants from '../Assets/Untitled_Artwork16.PNG'
import Contactpopup from '../PopUps/Contactpopup';

const Landing = () => {
    const [buttonPopup, setButtonPopup] = useState(false);

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
                <div className = "buttons">
                    <div className = "contacts">
                        <button className = "contactButton" onClick={ () => setButtonPopup(true)}>
                            Contacts
                            
                        </button>
                        <Contactpopup trigger= {buttonPopup} setTrigger = {setButtonPopup}>

                        </Contactpopup>

                    </div>

                </div>

            </div>

        </div>
        
    </div>
  );
}

export default Landing;
