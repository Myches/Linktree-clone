import React from 'react'
import Home from './linktree/Home.js'
import './linktree/linktree.css'
import {HashRouter,Route,Routes} from 'react-router-dom'
import Contact from './linktree/Contact.js'
import './linktree/form.css'


function App(){
return(
  <HashRouter>
  <div className='App'>
  <Routes>
  <Route path ="/" element={<Home />} />
  <Route path ="/Contact" element={<Contact />} />
</Routes>
  </div>
  </HashRouter> 
)
}


export default App;