import React, { Component } from 'react';

// Router
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import indexRoutes from './routes';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

class App extends Component {
	render() {
		return (

			<Router history={history} >
				<Switch>
					{
						indexRoutes.map((route, index) => {

							if(route.redirect){
								return <Redirect from={route.path} to={route.pathTo} key={index} />
							}

							return <Route sensitive exact path={route.path} key={index} component={route.component} />
						})
					}
				</Switch>
			</Router>

		);
	}
}

export default App;