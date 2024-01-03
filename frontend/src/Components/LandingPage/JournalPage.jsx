// Landing.jsx
import React, { useState, FC } from 'react';
import './JournalPage.css';
import { useNavigate } from 'react-router-dom';
import elephants from '../Assets/Untitled_Artwork16.PNG';


const JournalPage = () => {
    const [notes, setNotes] = useState([
        {
            id: 1,
            title: "entry 1",
            content: "content 1"
        },
        {
            id: 2,
            title: "entry 2",
            content: "content 2"
        },
        {
            id: 3,
            title: "entry 3",
            content: "content 3"
        }     
    ]);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (event) => {
       event.preventDefault();
       console.log("title: ", title)
       console.log("content: ", content)
      };
      

    const navigate = useNavigate();

   
    const homeReload = () => {
        navigate('../home');
    };


    const contactReload = () => {
        navigate('../contacts');
    };

    const journalReload= ()=>{
        navigate('/journal');
    }

    const suggestionReload= ()=>{
        navigate('../suggestion');
    }


    return (
       <div className="containerLogin">
            <div className="headerLogin">
                <div className="textLogin">
                    <nav className="navbar">
                        <ul>
                            <img id="elephantLogo" src={elephants} alt="elephantlogo" onClick={homeReload} />
                            <li>
                                <a className="navBarText" onClick={contactReload}>Contacts</a>
                            </li>
                            <li>
                                <a className="navBarText" onClick = {journalReload}>Journal</a>
                            </li>
                            <li>
                                <a className="navBarText"  onClick = {suggestionReload}>Suggestion</a>
                            </li>
                        </ul>
                    </nav>
                <div className="journalBody">
                    <form className = "NoteForm"
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <input
                        value={title} 
                        onChange={(e) =>
                        setTitle(e.target.value)}
                        placeholder= "subject" required>
                        </input>
                        <textarea 
                        value={content} 
                        onChange={(e) =>
                        setContent(e.target.value)}
                        placeholder="body"
                        rows={10}
                        required>

                        </textarea>
                        <button className="publish">
                            Add Entry

                        </button>
                    </form>
                    <div className='journalGrid'>
                        {notes.map((note)=> (
                            <div className='journalItem'>
                            <div className='journalHeader'>
                                <button>x

                                </button>
                                <h2>{note.title}</h2>
                                <p>{note.content}</p>

                            </div>
                            
                        </div>
                        ))}
                        

                    </div>
                    <p>
                        we're in journal page hehe
                    </p>

                </div>
                    
                </div>
            </div>
        </div>

    );
};

export default JournalPage;