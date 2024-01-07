// Landing.jsx
import React from 'react';
import './SuggestionPage.css';
import { useNavigate } from 'react-router-dom';
import elephants from '../Assets/Untitled_Artwork16.PNG';


const SuggestionPage = () => {

    const navigate = useNavigate();


    const homeReload = () => {
        navigate('../');
    };


    const contactReload = () => {
        navigate('../contacts');
    };

    const journalReload = () => {
        navigate('../journal');
    }

    const suggestionReload = () => {
        navigate('/suggestion');
    }


    return (
        <div className="containerLogin">
            <div className="headerLogin">
                <div className="textLogin">
                    <header className="navbar">
                        <a class="elephantLogo" href="/"><img id="elephantLogo" src={elephants} alt="elephant logo" onClick={homeReload} /></a>
                        <nav>
                            <ul class="nav__links">
                                <li><a className="navBarText" onClick={contactReload}>Contacts</a></li>
                                <li><a className="navBarText" onClick={journalReload}>Journal</a></li>
                            </ul>
                        </nav>
                        <a class="cta" href="#" onClick={suggestionReload}>Suggestions</a>
                        <p class="menu cta">Menu</p>
                    </header>
                    <div class="overlay">
                        <a class="close">&times;</a>
                        <div class="overlay__content">
                            <a href="#">Contacts</a>
                            <a href="#">Journal</a>
                        </div>
                    </div>
                    <div className="Placeholder">
                        <p>
                            we're in suggestion page hehe
                        </p>

                    </div>

                </div>
            </div>
        </div>

    );
};

export default SuggestionPage;