import React, { Component } from 'react';

// custom componenets
import Navigation from './components/Navigation';
import HeaderHero from './components/HeaderHero';

// bring in the css
import './App.sass';

// main application control
class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <HeaderHero />
      </>
    );
  }
}

export default App;
