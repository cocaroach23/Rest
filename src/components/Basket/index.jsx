/*import { useState, useEffect } from "react";
import "./style.scss";
import Button from "../Button";
import Restoran from "../Restoran";
import Count from "../Count";

const Basket = ({ dish, setDishInBasket }) => {
  const [basket, setBasket] = useState(Restoran);
  const [total, setTotal] = useState({
    price: basket.reduce((prev, curr) => {
      return prev + curr.priceTotal;
    }, 0),
    count: basket.reduce((prev, curr) => {
      return prev + curr.count;
    }, 0),
  });

  useEffect(() => {
    //уменьшение и увеличение общей стоимости и кол-ва позиций блюд
    setTotal({
      price: basket.reduce((prev, curr) => {
        return prev + curr.priceTotal;
      }, 0),
      count: basket.reduce((prev, curr) => {
        return prev + curr.count;
      }, 0),
    });
  }, [basket]);

  const deleteDish = (id) => {
    setBasket((basket) => {
      return basket.filter((dish) => id !== dish.id);
    });
  };

  const increase = (id) => {
    //увеличение кол-ва позиции блюд
    setBasket((basket) => {
      return basket.map((dish) => {
        if (dish.id === id) {
          return {
            ...dish,
            count: ++dish.count,
            priceTotal: ++dish.count * dish.price,
          };
        }
        return dish;
      });
    });
  };
  const decrease = (id) => {
    //уменьшение кол-ва позиции блюд
    setBasket((basket) => {
      return basket.map((dish) => {
        if (dish.id === id) {
          return {
            ...dish,
            count: dish.count - 1 > 1 ? --dish.count - 1 : 1,
            priceTotal: (dish.count - 1 > 1 ? --dish.count : 1) * dish.price,
          };
        }
        return dish;
      });
    });
  };

  const changeValue = (id, value) => {
    //подсчёт общего кол-ва блюд
    setBasket((basket) => {
      return basket.map((dish) => {
        if (dish.id === id) {
          return {
            ...dish,
            count: value,
            priceTotal: value * dish.price,
          };
        }
        return dish;
      });
    });
  };

  //const dishes = basket.map((dish) => {
    //return (
    //  <Basket
     //   dish={dish}
      //  key={dish.id}
      //  deleteDish={deleteDish}
      //  increase={increase}
      //  decrease={decrease}
      //  changeValue={changeValue}
     // />
  //  );
 // });

  return (
    <section classNameName="section-basket">
      <header className="section-basket__header">
        <div className="container">
          <h1 className="title-1">Корзина товаров</h1>
        </div>
      </header>
      <div className="section-basket__body">
        <div className="container">
          <section className="basket">
            <header className="basket-header">
              <div className="basket-header__title">наименование</div>
              <div className="basket-header__count">количество</div>
              <div className="basket-header__cost">стоимость</div>
            </header>

            <section className="dish">
              {setDishInBasket.map(() => [
                <div key={dish.id}>
                  <div className="dish__title">{dish.name}</div>
                  <div className="dish__count">
                    <div className="count">
                      <Count
                        count={count}
                        increase={increase}
                        decrease={decrease}
                        changeValue={changeValue}
                        id={basket.id}
                      />
                    </div>
                  </div>
                  <div className="dish__price">${priceTotal}</div>
                </div>,
              ])}

              <div className="dish__controls">
                <Button type="button" deleteDish={deleteDish} id={basket.id}>
                  <img src="../Photo/cross.svg" alt="Delete" />
                </Button>
              </div>
            </section>

            <footer className="basket-footer">
              <div className="basket-footer__count">{total.count}</div>
              <div className="basket-footer__price">{total.price}</div>
            </footer>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Basket;*/
