import React, { Component } from 'react';

class PortFolio extends Component {
  state = {
    projects: {
      Manch: {
        icon:
          'https://lh3.googleusercontent.com/lvtw9fohTi3-srvb92ZLWxSCXIH-qfHRWTwJ-q_BNTZlBlMH2IaXS9pPYG2aPyOikeh_=s70-rw',
        title: 'Manch App',
        description:
          'Share, discuss and chat on live topics and news. Beautiful feed based on interests and interact with like minded people and win prizes.',
        link: 'https://play.google.com/store/apps/details?id=com.app.manch',
        lang: 'Java/Kotlin'
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
      },
      Incred: {
        icon:
          'https://lh3.googleusercontent.com/lLwgW0ZxTmxhvCScSVME0zzlNaKxow1pT_1nNVr4JOnaRo6vmjaeUNcms_19toM0yas=s360-rw',
        title: 'Incred Customer',
        description:
          'Now apply for InCred Personal Loans and Manage all your InCred Loan accounts using the InCred App.',
        link: 'https://goo.gl/gy8UCn',
        lang: 'Java'
      },
      IncredSales: {
        icon:
          'https://lh3.googleusercontent.com/Bagw1CM0hQq7kiU_pnZTOciMlWUB1Qs6PtaOuHQtiuEAGQF1G3cOjcD6lT2KNHEW7uQ_=s360-rw',
        title: 'Incred Sales',
        description:
          "InCred's sales app for Two Wheeler Loans. To be used by sales executives to apply for new consumer loans.",
        link: 'https://play.google.com/store/apps/details?id=com.incred.sales',
        lang: 'Java'
      }
    }
  };

  render() {
    return (
      <div
        class="columns is-vcentered"
        className="PortFolio-section"
        id="Portfolio"
      >
        <div class="column is-narrow" className="Portfolio-title">
          <h1 class="title " className="Right-title">
            Portfolio
          </h1>
          <h2 class="title title is-6" className="Right-title-sub">
            (Recent work)
          </h2>
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
                    src={this.state.projects.Incred.icon}
                    alt=""
                  />
                </div>
              </div>
              <div class="card-body" className="Card-body">
                <div class="user-meta has-text-centered" className="User-meta">
                  <h3 class="username" className="Username-card">
                    {this.state.projects.Incred.title}
                  </h3>
                  <h5 class="position" className="Position-card">
                    {this.state.projects.Incred.lang}
                  </h5>
                </div>
                <div class="user-bio has-text-centered" className="User-bio">
                  <p>{this.state.projects.Incred.description}</p>
                </div>
                <div class="action has-text-centered" className="Action-card">
                  <a
                    href={this.state.projects.Incred.link}
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
                    src={this.state.projects.IncredSales.icon}
                    alt=""
                  />
                </div>
              </div>
              <div class="card-body" className="Card-body">
                <div class="user-meta has-text-centered" className="User-meta">
                  <h3 class="username" className="Username-card">
                    {this.state.projects.IncredSales.title}
                  </h3>
                  <h5 class="position" className="Position-card">
                    {this.state.projects.IncredSales.lang}
                  </h5>
                </div>
                <div class="user-bio has-text-centered" className="User-bio">
                  <p>{this.state.projects.IncredSales.description}</p>
                </div>
                <div class="action has-text-centered" className="Action-card">
                  <a
                    href={this.state.projects.IncredSales.link}
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
