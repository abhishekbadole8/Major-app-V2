import React from "react";
import Styles from "../Sidebar/Sidebar.module.css"

function Sidebar({ setcreateButtonClick, notes, activeNotes, setActiveNote }) {

    return (
        <div className={Styles.sidebarContainer}>

            <h3>Pocket Notes</h3>

            {/* Create Button */}
            <div className={Styles.btn}>
                <label onClick={() => setcreateButtonClick(true)}>+ Create Notes</label>
            </div>

            <div className={Styles.notesProfileContainer} >

                {/* User Notes  Title Here */}

                <div className={Styles.notesProfile} >
                    <h5>SN</h5>
                    <p>Sample Note</p>
                </div>

                {notes.map((note) => {
                    return (
                        <div className={Styles.notesProfile}
                            onClick={() => setActiveNote(note.id)}
                        >
                            <h5 style={{ backgroundColor: note.color }}>{note.title.charAt(0) + note.title.charAt(note.title.indexOf(" ") + 1)}</h5>
                            <p>{note.title}</p>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
export default Sidebar;