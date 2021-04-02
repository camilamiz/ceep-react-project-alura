import React, { Component } from 'react';
import NoteCard from '../NoteCard';
import './style.css';

class NotesList extends Component {
  render() {
    return(
      <ul className="notes-list">
        <li className="notes-list_item">
          <NoteCard/>
        </li>
      </ul>
    )
  }
}

export default NotesList;
