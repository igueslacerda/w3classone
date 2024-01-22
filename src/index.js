import React from 'react';
import ReactDOM from 'react-dom/client';

const myFirstElement = <h1>Rélou Uordi<span style={{color: 'red'}}>!</span></h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);
