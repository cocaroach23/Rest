import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header";
import Restorans from "../Restorans";
import Restoran from "../Restoran";
import Basket from "../Basket";
import "../App/index.css";

function App() {
  return (
    <div className="bg_fon">
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Restorans />} />
            <Route path="/restoran/:slug" element={<Restoran />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
