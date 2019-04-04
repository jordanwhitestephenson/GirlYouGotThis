import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MiniForm from "../common/miniForm";
import Fab from "@material-ui/core/Fab";

import AddIcon from "@material-ui/icons/Add";

class FormDialog extends React.Component {
	state = {
		open: false
	};

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	render() {
		return (
			<div>
				<Button onClick={this.handleClickOpen}>
					<Fab color="primary">
						<AddIcon />
					</Fab>
				</Button>
				<Dialog
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby="draggable-dialog-title">
					<DialogTitle id="draggable-dialog-title">Subscribe</DialogTitle>
					<DialogContent>
						<DialogContentText>
                            <MiniForm />
						</DialogContentText>
					</DialogContent>

					<DialogActions>
						<Button onClick={this.handleClose} color="primary">
							Add to List
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default FormDialog;
