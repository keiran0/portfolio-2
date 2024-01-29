import Card from "./Card"

export default function Categories({data}){

    function handleClick(){
        console.log('D')
    }

    return(
        <div className="categories">
            {data.showcase.map(category => <Card key={category.id} details={category} onClick={handleClick}/>)}
        </div>
    )
}