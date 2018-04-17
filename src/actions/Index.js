import MailData from '../api/MailData';

export const INITIAL_CHARGE = 'INITIAL_CHARGE';
export const CLICK_MAIL = 'CLICK_MAIL';

export function InitialCharge(){
    return{
        type: INITIAL_CHARGE,
        mails: {MailData}
    }
};

export function ClickMail(mail){
    return{
        type: CLICK_MAIL,
        currentMail: mail
    }
};