import React from 'react'
import s from '../styles/footer.module.css'

const Footer = () => {
    return (
        <>
            <footer className={s.footer}>
                <div className={s.footercontainer}>
                    <div className={s.footersection}>
                        <h3>About Eornex</h3>
                        <p>Your go-to source for the latest trends in technology, business, and innovation. Stay updated with Eornex for insightful articles and expert analysis.</p>
                    </div>

                    <div className={s.footersection}>
                        <h3>Navigation</h3>
                        <ul className={s.ul}>
                            <li><a href="/">Home</a></li>
                            <li><a href="/categories">Categories</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/privacy-policy">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div className={s.footersection}>
                        <h3>Subscribe</h3>
                        <p>Stay in the loop. Subscribe to our newsletter for the latest updates and exclusive content.</p>
                        {/* <!-- Add your email subscription form here --> */}
                    </div>

                    <div className={s.footersection}>
                        <h3>Connect With Us</h3>
                        {/* <!-- Add social media icons and links here --> */}
                        <div className={s.socialicons}>
                            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                <div className={s.footerbottom}>
                    <div className={s.footerbottomleft}>
                        <p>&copy; 2023 Eornex. All rights reserved.</p>
                    </div>

                    <div className={s.footerbottomright}>
                        <ul className={s.ul}>
                            <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
                            <li><a href="/privacy-policy">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer