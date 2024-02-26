import { useEffect } from "react"
import Button from "../Button"

const Restoran = () => {

    const [ items , setItems ] = useState({})

        useEffect(() => {
            fetch("https://www.bit-by-bit.ru/api/student-projects/restaurants/[SLUG_РЕСТОРАНА]")

            fetch("https://www.bit-by-bit.ru/api/student-projects/restaurants/[SLUG_РЕСТОРАНА]/items")
            .then((response) => response.json())
            .then((data) => setItems(data))
        }, [slug])

     return(
         
         <div>
            {restoran.map((items) => [
                <div key={items.id}>
                    <div>{items.restaurantId}</div>
                    <h2>{items.name}</h2>
                    <img 
                        src={items.image} 
                    />
                    <p>{items.description}</p>
                    <p>{items.price}</p>
                    <Button>Добавить в корзину</Button>
                </div>
                
            ])}
         </div>
    )

    
}


export default Restoran