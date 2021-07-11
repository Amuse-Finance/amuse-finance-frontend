import React, { useContext, useState } from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import Particles from "react-particles-js";
import particlesoptions from "../particleOptions";
import ethLogo from "../../assets/ethereum-logo.png";
import FisionDoughnut from "./FisionDoughnut";
import { HomeWrapper } from "./styles";
import { cashbackCalculator } from "../../components/Helper";
import { web3Context } from "../../components/Context";

const Home = () => {
	const [inputAmount, setInputAmount] = useState("");
	const [cashbackCalculatorInput, setCashbackCalculatorInput] = useState(
		cashbackCalculator()
	);
	const { cashbackPercentage } = useContext(web3Context);

	const handleInput = async (e) => {
		e.preventDefault();
		if (isNaN(e.target.value)) return;
		setInputAmount(() => e.target.value);
		if (parseFloat(cashbackPercentage) === 0 || e.target.value === "") {
			setCashbackCalculatorInput(() => cashbackCalculator());
			return;
		}
		const _result = cashbackCalculator(
			parseFloat(e.target.value),
			cashbackPercentage
		);
		setCashbackCalculatorInput(() => _result);
	};

	return (
		<HomeWrapper className="grid white">
			<section
				style={{ height: "75vh" }}
				className="relative blue flex justify-center items-center "
			>
				<div className="container mx-auto px-0 md:px-10">
					<Particles
						style={{ position: "absolute", top: 0, right: 0 }}
						params={particlesoptions}
					/>
					<section className="flex flex-col md:flex-row justify-between items-center ">
						<div className="w-full mx-auto md:mx-0 lg:w-1/2 z-50 text-center md:text-left">
							<h1 className="text-gray-50 text-2xl md:text-5xl font-semibold">
								100% Cashbacks On
								<span className="text-red-500">
									<Typewriter
										options={{
											strings: ["Ethereum Gas Spends", "Rewards for trading"],
											autoStart: true,
											loop: true,
										}}
									/>
								</span>
							</h1>
							<p className="text-gray-100 md:text-2xl my-5 ">
								From the Dev of TweetsZone.com
							</p>
							<div>
								<CustomButton styles="shadow border-blue-400 hover:bg-blue-400 border-3 border-solid p-3 md:p-5 mr-3 mb-3 sm:mb-0 text-white rounded">
									<Link to="/dashboard">LAUNCH APP</Link>
								</CustomButton>
								<CustomButton styles="shadow border-blue-600 border-3 border-solid bg-blue-600 p-3 md:p-5 text-white rounded">
									<a
										href="https://drive.google.com/file/d/1Q8ERfvLJCM-ZzG4APFnwu_McyfXZRsTI/view?usp=sharing"
										target="blank"
										rel="noreferrer"
									>
										DOWNLOAD WHITEPAPER
									</a>
								</CustomButton>
							</div>
						</div>
						<div className="w-1/6 z-50 ethLogo">
							<img
								className="w-full h-full object-cover"
								src={ethLogo}
								alt="Ethereum logo"
							/>
						</div>
					</section>
				</div>
			</section>

			<section className="grid features-container">
				<header className="grid">
					<h1>features</h1>
					<p>
						Nostrud irure id consequat officia. Tempor velit mollit veniam
						occaecat sit dolore ex quis laborum est. Duis fugiat amet labore ad
						nisi duis commodo ullamco ad laboris. Minim cillum consectetur sit
						amet ad ad id eiusmod Lorem pariatur. Et id laboris ullamco deserunt
						non incididunt excepteur ipsum nostrud ipsum mollit.
					</p>
				</header>
				<div className="grid card-container">
					<div className="grid wrapper">
						<div className="grid card">
							<div className="grid block-container">
								<div className="block"></div>
								<div className="block"></div>
							</div>
							<div className="grid header">
								<h1>hodl</h1>
							</div>
							<div className="grid detail">
								<p>2% rewards at every 24hours for all holders</p>
							</div>
						</div>

						<div className="grid card">
							<div className="grid block-container">
								<div className="block"></div>
								<div className="block"></div>
							</div>
							<div className="grid header">
								<h1>trade</h1>
							</div>
							<div className="grid detail">
								<p>Earn back 100% gas fees for all buy actions</p>
							</div>
						</div>

						<div className="grid card">
							<div className="grid block-container">
								<div className="block"></div>
								<div className="block"></div>
							</div>
							<div className="grid header">
								<h1>stake</h1>
							</div>
							<div className="grid detail">
								<p>Earn 1% ETHER rewards for all staked AMD per 24hours</p>
							</div>
						</div>

						<div className="grid card">
							<div className="grid block-container">
								<div className="block"></div>
								<div className="block"></div>
							</div>
							<div className="grid header">
								<h1>referral</h1>
							</div>
							<div className="grid detail">
								<p>
									Earn as much as 25% of the transaction fees paid by referree
									during buy actions
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className="grid chart-container">
				<div className="grid wrapper">
					<header className="grid">
						<h4>TOKEN DISTRIBUTION</h4>
						<h1>Initial Distibution</h1>
					</header>
					<div className="grid fusion-chart">
						<FisionDoughnut
							type="doughnut3d"
							className="chart"
							showPercentValues={true}
						/>
					</div>
				</div>

				<div className="grid wrapper">
					<div className="grid">
						<header className="grid">
							<h1>Cashback Calculator</h1>
						</header>
						<form className="grid">
							<input
								value={inputAmount}
								placeholder="Enter amount in USD"
								onChange={handleInput}
							/>
						</form>
						<div className="grid fusion-chart">
							<FisionDoughnut
								type="doughnut2d"
								data={cashbackCalculatorInput}
								numberPrefix="$"
							/>
						</div>
					</div>
				</div>
			</div>
		</HomeWrapper>
	);
};

export default Home;
