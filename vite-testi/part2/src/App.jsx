/* eslint-disable react/prop-types */
import Note from "./components/Note";

function App({ notes }) {
  //const mapNotes = notes.map(note => note.content);
  //console.log(mapNotes);

  return (
    <>
      <div>
        <h1>Notes</h1>
        <ul>
          {notes.map((note) => (
            <Note key={note.id} note={note}></Note>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
