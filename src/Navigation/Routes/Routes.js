import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Routes = ({ routes }) => {
	const routesElement = routes.map((route) => (
		<Route
			key={route.path}
			path={route.path}
			exact={route.exact}
			render={(props) => <route.component {...props} routes={route.routes} />}
		/>
	));
	return <Switch>{routesElement}</Switch>;
};

export default Routes;
