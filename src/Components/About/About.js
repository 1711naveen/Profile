import React from 'react'
import '../../../src/App.css'
import Techstack from './Techstack'
import Toolstack from './Toolstack'
import SideImage from '../../Assets/tobechangedimage.jpg'

const About = () => {
    return (
        <div className='set-font' style={{fontSize:"1.2em"}}>
            <div className="row container center-home">
                <div className="col-7 p-2">
                    <h1 className="text-center">Know Who <span className="focus-color"><strong> I'M</strong></span></h1>
                    <br />
                    <p>Hello Everyone, I am <span className="focus-color"><strong>Naveen Yadav</strong></span> from <span className="focus-color"><strong> Kanpur UttarPradesh, India.</strong></span> I have completed <span className="focus-color"><strong>B.Tech</strong></span> in <span className="focus-color"><strong>Mechanical Engineering</strong></span> from <span className="focus-color"><strong> Madan Mohan Malaviya University of Technology, Gorakhpur.</strong></span> Interested in<span className="focus-color"><strong> Machine Learning & Artificial Intelligence.</strong></span>
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to do!
                        <br />
                    </p>
                    <ul>
                        <li>Playing <span className="focus-color"><strong>Chess & Cricket</strong></span></li>
                        <li>Reading <span className="focus-color"><strong>Books</strong></span></li>
                        <li>Watching <span className="focus-color"><strong>Anime</strong></span></li>
                    </ul>
                </div>
                <div className="col-5 p-2">
                    <img className='img-fluid' src={SideImage} alt="" />
                </div>
            </div>
            <br /><br /><br />
            <div className='container'>
                <h1 className="text-center">Professional <span className="focus-color"><strong>Skillset</strong></span></h1>
                <br />
                <Techstack />
            </div>
            <br /><br /><br /><br /><br />
            <div className="container">
                <h1 className="text-center"><span className="focus-color"><strong>Tools</strong></span> I Use</h1>
                <br />
                <Toolstack />
            </div>
            <br />
            <br />
        </div>
    )
}

export default About
