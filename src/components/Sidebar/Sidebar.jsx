import Styles from "../Sidebar/Sidebar.module.css"

function Sidebar() {
    return (
        <div className={Styles.sidebarContainer}>

            <h3>Pocket Notes</h3>

            <div className={Styles.btn}><label >+ Create Notes</label></div>

            <div className={Styles.notesProfileContainer}>

                <div className={Styles.notesProfile}>
                    <h5>CU</h5>
                    <p>Cuvette Notes</p>
                </div>

                <div className={Styles.notesProfile}>
                    <h5>CU</h5>
                    <p>Cuvette Notes</p>
                </div>

                <div className={Styles.notesProfile}>
                    <h5>CU</h5>
                    <p>Cuvette Notes</p>
                </div>


            </div>
        </div>
    )
}
export default Sidebar;