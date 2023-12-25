import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Loginfiles/Login.jsx';
import Landing from './Components/LandingPage/Landing.jsx'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Default route for login page */}
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Landing />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
