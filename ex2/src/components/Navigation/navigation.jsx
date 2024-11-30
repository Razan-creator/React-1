import React, { Component } from "react";
class Navigation extends Component {
  render() {
    return (
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <a href="#home" style={styles.navLink}>
              Accueil
            </a>
          </li>
          <li style={styles.navItem}>
            <a href="#profile" style={styles.navLink}>
              Profile
            </a>
          </li>
          <li style={styles.navItem}>
            <a href="#contact" style={styles.navLink}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

const styles = {
  nav: {
    backgroundColor: "#rgb(231, 45, 107)",
    padding: "20px 20px",
    display: "flex",
    justifyContent: "flex-end", 
  },
  navList: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: "80px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "23px",
    fontWeight: "500",
    transition: "color 0.3s ease",
    marginLeft:"90px",
  },
};

export default Navigation;
