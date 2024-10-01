import React, { useState } from 'react';
import Aside from '../src/components/Aside';
import Main from '../src/components/Main';
import "./App.css"
function App() {
  const [activeContact, setActiveContact] = useState(null);

  const handleContactClick = (contact) => {
    setActiveContact(contact);
  };

  const contacts = [
    { name: "Иван Иванов", id: 1 },
    { name: "Мария Петрова", id: 2 },
  ];

  return (
    <div className="app">
      <Aside contacts={contacts} onContactClick={handleContactClick} />
      <Main activeContact={activeContact} />
    </div>
  );
}

export default App;