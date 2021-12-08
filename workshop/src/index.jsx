import '../assets/stylesheets/application.scss';
import React from 'react';
import ReactDOM from 'react-dom';

// Functionnal component (JS function to make a component)
// const Hello = (props) => {
//   const { name, age } = props;
//   const message = `Hello I'm ${name} and I'm ${age}!`;
//   return <h1>{message}</h1>;
// };

// eslint-disable-next-line react/prefer-stateless-function
class Hello extends React.Component {
  render() {
    const { name, age } = this.props;
    const message = `Hello I'm ${name} and I'm ${age}!`;
    return <h1>{message}</h1>;
  }
}

const root = document.getElementById('root');
ReactDOM.render(<Hello name="Jesse" age="21" />, root);
