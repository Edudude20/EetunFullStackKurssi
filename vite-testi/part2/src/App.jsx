/* eslint-disable react/prop-types */
import Note from "./components/Note";
import { useState, useEffect } from "react";
import noteService from "./services/notes";
import Notification from './components/Notification'
import Footer from './components/Footer'

function App() {
  //const mapNotes = notes.map(note => note.content);
  //console.log(mapNotes);

  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("a new note");
  const [showAll, setshowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState('some error happened...')


  useEffect(() => {
    console.log("effect");
    noteService.getAll().then((initialNotes) => {
      console.log("promise fulfilled");
      setNotes(initialNotes);
    });
  }, []); //Will only run after the initial render (expect once in development)

  console.log("render", notes.length, "notes");

  const addNote = (event) => {
    event.preventDefault(); //estää lomakkeen lähetyksen oletusarvoisen toiminnan, joka aiheuttaisi mm. sivun uudelleenlatautumisen
    console.log("button clicked", event.target);

    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    };

    noteService.create(noteObject).then((returnedNote) => {
      console.log(returnedNote);
      setNotes(notes.concat(returnedNote));
      setNewNote("");
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

    noteService
      .update(noteID, changedNote)
      .then((returnedNote) => {
        setNotes(
          notes.map((note) => (note.id !== noteID ? note : returnedNote))
        );
        //jos ehto on tosi, otetaan uuteen taulukkoon suoraan vanha taulukon kyseinen alkio {note}
        //Jos ehto on epätosi, eli kyseessä on muutettu muistiinpano, otetaan palvelimen palauttama olio {response.data}
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        //console.error(error);
        setErrorMessage(`Note '${note.content}' was already removed from server`)
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
        setNotes(notes.filter((e)   => e.id !== noteID));
      });
  };

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  return (
    <>
      <div>
        <h1>Notes</h1>
        <Notification message={errorMessage}></Notification>
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
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
