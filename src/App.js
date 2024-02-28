import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Location from "./pages/Location";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";

import 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <div className="App">

      <ScrollToTop />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="location" element={<Location />} />
        <Route path="contact" element={<Contact />} />
        <Route path="menu" element={<Menu />} />
      </Routes>
   
    </div>
  );
}

export default App;
