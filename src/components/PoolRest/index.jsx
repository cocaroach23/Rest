

const PoolRest = () => {

    const  [ restorans, setRestorans ] = useState([

        
        const restorans = await fetch("https://www.bit-by-bit.ru/api/student-projects/restaurants");

        const jsonRestorans = JSON.stringify(restorans)

    ])

    return (
        <div className="flex flex-wrap">
            {PoolMenu.map((restoran) => [
                <div key={restoran.id} className="flex felx-col gap-2">
                    <p>{restoran.image}</p>               
                    <p>{restoran.cuisine}</p>
                    <p>{restoran.description}</p>
                </div>
                //<button>Войти в ресторан</button>
            ])}
        </div>
    )
}

export default PoolRest