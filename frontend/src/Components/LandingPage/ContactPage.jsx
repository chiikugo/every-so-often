// Landing.jsx
import React, { useState, useEffect } from 'react';
import './ContactPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import elephants from '../Assets/Untitled_Artwork16.PNG';
import Contactpopup from '../PopUps/Contactpopup';
import AddContactForm from '../Additions/AddContactForm';


const ContactPage = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [contacts, setContacts] = useState([]);
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
        navigate('/home');
    };


    const contactReload = () => {
        navigate('/contacts');
    };


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
                                <a className="navBarText">Journal</a>
                            </li>
                            <li>
                                <a className="navBarText">Suggestion</a>
                            </li>
                        </ul>
                    </nav>
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