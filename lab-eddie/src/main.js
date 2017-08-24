import React from 'react';
import ReactDom from 'react-dom';
import NoteList from './components/NoteList'
require('./style/main.scss');

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allNotes: []
    }
    this.appState = this.appState.bind(this);
  }

  appState() {
    return {
      state: this.state,
      setState: this.setState.bind(this)
    }
  }

  componentDidUpdate() {
   console.log('__STATE__', this.state);
  }

  render() {
    return (
      <div>
        <h1>{'My aWeSomE Note pAd'}</h1>
        <NoteList appState={this.appState} allNotes={this.state.allNotes} />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
