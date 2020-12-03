import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component, ...rest }) => (
	localStorage.getItem('id_user') ? 
        <Route {...rest} component={component} /> :
        <Redirect to='/register' />
)

export default PrivateRoute;