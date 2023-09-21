/* eslint-disable react/prop-types */
import Note from "./components/Note";
import { useState, useEffect } from "react";
import noteService from "./services/notes";

function App() {
  //const mapNotes = notes.map(note => note.content);
  //console.log(mapNotes);

  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("a new note");
  const [showAll, setshowAll] = useState(true);

  useEffect(() => {
    console.log("effect");
    noteService.getAll().then(initialNotes => {
      console.log("promise fulfilled");
      setNotes(initialNotes);
    });
  }, []); //Will only run after the initial render (expect once in development)

  console.log("render", notes.length, "notes");

  const addNote = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);

    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    };

   noteService.create(noteObject).then(returnedNote => {
      console.log(returnedNote);
      setNotes(notes.concat(returnedNote));
      setNewNote('');
    });
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const toggleImportanceOf = (noteID) => {
    console.log(`importance of ${noteID} need to be toggled`);

    const note = notes.find((e) => e.id === noteID); //e = element
    const changedNote = { ...note, important: !note.important };

   noteService.update(noteID, changedNote).then((returnedNote) => {
      setNotes(
        notes.map((note) => (note.id !== noteID ? note : returnedNote))
      );
      //jos ehto on tosi, otetaan uuteen taulukkoon suoraan vanha taulukon kyseinen alkio {note}
      //Jos ehto on epätosi, eli kyseessä on muutettu muistiinpano, otetaan palvelimen palauttama olio {response.data}
    }).catch(error => {
      console.error(error);
      alert(`the note '${note.content}' was already deleted form server`);
      setNotes(notes.filter(e => e.id !== noteID))
    });
  };

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  return (
    <>
      <div>
        <h1>Notes</h1>
        <div>
          <button onClick={() => setshowAll(!showAll)}>
            show {showAll ? "important" : "all"}
          </button>
        </div>
        <ul>
          {notesToShow.map((note) => (
            <Note
              key={note.id}
              note={note}
              toggleImportance={() => toggleImportanceOf(note.id)}
            ></Note>
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
