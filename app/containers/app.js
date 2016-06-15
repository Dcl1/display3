import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';
import LoginApp from './login';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

module.exports = React.createClass({
	render: function() {
		return (
			<Provider store={store} >
				<LoginApp />
			</Provider>
		);
	}
});