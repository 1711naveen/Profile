import React from 'react'
import '../../../src/App.css'
import lap from '../../Assets/laptop.jpg'
import Home2 from './Home2'
import Type from './Type'


const Home1 = () => {
    return (
        <div className='home'>
            <div className="row container center-home">
                <div className="col-7 p-4">
                    <h1>Hi There!</h1>
                    <h1>I AM <span className="focus-color"><strong>NAVEEN YADAV</strong></span></h1>
                    <br />
                    <h1 className='focus-color'><Type /></h1>
                    <br />
                    <br />

                </div>
                <div className="col-5 p-4">
                    <img className='img-fluid' src={lap} alt="" />
                </div>
            </div>
            <br />
            <Home2 />
        </div>
    )
}

export default Home1
