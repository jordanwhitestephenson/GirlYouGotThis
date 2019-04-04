import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Customers from "./components/customers";
import Dashboard from './components/Dashboard/Dashboard'
import Appbar from './components/AppBar'
class App extends Component {
	render() {
		return (
			<div className="App">
				<Appbar/>
        		<Dashboard/>
			</div>
		);
	}
}

export default App;
