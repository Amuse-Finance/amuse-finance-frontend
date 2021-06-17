import "./App.css";
import Home from "./pages/Home";
// import Navbar from "./components/Navbar";
import { Navbar } from "./components/Navbar/";
import { Footer } from "./components/Footer";

import { handleEffect } from "./components/Helper/handleEffect";
import { ScrollTop } from "./components/ScrollTop";

function App() {
  return (
    <div className="w-full App">
      <Navbar />
      <Home />
      <ScrollTop />
      <Footer />
    </div>
  );
}
document.addEventListener('scroll', handleEffect);
export default App;
