import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = (theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap"
	},
	formControl: {
		margin: theme.spacing.unit,
		minWidth: 120
	},
	selectEmpty: {
		marginTop: theme.spacing.unit * 2
	}
});

class SimpleSelect extends React.Component {
	state = {
		type: "",
	};

	componentDidMount() {
		this.setState({
			labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
		});
	}

	handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        this.props.addType(this.state.type)
	};

	render() {
        const { classes } = this.props;
        
		return (
			<form className={classes.root} autoComplete="off">
				<FormControl className={classes.formControl}>
					<InputLabel
						ref={(ref) => {
							this.InputLabelRef = ref;
						}}
						htmlFor="outlined-age-simple"
					/>
					<Select
						value={this.state.type}
						onChange={this.handleChange}
						input={<Input name = "type" id="age-helper" />}>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value='javascript'>Javascript Knowledge</MenuItem>
						<MenuItem value='coding'>Coding Excercises</MenuItem>
                        <MenuItem value='react'>React Knowledge</MenuItem>
						<MenuItem value='CS'>Computer Science Knowledge</MenuItem>
					</Select>
					<FormHelperText>Some important helper text</FormHelperText>
				</FormControl>
			</form>
		);
	}
}

SimpleSelect.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleSelect);
