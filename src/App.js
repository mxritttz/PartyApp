import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EventDetailScreen from './pages/EventDetailScreen';
import Map from './pages/Map';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/" element={<EventDetailScreen />} /> 
        <Route path="/map" element={<Map />} />
      </Routes>
    </Router>
  );
}

export default App;
