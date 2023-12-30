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

    return (
        <div className="containerLogin">
            <div className="headerLogin">
                <div className="textLogin">
                <header>
                <img id="logo" src={elephants} alt="elephantlogo" onClick={homeReload} />
                <nav>
                <ul class="nav__links">
                    <li><a href="#">Contacts</a></li>
                    <li><a href="#">Journal</a></li>
                </ul>
            </nav>
            <a class="cta" href="#">Suggestions</a>
            <p class="menu cta">Menu</p>
        </header>
        <div class="overlay">
            <a class="close">&times;</a>
            <div class="overlay__content">
                <a href="#">Contacts</a>
                <a href="#">Journal</a>
            </div>
        </div>
        <script type="text/javascript" src="mobile.js"></script>
        <div className="buttons">
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
);
};

export default Landing;
