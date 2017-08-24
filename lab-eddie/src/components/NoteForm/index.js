import React from 'react';
import uuid from 'uuid/v1'

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      edited: false,
      completed: false
    }

    this.formSubmit = this.formSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();
    console.log(this.state)
    this.props.addNote(this.state)
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmit} className='main-form'>
          <input
            name='title'
            type='text'
            value={this.state.title}
            placeholder='Note Title'
            onChange={this.onChange}
            required={true}
          />
          <input
            name='content'
            type='text'
            value={this.state.content}
            placeholder='Note Content'
            onChange={this.onChange}
            required={true}
          />
          <button type='submit'>{'Cick meeeeeee'}</button>
        </form>
      </div>
    )
  }
}

export default NoteForm
