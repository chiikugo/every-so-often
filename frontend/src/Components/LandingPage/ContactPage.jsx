// Landing.jsx
import React, { useState, useEffect } from 'react';
import './ContactPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import elephants from '../Assets/Untitled_Artwork16.PNG';


const ContactPage = () => {
    const [setButtonPopup] = useState(false);
    const [setContacts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            const response = await axios.get('http://localhost:8081/contacts');
            setContacts(response.data);
        } catch (error) {
            console.error('Error fetching contacts:', error);
        }
    };

    const handleAddContact = async () => {
        await fetchContacts();
        setButtonPopup(false);
    };
    const homeReload = () => {
        navigate('../home');
    };


    const contactReload = () => {
        navigate('/contacts');
    };

    const journalReload = () => {
        navigate('../journal');
    }

    const suggestionReload = () => {
        navigate('../suggestion');
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
                            test test placeholder for our contact features,
                            probably add deletion
                            timeline
                            maybe nice looking photobook,
                            we'll see
                        </p>

                    </div>

                </div>
            </div>
        </div>

    );
};

export default ContactPage;