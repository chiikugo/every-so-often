// Landing.jsx
import React, { useState, useEffect } from 'react';
import './Landing.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import elephants from '../Assets/Untitled_Artwork16.PNG';
import Contactpopup from '../PopUps/Contactpopup';
import AddContactForm from '../Additions/AddContactForm';

const Landing = () => {
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

                    <div className="buttons">
                        <div className="contactButtonOne">

                        
                            <div className="contacts">
                                <div className="contactButton" onClick={() => setButtonPopup(true)}>
                                    Contacts
                                </div>
                                {buttonPopup && (
                                    <Contactpopup trigger={buttonPopup} setTrigger={setButtonPopup}>
                                        <ul>
                                            {contacts.map((contact) => (
                                                <li key={contact.id}>
                                                    {contact.name} - {contact.frequency}
                                                </li>
                                            ))}
                                        </ul>
                                        <AddContactForm onAddContact={handleAddContact} />
                                    </Contactpopup>
                                )}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
