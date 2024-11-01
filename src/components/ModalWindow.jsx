import React, { useEffect, useRef } from 'react'

const ModalWindow = ({ addNote, isActive, setIsActive, titleNote, setTitleNote, descNote, setDescNote, isChangeNote, rewriteNote, idNote}) => {

  const modalRef = useRef(null);

  function handleChangeTitle(event) {
    setTitleNote(event.target.value);
  }

  function handleChangeDesc(event) {
    setDescNote(event.target.value);
  }

  function handleClickOutside(event) {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  function handleAddNote(title, desc) {

    if (title.trim() != "" && desc.trim() != "") {

      addNote(title, desc);

      setTitleNote("");
      setDescNote("");
      setIsActive(false);
    }
  }

  useEffect(() => {

    if (isActive) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isActive]);

  const modalActive = isActive ? "create__note active" : "create__note";

  const actionBtn = isChangeNote ? (<button onClick={() => rewriteNote(idNote)} className="save__note">Change</button>) : (<button onClick={() => handleAddNote(titleNote, descNote)} className="save__note">Add</button>)

  return (
    <>
      <button onClick={() => setIsActive(true)} className="add__note">+</button>
      <div className={modalActive}>
        <div className="modal__create__note" ref={modalRef}>
          <input
            type="text"
            className="title__note"
            placeholder="Title"
            onChange={handleChangeTitle}
            value={titleNote} />
          <textarea
            className="text__note"
            placeholder="Description"
            onChange={handleChangeDesc}
            value={descNote}></textarea>
          <div className="buttons">
            {actionBtn}
            <button onClick={() => setIsActive(false)} className="cancel">Cancel</button>
          </div>
        </div>
        <div className="modal__bg"></div>
      </div>
    </>
  )
}

export default ModalWindow