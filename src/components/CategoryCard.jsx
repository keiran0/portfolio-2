export default function CategoryCard({details, onClick}){

    function handleClick(){
        onClick(details)
    }

    return(
        <div className="button card-categories" onClick={handleClick}>
            <h1>{details.title}</h1>
            <p>{details.description}</p>
        </div>
    )
}