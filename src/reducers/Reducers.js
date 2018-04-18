import { combineReducers } from 'redux';
import * as Consts from '../actions/Index';

const InitialState = {
    mails: [],
    currentMail: {},
    mailFilter: Consts.INBOX
}

function MailReducer(state = InitialState, action){
    switch (action.type){
        case Consts.INITIAL_CHARGE:       
            return Object.assign({}, state, { mails: action.mails });
        case Consts.CLICK_MAIL:
            if(!action.currentMail.isReaded){
                const newMails = [...state.mails.MailData]
                newMails[state.mails.MailData.indexOf(action.currentMail)].isReaded = true; 
                const mails = { MailData: newMails};
                return  Object.assign({}, state, { currentMail: action.currentMail, mails: mails });
            }
            return Object.assign({}, state, { currentMail: action.currentMail });
        case Consts.SHOW_INBOX:
            return Object.assign({}, state, { mailFilter: action.mailFilter, currentMail: {} });
        case Consts.SHOW_TRASH:
            return Object.assign({}, state, { mailFilter: action.mailFilter, currentMail: {} });
        case Consts.SHOW_SPAM:
            return Object.assign({}, state, { mailFilter: action.mailFilter, currentMail: {} });
        case Consts.MARK_UNREAD:
            const newMails2 = [...state.mails.MailData]
            newMails2[state.mails.MailData.indexOf(action.currentMail)].isReaded = false; 
            const mails2 = { MailData: newMails2};
            return  Object.assign({}, state, { currentMail: {}, mails: mails2 });
        case Consts.MARK_TRASH:
            const newMails3 = [...state.mails.MailData]
            newMails3[state.mails.MailData.indexOf(action.currentMail)].target = Consts.TRASH; 
            const mails3 = { MailData: newMails3};
            return  Object.assign({}, state, { currentMail: {}, mails: mails3 });
        case Consts.MARK_SPAM:
            const newMails4 = [...state.mails.MailData]
            newMails4[state.mails.MailData.indexOf(action.currentMail)].target = Consts.SPAM; 
            const mails4 = { MailData: newMails4};
            return  Object.assign({}, state, { currentMail: {}, mails: mails4 });
        case Consts.ADD_NEW_MAIL:            
            const newMails5 = [...state.mails.MailData];
            newMails5.unshift(action.mail);     
            const mails5 = { MailData: newMails5};
            return Object.assign({}, state, { currentMail: {}, mails: mails5 });
        default:
            return state;
    }
}

const Reducers = combineReducers({
    mails: MailReducer
});

export default Reducers;