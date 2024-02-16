import React from 'react'
import '../../../src/App.css'
import { CgCPlusPlus } from "react-icons/cg";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";



const Techstack = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col border border-2 rounded-4 p-3 m-3 shadow-lg custom-border" >
                    <h1 className='text-center display-2' > <CgCPlusPlus style={{ color: "#45050C" }} /></h1>
                </div>
                <div className="col border border-2 rounded-4 p-3 m-3 shadow-lg custom-border">
                    <h1 className='text-center display-2'> < FaJava style={{ color: "#45050C" }} /></h1>
                </div>
                <div className="col border border-2 rounded-4 p-3 m-3 shadow-lg custom-border">
                    <h1 className='text-center display-2'> <FaPython style={{ color: "#45050C" }} />
                    </h1>
                </div>
                <div className="col border border-2 rounded-4 p-3 m-3 shadow-lg custom-border">
                    <h1 className='text-center display-2'> <FaHtml5 style={{ color: "#45050C" }} />
                    </h1>
                </div>
                <div className="col border border-2 rounded-4 p-3 m-3 shadow-lg custom-border">
                    <h1 className='text-center display-2'><FaCss3Alt style={{ color: "#45050C" }} /></h1>
                </div>
            </div>
            <div className="row">
                <div className="col border border-2 rounded-4 p-3 m-3 shadow-lg custom-border">
                    <h1 className='text-center display-2'> <IoLogoJavascript style={{ color: "#45050C" }} /></h1>
                </div>
                <div className="col border border-2 rounded-4 p-3 m-3 shadow-lg custom-border">
                    <h1 className='text-center display-2'> <FaNode style={{ color: "#45050C" }} /></h1>
                </div>
                <div className="col border border-2 rounded-4 p-3 m-3 shadow-lg custom-border">
                    <h1 className='text-center display-2'> <FaReact style={{ color: "#45050C" }} /></h1>
                </div>
                <div className="col border border-2 rounded-4 p-3 m-3 shadow-lg custom-border">
                    <h1 className='text-center display-2'> <TbBrandNextjs style={{ color: "#45050C" }} /></h1>
                </div>
                <div className="col border border-2 rounded-4 p-3 m-3 shadow-lg custom-border">
                    <h1 className='text-center display-2'> <DiMongodb style={{ color: "#45050C" }} /></h1>
                </div>
            </div>
            <div className="row">
                <div className="col border border-2 rounded-4 p-3 m-3 shadow-lg custom-border">
                    <h1 className='text-center display-2'> <GrMysql style={{ color: "#45050C" }} /></h1>
                </div>
                <div className="col border border-2 rounded-4 p-3 m-3 shadow-lg custom-border">
                    <h1 className='text-center display-2'> <BiLogoSpringBoot style={{ color: "#45050C" }} /></h1>
                </div>
                <div className="col border border-2 rounded-4 p-3 m-3 shadow-lg custom-border">
                    <h1 className='text-center display-2'> <FaGithub style={{ color: "#45050C" }} /></h1>
                </div>

            </div>
        </div>
    )
}

export default Techstack
