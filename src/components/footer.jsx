function Footer() {
    return <footer className="page-footer deep-purple accent-1">
        <div className="footer-copyright "> 
            <div className="container">
                ©️{new Date().getFullYear()} Danila Titov
                <a className="grey-text
                text-lighten-4 right"
                href="#!">Developer</a>
            </div>
        </div>
    </footer>
}
export { Footer };