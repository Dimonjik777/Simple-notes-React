import React from 'react'

const Note = ({title, description, chooseNote, deleteNote}) => {


  return (
    <div className="note">
      <div className="note__top">
        <h2 className="title">{title}</h2>
        <button onClick={chooseNote} className="note__edit"><img src="src/img/edit.png" alt="" /></button>
        <button onClick={deleteNote} className="note__delete"><img src="src/img/delete.png" alt="" /></button>
      </div>
      <p className="note__text">{description}</p>
    </div>
  )
}

export default Note