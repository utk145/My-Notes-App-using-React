import React, { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';
// import tmpData from '../tmpData'; //  We'll manage this as a state soo that it can conveniently be passed as a prop to other components
import { BsPlusLg } from 'react-icons/bs'
import NoteItem from '../components/NoteItem';
import {IoMdClose} from 'react-icons/io';


const Notes = ({ notes }) => {


  const [showSearch, setShowSearch] = useState(false);

  const [text, setText] = useState("");

  const [filteredNotes, setFilteredNotes] = useState(notes);




  const searchHandler = ()=>{
    setFilteredNotes(notes.filter(note=>{
      if(note.title.toLowerCase().match(text.toLowerCase())){
        return note;
      }
    }))
  } 


  useEffect(searchHandler, [text]);
  

  
  return (

    // <section>
    //     <header className="notes__header">
    //         <h2>My Notes</h2>
    //         {/* <input type="text" autoFocus placeholder='Keyowrd...'/> */}
    //         <button className='btn'><CiSearch/></button>
    //     </header>
    //     <div className="notes__container">
    //         {
    //             tmpData.map(note=><NoteItem key={note.id} note={note}/>)
    //         }
    //     </div>
    //     <Link className='btn add__btn'>
    //     <BsPlusLg/>
    //     </Link>
    // </section>


    <section>
      <header className="notes__header">
        {!showSearch && <h2>My Notes</h2>}
        {showSearch && <input type="text" autoFocus placeholder='Keyowrd...' value={text} onChange={(event)=>{setText(event.target.value);searchHandler();}}/>}{/* we'll show this only at the click of search button , we shall do that using a state */}
        <button className='btn' onClick={() => setShowSearch(prevState => !prevState)}>{ showSearch ? <IoMdClose/> : <CiSearch />}</button>
        {/* <button className='btn' onClick={() => setShowSearch(!showSearch)}><CiSearch /></button> */} {/* Method 2  */}
      </header>
      <div className="notes__container">
        {filteredNotes.length===0 &&  <p className='empty__notes'>No notes found. <br/><br/><span>Made for productivity by <a target="_blank" href="https://github.com/utk145" title='Github: utk145' style={{color:"yellow", fontWeight:"700"}}>Utkarsh</a></span></p>}
        {
          // notes.map(note => <NoteItem key={note.id} note={note} />)
          filteredNotes.map(note => <NoteItem key={note.id} note={note} />)
        }
      </div>
      <Link to='/create-note' className='btn add__btn'>
        <BsPlusLg />
      </Link>
      
    </section>
  )
}

export default Notes

