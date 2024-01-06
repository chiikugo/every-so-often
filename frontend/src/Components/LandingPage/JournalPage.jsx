// Landing.jsx
import React, { useState } from 'react';
import './JournalPage.css';
import { useNavigate } from 'react-router-dom';
import elephants from '../Assets/Untitled_Artwork16.PNG';

const JournalPage = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "entry 1",
      content: "content 1",
    },
    {
      id: 2,
      title: "entry 2",
      content: "content 2",
    },
    {
      id: 3,
      title: "entry 3",
      content: "content 3",
    },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [selectedNote, setSelectedNote] = useState(null);

  const handleNoteClick = (note) => {
    setSelectedNote(note);
    setTitle(note.title);
    setContent(note.content);
  };

  const handleAddNote = (event) => {
    event.preventDefault();

    const newNote = {
      id: notes.length + 1,
      title: title,
      content: content,
    };

    setNotes([newNote, ...notes]);
    setTitle("");
    setContent("");
  };

  const handleUpdateNote = (event) => {
    event.preventDefault();

    if (!selectedNote) {
      return;
    }

    const updatedNote = {
      id: selectedNote.id,
      title: title,
      content: content,
    };

    const updatedNotesList = notes.map((note) =>
      note.id === selectedNote.id ? updatedNote : note
    );

    setNotes(updatedNotesList);
    setTitle("");
    setContent("");
    setSelectedNote(null);
  };

  const handleCancel = () => {
    setTitle("");
    setContent("");
    setSelectedNote(null);
  };

  const deleteNote = (event, noteId) => {
    event.stopPropagation();

    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
  };

  const navigate = useNavigate();

  const homeReload = () => {
    navigate('../home');
  };

  const contactReload = () => {
    navigate('../contacts');
  };

  const journalReload = () => {
    navigate('/journal');
  };

  const suggestionReload = () => {
    navigate('../suggestion');
  };

  return (
    <div className="containerLogin">
      <div className="headerLogin">
        <div className="textLogin">
          <nav className="navbar">
            <ul>
              <img
                id="elephantLogo"
                src={elephants}
                alt="elephantlogo"
                onClick={homeReload}
              />
              <li>
                <a className="navBarText" onClick={contactReload}>
                  Contacts
                </a>
              </li>
              <li>
                <a className="navBarText" onClick={journalReload}>
                  Journal
                </a>
              </li>
              <li>
                <a className="navBarText" onClick={suggestionReload}>
                  Suggestion
                </a>
              </li>
            </ul>
          </nav>
          <div className="journalBody">
            <form
              className="NoteForm"
              onSubmit={(event) =>
                selectedNote ? handleUpdateNote(event) : handleAddNote(event)
              }
            >
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="subject"
                required
              />
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="body"
                rows={10}
                required
              ></textarea>
              {selectedNote ? (
                <div className="edit-button">
                  <button type="submit">Save</button>
                  <button onClick={handleCancel}>Cancel</button>
                </div>
              ) : (
                <button type="submit">Add Note</button>
              )}
              <button className="publish">Add Entry</button>
            </form>
            <div className="journalGrid">
              {notes.map((note) => (
                <div
                  className="journalItem"
                  onClick={() => handleNoteClick(note)}
                  key={note.id}
                >
                  <div className="journalHeader">
                    <button onClick={(e) => deleteNote(e, note.id)}>x</button>
                    <h2>{note.title}</h2>
                    <p>{note.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <p>we're in journal page hehe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalPage;
