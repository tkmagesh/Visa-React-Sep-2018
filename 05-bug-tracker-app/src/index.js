import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import BugsCollection from './bugTracker/models/BugsCollection';
import BugTracker from './bugTracker';


let bugsCollection = new BugsCollection();
function renderApp(){
	ReactDOM.render(<BugTracker collection={bugsCollection}/>,
		document.getElementById('root'));
}
renderApp();
bugsCollection.subscribe(renderApp);
