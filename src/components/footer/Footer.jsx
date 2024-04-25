import React from 'react'
import './footer.css' 

const Footer = () => {
  return (
   
    <footer className="footer">
        <div className="footer__container container">
            {/* <h1 className="footer__title">Sreeginy</h1> */}

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#qualification" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">

            <a href="https://github.com/sreeginy" className="footer__social-link" target="_blank">
                <i className="bx bxl-facebook"> </i>
            </a>

            <a href="" className="footer__social-link" target="_blank">
                <i className="bx bxl-instagram"> </i>
            </a>

            <a href="" className="footer__social-link" target="_blank">
                <i className="bx bxl-twitter"> </i>
            </a>

            </div>

            <span className="footer__copy">&#169; Sreeginy. All rights reserved.</span>
        </div>
    </footer>
  )
}

export default Footer
