import ProjectCard from "./ProjectCard";

export default function Showcase({ display, handleClick }) {

    return (
        <div className="showcase-container">
            <button onClick={handleClick} className="button website-buttons">Back</button>
            <div className="showcase">
                {display.projects.map(project => <ProjectCard key={project.title} project={project}/>)}
            </div>
        </div>
    )
}