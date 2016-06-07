var React = require('react');
var ReactDOM= require('react-dom');

class App extends React.Component {
  render() {
    return (
      <h1>it's work</h1>
    );
  };
};

ReactDOM.render(<App/>, document.getElementById('main'));
