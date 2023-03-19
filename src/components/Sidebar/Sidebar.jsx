import React from "react";
import Styles from "../Sidebar/Sidebar.module.css"

function Sidebar({ setcreateButtonClick, notes, activeNote, setActiveNote }) {

    return (
        <div className={Styles.sidebarContainer}>

            <h3>Pocket Notes</h3>

            {/* Create Button */}
            <div className={Styles.btn}>
                <label onClick={() => setcreateButtonClick(true)}>+ Create Notes</label>
            </div>

            <div className={Styles.notesProfileContainer} >

                {/* User Notes  Profile Here */}
                {notes.map((note, index) => {
                    return (
                        <div key={index} className={Styles.notesProfile}
                            style={note.id === activeNote ? { backgroundColor: "#F7ECDC" } : { backgroundColor: "" }}
                            onClick={() => setActiveNote(note.id)}>

                            <h5 style={{ backgroundColor: note.color  }}>{note.title.charAt(0) + note.title.charAt(note.title.indexOf(" ") + 1)}</h5>
                            <p>{note.title}</p>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}
export default Sidebar;