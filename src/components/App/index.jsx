import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "components/Header";
import PoolRest from "../PoolRest";

function App() {
  return (
    
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/poolRest" element={<PoolRest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
