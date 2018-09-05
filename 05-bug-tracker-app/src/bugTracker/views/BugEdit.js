import React, { Component } from 'react';

class BugEdit extends React.Component{
	newBugName = '';
	onAddNewClick = () => {
		this.props.onAddNewBug(this.newBugName);
	}
	render(){
		return(
			<section className="edit">
				<label htmlFor="">Bug Name :</label>
				<input type="text" onChange={evt => this.newBugName = evt.target.value}/>
				<input type="button" value="Add New" onClick={this.onAddNewClick}/>
			</section>
		)
	}
}

export default BugEdit;