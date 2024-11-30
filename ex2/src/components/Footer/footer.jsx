import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <footer style={ListStyle.footer}>
        <p style={ListStyle.text}>
          copyright DEVOFS202 – Choukri Douae – Annee :  2024/2025
        </p>
      </footer>
    );
  }
}
const ListStyle = {
  footer: {
    backgroundColor: "#778899",
    padding: "10px 0",
    position: "fixed",
    bottom: "0",
    width: "100%",
    textAlign: "center",
    color: "white",
  },
  text: {
    fontStyle: "italic",
    fontSize: "20px",
    margin: 0,
  },
};



export default Footer;
