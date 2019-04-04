import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
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
                    labels.indexOf("comfortLevel") == index || labels.indexOf("importanceLevel") == index ? (
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
					) : (
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
			</form>
		);
	}
}

MiniForm.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MiniForm);
