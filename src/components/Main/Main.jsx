import { useState } from "react";
import Styles from "../Main/Main.module.css"
import Sidebar from "../Sidebar/Sidebar";

function Main() {

    const data = []
    const colorsData = [
        { id: 1, name: "#B38BFA", color: "#B38BFA" },
        { id: 2, name: "#FF79F2", color: "#FF79F2" },
        { id: 3, name: "#43E6FC", color: "#43E6FC" },
        { id: 4, name: "#F19576", color: "#F19576" },
        { id: 5, name: "#0047FF", color: "#0047FF" },
        { id: 6, name: "#6691FF", color: "#6691FF" }]



    const [userData, setUserData] = useState(data);

    const [LocStorageData, setLocalStorageData] = useState([])
    const [update, setUpdate] = useState('')

    const [btnClick, setBtnClick] = useState(false)

    const [groupName, setGroupName] = useState([])
    const [color, setColor] = useState()
    const [name, setName] = useState()

    const date = new Date();
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentTime = date.getHours() + ":" + date.getMinutes() + " " + ((date.getHours < 12) ? "AM" : "PM");
    const currentDate = date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear()

    const getLocalStoreValue = localStorage.getItem("userData")
    const parseValue = JSON.parse(getLocalStoreValue)

    const handelSubmit = () => {
        setLocalStorageData((pre) => {
            return [...pre, userData]
        })
        localStorage.setItem("userData", JSON.stringify(LocStorageData))
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            console.log('enter')
            setLocalStorageData((pre) => {
                return [...pre, userData]
            })
            localStorage.setItem("userData", JSON.stringify(LocStorageData))
        }
    }

    const handelCreate = () => {
        setGroupName((pre) => {
            return [...pre, { name: name, color: color }]
        })
        setBtnClick(false)
        localStorage.setItem("groupName", JSON.stringify(groupName))
    }


    console.log(LocStorageData)
    // console.log(userData)

    return (
        <div className={Styles.mainContainer}>
            {btnClick === true ?
                <div id={Styles.myNav} className={Styles.overlay}>

                    <div className={Styles.overlaycontent}>

                        <h4>Create New Notes</h4>

                        {/* Group Name */}
                        <div className={Styles.groupName}>
                            <h5>Group Name</h5>
                            <input type="text" placeholder="Enter your group name...." onChange={(e) => setName(e.target.value)} />
                        </div>

                        {/* Color choose */}
                        <div className={Styles.colorContainer}>
                            <h5>Choose colour</h5>
                            <div className={Styles.colorsBox} >

                                {colorsData.map((col, id) => {
                                    return (
                                        <label onClick={() => { setColor(col.name) }} style={{ backgroundColor: col.color }} key={id} name={col.name}></label>
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

            <Sidebar setbtnClick={setBtnClick} groupName={groupName} setLocalStorageData={setLocalStorageData} />

            <div className={Styles.rightContainer}>

                {/* Navbar */}
                <div className={Styles.navbar}>
                    <h4>CU</h4>
                    <p>Cuvette Notes</p>
                </div>

                {/* Mid Field */}
                <div className={Styles.recentMsgContainer}>
                    {LocStorageData.map((res) => {
                        console.log(res)
                        return (
                            <div className={Styles.recentMsg} >

                                <div className={Styles.msgDTContainer}>
                                    <p>{res.currentTime}</p>
                                    <p>{res.currentDate}</p>
                                </div>

                                <div className={Styles.msgTContainer}>
                                    <p>{res.message}</p>
                                </div>

                            </div>
                        )
                    })}
                </div>

                {/* Input Box */}
                <div className={Styles.inputBoxContainer}>
                    <input type="text"
                        onChange={(e) => {
                            e.preventDefault()
                            setUserData({ currentTime: currentTime, currentDate: currentDate, message: e.target.value })
                        }}
                        onKeyDown={handleKeyDown}
                        placeholder="Enter your text here....." name="message" />
                    <img src="/images/submit-Img.png" alt="submit-button" id={Styles.submitBtn} onClick={handelSubmit} />
                </div>

            </div>
        </div >
    )
}
export default Main;