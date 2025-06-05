// Components
import Painel from "./Components/Painel";
import MyApp from "./MyApp";

// React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./Pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <Painel />
      <Routes>
        <Route path="/" element={<MyApp />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
