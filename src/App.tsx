import './App.css'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { supabase } from './supabaseClient'
import EventDetails from './pages/EventDetails'
import Home from './pages/Home'
import Map from './pages/Map'
import { useEffect, useState } from 'react'
import { Session } from '@supabase/supabase-js'
import Authentication from './pages/Authentication'
import Header from './components/Header'
import BottomNavigation from './components/BottomNavigation'


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
      <Header session={session}/>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/auth" element={<Authentication session={session}/>} />
          <Route path="/event/{id}" element={<EventDetails/>} /> 
          <Route path="/map" element={<Map/>} />
        </Routes>
      </BrowserRouter>

      <BottomNavigation/>
    </>
  )
}

export default App
