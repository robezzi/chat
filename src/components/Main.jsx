import React from 'react';
import ChatWindow from './ChatWindow'; // Импортируйте ChatWindow

function Main({ activeContact }) {
    return (
        <main className="main">
            {activeContact && <ChatWindow contact={activeContact} />}
        </main>
    );
}

export default Main;