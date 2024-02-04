import Modal from "./Modal"

import { useRef } from 'react';

export default function ProjectCard({ project }) {

    const ref = useRef()


    return (
        <div className="button card-showcase" onClick={()=>ref.current.open()}>
            <div className="embed-container">
                <img src={project.preview}/>
            </div>
            <Modal project={project} ref={ref}/>
            <h2>{project.title}</h2>
        </div>
    )
}