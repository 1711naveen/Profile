import React from 'react'
import '../App.css'
import { TiHomeOutline } from "react-icons/ti";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineDocumentText } from "react-icons/hi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { IoIosGitBranch } from "react-icons/io";
import { FaStar } from "react-icons/fa6";


const Navbar = () => {
    return (
        <div style={{ position: "fixed", top: 0, width: "100%", zIndex: 1, fontSize: "1.3em" }}>
            <nav className="navbar navbar-expand-lg bg-body-tertiary custom-nav">
                <div className="container-fluid">
                    <Link className="navbar-brand ms-5 me-5 ps-5 pe-5" to="/"><span className="focus-color" style={{ fontSize: "1.2em" }}><strong>NY.</strong></span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item me-3 p-1">
                                <Link className="nav-link" aria-current="page" to="/">
                                    <span className="custdark"><TiHomeOutline className='mb-1 me-2' />
                                        Home</span></Link>
                            </li>
                            <li className="nav-item  me-3 p-1">
                                <Link className='nav-link' to="/about">
                                    <span className="custdark"><IoPersonOutline className='mb-1 me-2' />
                                        About</span></Link>
                            </li>
                            <li className="nav-item me-3 p-1">
                                <Link className="nav-link" to="/project">
                                    <span className='custdark'><AiOutlineFundProjectionScreen className='mb-1 me-2' />Project</span>
                                </Link>
                            </li>
                            <li className="nav-item me-3 p-1">
                                <Link className="nav-link" to="/resume">
                                    <span className='custdark'><HiOutlineDocumentText className='mb-1 me-2' />Resume</span></Link>
                            </li>
                            <li className="nav-item me-5 p-1">
                                <Link className="nav-link" to="https://github.com/1711naveen/Profile" target='_blank'>
                                    <span className='custdark'>
                                        <button type="button" className="btn gitBtn pb-1" >
                                            <IoIosGitBranch className='ms-2 me-2 mb-1' />
                                            <FaStar className='me-2 mb-1' />
                                        </button>
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
