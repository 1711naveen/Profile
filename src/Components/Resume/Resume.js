import React from 'react'
import '../../App.css'
import { FaFileDownload } from "react-icons/fa";
import { Document, Page } from 'react-pdf';
import resume from '../../Assets/Naveen_Yadav-MMMUT.pdf'
import { pdfjs } from 'react-pdf';
import "react-pdf/dist/esm/Page/TextLayer.css";
import 'react-pdf/dist/Page/AnnotationLayer.css';


// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//     'pdfjs-dist/build/pdf.worker.min.js',
//     import.meta.url,
// ).toString();

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const Resume = () => {

    return (
        <div className='set-font' style={{fontSize:"1.2em"}}>
            <div className='container custom-resume text-center'>
                <button type="button" className="btn btn-success mb-5" ><FaFileDownload className='me-3 mb-1' /><strong>Download Resume</strong></button>
                <div className="row">
                    <Document file={resume} className="d-flex justify-content-center" >
                        <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} scale={1.5} />
                    </Document>
                </div>
                <button type="button" className="btn btn-success mt-5" ><FaFileDownload className='me-3 mb-1' /><strong>Download Resume</strong></button>
            </div>
        </div>
    )
}

export default Resume
