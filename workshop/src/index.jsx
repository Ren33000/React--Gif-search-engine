import '../assets/stylesheets/application.scss';
import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  const { name, age } = props;
  const message = `Hello I'm ${name} and I'm ${age}!`;
  return <h1>{message}</h1>;
};

const root = document.getElementById('root');
ReactDOM.render(<Hello name="Jesse" age="32" />, root);
