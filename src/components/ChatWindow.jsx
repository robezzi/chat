import React, { useState } from 'react';
import "../styles/chatwindow.css"
import contactImage from "../img/contact.svg"
import ChatMessages from "./ChatMessages"
import InputMessage from './InputMessage';

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
                <p>{contact.name}</p>
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