import React from 'react';
import ReactDOM from 'react-dom';
import App from '../react/src/containers/App';

document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('app')

  if (reactElement) {
    ReactDOM.render(
      <App />,
      reactElement
    )
  }
})
