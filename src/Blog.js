import React, { Component } from 'react';

class Blog extends Component {
  render() {
    return (
      <div class="columns" id="card-tech">
        <div class="column is-narrow" className="Portfolio-title">
          <h1 class="title " className="Right-title">
            Technologies
          </h1>
          <h2 class="title title is-6" className="Right-title-sub">
            (I am hooked with)
          </h2>
        </div>
        <div class="column" className="Tech-card-container" />
      </div>
    );
  }
}

export default Blog;
