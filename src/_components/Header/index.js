import React from 'react'
import './styles.css'

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="./logo2.png" alt="Logo Carros Online" className="logo" />
      </div>
      <nav className="container red topBotomBordersOut">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about">Catálogo</a>
          </li>
          <li className="nav-item">
            <a href="#services">Serviços</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
