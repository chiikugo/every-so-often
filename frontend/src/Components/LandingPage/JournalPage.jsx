// Landing.jsx
import React from 'react';
import './JournalPage.css';
import { useNavigate } from 'react-router-dom';
import elephants from '../Assets/Untitled_Artwork16.PNG';


const JournalPage = () => {

    const navigate = useNavigate();

   
    const homeReload = () => {
        navigate('../');
    };


    const contactReload = () => {
        navigate('../contacts');
    };

    const journalReload= ()=>{
        navigate('/journal');
    }

    const suggestionReload= ()=>{
        navigate('../suggestion');
    }


    return (
       <div className="containerLogin">
            <div className="headerLogin">
                <div className="textLogin">
                    <nav className="navbar">
                        <ul>
                            <img id="elephantLogo" src={elephants} alt="elephantlogo" onClick={homeReload} />
                            <li>
                                <a className="navBarText" onClick={contactReload}>Contacts</a>
                            </li>
                            <li>
                                <a className="navBarText" onClick = {journalReload}>Journal</a>
                            </li>
                            <li>
                                <a className="navBarText"  onClick = {suggestionReload}>Suggestion</a>
                            </li>
                        </ul>
                    </nav>
                <div className="Placeholder">
                    <p>
                        we're in journal page hehe
                    </p>

                </div>
                    
                </div>
            </div>
        </div>

    );
};

export default JournalPage;