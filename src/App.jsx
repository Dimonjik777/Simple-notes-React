import React from 'react'
import './App.css'

function App() {
  return (
    <>
      <h1>Notes</h1>
      <div className="notes">
        <div className="note">
          <div className="note__top">
            <h2 className="title">Title</h2>
            <button className="note__edit"><img src="src/img/edit.png" alt="" /></button>
            <button className="note__delete"><img src="src/img/delete.png" alt="" /></button>
          </div>
          <p className="note__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ullam.</p>
        </div>
        <div className="note">
          <div className="note__top">
            <h2 className="title">Title</h2>
            <button className="note__edit"><img src="src/img/edit.png" alt="" /></button>
            <button className="note__delete"><img src="src/img/delete.png" alt="" /></button>
          </div>
          <p className="note__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ullam.</p>
        </div>
        <div className="note">
          <div className="note__top">
            <h2 className="title">Title</h2>
            <button className="note__edit"><img src="src/img/edit.png" alt="" /></button>
            <button className="note__delete"><img src="src/img/delete.png" alt="" /></button>
          </div>
          <p className="note__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ullam.</p>
        </div>
        <div className="note">
          <div className="note__top">
            <h2 className="title">Title</h2>
            <button className="note__edit"><img src="src/img/edit.png" alt="" /></button>
            <button className="note__delete"><img src="src/img/delete.png" alt="" /></button>
          </div>
          <p className="note__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ullam.</p>
        </div>
        <div className="note">
          <div className="note__top">
            <h2 className="title">Title</h2>
            <button className="note__edit"><img src="src/img/edit.png" alt="" /></button>
            <button className="note__delete"><img src="src/img/delete.png" alt="" /></button>
          </div>
          <p className="note__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ullam.</p>
        </div>
        <div className="note">
          <div className="note__top">
            <h2 className="title">Title</h2>
            <button className="note__edit"><img src="src/img/edit.png" alt="" /></button>
            <button className="note__delete"><img src="src/img/delete.png" alt="" /></button>
          </div>
          <p className="note__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ullam.</p>
        </div>
        <div className="note">
          <div className="note__top">
            <h2 className="title">Title</h2>
            <button className="note__edit"><img src="src/img/edit.png" alt="" /></button>
            <button className="note__delete"><img src="src/img/delete.png" alt="" /></button>
          </div>
          <p className="note__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ullam.</p>
        </div>
        <div className="note">
          <div className="note__top">
            <h2 className="title">Title</h2>
            <button className="note__edit"><img src="src/img/edit.png" alt="" /></button>
            <button className="note__delete"><img src="src/img/delete.png" alt="" /></button>
          </div>
          <p className="note__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ullam.</p>
        </div>
      </div>
      <button className="add__note">+</button>

      <div className="create__note">
        <div className="modal__create__note">
          <input type="text" className="title__note" placeholder="Title" />
          <textarea className="text__note" placeholder="Description"></textarea>
          <div className="buttons">
            <button className="save__note">Add</button><button className="cancel">Cancel</button>
          </div>
        </div>
        <div className="modal__bg"></div>
      </div>
    </>
  )
}

export default App
