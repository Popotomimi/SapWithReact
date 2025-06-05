import { BrowserRouter, Routes, Route } from "react-router-dom";
import Painel from "./Components/Painel";
import Footer from "./Components/Footer";
import MyApp from "./MyApp";
import Detail from "./Pages/Detail";
import Profile from "./Pages/Profile";
import EditProfile from "./Pages/EditProfile";

function App() {
  return (
    <BrowserRouter>
      <Painel />
      <Routes>
        <Route path="/" element={<MyApp />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit" element={<EditProfile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
