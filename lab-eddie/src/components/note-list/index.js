import React from 'react';
import Note from '../note'

class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>{'Second Header'}</h2>
        <Note />
      </div>
    )
  }
}

export default NoteList
