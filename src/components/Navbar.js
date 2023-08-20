import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>

        <span className='logo'>Free Chat</span>
        <div className='user'>
            <img src='https://images.pexels.com/photos/4063856/pexels-photo-4063856.jpeg?auto=compress&cs=tinysrgb&w=300' alt=''/>
            <span> Akshay </span>
            <button> LogOut</button>
        </div>
      
    </div>
  )
}

export default Navbar
