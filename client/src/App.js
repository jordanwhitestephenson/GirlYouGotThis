import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Appbar from "./components/AppBar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AllQuestions from "./components/AllQuestions";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Appbar />
					<Route exact path="/" component={Dashboard} />
					<Route path="/allquestions" component={AllQuestions} />
					{/* <Route path="/code" component={CodeEditor} /> */}
				</Router>
			</div>
		);
	}
}

export default App;
