import { Component } from 'react';
import './assets/App.css';
import Form from './components/Form';
import NotesList from './components/NotesList/NotesList';

class App extends Component {
  // constructor() {
  //   super();
  // }

  createNote(title, text) {
    const newNote = { title, text };
    return newNote;
  }

  render () {
    return (
      <section className="content">
        <Form createNote={this.createNote.bind(this)}/>
        <NotesList/>
      </section>
    )
  }
}

export default App;
