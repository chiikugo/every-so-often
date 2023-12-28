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
    //pop up button declaration
    const [contacts, setContacts] = useState([]);
    //contact fetching
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
        await fetchContacts(); // Await the fetchContacts function
        setButtonPopup(false); // Close the popup after adding a new contact
    };
    //reroute function
    const navigate = useNavigate();

    const homeReload = () => {
        navigate('/home');
    };

    return (
        <div className="containerLogin">
            <div className="headerLogin">
                <div className="textLogin">
                    <nav className="navbar">
                        <ul>
                            <img id = "elephantLogo" src={elephants} alt="elephantlogo" onClick={homeReload} />
                            <li>
                                <a className="navBarText">Contacts</a>
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
                        <div className="contacts">
                            <div className="contactButton" onClick={() => setButtonPopup(true)}>
                                Contacts
                            </div>
                            {buttonPopup && (
                                <Contactpopup trigger={buttonPopup} setTrigger={setButtonPopup}>
                                    {/* Render the list inside Contactpopup */}
                                    <ul>
                                        {contacts.map((contact) => (
                                            <li key={contact.id}>
                                                {contact.name} - {contact.frequency}
                                            </li>
                                        ))}
                                    </ul>
                                    {/* Add the AddContactForm component for adding contacts */}
                                    <AddContactForm onAddContact={handleAddContact} />
                                </Contactpopup>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
