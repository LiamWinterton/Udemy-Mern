import React from "react"
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom"

import Users from "./pages/users"
import Places from "./pages/places"
import UserPlaces from "./pages/places/UserPlaces"

import MainNavigation from "./components/global/Navigation/MainNavigation"

const App = () => {
	return (
		<Router>
			<MainNavigation />
			<main>
				<Switch>
					<Route path="/" exact component={Users} />
					<Route path="/places/new" exact component={Places} />
					<Route path="/:userID/places" exact component={UserPlaces} />
					<Redirect to="/" />
				</Switch>
			</main>
		</Router>
	)
}

export default App
