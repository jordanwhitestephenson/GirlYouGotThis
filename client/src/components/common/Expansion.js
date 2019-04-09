import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Spinner from "./Spinner";
import Dialog from "./Dialog";
import axios from "axios";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
	root: {
		width: "100%"
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular
	}
});

class Expansion extends React.Component {
	state = {
		dataState: ""
	};
	componentWillReceiveProps(props) {
		this.setState({
			dataState: this.props.dataState
		});
	}


	handleClick = (event) => {
		axios
			.delete("/api/deleteData", { id: event })
			.then((data) =>
				this.setState({
					dataState: data
				})
			)
			.catch((err) => console.log(err));
	};
	render() {
		const { classes } = this.props;
		var dataState = this.state.dataState;


		if (dataState && dataState.length) {
			const sorted = dataState.sort(function(a, b) {
				var a = a.question.field.toUpperCase();
				var b = b.question.field.toUpperCase();
				if (a < b) {
					return -1;
				}
				if (a > b) {
					return 1;
				}
			});

			const questionObject = sorted.map((data) => ({
				question: data.question,
				id: data._id
			}));

			return questionObject.map((data) => (
				<div className={classes.root} key={data.id}>
					<ExpansionPanel>
						<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
							<Typography className={classes.heading}>
								{data.question.field}
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								<Typography component="h2" variant="display3" gutterBottom>
									{data.question.topic.toUpperCase()}
								</Typography>
								<Typography component="h6" variant="display1" gutterBottom>
									Q: {data.question.question}
								</Typography>
								<h1 />
								<h2>A : {data.question.answer}</h2>
								<p> ComfortLevel :{data.question.comfortLevel} </p>
								<p> Importance Level :{data.question.importanceLevel} </p>
								<a href={data.question.resource}>{data.question.resource}</a>
							</Typography>
						</ExpansionPanelDetails>
						<Dialog questionID={data.id} data={data.question} />
						<Button id={data.id} onClick={(e) => this.handleClick(data.id)}>
							DELETE
						</Button>
					</ExpansionPanel>
				</div>
			));
		} else {
			// return <Spinner />;
			return <Spinner />;
		}
	}
}

Expansion.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Expansion);
