// Landing.jsx
import React, { useState, useEffect, useRef } from 'react';
import './ContactPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import elephants from '../Assets/Untitled_Artwork16.PNG';


const ContactPage = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [contacts, setContacts] = useState([]);
    const navigate = useNavigate();

    // Refs for DOM elements
    const menuOpen = useRef(null);
    const menuClose = useRef(null);
    const overlay = useRef(null);

    useEffect(() => {
        fetchContacts();

        // Function to add the active class
        const openOverlay = () => {
            overlay.current.classList.add("overlay--active");
        };

        // Function to remove the active class
        const closeOverlay = () => {
            overlay.current.classList.remove("overlay--active");
        };

        // Adding event listeners
        if (menuOpen.current && menuClose.current && overlay.current) {
            menuOpen.current.addEventListener("click", openOverlay);
            menuClose.current.addEventListener("click", closeOverlay);
        }

        // Cleanup function to remove event listeners
        return () => {
            if (menuOpen.current && menuClose.current) {
                menuOpen.current.removeEventListener("click", openOverlay);
                menuClose.current.removeEventListener("click", closeOverlay);
            }
        };
    }, []);

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

    const redirectToContacts = () => {
        navigate('/contacts');
    };

    const redirectToJournal = () => {
        navigate('/journal');
    };


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
                        <p ref={menuOpen} class="menu cta">Menu</p>
                    </header>
                    <div ref={overlay} class="overlay">
                        <a ref={menuClose} class="close">&times;</a>
                        <div class="overlay__content">
                            <a href="#" onClick={redirectToContacts}>Contacts</a>
                            <a href="#" onClick={redirectToJournal}>Journal</a>
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