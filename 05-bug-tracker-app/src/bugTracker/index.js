import React, { Component } from 'react';
import BugStats from './views/BugStats';
import BugEdit from './views/BugEdit';
import BugItem from './views/BugItem';

class BugTracker extends Component{
	
	componentDidMount(){
		this.props.collection.load();
	}

	newBugAdded = (newBugName) => {
		this.props.collection.addNew(newBugName);
	}

	onToggle = (bugToToggle) => {
		this.props.collection.toggle(bugToToggle);
	}

	onRemoveClosedClick = () => {
		this.props.collection.removeClosed();
	}

	render(){
		let bugs = this.props.collection.getAll();
		
		let bugItems = bugs.map((bug, index) => (
			<BugItem bug={bug} key={index} onBugToggle={this.onToggle}/>
		));
			
		return(
			<div>
				{/* BugStats */}
				
				<BugStats bugs={bugs} />
				{/* BugSort */}
				<section className="sort">
					<label htmlFor="">Order By :</label>
					<select>
						<option value=""></option>
						<option value=""></option>
					</select>
					<label htmlFor="">Descending :</label>
					<input type="checkbox" />
				</section>
				
				{/* BugEdit */}
				<BugEdit onAddNewBug={this.newBugAdded} />

				{/*BugList*/}
				<section className="list">
					<ol>
						{bugItems}
					</ol>
					<input type="button" value="Remove Closed" onClick={this.onRemoveClosedClick}/>
				</section>
			</div>
		)
	}
}

export default BugTracker;