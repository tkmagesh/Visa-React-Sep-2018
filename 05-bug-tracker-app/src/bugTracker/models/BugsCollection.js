import EventEmitter from './EventEmitter';
import bugService from '../services/bugService';

class BugsCollection extends EventEmitter{
	_list = [];

	constructor(){
		super();
		bugService
			.getAll()
			.then(bugs => {
				this.bugs = bugs;
				this.triggerChange();
			});
	}

	addNew(bugName){
		let newBugData = {
			id : 0,
			name : bugName,
			isClosed : false
		};
		bugService
			.save(newBugData)
			.then(newBug => {
				this._list.push(newBug);
				this.triggerChange();		
			});
	}

	getAll(){
		return [...this._list];
	}

	toggle(bug){
		bug.isClosed = !bug.isClosed;
		bugService.save(bug);
		this.triggerChange();
			
	}

	removeClosed(){
		this
			._list
			.forEach(bug => {
				if (bug.isClosed){
					bugService.remove(bug);
				}
			});
		this._list = this._list.filter(function(bug){
			return !bug.isClosed;
		});
		this.triggerChange();
	}
}

export default BugsCollection;