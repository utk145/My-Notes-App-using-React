import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
import Notes from "./pages/Notes";
// import tmpData from "./tmpData";
import { useState, useEffect } from "react";

const App = () => {
    // const [notes, setNotes] = useState(tmpData);
    // const [notes, setNotes] = useState([]);

    // when we come back we shouldnt have an empty array therefore,
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);

    // console.log(notes);


    // Now we'll save that into the local storage(of browser)
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);



    return (
        <main id="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Notes notes={notes} />}></Route>
                    <Route path="/create-note" element={<CreateNote setNotes={setNotes} />}></Route>
                    <Route path="/edit-note/:id" element={<EditNote notes={notes} setNotes={setNotes} />}></Route>
                </Routes>
            </BrowserRouter>

        </main>
        
    )
}

export default App