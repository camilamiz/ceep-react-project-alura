import React, { Component } from 'react';
import './style.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
  }

  _handleTitleChange(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handleTextChange(event) {
    event.stopPropagation();
    this.text = event.target.value;
  }

  _createNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.text);
  }

  render() {
    return(
      <form
        className="form"
        onSubmit={this._createNote.bind(this)}
      >
        <input
          type="text"
          placeholder="Title"
          className="form_input"
          onChange={this._handleTitleChange.bind(this)}
        />
        <textarea
          rows={10}
          placeholder="Please write your note..."
          className="form_input"
          onChange={this._handleTextChange.bind(this)}
        />
        <button className="form_input form_submit">
          Create note
        </button>
      </form>
    );
  }

}

export default Form;
