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

const styles = (theme) => ({
	root: {
		width: "100%"
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular
	}
});

function Expansion(props) {
	const { classes, dataState } = props;


	if (dataState && dataState.length) {
		const questionObject = dataState.map((data) => ({
			question: data.question,x
			id: data._id
		}));

		return questionObject.map((data) => (
			<div  className={classes.root} key={data.id}>
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
					<Dialog questionID={data.id} data= {data.question} />
				</ExpansionPanel>
			
	
			</div>
		));
	} else {
		// return <Spinner />;
		return <Spinner />;
	}
}

Expansion.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Expansion);
