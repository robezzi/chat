import React from 'react';
import ChatWindow from './ChatWindow';
import "../styles/main.css"
function Main({ activeContact }) {
    return (
        <div className="main">
            {activeContact && <ChatWindow contact={activeContact} />}
        </div>
    );
}

export default Main;