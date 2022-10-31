import React from 'react'

function Header(){
    return(
   <div className='profile'>
   
    <img src={require('../images/profile__img.png')} id="profile_img"  alt="my profile pic" />
   
    <p id='twitter'>MiCHAEL</p>
    <p hidden id='slack'>Andorful</p>
    


   </div>
    )
}



export default Header