import data from '../data.json'
import TimelineItem from './TimelineItem'

export default function Timeline() {
    //console.log(data.timeline[0])

    return (
        <div className="timeline">
            {data.timeline.map(job=><TimelineItem key={job.title} className={`timeline-item ${job.className}`} details={job}/>)}
        </div>
    )
}