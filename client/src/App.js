import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Home from './components/pages/Home';
import Menu from './components/pages/Menu';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavMenu/>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
        </header>
      </div>
    </Router>
  );
}

export default App;
