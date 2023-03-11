import { useState } from "react";
import Styles from "../Main/Main.module.css"
import Sidebar from "../Sidebar/Sidebar";

function Main() {

    const data = []
    const colorsData = [
        { id: 1, name: "red", color: "#B38BFA" },
        { id: 2, name: "pink", color: "#FF79F2" },
        { id: 3, name: "43E6FC", color: "#43E6FC" },
        { id: 4, name: "F19576", color: "#F19576" },
        { id: 5, name: "0047FF", color: "#0047FF" },
        { id: 6, name: "#6691FF", color: "#6691FF" }]

    const [userData, setUserData] = useState(data);
    // const [LocStorageData, setLocalStorageData] = useState()

    const [btnClick, setBtnClick] = useState(false)

    const [groupName, setGroupName] = useState([])

    const date = new Date();
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentTime = date.getHours() + ":" + date.getMinutes() + " " + ((date.getHours < 12) ? "AM" : "PM");
    const currentDate = date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear()

    const getLocalStoreValue = localStorage.getItem("userData")
    const parseValue = JSON.parse(getLocalStoreValue)

    const handelChange = (e) => {
        e.preventDefault()
        setUserData([{ ...data, currentTime: currentTime, currentDate: currentDate, [e.target.name]: e.target.value }])
        setGroupName({ ...groupName, [e.target.name]: e.target.value })

    }

    const handelSubmit = () => {
        localStorage.setItem("userData", JSON.stringify(userData))
    }

    const handelCreate = () => {

        localStorage.setItem("groupName", JSON.stringify(groupName))
        // setBtnClick(false)
    }

    const handelclick = () => {
        setGroupName()
        

    }
    console.log(groupName)

    return (
        <div className={Styles.mainContainer}>
            {btnClick === true ?
                <div id={Styles.myNav} className={Styles.overlay}>

                    <div className={Styles.overlaycontent}>

                        <h4>Create New Notes</h4>

                        <div className={Styles.groupName}>
                            <h5>Group Name</h5>
                            <input type="text" placeholder="Enter your group name...." onChange={(e) => { handelChange(e) }} />
                        </div>

                        <div className={Styles.colorContainer}>
                            <h5>Choose colour</h5>
                            <div className={Styles.colorsBox} >

                                {colorsData.map((col, id) => {

                                    return (
                                        <label onClick={handelclick} style={{ backgroundColor: col.color }} key={id} name={col.name}></label>
                                    )
                                })}

                            </div>
                        </div>

                        <div className={Styles.createNoteBtn}>
                            <button onClick={() => { handelCreate() }}>Create</button>
                        </div>

                    </div>
                </div> : ""
            }

            <Sidebar setbtnClick={setBtnClick} />

            <div className={Styles.rightContainer}>

                {/* Navbar */}
                <div className={Styles.navbar}>
                    <h4>CU</h4>
                    <p>Cuvette Notes</p>
                </div>

                {/* Mid Field */}
                <div className={Styles.recentMsgContainer}>
                    <div className={Styles.recentMsg}>

                        <div className={Styles.msgDTContainer}>
                            <p>{parseValue.currentTime}</p>
                            <p>{parseValue.currentDate}</p>
                        </div>

                        <div className={Styles.msgTContainer}>
                            <p>{parseValue.message}</p>
                        </div>

                    </div>

                </div>

                {/* Input Box */}
                <div className={Styles.inputBoxContainer}>
                    <input type="text" onChange={(e) => { handelChange(e) }} placeholder="Enter your text here....." name="message" />
                    <img src="/images/submit-Img.png" alt="submit-button" id={Styles.submitBtn} onClick={handelSubmit} />
                </div>

            </div>
        </div >
    )
}
export default Main;