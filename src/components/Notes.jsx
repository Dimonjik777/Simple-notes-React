import React, { useState, useEffect } from 'react'
import Note from './Note'
import ModalWindow from './ModalWindow';

const Notes = () => {

  // Notes data
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);

  // State in active modal
  const [isActiveModal, setIsActiveModal] = useState(false);

  // State from inputs
  const [titleNote, setTitleNote] = useState("");
  const [descNote, setDescNote] = useState("");

  // State is change note
  const [isChangeNote, setIsChangeNote] = useState(false);

  // ID rewrited note
  const [idNote, setIdNote] = useState(null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes])

  function addNote(title, description) {
    setNotes([...notes, { id: Date.now(), title: title, description: description }]);
  }

  function callModalEditNote(id) {
    setIsChangeNote(true);
    setIsActiveModal(true);
    const note = notes.find(note => note.id == id);
    if (note) {
      setTitleNote(note.title);
      setDescNote(note.description);
      setIdNote(id);
    }
  }

function rewriteNote(id) {
  const newNotes = notes.map(note => {
    if (note.id === id) {
      return { ...note, title: titleNote, description: descNote };
    }
    return note;
  });
  setNotes(newNotes);
  setIdNote(null);
  setTitleNote("");
  setDescNote("");
  setIsActiveModal(false);
}

function deleteNote(id) {
  const newNotes = notes.filter(note => note.id != id);

  setNotes(newNotes);
}

return (
  <>
    <h1>Notes</h1>
    <div className="notes">
      {notes.map(note => (
        <Note
          key={note.id}
          title={note.title}
          description={note.description}
          chooseNote={() => callModalEditNote(note.id)}
          deleteNote={() => deleteNote(note.id)} />
      ))}
    </div>
    <ModalWindow
      addNote={addNote}
      isActive={isActiveModal}
      setIsActive={setIsActiveModal}
      titleNote={titleNote}
      setTitleNote={setTitleNote}
      descNote={descNote}
      setDescNote={setDescNote}
      isChangeNote={isChangeNote}
      rewriteNote={rewriteNote}
      idNote={idNote} />
  </>
)
}

export default Notes