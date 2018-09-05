import React, { Component } from "react";

class BlogsAndTalks extends Component {
  render() {
    return (
      <div
        className="row"
        style={{ marginTop: "4em", marginBottom: "4em" }}
        id="blogs-and-talks"
      >
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h2>Blogs & Talks</h2>
              <div className="row">
                <div className="col">
                  <div className="card shadow-lg p-3 mb-5 bg-white" style={styles.card}>
                    <img
                      className="card-img-top"
                      src={require("../images/blog1.jpeg")} 
                      alt="Card cap"
                    />
                    <div className="card-body" style={{textAlign: 'center'}}>
                      <p style={styles.title}>
                      Coding bootcamp === new career
                      </p>
                      <div style={{marginTop: 45}}>
                        <a href="https://code.likeagirl.io/coding-bootcamp-new-career-4be9bb801d05" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-link"
                        style={styles.link}
                        >View blog</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-lg p-3 mb-5 bg-white" style={styles.card}>
                    <img
                      className="card-img-top"
                      src={require("../images/blog2.jpeg")} 
                      alt="Card cap"
                    />
                    <div className="card-body" style={{textAlign: 'center'}}>
                      <p style={styles.title}>
                        Highlights from UpFront 2018                      
                      </p>
                      <div style={{marginTop: 45}}>
                        <a href="https://medium.com/@this_lk/highlights-from-upfront-2018-9b7b136022bf" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-link"
                        style={styles.link}
                        >View blog</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-lg p-3 mb-5 bg-white" style={styles.card}>
                    <img
                      className="card-img-top"
                      src={require("../images/talk.jpg")} 
                      alt="Card cap"
                    />
                    <div className="card-body" style={{textAlign: 'center'}}>
                      <p style={styles.title}>
                      Why naming stuff is difficult and how to get better at it.
                      </p>
                        <a href="https://docs.google.com/presentation/d/183IhADTE0-7eLqze8BVBV-WN9wPWFEft6lK8wxQFhjI/edit?usp=sharing" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-link"
                        style={styles.link}
                        >View slides</a>
                    </div>
                  </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  card: {
    width: "18rem", 
    border: 'none', 
    height: 350
  },
  title: {
    fontSize: 20
  },
  link: {
    color: "purple"
  }
};

export default BlogsAndTalks;
