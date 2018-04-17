import { combineReducers } from 'redux';
import * as Consts from '../actions/Index';

function MailReducer(state = [], action){
    switch (action.type){
        case Consts.INITIAL_CHARGE:           
            return Object.assign({}, state, { mails: action.mails });
        case Consts.CLICK_MAIL:
            return Object.assign({}, state, { currentEmail: action.currentMail });
        default:
            return state;
    }
}

const Reducers = combineReducers({
    mails: MailReducer
});

export default Reducers;