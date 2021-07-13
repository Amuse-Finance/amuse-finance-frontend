import "./App.css";
import { useContext, useEffect } from "react";
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
import Referral from "./pages/Referral";
import RegisterReferral from "./pages/Referral/Register";
import Contact from "./pages/Contact";
import Presale from "./pages/Presale";

require("dotenv/config");

const ethereum = window.ethereum;

const App = () => {
	const { loading, web3, updateAccount, reRender } = useContext(web3Context);
	useEffect(() => {
		if (loading) return;
		ethereum.on("accountsChanged", async (_accounts) => {
			updateAccount(_accounts[0]);
			console.log(_accounts);
		});
		ethereum.on("chainChanged", () => window.location.reload());

		web3.eth
			.subscribe("newBlockHeaders")
			.on("data", async () => await reRender())
			.on("error", async (error) => {
				console.log(error);
			});
	}, [loading, web3, updateAccount, reRender]);

	return (
		<div className="w-full App">
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/dashboard" component={Dashboard} />
				<Route exact path="/vault" component={Vault} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/team" component={Team} />
				<Route exact path="/faq" component={Faq} />
				<Route exact path="/faucet" component={Faucet} />
				<Route exact path="/referral" component={Referral} />
				<Route exact path="/referral/create" component={RegisterReferral} />
				<Route exact path="/presale" component={Presale} />
			</Switch>
			<ScrollTop />
			<Footer />
		</div>
	);
};

document.addEventListener("scroll", handleEffect);

export default App;
