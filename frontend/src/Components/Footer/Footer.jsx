import "./Footer.css";
const Footer = () => {
    return (
        <>
            <footer class="footer">
                <p className="footer-heading">StreamSnatch</p>
                <div className="footer-subheading">
                    <p className="footer-note">We are not affiliated with Instagram or Meta</p>
                    <bold className="footer-rights">© 2024 FI Video Downloader. All rights reserved.</bold>
                </div>
                <p className="footer-developer">Made by <a className="footer-anchor" href="https://github.com/KompallyAkhil">Akhil Kompally</a></p>
            </footer>
        </>
    )
}
export default Footer