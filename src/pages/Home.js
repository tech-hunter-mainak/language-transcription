import React from 'react'
import NavBar from '../components/NavBar'
import "../css/normalize.css"
import "../css/main.css"
import { defer, Link } from 'react-router-dom'
import { useRef } from 'react';
// import "../js/script.js"
import Logo from "../images/logo.jpg"
import HamMenuIcon from "../images/ham-menu-icon.jpg"
import CloseIcon from "../images/close-icon.jpg"
import SearchDarkIcon from "../images/search-icon-dark.jpg"
import Robo3 from "../images/robo3.jpg"
import Hand from "../images/hand.jpg"
import _4Dots from "../images/4-dots.jpg"
import Voice from "../images/voice.jpg"
import Text from "../images/text.jpg"
import ImageJpg from "../images/image.jpg"
import Custom from "../images/custom.jpg"
import Post1 from "../images/post-1.jpg"
import Post2 from "../images/post-2.jpg"
import Post3 from "../images/post-3.jpg"
import Banner2 from "../images/banner-2-img.jpg"

function Home() {
    function onWindowLoad() {
        const navbarShowBtn = document.querySelector('.navbar-show-btn');
        const navbarCollapseDiv = document.querySelector('.navbar-collapse');
        const navbarHideBtn = document.querySelector('.navbar-hide-btn');

        if (navbarShowBtn && navbarCollapseDiv && navbarHideBtn) {
            navbarShowBtn.onclick = function () {
                navbarCollapseDiv.classList.add('navbar-show');
            };

            navbarHideBtn.onclick = function () {
                navbarCollapseDiv.classList.remove('navbar-show');
            };
        } else {
            console.error('Navbar elements not found');
        }

        function changeSearchIcon() {
            const searchIconImg = document.querySelector('.search-icon img');
            if (searchIconImg) {
                let winSize = window.matchMedia("(min-width: 1200px)");
                if (winSize.matches) {
                    searchIconImg.src = "images/search-icon.png";
                } else {
                    searchIconImg.src = "images/search-icon-dark.png";
                }
            } else {
                console.error('Search icon image not found');
            }
        }

        window.onresize = function () {
            changeSearchIcon();
            document.body.classList.add('resize-animation-stopper');
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
                document.body.classList.remove('resize-animation-stopper');
            }, 400);
        };

        changeSearchIcon();

        let resizeTimer;
    }
    
    return (
        <div>
            <title>LipSync</title>

            <header className="header bg-blue">
                <nav className="navbar bg-blue">
                    <div className="container flex">
                        <Link to="/" className="navbar-brand">
                            <img src={Logo} alt="site logo" />
                        </Link>
                        <button type="button" className="navbar-show-btn" onClick={onWindowLoad}>
                            <img src={HamMenuIcon} />
                        </button>

                        <menu className="navbar-collapse bg-white">
                            <button type="button" className="navbar-hide-btn">
                                <img src={CloseIcon} />
                            </button>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">About</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Service</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Doctors</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Departments</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Contact</a>
                                </li>
                            </ul>
                            <div className="search-bar">
                                <form>
                                    <div className="search-bar-box flex">
                                        <span className="search-icon flex">
                                            <img src={SearchDarkIcon} />
                                        </span>
                                        <input type="search" className="search-control" placeholder="Search here" />
                                    </div>
                                </form>
                            </div>
                        </menu>
                    </div>
                </nav>

                <div className="header-inner text-white text-center">
                    <div className="container grid">
                        <div className="header-inner-left"><br /><br /><br />
                            <h1>Lip-Sync<br /> <span>Voice Translation</span></h1>
                            <p className="lead">Deep Learning Model</p>
                            <p className="text text-md"><br /></p>

                            <div className="btn-group">
                                <a activeClass="active" href="#services" spy={true} smooth={true} duration={500} className="btn btn-white">Learn More</a>
                                <Link to="dashboard" className="btn btn-light-blue">Sign In</Link>
                            </div>
                        </div>
                        <div className="header-inner-right">
                            <img src={Robo3} />
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <section id="about" className="about py">
                    <div className="about-inner">
                        <div className="container grid">
                            <div className="about-left text-center">
                                <div className="section-head">
                                    <h2>About Us</h2>
                                    <div className="border-line"></div>
                                </div>
                                <p className="text text-lg">Welcome to REVO, where we harness the power of deep learning AI to
                                    deliver precise and culturally nuanced language translations. Our neural networks ensure
                                    accurate translations, helping businesses and individuals communicate seamlessly across
                                    borders. Experience the future of translation with our innovative solutions, designed to
                                    break language barriers and enhance global connectivity.</p>
                                <a href="#" className="btn btn-white">Learn More</a>
                            </div>
                            <div className="about-right flex">
                                <div className="img" style={{ "width": "100%" }}>
                                    <img src={Hand} style={{ "width": "100%" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="banner-one" className="banner-one text-center">
                    <div className="container text-white">
                        <blockquote className="lead"><i className="fas fa-quote-left"></i> Generative AI is one of the most exciting and
                            powerful technologies of our time, but it also presents new challenges and risks that we need to
                            address thoughtfully and proactively.<i className="fas fa-quote-right"></i></blockquote>
                        <small className="text text-sm">— Sam Altman</small>
                    </div>
                </section>

                <section id="services" className="services py">
                    <div className="container">
                        <div className="section-head text-center">
                            <h2 className="lead">Connecting Peoples</h2>
                            <p className="text text-lg">A perfect way to show your services</p>
                            <div className="line-art flex">
                                <div></div>
                                <img src={_4Dots} />
                                <div></div>
                            </div>
                        </div>
                        <div className="services-inner text-center grid">
                            <article className="service-item">
                                <div className="icon">
                                    <img src={Voice} />
                                </div>
                                <h3>Voice Translation</h3>
                                <p className="text text-sm">Discover seamless voice translation on our website, enabling users to
                                    translate spoken words instantly with accuracy and natural fluency. Powered by advanced deep
                                    learning AI, our platform facilitates effortless communication across languages, enhancing
                                    global connectivity for users worldwide. </p>
                            </article>

                            <article className="service-item">
                                <div className="icon">
                                    <img src={ImageJpg} />
                                </div>
                                <h3>Lip-Syncing</h3>
                                <p className="text text-sm">Experience flawless lip-syncing on our site, where translated speech
                                    seamlessly matches natural lip movements. Powered by advanced technology, our platform
                                    ensures authentic communication across languages in any context.</p>
                            </article>

                            <article className="service-item">
                                <div className="icon">
                                    <img src={Text} />
                                </div>
                                <h3>Text-to-Speech</h3>
                                <p className="text text-sm">TTS technology enables screen readers to audibly read aloud the content
                                    of the website to users who are visually impaired or blind. This includes text on web pages,
                                    as well as navigation menus, form fields, and other interactive elements, allowing users to
                                    navigate and access information effectively.</p>
                            </article>

                            <article className="service-item">
                                <div className="icon">
                                    <img src={Custom} />
                                </div>
                                <h3>Customizable Interfaces</h3>
                                <p className="text text-sm">It empowers individuals to tailor their browsing experience to their
                                    unique needs and preferences, improving accessibility and inclusivity on the website. It's
                                    essential to gather feedback from users throughout the design and development process to
                                    ensure that the customization options meet their specific needs and preferences effectively.
                                </p>
                            </article>
                        </div>
                    </div>
                </section>

                <section id="banner-two" className="banner-two text-center">
                    <div className="container grid">
                        <div className="banner-two-left">
                            <img src={Banner2} />
                        </div>
                        <div className="banner-two-right">
                            <p className="lead text-white">When you are young and healthy, it never occurs to you that in a single
                                second your whole life could change.</p>
                            <div className="btn-group">
                                <a href="#services" className="btn btn-white">Learn More</a>
                                <a href="#" className="btn btn-light-blue">Sign In</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="package-service" className="package-service py text-center">
                    <div className="container">
                        <div className="package-service-head text-white">
                            <h2>Package Service</h2>
                            <p className="text text-lg">Best service package for you</p>
                        </div>
                        <div className="package-service-inner grid">
                            <div className="package-service-item bg-white">
                                <div className="icon flex">
                                    <i className="fas fa-phone fa-2x"></i>
                                </div>
                                <h3>Regular Case</h3>
                                <p className="text text-sm">Our regular service package is ideal for routine maintenance
                                    and standard support needs. With scheduled check-ups, software updates, and
                                    access to basic assistance, this package ensures that your systems remain
                                    operational and optimized for peak performance.</p>
                                <a href="#" className="btn btn-blue">Read More</a>
                            </div>

                            <div className="package-service-item bg-white">
                                <div className="icon flex">
                                    <i className="fas fa-calendar-alt fa-2x"></i>
                                </div>
                                <h3>Serious Case</h3>
                                <p className="text text-sm">When you encounter more significant challenges or require
                                    urgent assistance, our serious service package is here to help. Offering faster
                                    response times, priority support, and comprehensive assistance, this package
                                    ensures that your critical issues are addressed promptly and effectively,
                                    minimizing downtime and disruption to your operations.</p>
                                <a href="#" className="btn btn-blue">Read More</a>
                            </div>

                            <div className="package-service-item bg-white">
                                <div className="icon flex">
                                    <i className="fas fa-comments fa-2x"></i>
                                </div>
                                <h3>Emergency Case</h3>
                                <p className="text text-sm">n times of crisis or emergency, our emergency service
                                    package provides you with the immediate support and expertise you need to
                                    resolve critical issues quickly. With 24/7 support, expedited response times,
                                    and access to specialized resources, this package is designed to mitigate risks
                                    and restore functionality when every moment counts.</p>
                                <a href="#" className="btn btn-blue">Read More</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="posts" className="posts py">
                    <div className="container">
                        <div className="section-head">
                            <h2>Latest Post</h2>
                        </div>
                        <div className="posts-inner grid">
                            <article className="post-item bg-white">
                                <div className="img">
                                    <img src={Post1} />
                                </div>
                                <div className="content">
                                    <h4>POST HEADLINE</h4>
                                    <p className="text text-sm">Story</p>
                                    <p className="text text-sm">Details</p>
                                    <div className="info flex">
                                        <small className="text text-sm"><i className="fas fa-clock"></i> April 6,
                                            2024</small>
                                        <small className="text text-sm"><i className="fas fa-comment"></i> 5
                                            comments</small>
                                    </div>
                                </div>
                            </article>

                            <article className="post-item bg-white">
                                <div className="img">
                                    <img src={Post2} />
                                </div>
                                <div className="content">
                                    <h4>POST HEADLINE</h4>
                                    <p className="text text-sm">Story</p>
                                    <p className="text text-sm">Details</p>
                                    <div className="info flex">
                                        <small className="text text-sm"><i className="fas fa-clock"></i> April 6,
                                            2024</small>
                                        <small className="text text-sm"><i className="fas fa-comment"></i> 5
                                            comments</small>
                                    </div>
                                </div>
                            </article>

                            <article className="post-item bg-white">
                                <div className="img">
                                    <img src={Post3} />
                                </div>
                                <div className="content">
                                    <h4>POST HEADLINE</h4>
                                    <p className="text text-sm">Story</p>
                                    <p className="text text-sm">Details</p>
                                    <div className="info flex">
                                        <small className="text text-sm"><i className="fas fa-clock"></i> April 6,
                                            2024</small>
                                        <small className="text text-sm"><i className="fas fa-comment"></i> 5
                                            comments</small>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                <section id="contact" className="contact py">
                    <div className="container grid">
                        <div className="contact-left">
                            <iframe src="https://maps.google.com/maps/embed?pb=?cid=9362887102108936347&entry=gps"
                                width="600" height="450" style={{ "border": "0" }} allowfullscreen=""
                                loading="lazy"></iframe>
                        </div>
                        <div className="contact-right text-white text-center bg-blue">
                            <div className="contact-head">
                                <h3 className="lead">Contact Us</h3>
                                <p className="text text-md">-------------------</p>
                            </div>
                            <form>
                                <div className="form-element">
                                    <input type="text" className="form-control" placeholder="Your name" />
                                </div>
                                <div className="form-element">
                                    <input type="email" className="form-control" placeholder="Your email" />
                                </div>
                                <div className="form-element">
                                    <textarea rows="5" placeholder="Your Message" className="form-control"></textarea>
                                </div>
                                <button type="submit" className="btn btn-white btn-submit">
                                    <i className="fas fa-arrow-right"></i> Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            <footer id="footer" className="footer text-center">
                <div className="container">
                    <div className="footer-inner text-white py grid">
                        <div className="footer-item">
                            <h3 className="footer-head">about us</h3>
                            <div className="icon">
                                <img src={Logo} />
                            </div>
                            <p className="text text-md">At REVO, our dedication to innovation and patient-centric care knows no
                                bounds. Whether you're a healthcare provider seeking state-of-the-art solutions or a patient in
                                search of reliable care, we're here to support you every step of the way. </p>

                            NIT Silchar <br />
                            Assam <br />
                            India
                        </div>

                        <div className="footer-item">
                            <h3 className="footer-head">tags</h3>
                            <ul className="tags-list flex">
                                <li>medical care</li>
                                <li>emergency</li>
                                <li>therapy</li>
                                <li>surgery</li>
                                <li>medication</li>
                                <li>nurse</li>
                            </ul>
                        </div>

                        <div className="footer-item">
                            <h3 className="footer-head">Quick Links</h3>
                            <ul>
                                <li><a href="#" className="text-white">Our Services</a></li>
                                <li><a href="#" className="text-white">Our Plan</a></li>
                                <li><a href="#" className="text-white">Privacy Policy</a></li>
                                <li><a href="#" className="text-white">Appointment Schedule</a></li>
                            </ul>
                        </div>

                        <div className="footer-item">
                            <h3 className="footer-head">make an appointment</h3>
                            <p className="text text-md">Thank you for entrusting us with your health. We look forward to serving you
                                again soon.</p>
                            <ul className="appointment-info">
                                <li>8:00 AM - 11:00 AM</li>
                                <li>2:00 PM - 05:00 PM</li>
                                <li>8:00 PM - 11:00 PM</li>
                                <li>
                                    <i className="fas fa-envelope"></i>
                                    <span>mainak_ug_23@cse.nits.ac.in</span>
                                </li>
                                <li>
                                    <i className="fas fa-phone"></i>
                                    <span><a herf="tel:+919163930090" style={{ "color": "white" }}>+91 91639 30090</a></span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-links">
                        <ul className="flex">
                            <li><a href="#" className="text-white flex"> <i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#" className="text-white flex"> <i className="fab fa-twitter"></i></a></li>
                            <li><a href="#" className="text-white flex"> <i className="fab fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
            <script src="js/script.js"></script>
        </div>
    )
}

export default Home