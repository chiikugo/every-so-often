// AddContactForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const AddContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [frequency, setFrequency] = useState('');

  const handleAddContact = async () => {
    try {
      const response = await axios.post('http://localhost:8081/addContact', {
        name,
        frequency,
      });
      onAddContact(); // Notify the parent component that a new contact has been added
      console.log(response.data); // Log the server response
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  return (
    <div>
      <h2>Add Contact</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Frequency:</label>
        <input type="text" value={frequency} onChange={(e) => setFrequency(e.target.value)} />
      </div>
      <button onClick={handleAddContact}>Add Contact</button>
    </div>
  );
};

export default AddContactForm;
