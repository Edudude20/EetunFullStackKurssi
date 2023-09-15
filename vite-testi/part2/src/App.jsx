/* eslint-disable react/prop-types */
import Note from "./components/Note";
import { useState } from "react";

function App(props) {
  //const mapNotes = notes.map(note => note.content);
  //console.log(mapNotes);

  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("a new note");
  const [showAll, setshowAll] = useState(true);

  const addNote = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);

    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
      id: notes.length + 1
    }

    setNotes(notes.concat(noteObject));
    setNewNote('');
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

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
            <Note key={note.id} note={note}></Note>
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
