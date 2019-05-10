import React, { Component } from 'react';
import twitter from './twitter.svg';
import linkedIn from './linkedin.svg';
import github from './github.svg';

class Header extends Component {
  render() {
    return (
      <div class="columns" className="App-header">
        <div class="column is-3" className="App-logo">
          vikas.dev
        </div>
        <div class="column is-3" className="App-menu">
          <ul>
            <li>
              <a href="#home">About</a>
            </li>
            <li>
              <a href="#home">Portfolio</a>
            </li>
            <li>
              <a href="#home">Tech</a>
            </li>
            <li>
              <a href="#home">Blog</a>
            </li>
            <li>
              <a href="#home">Gallery</a>
            </li>
          </ul>
        </div>
        <div class="column is-6">
          <ul>
            <li>
              <a href="#home">
                <img src={twitter} height="20" width="20" />
              </a>
            </li>
            <li>
              <a href="#home">
                <img src={linkedIn} height="20" width="20" />
              </a>
            </li>
            <li>
              <a href="#home">
                <img src={github} height="20" width="20" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
