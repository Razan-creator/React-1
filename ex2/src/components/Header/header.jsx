import React, { Component } from "react";
import filesImg from './images/Logo.png';
class Header extends Component {
  render() {
    return (
      <header style={styles.header}>
        <img src="/images/Logo.png" alt="Logo" style={styles.logo} />
        <h1 style={styles.title}>Voila Mon Image ! </h1>
      </header>
    );
  }
}

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "15px 20px",
    backgroundColor: "rgb(231, 45, 107)",
  },
  logo: {
    height: "50px",
    marginRight: "10px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: 0,
    color: "rgb(0, 0, 0)",
  },
};

export default Header;
