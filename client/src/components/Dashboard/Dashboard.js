import React, { Component } from "react";
import axios from "axios";
import Expansion from "../common/Expansion";
import Spinner from "../common/Spinner";
import FormDialog from "../common/Form";

export default class Dashboard extends Component {
	state = {
		data: [],
		intervalIsSet: false
	};
	componentWillMount() {
		this.getDataFromDb();
		if (!this.state.intervalIsSet) {
			let interval = setInterval(this.getDataFromDb, 5000);
			this.setState({ intervalIsSet: interval });
		}
	}

	getDataFromDb = () => {
		axios
			.get("/api/getData")
			.then((res) => this.setState({ data: res.data.data }))
			.catch((err) => console.log(err));
	};

	componentWillUnmount() {
		if (this.state.intervalIsSet) {
			clearInterval(this.state.intervalIsSet);
			this.setState({ intervalIsSet: null });
		}
	}

	render() {
		var dataState = this.state.data;

		if (dataState) {
			return (
				<div>
					<div style={{ padding: "20px", maxWidth: "75%", margin: "auto" }}>
						<Expansion dataState={this.state.data} />
					</div>
					<FormDialog />
				</div>
			);
		} else {
			return <Spinner />;
		}
	}
}
