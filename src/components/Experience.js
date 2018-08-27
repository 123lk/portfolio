import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";

class Experience extends Component {
  constructor() {
    super();
    this.state = {
      closIsFlipped: false,
      trIsFlipped: false,
      cyfIsFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if (e.target.id === 'clos') {
      this.setState({closIsFlipped: !this.state.closIsFlipped});
    } else if (e.target.id === 'tr') {
      this.setState({ trIsFlipped: !this.state.trIsFlipped});
    } else if (e.target.id === 'cyf') {
      this.setState({ cyfIsFlipped: !this.state.cyfIsFlipped});
    }
  }

  render() {
    return (
      <div>
        <div className="row" style={{ marginTop: "4em" }} id="experience">
          <div className="col-md-12">
            <h2 style={{ backgroundColor: "white" }}>Experience</h2>
          </div>
        </div>

        <div className="row" style={{ marginBottom: "20em", marginTop: "2em" }}>
          <div className="col">
              <ReactCardFlip isFlipped={this.state.closIsFlipped}>
                <div
                  key="front"
                  style={{
                    height: 300,
                    width: 300,
                    backgroundColor: "darkseagreen"
                  }}
                >
                  <div className="row">
                    <div className="col">
                      <p style={styles.companyTitle}>Clos Consultancy</p>
                      <p style={styles.jobTitle}>Idea Implementer</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col" style={styles.buttonContainer}>
                      <button id='clos' onClick={this.handleClick}>Find out more</button>
                    </div>
                  </div>
                </div>
                <div
                  key="back"
                  style={{
                    height: 300,
                    width: 300,
                    backgroundColor: "darkseagreen"
                  }}
                >
                  <div className="row">
                    <div className="col">
                      <p style={styles.descriptionText}>Use JavaScript, React, Redux, HTML5, CSS and React Native to build complex applications for a range of clients in an agile environment.</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col" style={styles.buttonContainer}>
                      <button id="clos" onClick={this.handleClick}>Click to flip</button>
                    </div>
                  </div>
                </div>
              </ReactCardFlip>
          </div>

          <div className="col">
            <div>
              <ReactCardFlip isFlipped={this.state.trIsFlipped}>
                <div
                  key="front"
                  style={{
                    height: 300,
                    width: 300,
                    backgroundColor: "darkseagreen"
                  }}
                >
                  <div className="row">
                    <div className="col">
                      <p style={styles.companyTitle}>Tech Returners</p>
                      <p style={styles.jobTitle}>Tech Coach</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col" style={styles.buttonContainer}>
                      <button id="tr" onClick={this.handleClick}>Find out more</button>
                    </div>
                  </div>
                </div>
                <div
                  key="back"
                  style={{
                    height: 300,
                    width: 300,
                    backgroundColor: "darkseagreen"
                  }}
                >
                  <div className="row">
                    <div className="col">This is the back of the card.</div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <button id="tr" onClick={this.handleClick}>Click to flip</button>
                    </div>
                  </div>
                </div>
              </ReactCardFlip>
            </div>
          </div>
          <div className="col">
            <div>
              <ReactCardFlip isFlipped={this.state.cyfIsFlipped}>
                <div
                  key="front"
                  style={{
                    height: 300,
                    width: 300,
                    backgroundColor: "darkseagreen"
                  }}
                >
                  <div className="row">
                    <div className="col">
                      <p style={styles.companyTitle}>Code Your Future</p>
                      <p style={styles.jobTitle}>Mentor</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col" style={styles.buttonContainer}>
                      <button id="cyf" onClick={this.handleClick}>Find out more</button>
                    </div>
                  </div>
                </div>
                <div
                  key="back"
                  style={{
                    height: 300,
                    width: 300,
                    backgroundColor: "darkseagreen"
                  }}
                >
                  <div className="row">
                    <div className="col">This is the back of the card.</div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <button id="cyf" onClick={this.handleClick}>Click to flip</button>
                    </div>
                  </div>
                </div>
              </ReactCardFlip>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  companyTitle: {
    fontSize: '50px',
    margin: '10px',
    lineHeight: 'normal'
  },
  jobTitle: {
    fontSize: '30px', 
    margin: '10px'
  },
  buttonContainer: {
    textAlign: 'center',
    marginTop: '30px'
  },
  descriptionText: {
    margin: '12px',
    fontSize: '18px'
  }
};

export default Experience;
