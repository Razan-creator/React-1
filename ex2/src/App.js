import React, { Component } from "react";
import Navigation from './Component/navigation/navigation.jsx';
import Header from './Component/header/header.jsx';
// import Profile from './Component/content/profile';
import Footer from './Component/footer/footer.jsx';


class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Header />
        {/* <Profile /> */}
        <Footer />
      </>
    );
  }
}

export default App;


