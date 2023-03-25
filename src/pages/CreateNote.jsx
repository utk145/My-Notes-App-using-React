import { Link, useNavigate } from "react-router-dom"
import { IoIosArrowBack } from 'react-icons/io';
import { useState } from "react";
import { v4 as uuid } from 'uuid';
import createDate from "../components/createDate";

const CreateNote = ({ setNotes }) => {

    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");

    const date = createDate();

    const navigate = useNavigate();

    const handleSubmission = (event) => {
        event.preventDefault();

        // Form Validation

        // if(title && details){
        //     // console.log(title,details);
        //     const note={
        //         // Now to create an object and have an unique id to it, we'll install a package called uuid
        //         id:uuid(),
        //         title,
        //         details,
        //         date
        //     }
        //     console.log(note);
        // }


        if (title && details) {

            const note = { id: uuid(), title, details, date }

            // Populating the Notes
            // setNotes(note);
            setNotes(previousNotes => [note, ...previousNotes]); // it should depend on previous-notes bcz the old ones should go at the bottom and the new notes  should be at the top/first 


            // After creating a note, we redirect it to the Notes page
            navigate('/');
            
        }




    }

    return (
        <section>
            <header className="create-note__header">
                <Link to="/" className="btn"><IoIosArrowBack /></Link>
                <button className="btn lg primary" onClick={handleSubmission}>Save</button>
            </header>
            <form onSubmit={handleSubmission} className="create-note__form">
                <input type="text" placeholder="Title" autoFocus value={title} onChange={
                    (event) => setTitle(event.target.value)
                } />
                <textarea rows="28" placeholder="Note Details...." value={details} onChange={
                    (event) => setDetails(event.target.value)
                }></textarea>

            </form>
        </section>
    )
}

export default CreateNote