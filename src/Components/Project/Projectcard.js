import React from 'react'
import { FaGithub } from "react-icons/fa";
import '../../App.css'
import { Link } from 'react-router-dom';


const Projectcard = (props) => {
    return (
        <div>
            <div className="card mb-5 border border-2 rounded-4 m-3 shadow-lg custom-border" style={{ width: "18rem", backgroundColor:"#0C0A3E", color:"white", fontSize:"1.1em" }}>
                <img src={props.image} className="card-img-top img-fluid p-3" alt='no iamge' />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <Link to="#" className="btn btn-primary" style={{backgroundColor:"#5A7684"}}><strong><FaGithub className='me-2 mb-1' /> GitHub</strong></Link>
                </div>
            </div>
        </div>
    )
}

export default Projectcard
