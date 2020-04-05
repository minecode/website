import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './index.scss';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
