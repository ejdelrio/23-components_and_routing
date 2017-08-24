import React from 'react';
import uuid from 'uuid/v1'
import NoteForm from '../NoteForm'
require('./_NoteList.scss')

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.addNote = this.addNote.bind(this);
    this.addToList = this.addToList.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  addNote(note) {
    note.id = uuid();
    this.props.appState().setState(state => ({
      allNotes: [...state.allNotes, note]
    }))
  }

  removeNote(e) {
    e.preventDefault();
    let newAllNotes = this.props.appState().state.allNotes;
    newAllNotes.splice(e.target.name, 1);
    this.props.appState().setState({
      allNotes: newAllNotes
    })

  }

  addToList(note, ind) {
    return (
      <li key={ind} className='note-item'>
        <form onSubmit={this.removeNote} name={ind}>
          <h3 name='title' value={ind}>{note.title}</h3>
          <p>{note.content}</p>
          <p>{`Note Edited: ${note.edited}`}</p>
          <p>{`Note Completed: ${note.completed}`}</p>
          <p>{`Note ID ${note.id}`}</p>
          <button type='submit' >'Delete'</button>
        </form>
      </li>
    )
  }


  render() {
    return (
      <div>
        <NoteForm addNote={this.addNote} />
        <ul className='note-list'>
          {this.props.allNotes.map((note, ind) => {
            return this.addToList(note, ind);
          })}
        </ul>
      </div>
    )
  }
}

export default NoteList
