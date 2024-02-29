import { Link } from "react-router-dom";
//import { library } from '@fortawesome/fontawesome-svg-core';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
      <header className="font-semibold text-xl py-7 bg-yellow-200 text-black-200">
        <div className="max-w-screen flex justify-between mx-auto px-10">
          <nav className="flex gap-8 justify-center items-center">
            
          <Link to="/basket">
          {// <FontAwesomeIcon icon={faBasketShopping} /> 
          }
          </Link>
  
            
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;