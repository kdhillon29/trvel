import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Products from "./Pages/Products";
import SignUp from "./Pages/SignUp";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home />} />

          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
