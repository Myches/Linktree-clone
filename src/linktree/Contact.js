import React from 'react'


function Contact(){
   const[formData,setformData]=React.useState({firstName:"",lastName:"",email:"",message:"",agreement:""})
	
	
	function handleChange(event){
		const {name,value,type,checked}=event.target
		setformData((prevFormData)=>{
		return {...prevFormData,[name]:type==='checkbox' ? checked : value}
	})
	
	}
	
	

return(

   
	<div className='form'>
   <h2>Contact Me</h2>
   <p className='contact_p'>Hi there , contact me to ask me about anything you have in mind</p>

   <form>  
	    
                <p className='fn'>Firstname</p>
				<input type='text' id='first_name' placeholder='Enter your firstname' onChange={handleChange} name="firstName" value={formData.firstName}/>
				

				
				<p className='ln'>Lastname</p>
				<input type='text' id='last_name' placeholder='Enter your lastname' onChange={handleChange} name="lastName" value={formData.lastName}/> <br />
				

				<label>Email</label>
                <input type='email' id='email' placeholder='yourname@gmail.com' onChange={handleChange} name="email" value={formData.email}/> <br />

				<label>Message</label>
				<textarea id='message' placeholder='send me a message and i will reply as soon as possible' onChange={handleChange} name='message' value={formData.message}/> <br />

				
				<input type='checkbox' id='agreement' checked={formData.agreement} onChange={handleChange} name='agreement'/>
			<label htmlFor='agreement'>You agree to providing your data to us who may contact you</label> <br />

			<button id='btn__submit'>Send Message</button>
			 
			</form>
   </div> 
  
)
   
}
export default Contact