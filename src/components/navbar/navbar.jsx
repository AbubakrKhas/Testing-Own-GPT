import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar bg-zinc-900 relative flex justify-between h-12">
      <div className="container-fluid">
        <div className="logo-anime">
          <a className="navbar-brand" href='/'>Test AI</a>
          <ul id="nav-links" className='nav-links'>
            <li>Home</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
