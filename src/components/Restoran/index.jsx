import { useEffect } from "react"
import Button from "../Button"
import uuid from 'uuid4'

const Restoran = () => {

    const [ items , setItems ] = useState([])
    const { slug } = useParams()
    const [ itemCard, setItemCard ] = useState([])

        useEffect(() => {
            fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}/items`)

            
            .then((response) => response.json())
            .then((data) => setItems(data))
        }, [slug])


        const addBasket = (item) => {
            const newItemCard = {
                ...item,
                id: uuid(),
                itemId: item.id,
                quantity:1
            }
            setItemCard([...itemCard,newItemCard])
        }
        



        return(
         
         <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => [
                <div key={item.id}>
                    <div>{item.restaurantId}</div>
                    <h2>{item.name}</h2>
                    <img 
                        src={item.image} 
                    />
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                    <Button>Добавить в корзину</Button>
                </div>
                
            ])}
         </div>
    )

    
}


export default Restoran