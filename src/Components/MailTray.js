import React, { Component } from 'react';
import inbox from '../img/inbox.png';
import trash from '../img/trash.png';
import spam from '../img/spam.png';
import user from '../img/user.png';

class MailTray extends Component{
    render(){
        return(
            <div className="mail-panel">
                <div className="options-panel">
                    <div className="manage-options"><img alt="" className="img-panel-mail-options" src={inbox}/>Inbox</div>
                    <div className="manage-options"><img alt="" className="img-panel-mail-options" src={trash}/>Trash</div>
                    <div className="manage-options"><img alt="" className="img-panel-mail-options" src={spam}/>Spam</div>
                </div>
                <div>
                    <div className="mail-card">
                        <div className="mail-card-sender">
                            <img alt="" className="img-panel-mail-options" src={user}/>
                            Amazon.com
                        </div>
                        <div className="mail-card-date">May 9</div>
                        <div className="mail-card-subject">¿Qué es Lorem Ipsum?</div>
                        <div className="mail-card-description">Lorem Ipsum es simplemente el texto de relleno</div>
                    </div>
                    <div className="mail-card selected">
                        <div className="mail-card-sender">
                            <img alt="" className="img-panel-mail-options" src={user}/>
                            Amazon.com
                        </div>
                        <div className="mail-card-date">May 9</div>
                        <div className="mail-card-subject">¿Qué es Lorem Ipsum?</div>
                        <div className="mail-card-description">Lorem Ipsum es simplemente el texto de relleno</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MailTray;