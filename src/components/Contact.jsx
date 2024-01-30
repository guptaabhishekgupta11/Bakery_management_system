// Contact.js

import React, { useState } from 'react';
import styles from './Contact.module.css'; // Import CSS module

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className={styles['contact-container']}>
      <h2>Contact Us</h2>
      <form className={styles['contact-form']} onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label className={styles['label']} htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles['input-field']}
            required
          />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['label']} htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles['input-field']}
            required
          />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['label']} htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={styles['input-field']}
            required
          ></textarea>
        </div>
        <button type="submit" className={styles['button']}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
