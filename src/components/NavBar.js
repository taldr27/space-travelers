import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../images/planet.png';
import '../styles/NavBar.css';

const Nav = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/profile',
      text: 'My Profile',
    },
  ];
  return (
    <header className="header">
      <div className="logo-title">
        <img src={planet} alt="planet-icon" />
        <h1>Space Traveler&apos;s Hub</h1>
      </div>
      <nav>
        <ul className="pages">
          {links.map((link) => (
            <li id={link.id} key={link.id} className={`child${link.id}`}>
              <NavLink to={link.path} className={({ isActive }) => (isActive ? 'navBar-link selected' : 'navBar-link')}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
