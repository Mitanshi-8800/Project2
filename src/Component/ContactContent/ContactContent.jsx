import React from 'react'
import './ContactContent.css'
import Button from '../Button/Button'
import {MdMessage} from 'react-icons/md'
import {IoMdCall} from 'react-icons/io'
function ContactContent() {
  return (
    <>
  <div className='ContactContent_Info'>
    <h1>Contact Us</h1>
    <p>LETS CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.</p>
  </div>
  <div className='Top_button'>
    <Button
      text="VIA SUPPORT CHAT"
      icons={<MdMessage fontSize={24}/>}
    />
      <Button
      text="VIA CALL"
      icons={<IoMdCall fontSize={24}/>}
    />
    
  </div>
 </>
  )
}

export default ContactContent
