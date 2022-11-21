import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/NavBar';
import Missions from './pages/Missions';
import Profile from './pages/Profile';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Nav />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
