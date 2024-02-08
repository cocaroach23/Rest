
itemsRest = {
    id: number;
    name: string;
    slug: string;
    phone: number;
    email: string;
    cuisine: string;
    address: string;
    image: string;
    openAt: number;
    closeArt: number;
    description: string;
}

const PoolMenu = () => {

    const url = "https://www.bit-by-bit.ru/api/student-projects/restaurants"
    const response = await fetch(url);

    return (
        <div className="flex flex-wrap">
            {PoolMenu.map((card) => [
                <div key={card.id} className="flex felx-col gap-2">
                    <p>{card.image}</p>
                    <p>{card.name}</p>
                    <p>{card.phone}</p>
                    <p>{card.email}</p>
                    <p>{card.slug}</p>
                    <p>{card.address}</p>
                    <p>{card.openAt} - {closeAt}</p>
                    <p>{card.cuisine}</p>
                    <p>{card.description}</p>


                </div>
            ])}
        </div>
    )
}

export default PoolMenu