import React from 'react';
import ReactDOM from 'react-dom/client';
// import StartRating from './StarRating';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <StartRating maxRating={8} />
    <StartRating maxRating={10} size={24} color="red" defaultRating={3} /> */}
    <App />
  </React.StrictMode>
);