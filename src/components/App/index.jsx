import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header";
import Restorans from "../Restorans";
import Restoran from "../Restoran";
import Basket from "../Basket"

function App() {
  return (
    
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Restorans />} />
        <Route path="/restoran/:slug" element={<Restoran />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
