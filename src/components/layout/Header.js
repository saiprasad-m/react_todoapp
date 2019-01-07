import React from 'react'

function Header() {
  return (
    <header style={headerStyle}>
        <h3>
            ToDo App
        </h3>
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

export default Header;
