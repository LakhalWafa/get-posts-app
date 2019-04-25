import React, { Component } from 'react';
import './App.css';
import Posts from './Components/Posts';
import Postform from './Components/Postform';
import NavBar from './Components/NavBar';
import BackToTop from 'react-back-to-top-button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div id="form" className="container mb-5">
          <Postform />
        </div>
        <div id="posts" className="container">
          {' '}
          <Posts />
        </div>

        <BackToTop showAt={100} speed={1000} easing="easeInOutQuint">
          <i class="fas fa-chevron-circle-up" />
        </BackToTop>
      </div>
    );
  }
}

export default App;
