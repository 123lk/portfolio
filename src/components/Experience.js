import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import '../index.css';

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
    if (e.target.id === "clos") {
      this.setState({ closIsFlipped: !this.state.closIsFlipped });
    } else if (e.target.id === "tr") {
      this.setState({ trIsFlipped: !this.state.trIsFlipped });
    } else if (e.target.id === "cyf") {
      this.setState({ cyfIsFlipped: !this.state.cyfIsFlipped });
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
                    <p style={styles.companyTitle}>
                      <a
                        href="https://closconsultancy.com/"
                        target="_blank"
                        style={styles.companyTitleLinkStyle}
                        rel="noopener noreferrer"
                      >
                        Clos Consultancy
                      </a>
                    </p>
                    <p style={styles.jobTitle}>Idea Implementer</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col" style={styles.buttonContainer}>
                    <button id="clos" onClick={this.handleClick}>
                      Find out more
                    </button>
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
                    <p style={styles.descriptionText}>
                      Use JavaScript, React, Redux, HTML5, CSS and React Native
                      to build complex applications for a range of clients in an
                      agile environment.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col" style={styles.backButtonContainer}>
                    <button id="clos" onClick={this.handleClick}>
                      Click to flip
                    </button>
                  </div>
                </div>
              </div>
            </ReactCardFlip>
          </div>

          <div className="col">
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
                    <p style={styles.companyTitle}>
                      <a
                        href="https://techreturners.com/"
                        target="_blank"
                        style={styles.companyTitleLinkStyle}
                        rel="noopener noreferrer"
                      >
                        Tech Returners
                      </a>
                    </p>
                    <p style={styles.jobTitle}>Tech Coach</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col" style={styles.buttonContainer}>
                    <button id="tr" onClick={this.handleClick}>
                      Find out more
                    </button>
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
                  <div className="col" style={styles.descriptionText}>
                    Teach HTML5, CSS, Javascript, JQuery, Git, GitHub and
                    Bootstrap to people who are returning to a role in
                    technology after a career break.
                  </div>
                </div>
                <div className="row">
                  <div className="col" style={styles.backButtonContainer}>
                    <button id="tr" onClick={this.handleClick}>
                      Click to flip
                    </button>
                  </div>
                </div>
              </div>
            </ReactCardFlip>
          </div>

          <div className="col">
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
                    <p style={styles.companyTitle}>
                      <a
                        href="https://codeyourfuture.io/"
                        target="_blank"
                        style={styles.companyTitleLinkStyle}
                        rel="noopener noreferrer"
                      >
                        Code Your Future
                      </a>
                    </p>
                    <p style={styles.jobTitle}>Mentor</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col" style={styles.buttonContainer}>
                    <button id="cyf" onClick={this.handleClick}>
                      Find out more
                    </button>
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
                  <div className="col" style={styles.descriptionText}>
                    Part of a small volunteer team that set up the Manchester
                    branch of CYF, a free coding course for refugees and asylum
                    seekers. Helped students learn HTML5, CSS and JavaScript.
                  </div>
                </div>
                <div className="row">
                  <div className="col" style={styles.cyfBackButtonContainer}>
                    <button id="cyf" onClick={this.handleClick}>
                      Click to flip
                    </button>
                  </div>
                </div>
              </div>
            </ReactCardFlip>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  companyTitle: {
    fontSize: "50px",
    margin: "10px",
    lineHeight: "normal"
  },
  jobTitle: {
    fontSize: "30px",
    margin: "10px"
  },
  buttonContainer: {
    textAlign: "center",
    marginTop: "30px"
  },
  backButtonContainer: {
    textAlign: "center",
    marginTop: "50px"
  },
  descriptionText: {
    margin: "12px",
    fontSize: "18px"
  },
  companyTitleLinkStyle: {
    textDecoration: "none",
    color: "#212529"
  },
  cyfBackButtonContainer: {
    textAlign: "center",
    marginTop: "25px"
  }
};

export default Experience;
