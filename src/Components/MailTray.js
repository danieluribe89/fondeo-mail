import React, { Component } from 'react';
import inbox from '../img/inbox.png';
import trash from '../img/trash.png';
import spam from '../img/spam.png';
import user from '../img/user.png';
import MailCard from './MailCard';

class MailTray extends Component{
    renderMailList(){        
        if(this.props.mails.mails && this.props.mails.mails.MailData.length > 0){
            const render = this.props.mails.mails.MailData.map((mail,i) => <MailCard ClickMail={this.props.ClickMail} mail={mail} key={i}/>);
            return render;                
        };
    }

    render(){
        return(
            <div className="mail-panel">
                <div className="options-panel">
                    <div className="manage-options"><img alt="" className="img-panel-mail-options" src={inbox}/>Inbox</div>
                    <div className="manage-options"><img alt="" className="img-panel-mail-options" src={trash}/>Trash</div>
                    <div className="manage-options"><img alt="" className="img-panel-mail-options" src={spam}/>Spam</div>
                </div>
                <div>
                    { this.renderMailList() }
                </div>
            </div>
        );
    }
}

export default MailTray;