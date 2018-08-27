import React, { Component } from "react";
import ReactPlayer from 'react-player';

class Videos extends Component {
  render() {
    return (
      <div
        className="row"
        style={{ marginTop: "4em", marginBottom: "4em" }}
        id="videos"
      >
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h2>Videos</h2>
              <div className="row">
                <div className="col" style={{justifyContent: 'center'}}>
                  <ReactPlayer url='https://www.youtube.com/watch?v=AOGL4SrfH-8&t=2s' width={450} height={250}/>
                </div>
                <div className="col">
                  <ReactPlayer url='https://www.youtube.com/watch?v=bqdlYLte6ZY' width={450} height={250}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Videos;
