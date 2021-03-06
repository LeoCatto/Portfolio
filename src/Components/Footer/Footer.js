import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-info">
                <h1>Leonardo Catto</h1>
                <p>Córdoba, Argentina</p>
            </div>
            <div className="footer-contact">
                <h3>Contact me</h3>
                <p>And let's get down to work</p>
            </div>
            <div className="footer-sns">
                <div className="desing-by">
                    Design by Leonardo Catto
                </div>
                <div className="sns-links">
                    <a href="https://www.linkedin.com/in/leonardocatto96/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="https://github.com/LeoCatto" target="_blank" rel="noreferrer">
                        <i className="fab fa-github github"></i>
                    </a>
                    <a href="https://www.instagram.com/leocatto96/" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
