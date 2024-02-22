import Button from "../Button"

const PoolRest = () => {

    const  [ restorans, setRestorans ] = useState([])

        useEffect(() => {   
        fetch("https://www.bit-by-bit.ru/api/student-projects/restaurants")

        .then((response) => response.json())
        .then((data) => setItems(data))
        }, [slug])
    

    

    return (
        <div className="flex flex-wrap">
            {PoolMenu.map((restoran) => [
                <div>
                    <div key={restoran.id} className="flex felx-col gap-2">
                        <p>{restoran.image}</p>               
                        <p>{restoran.cuisine}</p>
                        <p>{restoran.description}</p>
                    </div>
                    <button title={"Посмотреть меню"} />
                </div>
            ])}
        </div>
    )
}

export default PoolRest