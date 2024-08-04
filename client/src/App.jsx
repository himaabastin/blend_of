import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Accordion from "./pages/Accordion";
function App() {
  return (
    <>
      <h1 className="text-blue-500 font-bold ">Navbar</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="*" element="Add Page not found page" />
      </Routes>
    </>
  );
}

export default App;
