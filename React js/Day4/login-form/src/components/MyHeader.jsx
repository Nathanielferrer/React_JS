import MainLogo from "../assets/logo.png";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">
                    <img src={MainLogo} alt="Main Logo"></img>
                    <h3>Arat Kape</h3>
                </div>

                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;