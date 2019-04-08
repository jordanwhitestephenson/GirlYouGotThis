import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import DropDown from '../common/Dropdown'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
const styles = (theme) => ({
	container: {
		display: "flex",
		flexWrap: "wrap"
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit
	},
	dense: {
		marginTop: 16
	},
	menu: {
		width: 200
	}
});

class MiniForm extends React.Component {
	state = {
		field: "Javascript",
		question:
			"How would you right a function to figure out the score of a bowling game?",
		answer: "blah blah blah",
		topic: "coding exercise",
		resource: "www.frontendmasters.com",
		comfortLevel: 5,
		importanceLevel: 10
	};

	handleChange = (name) => (event) => {
		this.setState({
			[name]: event.target.value
		});
	};
	addType = (value) => {
		this.setState({
			field: value
		})
	}
	handleClose = () => {
		let dataObject = {
			field: this.state.field,
			question: this.state.question,
			answer: this.state.answer,
			topic: this.state.topic,
			resource: this.state.resource,
			comfortLevel: this.state.comfortLevel,
			importanceLevel: this.state.importanceLevel
		};
		this.props.addQuestion(dataObject);
		this.props.handleClose();
	};

	render() {
		const { classes } = this.props;
		let labels = [
			"field",
			"question",
			"answer",
			"topic",
			"resource",
			"comfortLevel",
			"importanceLevel"
		];

		return (
			<form className={classes.container} noValidate autoComplete="off">
				{labels.map((label, index) =>
					labels.indexOf("comfortLevel") == index ||
					labels.indexOf("importanceLevel") == index ? (
						<TextField
							id="outlined-full-width"
							label={label}
							style={{ margin: 8 }}
							fullWidth
							type="number"
							value={this.state[label]}
							margin="normal"
							variant="outlined"
							InputLabelProps={{
								shrink: true
							}}
							onChange={this.handleChange([label])}
						/>
						) : label === "field" ?
					
							<DropDown addType={this.addType}/>
					
						: (
						<TextField
							id="outlined-full-width"
							label={label}
							style={{ margin: 8 }}
							fullWidth
							value={this.state[label]}
							margin="normal"
							variant="outlined"
							InputLabelProps={{
								shrink: true
							}}
							onChange={this.handleChange([label])}
						/>
					)
				)}
				<Button onClick={this.handleClose} color="primary">
					Add to List
				</Button>
			</form>
		);
	}
}

MiniForm.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MiniForm);
