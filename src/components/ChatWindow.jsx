import React from 'react';

function ChatWindow({ contact }) {
    // Здесь функционал чата
    return (
        <div className="chat-window">
            <h2>{contact.name}</h2>
            {/* ... чат сообщения */}
        </div>
    );
}

export default ChatWindow;