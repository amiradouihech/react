import {Link} from 'react-router-dom';
import './Navbar.css'
import React from 'react'

function Navbar() {
  return (
    <div className='nav'>
      <Link to="/">Home</Link>
      <Link to="profile" state={{name:'adam',age:29}}>profile</Link>
      <Link to="friends">Friends</Link>
    </div>
  )
}

export default Navbar
