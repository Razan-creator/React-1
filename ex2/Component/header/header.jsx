

//qst :4-a


import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header style={styles.header}>
        <img src="logo.png" alt="Logo" style={styles.logo} />
        <h1 style={styles.title}>Voila Mon Logo !</h1>
      </header>
    );
  }
}

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "15px",
  },
  logo: {
    height: "50px",
    marginRight: "15px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: 0,
  },
};

export default Header;

  
