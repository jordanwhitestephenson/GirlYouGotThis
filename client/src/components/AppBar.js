import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";

import TemporaryDrawer from "./Drawer";

const styles = {
	root: {
		flexGrow: 1
	},
	grow: {
		flexGrow: 1
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	}
};

function Appbar(props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<TemporaryDrawer />
					<Typography variant="h6" color="inherit" className={classes.grow}>
						Tech Prep
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}

Appbar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Appbar);
