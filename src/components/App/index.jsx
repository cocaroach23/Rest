import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header";
import Restorans from "../Restorans";

function App() {
  return (
    
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Restorans />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
