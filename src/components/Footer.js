import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-text">
                        <p>Desenvolvido com <span className="heart">❤️</span> e <span className="tech">React</span></p>
                        <p className="copyright">© 2025 Gabriel Araujo. Todos os direitos reservados.</p>
                    </div>
                    <div className="footer-code">
                        <code>
                            import knowledge
                            <br></br>
                            while alive:
                            <br></br>
                            <b style={{ color: '#1A1F3A' }}>_-_</b>knowledge.expand()
                        </code>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
