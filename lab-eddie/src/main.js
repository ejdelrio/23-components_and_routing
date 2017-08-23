import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <h1>'Life has no meaning'</h1>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
