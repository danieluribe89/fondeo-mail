import React, { Component, Fragment } from 'react';
import './App.css';
import MailTray from './components/MailTray';
import MailContent from './components/MailContent';
import { connect } from 'react-redux';
import * as Actions from './actions/Index';
import { bindActionCreators } from 'redux';

class App extends Component { 
  componentDidMount(){
    this.props.actions.InitialCharge();  
  }

  render() {
    return(
      <Fragment>
        <MailTray mails={this.props.mails} ClickMail={this.props.actions.ClickMail}/>
        <MailContent currentMail={this.props.currentMail}/>
      </Fragment>     
    );
  }
}

const mapStateToProps = (state) => {
  return{
    mails: state.mails,
    currentMail: null
  }
}

const mapDispatchToProps = (dispatch) => {  
  return {actions: bindActionCreators(Actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps )(App);