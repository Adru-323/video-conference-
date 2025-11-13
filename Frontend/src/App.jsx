import { useState } from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import './App.css'
import LandingPage from './pages/landing'
import Authentication from './pages/authentication'
import { AuthProvider } from './contents/AuthContent'
import VideoMeet  from './pages/videoMeet';
import HomeComponent from './pages/home';
import History from './pages/history';


function App() {

  return (
    <>
    <Router>
      <AuthProvider>

      <Routes>
      <Route path = "/" element ={ <LandingPage/> } />
      <Route path = "/auth" element ={<Authentication/> } />
     <Route path='/home' element={<HomeComponent />} />

      <Route path='/:url' element={<VideoMeet/>}/>
      <Route path='/history' element={<History/>}/>
      </Routes>
      </AuthProvider> 
    </Router>
    </>
  )
}

export default App
