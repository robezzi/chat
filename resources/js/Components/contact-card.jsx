import React from 'react';
import "../styles/aside.css"
import contactImage from "../img/contact.svg"
function ContactCard({ contact, onClick }) {
    return (
        <div className="contact-card" onClick={() => onClick(contact)}>
            <ul>
                <li>
                    <div className='contact-card-container'>
                        <div className='contact-card-container-memberinfo'>
                            <img src={contactImage} alt="" className='img-contact' />
                            <div>
                                <p className='contact-card-container-namecontact'>{contact.username}</p>
                                <p className='contact-card-container-last-message'>Last message</p>
                            </div>
                        </div>
                        <p className='contact-card-container-time'>12:04</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default ContactCard;