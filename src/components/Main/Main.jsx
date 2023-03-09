import Styles from "../Main/Main.module.css"
import Sidebar from "../Sidebar/Sidebar";

function Main() {
    return (
        <div className={Styles.mainContainer}>

            <Sidebar />

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
                            <p>10:38 Am</p>
                            <p>9 March 2023</p>
                        </div>
                        <div className={Styles.msgTContainer}>
                            <p>When first building this generator we thought about using computers to generate the paragraphs, but they weren't very good and many times didn't make any sense at all. We therefore took the time to create paragraphs specifically for this generator to make it the best that we could.</p>
                        </div>
                    </div>
                    <div className={Styles.recentMsg}>
                        <div className={Styles.msgDTContainer}>
                            <p>10:381 Am</p>
                            <p>9 March 2023</p>
                        </div>
                        <div className={Styles.msgTContainer}>
                            <p>When first building this generator we thought about using computers to generate the paragraphs, but they weren't very good and many times didn't make any sense at all. We therefore took the time to create paragraphs specifically for this generator to make it the best that we could.</p>
                        </div>
                    </div>
                </div>

                {/* Input Box */}
                <div className={Styles.inputBoxContainer}>
                    <input type="text" placeholder="Enter your text here....." />
                    <img src="" alt="" />
                </div>

            </div>
        </div>
    )
}
export default Main;