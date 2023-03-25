import { Link, useNavigate, useParams } from "react-router-dom"
import { IoIosArrowBack } from 'react-icons/io';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useState } from "react";
import createDate from "../components/createDate";

const EditNote = ({ notes, setNotes }) => {


  // The useParams hook is a feature of the React Router library that allows you to access URL parameters in a React component. URL parameters are used to pass information between different pages or components of a web application through the URL.

  const { id } = useParams();
  // console.log(id);

  const note = notes.find((item) => item.id === id);
  // console.log(note); // to view the changes
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);

  const date = createDate();

  const navigate = useNavigate();

  const handleForm = (event) => {
    event.preventDefault();
    if (title && details) {
      const newNote = { ...note, title, details, date };
      const newNotes = notes.map(i => {
        if (i.id === id) {
          i = newNote;
        }
        return i;
      })
      setNotes(newNotes);
      navigate('/');
    }
  }


  // const deleter = (event) => {
  //   const newNotes = notes.filter(i => i.id !== id);
  //   setNotes(newNotes);
  //   navigate('/');
  // }

  const deleter = (event) => {
    if (window.confirm("Are you sure that you want to delete this note? 🗑️🗑️")) {
      const newNotes = notes.filter(i => i.id !== id);
      setNotes(newNotes);
      navigate('/');
    }
  }

  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn"><IoIosArrowBack /></Link>
        <button className="btn lg primary" onClick={handleForm}>Save</button>
        <button className="btn  error" onClick={deleter}><RiDeleteBin6Line /></button>
      </header>
      <form className="create-note__form" onSubmit={handleForm}>
        <input type="text" placeholder="Title" autoFocus value={title} onChange={(event) => setTitle(event.target.value)} />
        <textarea rows="28" placeholder="Note Details...." value={details} onChange={(event) => setDetails(event.target.value)}></textarea>

      </form>
    </section>
  )
}

export default EditNote