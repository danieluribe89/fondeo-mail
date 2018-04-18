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
    this.startInterval();
  }

  startInterval() {
    var x = 0;
    var intervalID = setInterval( () => {
      
      this.props.actions.addNewMail(x);

      if (x++ === 3) {
        clearInterval(intervalID);
      }
    }, 9000);
  }
     

  render() {
    if(this.props.mails.mails.MailData !== undefined){
      return(
        <Fragment>
          <MailTray currentMail={this.props.mails.currentMail} mails={this.props.mails.mails.MailData.filter((mail) => this.props.mails.mailFilter === mail.target)} 
            actions={this.props.actions} mailFilter={this.props.mails.mailFilter}/>
          <MailContent currentMail={this.props.mails.currentMail} actions={this.props.actions}/>
        </Fragment>     
      );
    }
    return(
      <Fragment>
        <MailTray currentMail={this.props.mails.currentMail} mails={this.props.mails.mails.MailData} 
          ClickMail={this.props.actions.ClickMail} mailFilter={this.props.mails.mailFilter}/>
        <MailContent currentMail={this.props.mails.currentMail} actions={this.props.actions}/>
      </Fragment>     
    );
  }
}

const mapStateToProps = (state) => {
  return{
    mails: state.mails,
    currentMail: state.currentMail,
    mailFilter: state.mailFilter
  }
}

const mapDispatchToProps = (dispatch) => {  
  return {actions: bindActionCreators(Actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps )(App);