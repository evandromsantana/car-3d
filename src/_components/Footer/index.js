import React from 'react'
import './styles.css'

const Footer = () => {
  const year = new Date().getFullYear() // Obtém o ano atual

  return (
    <div className="footer">
      <p className="footer-text">
        Copyright &copy; {year} |{' '}
        <a href="http://www.evandrosantana.com/" target="_blank" rel="noreferrer">
          Evandro M. Santana
        </a>
      </p>
    </div>
  )
}

export default Footer
