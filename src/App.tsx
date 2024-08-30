import './App.css'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import EventDetailScreen from './pages/EventDetailScreen'
import Home from './pages/Home'
import Map from './pages/Map'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/" element={<EventDetailScreen />} /> 
        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
