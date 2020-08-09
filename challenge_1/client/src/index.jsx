import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx';

ReactDOM.render(
  <App url={'http://127.0.0.1:3000/events'} />,
  document.getElementById('react-paginate')
);
