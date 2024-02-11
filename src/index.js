import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './components/card';
import ClickCounterButton from './components/clickCounterButton';

const card1 = Card(<>
<h1>Rélou Uordi<span style={{color: 'red'}}>!</span></h1>
<table>
    <tr><th>id</th><th>Nome</th><th>Letra</th></tr>
    <tr><td>1</td><td>Igues</td><td>A</td></tr>
    <tr><td>2</td><td>Tiago</td><td>B</td></tr>
</table>
</>);

const content = <>{card1}<ClickCounterButton/></>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(content);
