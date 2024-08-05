import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Accordion from "./pages/Accordion";
import Layout from "./components/Layout/Layout";
import PageNotFound from "./pages/PageNotFound";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
