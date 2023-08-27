import React from 'react'
import './Button.css'

function Button(props) {
    
  return (
    <button  className='Primary_button'>
     {props.icons}
     {props.text}
    
    </button>
    
  )
}

export default Button
