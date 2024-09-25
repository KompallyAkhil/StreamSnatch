import "./Navbar.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
        <header className="header">
                <div className="header-top">
                    <p className="header-heading"><Link to='/home'>StreamSnatch</Link></p>
                    <div className="header-right">
                        <Link to='/faq'><button className="header-faq">FAQ</button></Link>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header