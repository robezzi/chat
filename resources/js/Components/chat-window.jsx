import React, { useState } from 'react';
import "../styles/chat-window.css"
import contactImage from "../img/contact.svg"
import ChatMessages from "../Components/chat-messages"
import InputMessage from '../Components/input-message';

function ChatWindow({ contact, messages, onSendMessage, setMessages, messagesState }) {
    const [newMessage, setNewMessage] = useState('');

    const handleInputChange = (event) => {
        setNewMessage(event.target.value);
    };

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            onSendMessage(newMessage, contact.id);
            setNewMessage('');
        }
    };

    return (
        <div className="chat-window">
            <div className='chat-window-header'>
                <div className='chat-window-header-info-contact'></div>
                <img src={contactImage} alt="" className='img-contact' />
                <p>{contact.username}</p>
            </div>
            <ChatMessages messages={[messagesState, messages]} contactId={contact.id} setMessages={setMessages} />
            <InputMessage
                value={newMessage}
                onChange={handleInputChange}
                onSend={handleSendMessage}
            />
        </div>
    );
}

export default ChatWindow;