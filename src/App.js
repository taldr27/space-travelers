import React from 'react';
import planet from './images/planet.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <img src={planet} alt="planet-icon" />
          <h1>Space Traveler&apos;s Hub</h1>
          <ul>
            <li>Rockets</li>
            <li>Missions</li>
            <li>My Profile</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
