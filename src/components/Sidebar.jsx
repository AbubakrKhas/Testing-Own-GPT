import React, { useState } from 'react';
import { FaPlus, FaUserAlt, FaAddressCard, FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: '/',
      name: 'Newchat',
      icon: <FaPlus />,
    },
    {
      path: '/history',
      name: 'History',
      icon: <FaAddressCard />,
    },
    {
      path: '/current-user',
      name: 'Current User',
      icon: <FaUserAlt />,
    },

  ];

  return (
    <div className="container-left-sidebar">
      <div style={{ width: isOpen ? '250px' : '50px' }} className="sidebar">
        <div className="top-section">
          <h1 style={{ opacity: isOpen ? '1' : '0',pointerEvents: "none" }} className="logo">Logo</h1>
          <div style={{ marginLeft: isOpen ? '130px' : '-45px' }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link" activeClassName="active">
            <div className="icon">{item.icon}</div>
            <div style={{ opacity: isOpen ? '1' : '0',pointerEvents: "none" }} className="link-text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main className='relative w-full'>{children}</main>
    </div>
  );
};

export default Sidebar;
