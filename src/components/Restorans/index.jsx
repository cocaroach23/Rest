import Button from "../Button"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


const Restorans = () => {

    const  [ restorans, setRestorans ] = useState([])

        useEffect(() => {   
        fetch("https://www.bit-by-bit.ru/api/student-projects/restaurants")

        .then((response) => response.json())
        .then((data) => setRestorans(data))
        }, [])
       

    return (
        
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        
            {restorans.map((restoran) => [
                
                <div key={restoran.id} className="p-5">
                    <div className="flex items-center justify-center mb-4 rounded-full bg-indigo-50">
                        <img 
                            src={restoran.image} alt=""
                            className="h-72 object-cover object-center w-full shadow-md" 
                        />
                    </div>
                    <p className="mb-2 font-bold">{restoran.name}</p>
                    <p className="text-sm leading-5 text-gray-900">
                        {restoran.description}
                    </p>
                    <Link to={`/restoran/${restoran.slug}`}>
                        <Button title="Посмотреть меню" />
                    </Link>
                </div>
            ])}
        </div>
        
    )
}

export default Restorans