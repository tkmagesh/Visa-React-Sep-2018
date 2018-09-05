import React, { Component } from 'react';

class BugItem extends Component{

	onBugNameClick = () => {
		let bugToToggle = this.props.bug;
		this.props.onBugToggle(bugToToggle);
	}
	render(){
		let bug = this.props.bug;
		return(
			<li>
				<span className="bugname" onClick={this.onBugNameClick}>
					{JSON.stringify(bug)}
				</span>
			</li>
		);
	}
}

export default BugItem;