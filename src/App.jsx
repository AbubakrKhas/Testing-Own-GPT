import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from "./components/navbar/navbar";
import HistorySide from "./components/sidebar-components/histor-sidey.jsx";
import Sidebar from './components/Sidebar';
import Newchat from './components/sidebar-components/new-chat.jsx';
import CurrentUser from './components/sidebar-components/current-user.jsx';

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
      </BrowserRouter>
      <div className="input-container">
        {(data.members && data.members.length > 0) ? (
          data.members.map((member, i) => (
            <p key={i}>{member}</p>
          ))
        ) : (
          <p>Loading...</p>
        )}
        <InputComponent />
      </div>
      <Footer />
    </div>
  );
};

export default App;
