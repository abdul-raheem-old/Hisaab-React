import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function SayHello(props){
  return(
    <h1>Bonjour. Je m'appelle {props.name}</h1>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <SayHello name="Abdul Raheem" />
  </React.StrictMode>,
  document.getElementById('root')
);
