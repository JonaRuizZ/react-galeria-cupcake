// import React from 'react';
import { StrictMode } from 'react';

// import ReactDOM from 'react-dom';
import { render } from 'react-dom';

import App from './components/App';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);