import React from 'react'
import { FaWindows } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiNotion } from "react-icons/si";


const Toolstack = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col border border-2 rounded-4 p-3 m-3 shadow-lg custom-border">
                    <h1 className="text-center display-2"><FaWindows style={{ color: "#45050C" }} /></h1>
                </div>
                <div className="col border border-2 rounded-4 p-3 m-3 shadow-lg custom-border">
                    <h1 className="text-center display-2"><SiVisualstudiocode style={{ color: "#45050C" }}/></h1>
                </div>
                <div className="col border border-2 rounded-4 p-3 m-3 shadow-lg custom-border">
                    <h1 className="text-center display-2"><SiPostman style={{ color: "#45050C" }}/></h1>
                </div>
                <div className="col border border-2 rounded-4 p-3 m-3 shadow-lg custom-border">
                    <h1 className="text-center display-2"><SiNotion style={{ color: "#45050C" }}/></h1>
                </div>
            </div>
        </div>
    )
}

export default Toolstack
