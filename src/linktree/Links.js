import React from 'react'
import {Link} from 'react-router-dom'



function Links(){
   
    return(
  
        <div className='Links'>
      
            <ul>
            <li>  <a href='https://training.zuri.team/'   id='btn__zuri'>Zuri Team</a></li>    
          <li>  <a href='http://books.zuri.team'   id='books'>Zuri Books</a></li>
          <li> <a href='https://books.zuri.team/python-for-beginners?ref_id=<Andorful>'   id='book__python'>Python Books for Beginners</a></li>
          <li>  <a href='https://background.zuri.team'   id='pitch'> Due diligence for your employees</a></li>
          <li>   <a href='https://books.zuri.team/design-rules '   id='book__design'>Get your Book Designed by Zuri</a></li>
          <li><Link to ="/Contact"   id='contact' >Contact</Link> </li>
         
            </ul>
  


        </div>
        
    )}




export default Links