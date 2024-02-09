import React from 'react'
import Projectcard from './Projectcard'
import imgNotes from '../../Assets/cloudNotebook.jpg'

const Project = () => {
    return (
        <>
            <div className='container custom-project'>
                <div>
                    <h1 className='text-center p-2 mb-3'>My Recent <span className="focus-color"><strong>Works</strong></span></h1>
                </div>

                <div>
                    <p className='text-center'>Here are few <span className="focus-color"><strong>projects </strong></span>I have worked on recently</p>
                </div>

            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col p-2">
                        <Projectcard
                            image={imgNotes}
                            title="iNoteBook"
                            description="my naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadav"
                            github="https://github.com"
                        />
                    </div>
                    <div className="col p-2">
                        <Projectcard
                            image={imgNotes}
                            title="iNoteBook"
                            description="my naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadav"
                            github="https://github.com"
                        />
                    </div>
                    <div className="col p-2">
                    <Projectcard 
                            image={imgNotes}
                            title="iNoteBook"
                            description="my naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadavmy naven is naveen ayadav"
                            github="https://github.com"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project
