import React from 'react';
import "../styles/aside.css"

function ContactCard({ contact, onClick }) {
    return (
        <div className="contact-card" onClick={() => onClick(contact)}>
            {contact.name}
        </div>
    );
}

export default ContactCard;