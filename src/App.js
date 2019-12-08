import React from 'react';
import MainPage from './page/mainpage/MainPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoginPage from './page/Login/Loginpage';
import HomePage from './page/HomePage/HomePage';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Router>
          {/* <MainPage></MainPage> */}
          <Switch>
            <Route path='/' exact component={HomePage} />
          </Switch>
          
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
