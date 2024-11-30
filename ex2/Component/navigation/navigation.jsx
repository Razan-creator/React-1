import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <header style={Liststyles.header}>
        <div style={Liststyles.container}>
          <nav style={Liststyles.nav}>
            <ul style={Liststyles.navList}>
              <li style={Liststyles.navItem}><a href="#" style={Liststyles.navLink}>Home</a></li>
              <li style={Liststyles.navItem}><a href="/content/profil" style={Liststyles.navLink}>Profile</a></li>
              <li style={Liststyles.navItem}><a href="#" style={Liststyles.navLink}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

//
const Liststyles = {
  header: {
    backgroundColor: "#ADD8E6",
    padding: "10px 0",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  
  nav: {
    display: "flex",
    alignItems: "center",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: "20px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "500",
    transition: "color 0.3s ease",
  },
  
};

export default Navigation ;