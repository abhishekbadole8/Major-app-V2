import Styles from "./App.module.css";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import { useEffect, useState } from "react";

function App() {
  const colors = [
    { id: 1, name: "#B38BFA", color: "#B38BFA" },
    { id: 2, name: "#FF79F2", color: "#FF79F2" },
    { id: 3, name: "#43E6FC", color: "#43E6FC" },
    { id: 4, name: "#F19576", color: "#F19576" },
    { id: 5, name: "#0047FF", color: "#0047FF" },
    { id: 6, name: "#6691FF", color: "#6691FF" },
  ];

  const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : [])

  const [activeNote, setActiveNote] = useState(false) // Active Note

  const [createButtonClick, setcreateButtonClick] = useState(false); // Create Button

  const [color, setColor] = useState()
  const [title, setTitle] = useState()

  const addNote = () => {
    const uniqueID = Math.floor(Math.random() * 9000) + 1000  // Generate Unique Id

    setNotes((pre) => {
      return [...pre, { id: uniqueID, title: title, color: color }] // Popup container values
    })
    setActiveNote(uniqueID)
    setcreateButtonClick(false)
  }

  // Get Active Note
  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote)
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  return (
    <div className={Styles.App}>

      <Sidebar setcreateButtonClick={setcreateButtonClick} notes={notes} activeNote={activeNote} setActiveNote={setActiveNote} />
      <Main activeNote={getActiveNote()} />

      {/* Create Button Clicked */}
      {createButtonClick === true ? (
        <div id={Styles.myNav} className={Styles.overlay}>
          <div className={Styles.overlaycontent}>
            <h4>Create New Notes</h4>

            {/* Group Name */}
            <div className={Styles.groupName}>
              <h5>Group Name</h5>
              <input type="text" placeholder="Enter your group name...." onChange={(e) => setTitle(e.target.value)} />
            </div>

            {/* Color choose */}
            <div className={Styles.colorContainer}>

              <h5>Choose colour</h5>
              <div className={Styles.colorsBox}>
                {colors.map((color, id) => {
                  return (
                    <label
                      style={{ backgroundColor: color.color }}
                      key={id}
                      name={color.name}
                      onClick={() => { setColor(color.name) }}
                    ></label>
                  );
                })}
              </div>
            </div>

            {/* Add Note button */}
            <div className={Styles.createNoteBtn}>
              <button onClick={addNote}>Create</button>
            </div>

          </div>
        </div>
      ) : (
        ""
      )}




    </div>
  );
}

export default App;
