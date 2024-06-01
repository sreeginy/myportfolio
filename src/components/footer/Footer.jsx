import React from 'react'
import './footer.css' 

const Footer = () => {
  return (
   
    <footer className="footer">
        <div className="footer__container container">

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#services" className="footer__link">Achivements</a>
                </li>
            </ul>

            <div className="footer__social">

            <a href="https://github.com/sreeginy" className="footer__social-link" target="_blank">
            <i className="bx bxl-github"> </i>
            </a>

            <a href="https://www.facebook.com/giny.sree/" className="footer__social-link" target="_blank">
            <i className="bx bxl-facebook"></i>
            </a>

            <a href="https://www.instagram.com/giny_jos/?utm_source=qr" className="footer__social-link" target="_blank">
            <i className="bx bxl-instagram"> </i>
            </a>

            </div>

            <span className="footer__copy">&#169; Sreeginy. All rights reserved.</span>
        </div>
    </footer>
  )
}

export default Footer
