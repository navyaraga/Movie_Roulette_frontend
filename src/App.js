import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/MainComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/AboutUs">
            <AboutUs/>
          </Route>
          <Route path="/ContactUs">
            <ContactUs/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
