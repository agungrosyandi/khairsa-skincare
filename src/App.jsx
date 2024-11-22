import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Container from "./container/Container";
import Header from "./container/Header";
import MainHome from "./pages/MainHome";
import Artikel from "./pages/Artikel";
import Product from "./pages/Product";
import Store from "./pages/Store";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

function App() {
  return (
    <Container>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/Artikel" element={<Artikel />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Store" element={<Store />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
