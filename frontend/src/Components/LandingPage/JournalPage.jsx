import React, { useState, useEffect, useRef } from 'react';
import './JournalPage.css';
import { useNavigate } from 'react-router-dom';
import elephants from '../Assets/Untitled_Artwork16.PNG';

const JournalPage = () => {
  // Refs for DOM elements
  const menuOpen = useRef(null);
  const menuClose = useRef(null);
  const overlay = useRef(null);

  useEffect(() => {
    // Function to add the active class
    const openOverlay = () => {
      overlay.current.classList.add("overlay--active");
    };

    // Function to remove the active class
    const closeOverlay = () => {
      overlay.current.classList.remove("overlay--active");
    };

    // Adding event listeners
    if (menuOpen.current && menuClose.current && overlay.current) {
      menuOpen.current.addEventListener("click", openOverlay);
      menuClose.current.addEventListener("click", closeOverlay);
    }

    // Cleanup function to remove event listeners
    return () => {
      if (menuOpen.current && menuClose.current) {
        menuOpen.current.removeEventListener("click", openOverlay);
        menuClose.current.removeEventListener("click", closeOverlay);
      }
    };
  }, []);

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

  const handleAddNote = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5003/api/notes" ,
        {
          method: "POST",
          headers: {
            "Content-Type" : "application/json"
          },
          body: JSON.stringify({
            title,
            content
          })
        }
      );

      const newNote = await response.json();
      setNotes([newNote, ...notes]);
      setTitle("");
      setContent("");
    } catch (e) {
      console.log(e);
    }
  };

  const handleUpdateNote = async (event) => {
    event.preventDefault();

    if (!selectedNote) {
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5003/api/notes/${selectedNote.id}`, 
        {
          method: 'PUT',
          headers: {
            "Content-Type" : "application/json"
          },
          body: JSON.stringify({
            title, 
            content,
          })
        }
      )

      const updatedNote = await response.json();

      const updatedNotesList = notes.map((note) =>
        note.id === selectedNote.id ? updatedNote : note
      );

      setNotes(updatedNotesList);
      setTitle("");
      setContent("");
      setSelectedNote(null);
    } catch (e) {
      console.log(e);
    }
  };

  const handleCancel = () => {
    setTitle("");
    setContent("");
    setSelectedNote(null);
  };

  const deleteNote =  async (event, noteId) => {
    event.stopPropagation();

    try {
      await fetch(
        `http://localhost:5003/api/notes/${noteId}`,
        {
          method: "DELETE",
        }
      )

      const updatedNotes = notes.filter((note) => note.id !== noteId);
      setNotes(updatedNotes);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch("http://localhost:5003/api/notes");
        const data = await response.json();

        setNotes(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNotes();
  }, []);

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

  const redirectToContacts = () => {
    navigate('/contacts');
  };

  const redirectToJournal = () => {
    navigate('/journal');
  };

  return (
    <div className="containerLogin">
      <div className="headerLogin">
        <div className="textLogin">
          <header className="navbar">
            <a className="elephantLogo" href="/"><img id="elephantLogo" src={elephants} alt="elephant logo" onClick={homeReload} /></a>
            <nav>
              <ul className="nav__links">
                <li><a className="navBarText" onClick={contactReload}>Contacts</a></li>
                <li><a className="navBarText" onClick={journalReload}>Journal</a></li>
              </ul>
            </nav>
            <a className="cta" href="#" onClick={suggestionReload}>Suggestions</a>
            <p ref={menuOpen} className="menu cta">Menu</p>
          </header>
          <div ref={overlay} className="overlay">
            <a ref={menuClose} className="close">&times;</a>
            <div className="overlay__content">
              <a href="#" onClick={redirectToContacts}>Contacts</a>
              <a href="#" onClick={redirectToJournal}>Journal</a>
            </div>
          </div>
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
                <div>
                  <button type="submit">Add Note</button>
                  <button onClick={handleCancel}>Cancel</button>
                </div>
              )}
              <button type="submit">Add Entry</button>
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
