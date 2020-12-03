import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { Loader, PrivateRoute } from './components/common';
import { Login, Register, Home, Films, Starships, Vehicules, Species, Planets, People } from './pages';

const Routes = ( { isLoaderVisible } )=> (
	<Router>
		<Switch>
			{ isLoaderVisible && <Loader /> } 
			<Route path='/home' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <PrivateRoute path='/films' component={Films} />
      <PrivateRoute path='/starships' component={Starships} />
      <PrivateRoute path='/vehicules' component={Vehicules} />
      <PrivateRoute path='/species' component={Species} />
      <PrivateRoute path='/planets' component={Planets} />
      <PrivateRoute path='/people' component={People} />
			<Redirect to="/home" />
		</Switch>
	</Router>
)

const stateToProps = state => state.main;

export default connect( stateToProps )(Routes);