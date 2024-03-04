import { useEffect, useState } from "react";
import Button from "../Button";
import { useParams } from "react-router-dom";
import uuid4 from "uuid4";
import { format } from "date-fns";
import "../Restoran/index.css";

const Restoran = () => {
  const [dishes, setDishes] = useState([]);
  const [restoranData, setReastoranData] = useState([]);
  const { slug } = useParams();
  const [dishInBasket, setDishInBasket] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}/items`,
    )
      .then((response) => response.json())
      .then((data) => setDishes(data));
  }, [slug]);

  useEffect(() => {
    fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}`)
      .then((response) => response.json())
      .then((data) => setReastoranData(data));
  }, [slug]);

  const addToBasket = (dish) => {
    const newDish = {
      ...dish,
      id: uuid4(),
      dishId: dish.id,
      quantity: 1,
    };
    setDishInBasket([...dishInBasket, newDish]);
  };

  return (
    <div>
      {restoranData && (
        <div className="flex flex-col text-center gap-9">
          <h1 className="font-name-rest">{restoranData.name}</h1>
          <p className="font-adress-rest">{restoranData.address}</p>
          <p className="working_hours">
            {restoranData.openAt && restoranData.closeAt
              ? `${format(new Date(restoranData.openAt), "HH : mm")} - ${format(new Date(restoranData.closeAt), "HH : mm")}`
              : `Не работает`}
          </p>
        </div>
      )}
      <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mx-8 mt-8 mb-9">
        {dishes.map((dish) => [
          <div
            key={dish.id}
            className="flex flex-col items-cente justify-between text-center"
          >
            <div>
              <h2 className="card_dish">{dish.name}</h2>
              <img className="border-0 rounded-full " src={dish.image} alt="" />
            </div>
            <div>
              <p className="dish_description">{dish.description}</p>
              <p className="dish_price">${dish.price}</p>
              <Button
                title="Добавить в корзину"
                onClick={() => addToBasket(dish)}
              />
            </div>
          </div>,
        ])}
      </div>
    </div>
  );
};

export default Restoran;
