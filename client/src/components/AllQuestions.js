import React, { Component } from "react";
import PropTypes from "prop-types";

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import CodeEditor from "./CodeEditor";

export class AllQuestions extends Component {
	state = {
		editor: false
	};
	static propTypes = {
		prop: PropTypes
	};
  handleClick = () => {
		this.setState({
			editor: !this.state.editor
		})
	};

	render() {
		return (
			<div className="container">
        <Paper>
          {this.state.editor}
					<Button onClick={this.handleClick}>Code Editor</Button>
					{this.state.editor ? <CodeEditor /> : null}
				
				</Paper>
			</div>
		);
	}
}

export default AllQuestions;
