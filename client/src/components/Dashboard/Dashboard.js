import React, { Component } from "react";
import axios from "axios";
import Expansion from "../common/Expansion";

import FormDialog from "../common/Form";

export default class Dashboard extends Component {
	state = {
		data: [],
		intervalIsSet: false
	};
	componentDidMount() {
		this.getDataFromDb();
		if (!this.state.intervalIsSet) {
			let interval = setInterval(this.getDataFromDb, 1000);
			this.setState({ intervalIsSet: interval });
		}
	}

	getDataFromDb = () => {
		axios
			.get("/api/getData")
			.then((res) => this.setState({ data: res.data }))
			.catch((err) => console.log(err));
	};
	addQuestion = (e) => {
		axios
			.post("/api/putData", { id: "1", message: "yes" })
			.then((data) => console.log(data, "data"))
			.catch((err) => console.log(err));
	};
	componentWillUnmount() {
		if (this.state.intervalIsSet) {
			clearInterval(this.state.intervalIsSet);
			this.setState({ intervalIsSet: null });
		}
	}

	render() {
		var dataState = this.state.data.data;
		return (
			<div>
				<div style={{ padding: "20px", maxWidth: "75%", margin: "auto" }}>
					<Expansion dataState={dataState} />
				</div>
                <FormDialog />
		
			</div>
		);
	}
}