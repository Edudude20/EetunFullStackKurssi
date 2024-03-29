/* eslint-disable react/prop-types */
const Note = ({ note, toggleImportance }) => {
    const label = note.important ? 'not important' : 'important'
    return (
        <li className="note">{note.content} <button onClick={toggleImportance}>change to {label}</button></li>
    )
};

export default Note;