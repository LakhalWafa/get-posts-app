import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <Link
            className="navbar-brand"
            onClick={this.scrollToTop}
            style={{ color: 'white', cursor: 'pointer' }}
          >
            My Posts
          </Link>
          <button
            style={{ cursor: 'pointer' }}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  style={{ cursor: 'pointer' }}
                  className="nav-link"
                  activeClass="active"
                  to="form"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Form{' '}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{ cursor: 'pointer' }}
                  className="nav-link"
                  activeClass="active"
                  to="posts"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Posts{' '}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
