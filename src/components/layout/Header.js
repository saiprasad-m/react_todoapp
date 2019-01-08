import React from 'react'
import {Link} from 'react-router-dom';


function Header() {
  return (
    <header style={headerStyle}>
        <h3>
            ToDo App
        </h3>
        <Link style={linkStyle} to="/" className='xs'>Home</Link>|
        <Link style={linkStyle} to="/About" className='xs'>About</Link>
    </header>
  )
}
const headerStyle = {
    background: '#444',
    color: 'white',
    textAlign: 'center',
    padding: '10px',
    paddingBottom: '40px'
}

const linkStyle = {
    color: '#fff',
    textDecoration : 'none',
    padding: '5px'
}
export default Header;
