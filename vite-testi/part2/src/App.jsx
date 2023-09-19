/* eslint-disable react/prop-types */
import Note from "./components/Note";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  //const mapNotes = notes.map(note => note.content);
  //console.log(mapNotes);

  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("a new note");
  const [showAll, setshowAll] = useState(true);

  useEffect(() => {
    console.log('effect');
    axios
    .get('http://localhost:3001/notes')
    .then(response => {
      console.log('promise fulfilled');
      setNotes(response.data)
    })
  }, []); //Will only run after the initial render (expect once in development)

  console.log('render', notes.length, 'notes');

  const addNote = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);

    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
      id: notes.length + 1
    }
    axios.post('http://localhost:3001/notes', noteObject).then(response =>{
      console.log((response));
      setNotes(notes.concat(noteObject));
      setNewNote('');
    })
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const toggleImportanceOf = (id) => {
    console.log(`importance of ${id} need to be toggled`);
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true);

  return (
    <>
      <div>
        <h1>Notes</h1>
        <div>
          <button onClick={() => setshowAll(!showAll)}>
            show {showAll ? 'important' : 'all'}
          </button>
        </div>
        <ul>
          {notesToShow.map((note) => (
            <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)}></Note>
          ))}
        </ul>
        <form onSubmit={addNote}>
          <input value={newNote} onChange={handleNoteChange} />
          <button type="submit">save</button>
        </form>
      </div>
    </>
  );
}

export default App;
