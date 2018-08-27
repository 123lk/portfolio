import React, { Component } from "react";
import NavBar from "./components/NavBar";

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
          <div className="row" style={{ marginTop: "4em" }} id="about">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <h2>About</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{ marginTop: "4em", marginBottom: "4em" }}
            id="experience"
          >
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <h2>Experience</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{ marginTop: "4em", marginBottom: "4em" }}
            id="blogs-and-talks"
          >
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <h2>Blogs & Talks</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{ marginTop: "4em", marginBottom: "4em" }}
            id="videos"
          >
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <h2>Videos</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
