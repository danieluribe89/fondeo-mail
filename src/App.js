import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MailTray from './Components/MailTray'
import MailContent from './Components/MailContent'

class App extends Component {
  render() {
    return(
      <div>
        <MailTray/>
        <MailContent/>
      </div>
    );
  }
}

export default App;