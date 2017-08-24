import React from 'react';
import uuid from 'uuid/v1'
import NoteForm from '../NoteForm'

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.addNote = this.addNote.bind(this);
    this.addToList = this.addToList.bind(this);
  }

  addNote(note) {
    console.log('Hitting addNote')
    note.id = uuid();
    console.log(note)
    this.props.appState().setState(state => ({
      allNotes: [...state.allNotes, note]
    }))
  }

  addToList(note, ind) {
    return (
      <li key={ind}>
        <h3>{note.title}</h3>
        <p>{note.content}</p>
        {!note.edited ?
        <p></p>:
        <p>'"Edited"'</p>}
      </li>
    )
  }


  render() {
    return (
      <div>
        <NoteForm addNote={this.addNote} />
        <ul>
          {this.props.allNotes.map((note, ind) => {
            return this.addToList(note, ind);
          })}
        </ul>
      </div>
    )
  }
}

export default NoteList
