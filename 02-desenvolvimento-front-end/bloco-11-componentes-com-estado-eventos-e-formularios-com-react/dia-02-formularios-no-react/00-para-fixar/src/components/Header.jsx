import React from "react";
import logo from './logo.svg'
import './Header.css'

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img src={logo} alt="React Logo" width="100px" height="100px" />
        <h1>Formulários no React</h1>
      </header>
    )
  }
}

export default Header;