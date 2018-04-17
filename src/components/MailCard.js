import React, { Component } from 'react';
import user from '../img/user.png';
import circle from '../img/circle.png'; 

class MailCard extends Component{    
    render(){
        return(
            <div className="mail-card" onClick={() => this.props.ClickMail(this.props.mail)}>
                <div className="mail-card-sender">
                   <img alt="" className="img-panel-mail-options" src={user}/>
                   { this.props.mail.from }                    
                </div>
                <div className="mail-card-date">{ this.props.mail.date }</div>
                <div className="mail-card-subject">{ !this.props.mail.isReaded ? <div className="img-unreaded" src={circle}/> : '' } { this.props.mail.subject }</div>                                           
                <div className="mail-card-description">{ this.props.mail.body.substr(1, 60) }</div>
            </div>
        );
    }
}

export default MailCard;
    