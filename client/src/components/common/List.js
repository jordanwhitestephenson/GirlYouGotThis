import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
	root: {
		width: "100%",
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper
	},
	inline: {
		display: "inline"
	}
});

function QuestionList(props) {
	const { classes, dataState } = props;
	if (dataState) {
		return dataState.map((data) => (
			<List className={classes.root}>
				<ListItem alignItems="flex-start">
					<ListItemAvatar>
						<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
					</ListItemAvatar>
					<ListItemText
						primary={data.question}
						secondary={
							<React.Fragment>
								<Typography
									component="span"
									className={classes.inline}
									color="textPrimary">
									{data.message}
								</Typography>
								{" — I'll be in your neighborhood doing errands this…"}
							</React.Fragment>
						}
					/>
				</ListItem>
			</List>
		));
	} else {
		return <div>...loading</div>;
	}
}
QuestionList.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(QuestionList);
