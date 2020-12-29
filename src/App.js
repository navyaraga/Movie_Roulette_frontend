import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/MainComponent';
import { Link } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    //routing the pages from home page
    //using exact to load with home page on pageload 
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main} /> 
          <Route path="/AboutUs" component={AboutUs} /> 
          <Route path="/ContactUs" component={ContactUs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
