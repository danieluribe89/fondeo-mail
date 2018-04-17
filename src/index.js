import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import Reducers from './reducers/Reducers';
import { Provider } from 'react-redux';

const store = createStore(Reducers);

ReactDOM.render(
    <Provider store={store}><App /></Provider>, 
    document.getElementById('root')
);