import React, { useState } from "react";
import './Contactpopup.css';
import AddContactForm from '../Additions/AddContactForm';

function Contactpopup(props) {
    const [addingContact, setAddingContact] = useState(false);

    const handleAddContact = () => {
        // You can add any additional logic here if needed
        setAddingContact(false);
        props.setTrigger(false); // Close the popup
    };

    return props.trigger ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="closebutton" onClick={() => props.setTrigger(false)}>
                    Close
                </button>
                <button className="contactAddition" onClick={() => setAddingContact(true)}>
                    Add
                </button>
                {addingContact && (
                    <AddContactForm onAddContact={handleAddContact} />
                )}
                {props.children}
            </div>
        </div>
    ) : null;
}

export default Contactpopup;
