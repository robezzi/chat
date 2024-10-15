import React, { useState, useEffect } from 'react';
import '../styles/aside.css';
import ContactCard from '../Components/contact-card';

function Aside({ contacts, onContactClick }) {
    const [filteredContacts, setFilteredContacts] = useState(contacts);
    const [searchValue, setSearchValue] = useState('');

    // useEffect для фильтрации при изменении searchValue
    useEffect(() => {
        const filtered = contacts.filter(contact => {
            // Проверяем, совпадает ли значение в инпуте с именем контакта
            return contact.username.toLowerCase().includes(searchValue.toLowerCase());
        });
        setFilteredContacts(filtered);
    }, [contacts, searchValue]);

    const sortForContacts = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="aside-container">
            <div className="aside-header">
                <p>Logo</p>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchValue}
                    onChange={sortForContacts}
                />
            </div>
            <div className="aside-contacts">
                {filteredContacts.map((contact) => (
                    <ContactCard
                        key={contact.id}
                        contact={contact}
                        onClick={onContactClick}
                    />
                ))}
            </div>
        </div>
    );
}

export default Aside;