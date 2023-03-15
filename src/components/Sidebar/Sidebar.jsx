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

                {/* User Note Profile Title Here */}
                <div className={Styles.notesProfile} >
                    <h5>SM</h5>
                    <p>Sample Note</p>
                </div>

                {notes.map((note) => {
                    return (
                        <div className={Styles.notesProfile} onClick={() => setActiveNote(note.id)}>
                            <h5 style={{ backgroundColor: note.color }}>{note.title.substr(0, 2)}</h5>
                            <p>{note.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Sidebar;