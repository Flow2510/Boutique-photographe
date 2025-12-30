import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Header from './components/header/header'
import Home from './pages/home'
import Shop from './pages/shop'
import Events from './pages/events'
import About from './pages/about'
import Contact from './pages/contact'
import Cart from './pages/cart'
import Footer from './components/footer/footer'
import Login from './pages/login'
import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'
import Profile from './pages/profile'
import Admin from './pages/admin'

function App() {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        globalThis.alert(error)
      } else {
        setSession(data.session)
      }
    }
    fetchData();
    
  }, [])

  useEffect(() => {
    console.log(user)
  }, [user])

  useEffect(() => {
    async function fetchUser() {
      if (!session) return;
      const {data, error} = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();

      if (error) {
        console.error('Erreur récupération profil:', error.message);
      } else {
        setUser(data); 
      }
    }
    fetchUser();
  }, [session])

  return (
    <>
      <Header session={session}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/events' element={<Events />} />
        <Route path='/contact' element={<Contact user={user} session={session}/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/profile' element={<Profile user={user}/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<Admin user={user} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App