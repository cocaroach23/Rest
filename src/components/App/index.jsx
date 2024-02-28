import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header";
import Restorans from "../Restorans";
import Restoran from "../Restoran";

function App() {
  return (
    
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Restorans />} />
        <Route path="/restoran/:slug" element={<Restoran />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
