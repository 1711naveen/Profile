import React from 'react'
import '../../../src/App.css'
import lap from '../../Assets/laptop.jpg'
import Home2 from './Home2'
import Type from './Type'


const Home1 = () => {
    return (
        <div className='container home' style={{fontSize:"1.2em"}}>
            <div className="row container center-home">
                <div className="col-7 p-4 center">
                    <h1 className='text-large'>Hi There!</h1>
                    <h1 className='text-large'>I AM <span className="focus-color"><strong>NAVEEN YADAV</strong></span></h1>
                    <br />
                    <h1 className='focus-color'><strong><Type /></strong></h1>
                    <br />
                    <br />
                </div>
                <div className="col-5 p-4 center">
                    <img className='img-fluid' src={lap} alt="" />
                </div>
            </div>
            <br />
            <Home2 />
        </div>
    )
}

export default Home1
