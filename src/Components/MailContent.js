import React, { Component } from 'react';
import circle from '../img/circle.png'; 
import trash from '../img/trash.png';
import spam from '../img/spam.png';

class MailContent extends Component{
    renderMailContent(){
        if(this.props.currentMail.subject){
            return(
                <div>
                    <div className="mail-section-subject">{this.props.currentMail.subject}</div>
                    <div className="mail-section-actions">
                        <img alt="" className="img-mail-actions" src={circle} onClick={() => { if (window.confirm('Are you sure you wish to mark as unread?')) this.props.actions.MarkUnread(this.props.currentMail) }} />
                        <img alt="" className="img-mail-actions" src={trash} onClick={() => { if (window.confirm('Are you sure you wish to send to trash?')) this.props.actions.MarkTrash(this.props.currentMail) }} />
                        <img alt="" className="img-mail-actions" src={spam} onClick={() => { if (window.confirm('Are you sure you wish to send to spam?')) this.props.actions.MarkSpam(this.props.currentMail) }} />
                    </div>
                    <div className="mail-section-content">
                        <div className="mail-body-sender">
                        {this.props.currentMail.subject} <a className="link">{this.props.currentMail.from}</a><br/><br/>
                        </div>
                        <div className="mail-body-date">
                            {this.props.currentMail.date}
                        </div><br/>			
                        {this.props.currentMail.body}
                    </div>
                </div>);
        }
    }

    render(){
        return(
            <div className="mail-section">
                { this.renderMailContent() }
            </div>
        );
    }
}

export default MailContent;