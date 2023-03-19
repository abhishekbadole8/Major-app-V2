import { useEffect, useRef, useState } from "react";
import Styles from "../Main/Main.module.css"

function Main({ activeNote }) {

    const [saveMessages, setSaveMessages] = useState(localStorage.getItem("messages") ? JSON.parse(localStorage.getItem("messages")) : [])

    const [message, setMessage] = useState("")

    const date = new Date();
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentTime = date.getHours() + ":" + date.getMinutes() + " " + ((date.getHours < 12) ? "AM" : "PM");
    const currentDate = date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear()

    const messageButton = () => {
        if (message !== "") {
            let id = activeNote.id
            setSaveMessages((pre) => {
                return [...pre, { id: id, currentTime: currentTime, currentDate: currentDate, message: message }] // Main div message content
            })
        }// setMessage("")
    }
    // Scroll End Method
    const messageEndRef = useRef(null)

    useEffect(() => {
        localStorage.setItem("messages", JSON.stringify(saveMessages))
    }, [saveMessages])

    useEffect(() => {
        const scrollToBottom = () => {
            messageEndRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToBottom()
    }, [messageEndRef, message])

    return (
        <div className={Styles.mainContainer}>

            {(activeNote !== undefined) ?
                <div className={Styles.rightContainer}>

                    {/* Navbar */}
                    <div className={Styles.navbar}>
                        <h4 style={{ backgroundColor: activeNote.color }}>{activeNote.title.charAt(0) + activeNote.title.charAt(activeNote.title.indexOf(" ") + 1)}</h4>
                        <p>{activeNote.title}</p>
                    </div>

                    {/* Mid Field */}
                    <div className={Styles.recentMsgContainer} >

                        {activeNote !== undefined ?
                            saveMessages.map((msg) => {

                                const activeNotes = activeNote.id;

                                if (msg.id === activeNotes) {

                                    return (
                                        <div className={Styles.recentMsg} ref={messageEndRef}>
                                            {/* Time & Date */}
                                            < div className={Styles.msgDTContainer}>
                                                <p>{msg.currentTime}</p>
                                                <p>{msg.currentDate}</p>
                                            </div>

                                            {/* Message */}
                                            <div className={Styles.msgTContainer}>
                                                <p>{msg.message}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            })

                            :     // Nothing active note, (Undefined)
                            <>
                                {/* Time & Date */}
                                < div className={Styles.msgDTContainer}>
                                    <p></p>
                                    <p></p>
                                </div>


                                {/* Message */}
                                <div className={Styles.msgTContainer}>
                                    <p></p>
                                </div>
                            </>
                        }

                    </div>

                    {/* Input Box */}
                    <div className={Styles.inputBoxContainer}>
                        {/* Real Input Box */}
                        <textarea type="text"
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') { messageButton() }
                            }}
                            value={message}
                            onKeyUp={(e) => {
                                if (e.key === 'Enter') { setMessage("") }
                            }}
                            placeholder="Enter your text here....." name="message" />
                        <img src="/Images/submit-Img.png" alt="submit-button" id={Styles.submitBtn} onClick={messageButton} />
                    </div>

                </div>

                // At Start this div display's
                : <div className={Styles.rightContainer}>

                    {/* Navbar */}

                    <div className={Styles.navbar}>
                        <h4>SN</h4>
                        <p>Sample Note</p>
                    </div>

                    {/* Mid Field */}
                    <div className={Styles.recentMsgContainer}>

                        {/* Sample Message 1 */}
                        <div className={Styles.recentMsg} >

                            <div className={Styles.msgDTContainer}>
                                <p>{currentTime}</p>
                                <p>{currentDate}</p>
                            </div>

                            <div className={Styles.msgTContainer}>
                                <p>It's just a sample note, click Create Notes button to create your own.</p>
                            </div>

                        </div>

                        {/* Sample Message 2 */}
                        <div className={Styles.recentMsg} >

                            <div className={Styles.msgDTContainer}>
                                <p>{currentTime}</p>
                                <p>{currentDate}</p>
                            </div>

                            <div className={Styles.msgTContainer} >
                                <p>It's just a sample note, click Create Notes button to create your own.</p>
                            </div>

                        </div>


                    </div>

                    {/* Input Box */}
                    <div className={Styles.inputBoxContainer}>
                        <textarea type="text" disabled={true}
                            placeholder="Enter your text here....." name="message" />
                        <img src="/Images/submit-Img.png" alt="submit-button" id={Styles.submitBtn} />
                    </div>
                </div>
            }
        </div >
    )
}
export default Main;