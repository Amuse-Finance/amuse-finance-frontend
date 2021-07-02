import "./App.css";
import { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { web3Context } from "./components/Context";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Vault from "./pages/Vault";
import Navbar from "./components/Navbar/";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import Faq from "./pages/Faq";
import Faucet from "./pages/Faucet";
import Team from "./pages/Team";

import { handleEffect } from "./components/Helper/handleEffect";
import TransactionModal from "./components/TransactionModal";

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
        <Route exact path="/vault" component={Vault} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/faucet" component={Faucet} />
      </Switch>
      <TransactionModal />
      <ScrollTop />
      <Footer />
    </div>
  );
}

ethereum.on("accountsChanged", async (_accounts) => updateAccount(_accounts[0]));
ethereum.on("chainChanged", () => window.location.reload());
document.addEventListener("scroll", handleEffect);

export default App;
