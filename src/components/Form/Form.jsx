import React, { Component } from 'react';
import './style.css';

class Form extends Component {
  render() {
    return(
      <form className="form">
        <input
          type="text"
          placeholder="Title"
          className="form_input"
        />
        <textarea
          placeholder="Please write your note..."
          className="form_input"
        />
        <button className="form_input form_submit">
          Create note
        </button>
      </form>
    );
  }

}

export default Form;
