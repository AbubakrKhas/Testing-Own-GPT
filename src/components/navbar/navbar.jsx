import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar bg-zinc-900 relative flex justify-between h-14">
      <div className="container-fluid">
        <div className="logo-anime">
          <a className="navbar-brand" href='/'>Pantopix AI</a>
          <ul id="nav-links" className='nav-links tracking-wide text-m ml-10'>
            <li>Home</li>
            <li>Contact</li>
            <li>Service</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
