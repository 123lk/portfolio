import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="row" style={{ marginTop: "4em" }} id="about">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                <h2>About</h2>
                  <p>
                    Hello, I'm Laura. I started teaching myself JavaScript in
                    October 2016, having previously spent a bit of time
                    tinkering with HTML. I soon realised I was a fan of all
                    things code and decided to fully commit by doing 
                    <a href="https://northcoders.com/" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'black'}} target="_blank"> Northcoders</a>, a full stack coding bootcamp, in 2017. I love that I have found a career
                    that keeps me curious and allows me to continuously learn
                    new things everyday. When I'm not improving the web one
                    pixel at a time, I like to travel, climb mountains, perform
                    Improv comedy and attempt to play the drums.
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

export default About;
