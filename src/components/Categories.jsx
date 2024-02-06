import CategoryCard from "./CategoryCard"

export default function Categories({ data, onClick }) {

    return (

            <div className="categories">
                {data.showcase.map(category => <CategoryCard key={category.id} details={category} onClick={(details) => onClick(details)} />)}
            </div>



    )
}