import React, { useState } from "react";
import Styles from "../Sidebar/Sidebar.module.css"

function Sidebar({ setbtnClick, groupName, setLocalStorageData }) {

    const [userButtonClick, setUserButtonClick] = useState(false)

    const handelProfileClick = () => {
        // setLocalStorageData(JSON.parse(localStorage.getItem("userData")))

    }

    return (
        <div className={Styles.sidebarContainer}>

            <h3>Pocket Notes</h3>

            <div className={Styles.btn}>
                <label onClick={() => { setbtnClick(true) }}>+ Create Notes</label>
            </div>

            <div className={Styles.notesProfileContainer}>

                <div className={Styles.notesProfile}>
                    <h5>CU</h5>
                    <p>Cuvette Notes</p>
                </div>

                {groupName.map((group, index) => {

                    return (
                        <div className={Styles.notesProfile} key={index} onClick={() => handelProfileClick()}>
                            <h5 style={{ backgroundColor: group.color }}>{group.name.substr(0, 2)}</h5>
                            <p>{group.name}</p>
                        </div>)

                })}


            </div>
        </div>
    )
}
export default Sidebar;