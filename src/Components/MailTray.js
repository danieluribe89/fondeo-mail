import React, { Component } from 'react';
import inbox from '../img/inbox.png';
import trash from '../img/trash.png';
import spam from '../img/spam.png';
import user from '../img/user.png';
import MailCard from './MailCard';
import { INBOX,TRASH,SPAM } from '../actions/Index';

class MailTray extends Component{
    renderMailList(){
        if(this.props.mails !== undefined && this.props.mails.length){
            const render = this.props.mails.map((mail, i) => {
            if(mail === this.props.currentMail){        
                return (
                    <div className="selected" key={i}>
                        <MailCard ClickMail={this.props.actions.ClickMail} mail={mail} key={i}/>
                    </div> 
                )
            }
            return <MailCard ClickMail={this.props.actions.ClickMail} mail={mail} key={i}/>
        });              
            return render;                
        };
    }

    renderNav(){
        switch (this.props.mailFilter){
            case INBOX:
                return(
                    <div>
                        <div className="manage-options blue" onClick={() => this.props.actions.ShowInbox()}><img alt="" className="img-panel-mail-options" src={inbox}/>Inbox</div>
                        <div className="manage-options" onClick={() => this.props.actions.ShowTrash()}><img alt="" className="img-panel-mail-options" src={trash}/>Trash</div>
                        <div className="manage-options" onClick={() => this.props.actions.ShowSpam()}><img alt="" className="img-panel-mail-options" src={spam}/>Spam</div>
                    </div>
                );
            case TRASH:
                return(
                    <div>
                        <div className="manage-options" onClick={() => this.props.actions.ShowInbox()}><img alt="" className="img-panel-mail-options" src={inbox}/>Inbox</div>
                        <div className="manage-options blue" onClick={() => this.props.actions.ShowTrash()}><img alt="" className="img-panel-mail-options" src={trash}/>Trash</div>
                        <div className="manage-options" onClick={() => this.props.actions.ShowSpam()}><img alt="" className="img-panel-mail-options" src={spam}/>Spam</div>
                    </div>
                );
            case SPAM:
                return(
                    <div>
                        <div className="manage-options" onClick={() => this.props.actions.ShowInbox()}><img alt="" className="img-panel-mail-options" src={inbox}/>Inbox</div>
                        <div className="manage-options" onClick={() => this.props.actions.ShowTrash()}><img alt="" className="img-panel-mail-options" src={trash}/>Trash</div>
                        <div className="manage-options blue" onClick={() => this.props.actions.ShowSpam()}><img alt="" className="img-panel-mail-options" src={spam}/>Spam</div>
                    </div>
                );
            default :
                return(
                    <div>
                        <div className="manage-options blue" onClick={() => this.props.actions.ShowInbox()}><img alt="" className="img-panel-mail-options" src={inbox}/>Inbox</div>
                        <div className="manage-options" onClick={() => this.props.actions.ShowTrash()}><img alt="" className="img-panel-mail-options" src={trash}/>Trash</div>
                        <div className="manage-options" onClick={() => this.props.actions.ShowSpam()}><img alt="" className="img-panel-mail-options" src={spam}/>Spam</div>
                    </div>
                );
        }
    }

    render(){
        return(
            <div className="mail-panel">
                <div className="options-panel">
                    { this.renderNav() }
                </div>
                <div>
                    { this.renderMailList() }
                </div>
            </div>
        );
    }
}

export default MailTray;