import React from 'react'
import { FaRegCopyright } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import '../../src/App.css'


const Footer = () => {
    return (
        <div className='border footer pt-3 pb-3' style={{backgroundColor:"#272838", color:"white", width:"100%"}}>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <strong>Designed and Developed by Naveen Yadav</strong>
                    </div>
                    <div className="col">
                        <strong>Copyright</strong> <FaRegCopyright /> 2024  <strong>NY</strong>

                    </div>
                    <div className="col">
                        <FaGithub />
                        <CiLinkedin />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
