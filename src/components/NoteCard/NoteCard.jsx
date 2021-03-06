import React, { Component } from 'react';
import { ReactComponent as DeleteSVG } from '../../assets/img/delete.svg';
import './style.css';

class NoteCard extends Component {
  delete() {
    const noteIndex = this.props.noteIndex;
    this.props.removeNote(noteIndex);
  }

  render() {
    return(
      <section className="note-card">
        <header className="note-card_header">
          <h3 className="note-card_title">{this.props.title}</h3>
          < DeleteSVG onClick={this.delete.bind(this)} />
        </header>
        <p className="note-card_text">{this.props.text}</p>
      </section>
    )
  }
}

export default NoteCard;
