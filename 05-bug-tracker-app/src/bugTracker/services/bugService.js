

let baseUrl = 'http://localhost:3030/bugs';

//import axios from 'axios';
/*function getAll(){
	return axios
		.get(baseUrl)
		.then(response => response.data);
}

function save(bugData){
	if (bugData.id === 0){
		return axios
			.post(baseUrl, bugData)
			.then(response => response.data);
	} else {
		return axios
			.put(baseUrl + '/' + bugData.id, bugData)
			.then(response => response.data);
	}
}

function remove(bugData){
	return axios
			.delete(baseUrl + '/' + bugData.id)
			.then(response => response.data);
}*/

function getAll(){
	return fetch(baseUrl)
		.then(response => response.json())

}

function save(bugData){
	if (bugData.id === 0){
		return fetch(baseUrl, {method : 'POST', body : JSON.stringify(bugData), headers : {'content-type' : 'application/json'}})
			.then(response => response.json());
	} else {
		return fetch(baseUrl + '/' + bugData.id, {method : 'PUT', body : JSON.stringify(bugData), headers : {'content-type' : 'application/json'}})
			.then(response => response.json());
	}
}

function remove(bugData){
	return fetch(baseUrl + '/' + bugData.id, {method : 'DELETE'})
			.then(response => response.json());
}

let bugService = { getAll, save, remove };

export default bugService;