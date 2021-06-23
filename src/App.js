import "./App.css";
import { useContext } from "react";
import { web3Context } from "./components/Context";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Vault from "./pages/Vault";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/";
import Footer from "./components/Footer";
import { handleEffect } from "./components/Helper/handleEffect";
import ScrollTop from "./components/ScrollTop";
require("dotenv/config");

const ethereum = window.ethereum;
let updateAccount;

function App() {
  const { updateAccount: _updateAccount } = useContext(web3Context);
  updateAccount = _updateAccount;
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

ethereum.on("accountsChanged", async (_accounts) => updateAccount(_accounts[0]));
ethereum.on('chainChanged', (chainId) => window.location.reload());

document.addEventListener("scroll", handleEffect);

export default App;
