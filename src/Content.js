import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="Intro" id="About">
        <p className="h1">Hi!</p>
        <p className="h2">I am Vikas Kumar</p>
        <p className="h3">Android Developer</p>
        <p className="h4">A self thought android developer and designer.</p>
        <p className="h4">
          Enjoy writing clean code and contributing to Open source.
        </p>
        <p className="h4">Excited about learning and sharing opportunities.</p>
        <br />
        <a
          class="button is-success is-rounded  is-large"
          href="mailto:support@vikas.dev"
        >
          <span>Get in touch</span>
        </a>
      </div>
    );
  }
}

export default About;
