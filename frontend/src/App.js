import React from "react"
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"

import Users from "./pages/users"
import Places from "./pages/places"

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Users} />
				<Route path="/places/new" exact component={Places} />
				<Redirect to="/" />
			</Switch>
		</Router>
	)
}

export default App
