
import React from 'react'

import Header from './linktree/Header.js'
import Links from './linktree/Links.js'
import Footer from './linktree/Footer.js'
import './linktree/linktree.css'



function App(){
return(
  
  <div className='App'>
 <a href='#'id="share">
<img src={require('./images/share.png')}  alt="share" />
</a>
<Header />
  <Links />
  <Footer />


  </div>
 
)
}


export default App;