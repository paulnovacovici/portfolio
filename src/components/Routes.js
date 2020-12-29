import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Home";

export default function App() {
	return (
			<Switch>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
	);
}