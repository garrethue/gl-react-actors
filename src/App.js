import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
