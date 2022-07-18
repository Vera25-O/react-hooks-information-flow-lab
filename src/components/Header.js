import React from 'react'

function Header({darkMode, onDarkModeClick}) {
  return (
    <div>
        <button onClick={onDarkModeClick}>
            {darkMode ? "Dark" : "Light"} Mode
        </button>
    </div>
  )
}

export default Header;