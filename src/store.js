import {applyMiddleware, createStore, compose} from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './reducers';

// use this commented line to get a console.log with detailed info about the states and actions being run

// const middleware = applyMiddleware(promise(), thunk, logger());
const middleware = applyMiddleware(promise(), thunk);

export default createStore(reducer, compose(middleware));