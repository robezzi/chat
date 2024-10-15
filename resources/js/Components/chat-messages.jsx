import React from "react";
import "../styles/chat-messages.css"
function ChatMessages({ messages, contactId, setMessages }) {
    if (!messages || messages.length === 0) {
        return <div>Нет сообщений</div>;
    }

    return (
        <div className='chat-window-messages'>
            {messages[1].map((message, index) => (
                <div key={index} className={`chat-message ${message.senderId === contactId ? 'chat-message-right' : 'chat-message-left'}`}>
                    <p>{message.text}</p>
                </div>
            ))}
        </div>
    );
}

export default ChatMessages;