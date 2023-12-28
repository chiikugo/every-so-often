// AddContactForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const AddContactForm = ({ onAddContact }) => {
    const [name, setName] = useState('');
    const [frequency, setFrequency] = useState('');

    const handleAddContact = async () => {
        try {
            // Parse frequency as an integer
            const frequencyValue = parseInt(frequency, 10);

            // Ensure data is sent as an object with the correct types
            await axios.post('http://localhost:8081/addContact', { name, frequency: frequencyValue });
            onAddContact(); // Trigger the callback to refresh contacts
        } catch (error) {
            console.error('Error adding contact:', error);
        }
    };

    return (
        <div className="add-contact-form">
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Frequency" value={frequency} onChange={(e) => setFrequency(e.target.value)} />
            <button onClick={handleAddContact}>Add Contact</button>
        </div>
    );
};

export default AddContactForm;
