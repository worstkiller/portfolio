import React, { Component } from 'react';
import twitter from './assets/twitter.svg';
import linkedIn from './assets/linkedin.svg';
import github from './assets/github.svg';
import stackoverflow from './assets/overflowing.svg';

class Header extends Component {
  render() {
    function handleClick(e) {
      var elmnt = document.getElementById(e.target.text);
      elmnt.scrollIntoView(true);
    }

    return (
      <div class="columns" className="App-header">
        <div class="column is-3" className="App-logo">
          vikas.dev
        </div>
        <div class="column is-3" className="App-menu">
          <ul>
            <li>
              <a onClick={handleClick}>About</a>
            </li>
            <li>
              <a onClick={handleClick}>Portfolio</a>
            </li>
            <li>
              <a onClick={handleClick}>Tech</a>
            </li>
            <li>
              <a onClick={handleClick}>Blog</a>
            </li>
            <li>
              <a onClick={handleClick}>Gallery</a>
            </li>
          </ul>
        </div>
        <div class="column is-6">
          <ul>
            <li>
              <a href="https://twitter.com/vikaskum09" target="_blank">
                <img src={twitter} height="20" width="20" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/vikaskumar09/"
                target="_blank"
              >
                <img src={linkedIn} height="20" width="20" />
              </a>
            </li>
            <li>
              <a href="https://github.com/worstkiller" target="_blank">
                <img src={github} height="20" width="20" />
              </a>
            </li>
            <li>
              <a
                href="https://stackoverflow.com/users/4517450/vikas-kumar"
                target="_blank"
              >
                <img src={stackoverflow} height="20" width="20" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
