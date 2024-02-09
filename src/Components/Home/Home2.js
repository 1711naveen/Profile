import React from 'react'
import Tilt from 'react-parallax-tilt'
import avatar from '../../Assets/avatar.jpg'
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';




const Home2 = () => {
    return (
        <div className='set-font' style={{fontSize:"1.2em"}}>
            <div className="row container center-home">
                <div className="col-8 p-3">
                    <h1 className="text-center">LET ME <span className="focus-color"> INTRODUCE </span>MYSELF</h1>
                    <br />
                    <p>I fell in love with <span className="focus-color"><strong>programming</strong></span> and I have atleast learned something.</p>

                    <p>I am fluent in <span className="focus-color"><strong>C, C++, Java and Python</strong></span>. Also have knowledge of <span className="focus-color"><strong> HTML, CSS and Javascript. </strong></span> </p>

                    <p>Currently learning <span className="focus-color"><strong> Spring Boot and Microservices.</strong></span> Building UI using <span className="focus-color"><strong>Angular.</strong></span></p>

                    <p>I am also currently immersed in mastering <span className="focus-color"><strong> Data Structure and Algorithms</strong></span>, constantly seeking to enhance my <span className="focus-color"><strong>problem-solving</strong></span> skills.</p>

                    <p>Whenever possible, I also apply my passion for developing products with <span className="focus-color"><strong>Node.js</strong></span> and Modern <span className="focus-color"><strong>Javascript Library and Frameworks</strong></span> like <span className="focus-color"><strong>React.js</strong></span> and <span className="focus-color"><strong>Next.js</strong></span></p>

                    <p>A die-hard fan of <span className="focus-color"><strong>Anime &  Manga.</strong></span> </p>

                    <p></p>

                </div>
                <div className="col-4 p-4">
                    <Tilt>
                        <div>
                            <img className='img-fluid' src={avatar} alt="avatar" />
                        </div>
                    </Tilt>
                </div>

                <div className="row">
                    <div className="col-12">
                        <br />
                        <br />
                        <h1 className="text-center">FIND <span className="focus-color">ME</span> ON</h1>
                        <p className="text-center">
                            Feel free to <span className="focus-color"><strong>connect</strong></span> me on
                        </p>

                        <nav class="navbar navbar-expand-lg">
                            <div class="container-fluid">
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav m-auto mb-2 mb-lg-0 home-social-icon">
                                        <li class="nav-item">
                                            <Link className='nav-link icon-color ' to="https://github.com/1711naveen/" target='_blank'>
                                                <Tilt>
                                                    <FaGithub style={{color:"#45050C"}} />
                                                </Tilt>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link className='nav-link icon-color' to="https://twitter.com/YnNaveen00" target='_blank'>
                                                <Tilt>
                                                    <FaTwitter style={{color:"#45050C"}} />
                                                </Tilt>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link className='nav-link icon-color ' to="https://www.linkedin.com/in/naveenyadav1711/" target='_blank'>
                                                <Tilt>
                                                    <FaLinkedin style={{color:"#45050C"}} />
                                                </Tilt>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link className='nav-link icon-color ' to="nav-link" target='_blank'>
                                                <Tilt>
                                                    <FaSquareInstagram style={{color:"#45050C"}}/>
                                                </Tilt>
                                            </Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </nav>

                    </div>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br />
        </div>
    )
}

export default Home2
