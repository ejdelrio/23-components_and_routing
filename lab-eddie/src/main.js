import React from 'react';
import ReactDom from 'react-dom';
import NoteList from './components/note-list'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>{'I am working!!!'}</h1>
        <NoteList />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
