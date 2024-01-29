export default function TimelineItem({className, details, children}){
    console.log(details.title)
    return(
        <div className={className}> 
            <h2>{details.time_period}</h2>
            <h3>{details.title}</h3>
            <p>{children}</p>
        </div>
    )
}