import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import { render } from 'react-dom';

import Screenshot_1 from './assets/Screenshot_1.png';
import Screenshot_2 from './assets/Screenshot_2.png';
import Screenshot_3 from './assets/Screenshot_3.png';
import Screenshot_4 from './assets/Screenshot_4.png';
import Screenshot_5 from './assets/Screenshot_5.png';
import Screenshot_6 from './assets/Screenshot_6.png';
import Screenshot_7 from './assets/Screenshot_7.png';
import Screenshot_8 from './assets/Screenshot_8.png';
import Screenshot_10 from './assets/Screenshot_10.png';

const photos = [
  { src: Screenshot_1, width: 1, height: 1 },
  { src: Screenshot_2, width: 1, height: 1 },
  { src: Screenshot_3, width: 1, height: 1 },
  { src: Screenshot_4, width: 1, height: 1 },
  { src: Screenshot_5, width: 1, height: 1 },
  { src: Screenshot_6, width: 1, height: 1 },
  { src: Screenshot_7, width: 1, height: 1 },
  { src: Screenshot_8, width: 1, height: 1 },
  { src: Screenshot_10, width: 1, height: 1 }
];

class Footer extends Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }

  render() {
    return (
      <div class="columns" className="Footer-section">
        <div class="column">
          <div class="column" className="Footer-social-title">
            <h1>Gallery</h1>
            <h2 class="subtitle" className="Right-title-sub">
              (Some design samples)
            </h2>
          </div>
          <div class="column" className="image-gallery-slide">
            <Gallery
              photos={photos}
              onClick={this.openLightbox}
              direction={'row'}
            />
            <Lightbox
              images={photos}
              onClose={this.closeLightbox}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
            />
          </div>
        </div>
        <div class="column" className="footer-social-margin">
          <footer class="footer">
            <div>
              Inspired by{' '}
              <a href="https://dribbble.com/chillingmantis">Chilling Mantis</a>
            </div>
            <div class="content has-text-centered">
              <p>
                Copyright @ 2019{' '}
                <strong>
                  <a href="">vikas.dev</a>
                </strong>{' '}
                The source code is licensed under
                <a href="http://opensource.org/licenses/mit-license.php">
                  {' '}
                  MIT{' '}
                </a>
                . The website content is licensed{' '}
                <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                  CC BY NC SA 4.0
                </a>
                .
              </p>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Footer;
