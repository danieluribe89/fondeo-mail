import MailData from '../api/MailData';
import MailExtras from '../api/MailExtras';

export const INITIAL_CHARGE = 'INITIAL_CHARGE';
export const CLICK_MAIL = 'CLICK_MAIL';
export const SHOW_INBOX = 'SHOW_INBOX';
export const SHOW_TRASH = 'SHOW_TRASH';
export const SHOW_SPAM = 'SHOW_SPAM';
export const INBOX = 'INBOX';
export const TRASH = 'TRASH';
export const SPAM = 'SPAM';
export const MARK_UNREAD = 'MARK_UNREAD';
export const MARK_TRASH = 'MARK_TRASH'; 
export const MARK_SPAM = 'MARK_SPAM'; 
export const ADD_NEW_MAIL = 'ADD_NEW_MAIL';

export function InitialCharge(){
    return{
        type: INITIAL_CHARGE,
        mails: {MailData}
    }
};

export function ClickMail(mail, index){
    return{
        type: CLICK_MAIL,
        currentMail: mail
    }
};

export function ShowInbox(){
    return{
        type: SHOW_INBOX,
        mailFilter: INBOX
    }
}

export function ShowTrash(){
    return{
        type: SHOW_TRASH,
        mailFilter: TRASH
    }
}

export function ShowSpam(){
    return{
        type: SHOW_SPAM,
        mailFilter: SPAM
    }
}

export function MarkUnread(mail){
    return{
        type: MARK_UNREAD,
        currentMail: mail
    }
}

export function MarkTrash(mail){
    return{
        type: MARK_TRASH,
        currentMail: mail
    }
}

export function MarkSpam(mail){
    return{
        type: MARK_SPAM,
        currentMail: mail
    }
}

export function addNewMail(num){
    return{
        type: ADD_NEW_MAIL,
        mail: MailExtras[num] 
    }
}