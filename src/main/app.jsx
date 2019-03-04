import React, { Component } from "react";
import "./../bootstrap.min.css";
import "./../css/App.css";
import Navbar from "./../components/navbar";
import Footer from "./../components/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <h1>disj</h1>
        <Footer />
      </div>
    );
  }
}

export default App;