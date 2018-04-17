import React, { Component } from 'react';
import circle from '../img/circle.png'; 
import trash from '../img/trash.png';
import spam from '../img/spam.png';
import {connect} from 'react-redux';

class MailContent extends Component{
    renderMailContent(){
        if(this.props.currentMail){
            return(
                <div>
                    <div className="mail-section-subject">{this.props.currentMail.subject}</div>
                    <div className="mail-section-actions">
                        <img alt="" className="img-mail-actions" src={circle}/>
                        <img alt="" className="img-mail-actions" src={trash}/>
                        <img alt="" className="img-mail-actions" src={spam}/>
                    </div>
                    <div className="mail-section-content">
                        <div className="mail-body-sender">
                        {this.props.currentMail.subject} <a className="link">{this.props.currentMail.from}</a><br/><br/>
                        </div>
                        <div className="mail-body-date">
                            {this.props.date}
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

const mapStateToProps = (state) => {
    return{
      currentMail: state.currentMail
    }
  }

export default connect(mapStateToProps)(MailContent);