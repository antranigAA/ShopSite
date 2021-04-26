
const Footer = () => {
    return (
        <footer className="page-footer green darken-1">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="https://github.com/antranigAA">Antranig Apkarian</a>
                </div>
            </div>
        </footer>
    );
}
export default Footer;