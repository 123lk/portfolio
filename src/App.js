import React, { Component } from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Experience from "./components/Experience";
import BlogsAndTalks from "./components/BlogsAndTalks";
import Videos from "./components/Videos";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="row" style={{ marginTop: "4em" }}>
            <div className="col-md-4" />
            <div className="col-md-4" style={{ textAlign: "center" }}>
              <div className="card">
                <div className="card-body">
                  <h1>Laura Kenny</h1>
                  <h2>Software Developer</h2>
                </div>
              </div>
            </div>
            <div className="col-md-4" />
          </div>
          <About />
          <Experience />
          <BlogsAndTalks />
          <Videos />
        </div>
      </div>
    );
  }
}

export default App;
