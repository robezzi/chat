import React, { useState } from 'react';
import Aside from "../Components/aside"
import ChatWindow from '../Components/chat-window';
import "../styles/App.css"
function App() {
    const [contacts, setContacts] = useState([
        { name: "Иван Иванов", id: 1 },
        { name: "Михаил Петров", id: 2 },
        { name: "Мария Петрова", id: 3 },
        { name: "Александр Петров", id: 4 },
        { name: "Евгений Петров", id: 5 },
        { name: "Павел Петров", id: 6 },
    ]);
    const [messages, setMessages] = useState({}); // Объект для хранения сообщений по ID контакта
    const [activeContact, setActiveContact] = useState(null);

    const handleContactClick = (contact) => {
        setActiveContact(contact);
    };

    const handleSendMessage = (message, contactId) => {
        setMessages((prevMessages) => ({
            ...prevMessages,
            [contactId]: [...(prevMessages[contactId] || []), { text: message, senderId: contactId }]
        }));
    };

    return (
        <div className="app">
            <Aside contacts={contacts} onContactClick={handleContactClick} />
            <div className='chat-container'>
                {activeContact && (
                    <ChatWindow
                        contact={activeContact}
                        messages={messages[activeContact.id] || []}
                        onSendMessage={handleSendMessage}
                        setMessages={setMessages} // Передача setMessages
                        messagesState={messages} // Передача messages
                    />
                )}
            </div>
        </div>
    );
}
export default App;