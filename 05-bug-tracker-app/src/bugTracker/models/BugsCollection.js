import EventEmitter from './EventEmitter';

class BugsCollection extends EventEmitter{
	_list = [];

	addNew(bugName){
		let newBug = {
			name : bugName,
			isClosed : false
		};
		this._list.push(newBug);
		this.triggerChange();
	}

	getAll(){
		return [...this._list];
	}

	toggle(bug){
		bug.isClosed = !bug.isClosed;
		this.triggerChange();
	}

	removeClosed(){
		this._list = this._list.filter(function(bug){
			return !bug.isClosed;
		});
		this.triggerChange();
	}
}

export default BugsCollection;