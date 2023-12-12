import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from "./components/navbar/navbar";
import HistorySide from "./components/sidebar-components/histor-sidey.jsx";
import Sidebar from './components/Sidebar';
import Newchat from './components/sidebar-components/new-chat.jsx';
import CurrentUser from './components/sidebar-components/current-user.jsx';
import ChatSide from './components/chat-right-side/chat-friends.jsx';

import InputComponent from './components/input-and-result/Input-container.jsx';
import Footer from './components/footer/footer.jsx';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Daten vom Backend abrufen
    fetch("/members")
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log(data);
      })
      .catch(error => console.error("Fehler beim Abrufen der Daten:", error));
  }, []); // Das leere Array stellt sicher, dass useEffect nur einmal beim Rendern aufgerufen wird

  return (
    <div className='appMain'>
      <NavBar />
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Newchat />} />
            <Route path="/newchat" element={<Newchat />} />
            <Route path="/history" element={<HistorySide />} />
            <Route path="/current-user" element={<CurrentUser />}
            />

          </Routes>
        </Sidebar>
        <div className="chat-side-div">
          <ChatSide />
        </div>

      </BrowserRouter>
      <div className="input-container ">
        <div className='absolute top-0 left-20 block w-1/2 h-1/4 text-white tracking-wider text-m text-center'>
          {(data.members && data.members.length > 0) ? (
            data.members.map((member, i) => (
              <p key={i}>{member}</p>
            ))
          ) : (
            <p>Backend is currently off...</p>
          )}
        </div>

        <InputComponent />
      </div>
      <Footer />
    </div>
  );
};

export default App;
