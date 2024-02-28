import { useEffect, useState } from "react"
import Button from "../Button"
import { useParams } from "react-router-dom"
import uuid4 from "uuid4"
import { format } from "date-fns";

const Restoran = () => {

    const [ dishes , setDishes ] = useState([])
    const [ restoranData, setReastoranData ] = useState([])
    const { slug } = useParams()
    const [ itemCard, setItemCard ] = useState([])

        useEffect(() => {
            fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}/items`)
                .then((response) => response.json())
                .then((data) => setDishes(data))
        }, [slug])

        useEffect(() => {
            fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}`)
                .then((response) => response.json())
                .then((data) => setReastoranData(data))
        }, [slug])


        const addBasket = (item) => {
            const newItemCard = {
                ...item,
                id: uuid4(),
                itemId: item.id,
                quantity:1
            }
            setItemCard([...itemCard,newItemCard])
        }
        



    return(
    <>
        {restoranData &&
            <div>
                <h1>{restoranData.name}</h1>
                <p>{restoranData.address}</p>
                <p>{format(new Date(restoranData.openAt), 'HH : mm')} - {format(new Date(restoranData.closeAt), 'HH : mm')}</p>
            </div>
        } 
            <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {dishes.map((dish) => [
                    <div key={dish.id}>
                        <h2>{dish.name}</h2>
                        <img 
                            src={dish.image} 
                        />
                        <p>{dish.description}</p>
                        <p>{dish.price}</p>
                        <Button title="Добавить в корзину" />
                    </div>
                    
                ])}
            </div>
    </>
    )

    
}


export default Restoran