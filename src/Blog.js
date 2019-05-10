import React, { Component } from 'react';

class Blog extends Component {
  state = {
    blogs: [
      {
        title: 'ANDROID DEBUG BRIDGE (ADB) | THE ANDROID DEVELOPMENT TOOLS',
        url:
          'http://www.androidbuffer.com/2018/01/android-debug-bridge-adb-android.html',
        thumb:
          'https://3.bp.blogspot.com/-IWnB96a3IpI/WmYNlJ_lJ5I/AAAAAAAAADg/6CUlgATGJtYVwrJeTq5lzo1PxAQb2oJtQCLcBGAs/s640/android_buffer_adb_command.png',
        description:
          'The most used tool for Android development but least we know about it. It makes our day to day debugging and installing application easier ...'
      },
      {
        title: 'DESIGN INSPIRATION PASSWORDLESS AUTHENTICATION',
        url:
          'http://www.androidbuffer.com/2017/09/design-inspiration-passwordless.html',
        thumb:
          'https://1.bp.blogspot.com/-FXGlCBiKxuE/Waxa9GrbFeI/AAAAAAAAADA/3SEwhqHn4Z0JBpTAVUMJNAR2GhaINKM2gCLcBGAs/s640/design_inspiration_androidbuffer.png',
        description:
          'We all love material design inspired android screens. Today we will be creating a simple android app which shows the UI part for passwordless authentication with material design ...'
      },
      {
        title: 'PUSH PULL WITH AWS CODECOMMIT IN ANDROID STUDIO',
        url:
          'http://www.androidbuffer.com/2018/01/android-debug-bridge-adb-android.html',
        thumb:
          'https://1.bp.blogspot.com/-c1QcNkk-gHE/WXzmIZnyYJI/AAAAAAAAABk/CcXaUjYg2lAMh3nl8VbCYgiv5PaOhLIZACLcBGAs/s1600/codeCommit.png',
        description:
          "We all know as an android developer how to create a project in the android studio, it's pretty easy just a few clicks and you are done ..."
      }
    ]
  };

  render() {
    return (
      <div class="columns" className="PortFolio-section">
        <div class="column" className="Tech-title">
          <h1 class="title " className="Right-title">
            Blog
          </h1>
          <h2 class="title title is-6" className="Right-title-sub">
            (Last blog update)
          </h2>
        </div>

        <div class="column" className="Blog-display">
          <div class="card" className="Card-blog">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src={this.state.blogs[0].thumb} alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-6">
                    {this.state.blogs[0].title.toLowerCase()}
                  </p>
                </div>
              </div>
              <br />
              <div class="content">
                {this.state.blogs[0].description}
                <br />
              </div>
              <br />
              <a class="button is-primary is-rounded">Read Now</a>
            </div>
          </div>

          <div class="card" className="Card-blog">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src={this.state.blogs[1].thumb} alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-6">
                    {this.state.blogs[1].title.toLowerCase()}
                  </p>
                </div>
              </div>
              <br />
              <div class="content">
                {this.state.blogs[1].description}
                <br />
              </div>
              <br />
              <a class="button is-primary is-rounded">Read Now</a>
            </div>
          </div>

          <div class="card" className="Card-blog">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src={this.state.blogs[2].thumb} alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-6">
                    {this.state.blogs[2].title.toLowerCase()}
                  </p>
                </div>
              </div>
              <br />
              <div class="content">
                {this.state.blogs[2].description}
                <br />
              </div>
              <br />
              <a class="button is-primary is-rounded">Read Now</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
