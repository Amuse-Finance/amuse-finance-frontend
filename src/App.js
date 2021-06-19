import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Vault from "./pages/Vault";
import { Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/";
import { Footer } from "./components/Footer";

import { handleEffect } from "./components/Helper/handleEffect";
import { ScrollTop } from "./components/ScrollTop";
require("dotenv/config");

function App() {
  return (
    <div className="w-full App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path='/vault' component={Vault} />
      </Switch>
      <ScrollTop />
      <Footer />
    </div>
  );
}
document.addEventListener("scroll", handleEffect);
export default App;
