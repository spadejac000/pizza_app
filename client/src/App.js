import React, { Component } from 'react';
import NavMenu from './components/NavMenu';
import './App.css';
import {Provider} from './context';
import Routes from './components/Routes';

class App extends Component {

  render() {
    return (
      <Provider>
        <div className="App">
            <NavMenu/>
            <Routes />
        </div>
      </Provider>
    );
  }
}

export default App;
