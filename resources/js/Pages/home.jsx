import React, { useState } from 'react';
import Aside from "../Components/aside"
import ChatWindow from '../Components/chat-window';
import "../styles/App.css"

function Home({ users }) {

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
      <Aside contacts={users} onContactClick={handleContactClick} />
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
export default Home;