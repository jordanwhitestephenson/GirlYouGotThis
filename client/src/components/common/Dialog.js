import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";
import Spinner from "./Spinner";
import axios from "axios";

function Transition(props) {
	return <Slide direction="up" {...props} />;
}

class AlertDialogSlide extends React.Component {
	state = {
		open: false,
		data: "",
		field: "",
		question: "",
		answer: "",
		topic: "",
		resource: "",
		comfortLevel: "",
		importanceLevel: ""
	};
	componentWillMount() {
		if (this.props.data) {
			this.setState({
				data: this.props.data,
				field: this.props.data.field,
				question: this.props.data.question,
				answer: this.props.data.answer,
				topic: this.props.data.topic,
				resource: this.props.data.resource,
				comfortLevel: this.props.data.comfortLevel,
				importanceLevel: this.props.data.importanceLevel
			});
		}
    }
    handleChange = (name) => (event) => {
        this.setState({
            [name]: event.target.value
        });
    };

	handleClickOpen = () => {
		this.setState({ open: true });
	};

    handleClose = () => {
        let data = {
            field: this.state.field,
            question: this.state.question,
            answer: this.state.answer,
            topic: this.state.topic,
            resource: this.state.resource,
            comfortLevel: this.state.comfortLevel,
            importanceLevel: this.state.importanceLevel
        }
        axios
            .post("/api/putData", { id: this.props.questionID, question: data })
            .then((data) => console.log(data, "data"))
            .catch((err) => console.log(err));
		this.setState({ open: false });
	};

	render() {
		return (
			<div>
				<Button
					variant="outlined"
					color="primary"
					onClick={this.handleClickOpen}>
					Edit
				</Button>
				<Dialog
					open={this.state.open}
					TransitionComponent={Transition}
					keepMounted
					onClose={this.handleClose}
					aria-labelledby="alert-dialog-slide-title"
					aria-describedby="alert-dialog-slide-description">
					<DialogTitle id="alert-dialog-slide-title">
						{"Update Question Info"}
					</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-slide-description">
							{this.state.data ? (
                                Object.keys(this.state.data).map((field, index) => (
                                    
									<TextField
										id="outlined-full-width"
										label={field}
										style={{ margin: 8 }}
										fullWidth
										value={this.state[field]}
										margin="normal"
										variant="outlined"
										InputLabelProps={{
											shrink: true
										}}
										onChange={this.handleChange([field])}
									/>
								))
							) : (
								<Spinner />
							)}
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color="primary">
							Update
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default AlertDialogSlide;
