import './assets/App.css';
import Form from './components/Form';
import NoteCard from './components/NoteCard/NoteCard';

function App() {
    return (
      <section className="content">
        <Form />
        <ul>
          <li>
            <NoteCard/>
          </li>
          <li>
            <NoteCard/>
          </li>
          <li>
            <NoteCard/>
          </li>
        </ul>
      </section>
    );
}

export default App;
