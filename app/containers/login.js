'use strict';

import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import Login from '../components/login';
import * as loginActions from '../actions/loginActions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	console.log(" " + state.login.id + " ")
	return {
		namer: state.login.name
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		selectprofilethis: (id, name) => {
			dispatch(loginActions.selectprofile(id, name))
		}
	}
}

const LoginChooser = connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)

export default LoginChooser