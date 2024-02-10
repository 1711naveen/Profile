import React from 'react'
import Projectcard from './Projectcard'
import imgNotes from '../../Assets/cloudNotebook.jpg'

const Project = () => {
    return (
        <div className='set-font' >
            <div className='container custom-project'>
                <div>
                    <h1 className='text-center p-2 mb-3'>My Recent <span className="focus-color"><strong>Works</strong></span></h1>
                </div>

                <div>
                    <p className='text-center' style={{fontSize:"1.4em"}} >Here are few <span className="focus-color"><strong>projects </strong></span>I have worked on recently</p>
                </div>

            </div>
            <div className="container text-center" style={{fontSize:"1.1em"}}>
                <div className="row">
                    <div className="col p-2 d-flex justify-content-center">
                        <Projectcard
                            image={imgNotes}
                            title="iNoteBook"
                            description="This is a Web Application which solves the problem of storing notes without worrying to loose it. Front-end is build using ReactJs and backend on Express. MongoDb Atlas database is used to store the user credentials and personal notes."
                            github="https://github.com/1711naveen/iNotebook-Frontend"
                        />
                    </div>
                    <div className="col p-2 d-flex justify-content-center">
                        <Projectcard
                            image={imgNotes}
                            title="Sorting-Visualiser "
                            description="Used the knowledge of Data Sturcture and Algorithms to implement sorting of array of numbersand visualising it with the help of HTML, CSS and Javascript."
                            github="https://github.com/1711naveen/Sorting-Visualiser"
                        />
                    </div>
                    {/* <div className="col p-2 d-flex justify-content-center">
                        <Projectcard
                            image={imgNotes}
                            title="iNoteBook"
                            description="my naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadav"
                            github="https://github.com"
                        />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Project
