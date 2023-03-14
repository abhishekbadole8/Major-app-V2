// import { useState } from "react";
import Styles from "../Main/Main.module.css"
// import Sidebar from "../Sidebar/Sidebar";

function Main({ activeNote }) {


    const date = new Date();
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentTime = date.getHours() + ":" + date.getMinutes() + " " + ((date.getHours < 12) ? "AM" : "PM");
    const currentDate = date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear()

    const onInputField = () => { }
    const handelMessage = () => { }
    
    return (
        <div className={Styles.mainContainer}>


            {(activeNote !== undefined) ?
                <div className={Styles.rightContainer}>

                    {/* Navbar */}
                    <div className={Styles.navbar}>
                        <h4 style={{ backgroundColor: activeNote.color }}>{activeNote.title.substr(0, 2)}</h4>
                        <p>{activeNote.title}</p>
                    </div>


                    {/* Mid Field */}
                    <div className={Styles.recentMsgContainer}>

                        <div className={Styles.recentMsg} >

                            <div className={Styles.msgDTContainer}>
                                <p></p>
                                <p></p>
                            </div>

                            <div className={Styles.msgTContainer}>
                                <p></p>
                            </div>

                        </div>
                    </div>

                    {/* Input Box */}
                    <div className={Styles.inputBoxContainer}>
                        <textarea type="text"
                            onChange={(e) => onInputField(e.target.value)}
                            placeholder="Enter your text here....." name="message" />
                        <img src="/images/submit-Img.png" alt="submit-button" id={Styles.submitBtn} onClick={handelMessage} />
                    </div>

                </div>

                // REPEAT -------
                : <div className={Styles.rightContainer}>

                    {/* Navbar */}

                    <div className={Styles.navbar}>
                        <h4>SM</h4>
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
                                <p>When first building this generator we thought about using computers to generate the paragraphs, but they weren't very good and many times didn't make any sense at all. We therefore took the time to create paragraphs specifically for this generator to make it the best that we could.</p>
                            </div>

                        </div>

                        {/* Sample Message 2 */}
                        <div className={Styles.recentMsg} >

                            <div className={Styles.msgDTContainer}>
                                <p>{currentTime}</p>
                                <p>{currentDate}</p>
                            </div>

                            <div className={Styles.msgTContainer}>
                                <p>It's not only writers who can benefit from this free online tool. If you're a programmer who's working on a project where blocks of text are needed, this tool can be a great way to get that. It's a good way to test your programming and that the tool being created is working well.</p>
                            </div>

                        </div>


                    </div>

                    {/* Input Box */}
                    <div className={Styles.inputBoxContainer}>
                        <textarea type="text"
                            placeholder="Enter your text here....." name="message" />
                        <img src="/images/submit-Img.png" alt="submit-button" id={Styles.submitBtn} />
                    </div>

                </div>}
        </div >
    )
}
export default Main;