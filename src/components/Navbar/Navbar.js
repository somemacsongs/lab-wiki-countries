import style from "./Navbar.module.css";

function Navbar() {
    return (
        <div className={style.container}>
            <h2 className={style.title}>WikiCountries</h2>
        </div>
    )
}

export default Navbar;