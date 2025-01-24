import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import DefaultLayout from './layouts/DefaultLayout'
import Homepage from './pages/Homepage'
import ChiSiamoPage from './pages/ChiSiamopage'
import ListaDeiPost from './pages/ListaPostpage'
import DettaglioPostpage from './pages/DettaglioPostpage'
import NuovoPostpage from './pages/NuovoPostpage'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path='/' Component={Homepage}/>
            <Route path='/chi-siamo' Component={ChiSiamoPage}/>
            <Route path='/lista-post' Component={ListaDeiPost}/>
            <Route path='/dettaglio-post/:title' Component={DettaglioPostpage}/>
            <Route path='/crea-post' Component={NuovoPostpage}/>
            
          </Route>
          
        </Routes>
      
      
      </BrowserRouter>
      
  )
}

export default App
