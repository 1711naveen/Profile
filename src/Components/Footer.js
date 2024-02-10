import React from 'react'
import '../../src/App.css'
import { FaRegCopyright } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='set-font' >
            <div className='border footer pt-3 pb-3' style={{ backgroundColor: "#272838", color: "white", width: "100%" }}>
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <strong>Designed and Developed by Naveen Yadav</strong>
                        </div>
                        <div className="col">
                            <strong>Copyright</strong> <FaRegCopyright /> 2024  <strong>NY</strong>
                        </div>
                        <div className="col">
                            <Link to='https://github.com/1711naveen' target='_blank' >
                                <FaGithub className='ms-2 me-3' style={{ fontSize: "1.4em", color: "white" }} />
                            </Link>
                            <Link to='https://twitter.com/YnNaveen00' target='_blank'>
                                <FaTwitter className='ms-2 me-3' style={{ fontSize: "1.4em", color: 'White' }} />
                            </Link>
                            <Link to='https://www.linkedin.com/in/naveenyadav1711/' target='_blank'>
                                <CiLinkedin className='ms-2 me-3' style={{ fontSize: "1.4em", color: 'White' }} />
                            </Link>
                            <Link to=''> 
                                <FaInstagram className='ms-2 me-2' style={{ fontSize: "1.4em", color:"White" }} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
