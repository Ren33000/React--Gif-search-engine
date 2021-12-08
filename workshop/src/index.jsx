import '../assets/stylesheets/application.scss';
import React from 'react';
import ReactDOM from 'react-dom';


// Functionnal component (JS function to make a component) => the main way to create components now
// rsc + tab (create the syntax)
const Hello = (props) => {
  const { name, age } = props;
  const message = `Hello I'm ${name} and I'm ${age}!`;
  return <h1>{message}</h1>;
};

// Class component method 
// rcc + tab (create the syntax for Class component)

// class Hello extends React.Component {
//   render() {
//     const { name, age } = this.props;
//     const message = `Hello I'm ${name} and I'm ${age}!`;
//     return <h1>{message}</h1>;
//   }
// }

const root = document.getElementById('root');
ReactDOM.render(<Hello name="Jesse" age="21" />, root);
