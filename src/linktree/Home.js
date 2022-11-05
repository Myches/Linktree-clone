import React from 'react'
import Header from './Header.js'
import Links from './Links.js'
import Footer from './Footer.js'


function Home (){
    return(
<div className='App'>
 <a href='#'id="share">
<img src={require('../images/share.png')}  alt="share" />
</a>
<Header/>
<Links />
<Footer/>

  </div>

    )
}

export default Home