import React, { Component } from 'react';

class PortFolio extends Component {
  state = {
    projects: {
      Manch: {
        icon:
          'https://lh3.googleusercontent.com/lvtw9fohTi3-srvb92ZLWxSCXIH-qfHRWTwJ-q_BNTZlBlMH2IaXS9pPYG2aPyOikeh_=s360-rw',
        title: 'Manch App',
        description:
          'Share, discuss and chat on live topics and news. Beautiful feed based on interests and interact with like minded people and win prizes.',
        link: 'https://play.google.com/store/apps/details?id=com.app.manch',
        lang: 'Java'
      },
      Clipper: {
        icon:
          'https://lh3.googleusercontent.com/D_yuv-t8ev_zgQOCvq0h94YTDfJo2cglouSGoUriThwvpXfdVXSB0Xkn2pUyp6cjKW8=s360',
        title: 'Clipper App',
        description:
          'Text sharing and clip management over local network from mobile and desktop. Share your favourite links and code all offline.',
        link: 'https://goo.gl/FmCu25',
        lang: 'Kotlin'
      },
      FilePicker: {
        icon:
          'https://lh3.googleusercontent.com/mYwfSFOo0bLY191i23CvkZyo72sIOtjSbtJhROh9Oy_bMVpwbGF4YWw4NHWe_rvuMyul=s360',
        title: 'Kotlin File Picker',
        description:
          'Android file picker library written in Kotlin. Pick image from gallery or capture image or video. Available on github ',
        link: 'https://goo.gl/5JSMTh',
        lang: 'Kotlin'
      }
    }
  };

  render() {
    return (
      <div class="columns is-vcentered">
        <div class="column is-narrow" className="Portfolio-title">
          <p class="title is-3" className="Left-title">
            Portfolio
          </p>
        </div>

        <div
          class="columns is-mobile is-centered is-full"
          className="scrolling-wrapper-flexbox"
        >
          <div class="column is-one-quarter" className="Section">
            <div class="card" className="Card">
              <div class="header" className="Header-card">
                <div class="avatar" className="Avatar-card">
                  <img
                    className="Img-card"
                    src={this.state.projects.Manch.icon}
                    alt=""
                  />
                </div>
              </div>
              <div class="card-body" className="Card-body">
                <div class="user-meta has-text-centered" className="User-meta">
                  <h3 class="username" className="Username-card">
                    {this.state.projects.Manch.title}
                  </h3>
                  <h5 class="position" className="Position-card">
                    {this.state.projects.Manch.lang}
                  </h5>
                </div>
                <div class="user-bio has-text-centered" className="User-bio">
                  <p>{this.state.projects.Manch.description}</p>
                </div>
                <div class="action has-text-centered" className="Action-card">
                  <a
                    href={this.state.projects.Manch.link}
                    class="button is-success is-rounded  is-small"
                    target="_blank"
                  >
                    Visit
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-one-quarter" className="Section">
            <div class="card" className="Card">
              <div class="header" className="Header-card">
                <div class="avatar" className="Avatar-card">
                  <img
                    className="Img-card"
                    src={this.state.projects.Clipper.icon}
                    alt=""
                  />
                </div>
              </div>
              <div class="card-body" className="Card-body">
                <div class="user-meta has-text-centered" className="User-meta">
                  <h3 class="username" className="Username-card">
                    {this.state.projects.Clipper.title}
                  </h3>
                  <h5 class="position" className="Position-card">
                    {this.state.projects.Clipper.lang}
                  </h5>
                </div>
                <div class="user-bio has-text-centered" className="User-bio">
                  <p>{this.state.projects.Clipper.description}</p>
                </div>
                <div class="action has-text-centered" className="Action-card">
                  <a
                    href={this.state.projects.Clipper.link}
                    class="button is-success is-rounded  is-small"
                    target="_blank"
                  >
                    Visit
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-one-quarter" className="Section">
            <div class="card" className="Card">
              <div class="header" className="Header-card">
                <div class="avatar" className="Avatar-card">
                  <img
                    className="Img-card"
                    src={this.state.projects.FilePicker.icon}
                    alt=""
                  />
                </div>
              </div>
              <div class="card-body" className="Card-body">
                <div class="user-meta has-text-centered" className="User-meta">
                  <h3 class="username" className="Username-card">
                    {this.state.projects.FilePicker.title}
                  </h3>
                  <h5 class="position" className="Position-card">
                    {this.state.projects.FilePicker.lang}
                  </h5>
                </div>
                <div class="user-bio has-text-centered" className="User-bio">
                  <p>{this.state.projects.FilePicker.description}</p>
                </div>
                <div class="action has-text-centered" className="Action-card">
                  <a
                    href={this.state.projects.FilePicker.link}
                    class="button is-success is-rounded  is-small"
                    target="_blank"
                  >
                    Visit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PortFolio;
