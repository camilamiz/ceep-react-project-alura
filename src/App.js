import { Component } from 'react';
import './assets/App.css';
import Form from './components/Form';
import NotesList from './components/NotesList/NotesList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
  }

  createNote(title, text) {
    const newNote = { title, text };
    const newListOfNotes = [...this.state.notes, newNote]
    const newState = {
      notes: newListOfNotes
    }
    this.setState(newState);
  }

  deleteNote(index) {
    let newListOfNotes = this.state.notes;
    newListOfNotes.splice(index, 1);
    this.setState({notes: newListOfNotes});
  }

  render () {
    return (
      <section className="content">
        <Form createNote={this.createNote.bind(this)}/>
        <NotesList notes={this.state.notes} deleteNote={ this.deleteNote.bind(this) }/>
      </section>
    )
  }
}

export default App;
