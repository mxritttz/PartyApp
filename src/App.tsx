import './App.css'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { supabase } from './supabase/client'
import EventDetails from './pages/EventDetails'
import EventList from './pages/EventList'
import Map from './pages/Map'
import { useEffect, useState } from 'react'
import { Session } from '@supabase/supabase-js'
import Authentication from './pages/Authentication'
import Header from './components/Header'
import BottomNavigation from './components/BottomNavigation'
import EventForm from './components/form/EventForm'


function App() {
  const [session, setSession] = useState<Session|null|undefined>(null);

  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => setSession(session));
    
    const { data: { subscription } } = supabase.auth
      .onAuthStateChange((_event, session) => setSession(session));

    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header session={session}/>
        <Routes>
          <Route path="/" element={<EventList/>} />
          <Route path="/event/:eventId/" element={<EventDetails/>} /> 
          <Route path="/event/:eventId/edit/" element={<EventForm/>} /> 
          <Route path="/event/add/" element={<EventForm/>} /> 
          <Route path="/map/" element={<Map/>} />
          <Route path="/auth/" element={<Authentication session={session}/>} />
        </Routes>
        <BottomNavigation/>
      </BrowserRouter>
    </>
  )
}

export default App
