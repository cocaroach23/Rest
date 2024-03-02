import { useState, Fragment } from "react";
import "./style.scss";
import Button from "../Button";
import Restoran from "../Restoran";

const Basket = ({dish, setDishInBasket}) => {

    const [ basket , setBasket] = useState(Restoran);

    const deleteDish = (id) => {
      setBasket((basket) => {
        return basket.filter((dish) =>id !== dish.id )
      })
    }
        return(
         
         
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
                          <div key={newDish.id}>
                          
                          <div className="dish__title">{dish.name}</div>
                          <div className="dish__count">
                              <div className="count">
                                  <div className="count__box">
                                      <input type="number" className="count__input" min="1" max="100" value="1" />
                                  </div>
                                  <div className="count__controls">
                                      <button type="button" className="count__up">
                                          <img src="./img/icons/icon-up.svg" alt="Increase" />
                                      </button>
                                      <button type="button" className="count__down">
                                          <img src="./img/icons/icon-down.svg" alt="Decrease" />
                                      </button>
                                  </div>
                              </div>
                          </div>
                          <div className="dish__price">${dish.price}</div>
                          </div>
                        ])}
                          
                          <div className="dish__controls">
                            
                              <Button type="button" deleteDish={deleteDish} id={id}>
                                  <img src="../Photo/cross.svg" alt="Delete" />
                              </Button>
                          </div>
                      </section>
  
                       
                      <footer className="basket-footer">
                          <div className="basket-footer__count">3 единицы</div>
                          <div className="basket-footer__price">329 000 руб.</div>
                      </footer>
                  </section>
  
              </div>
          </div>
      </section>
      
        )
}


export default Basket