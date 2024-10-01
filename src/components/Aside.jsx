import React from 'react';
import ContactCard from './ContactCard';
import "../styles/aside.css"

function Aside({ contacts, onContactClick }) {
    return (
        <aside className="aside-container">
            <div className='aside-header'>
                <p>LOGO</p>
                <input type="text" />
            </div>
            {contacts.map((contact) => (
                <ContactCard key={contact.id} contact={contact} onClick={onContactClick} />
            ))}
        </aside>
    );
}

export default Aside;