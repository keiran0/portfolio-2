export default function Card({details, onClick}){

    console.log(details)

    return(
        <div className="card" onClick={onClick}>
            <h1>{details.title}</h1>
            <p>{details.description}</p>
        </div>
    )
}