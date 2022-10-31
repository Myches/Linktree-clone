import React from 'react'

function Header(){
    return(
   <div className='profile'>
   
    <img src={require('../images/profile__img.png')}   alt="my profile pic" />
   
    <p id='twitter'>MiCHAEL</p>
    <p hidden id='slack'>Andorful</p>
    


   </div>
    )
}



export default Header