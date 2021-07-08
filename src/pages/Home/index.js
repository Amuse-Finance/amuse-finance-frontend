import React, { useContext, useState } from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
// import { IoMdSwap } from "react-icons/io";
import CustomButton from "../../components/CustomButton";
import logo1 from "../../images/logo1.jpg";
import Particles from "react-particles-js";
import particlesoptions from "../particleOptions";
import ethLogo from "../../assets/ethereum-logo.png";
import FisionDoughnut from "./FisionDoughnut";
import { ChartWrapper } from "./styles";
import { cashbackCalculator } from "../../components/Helper";
import { web3Context } from "../../components/Context";

function Home() {
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
		<div className="grid white">
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
			<section className="text-center py-10">
				<h1 className="text-4xl md:text-5xl font-semibold pb-5">FEATURES</h1>
				<p className="px-3 text-lg md:text-xl lg:mx-32 md:mx-10 sm:mx-2 leading-relaxed">
					Duo no sed et elitr tempor dolor et ipsum. Et amet clita invidunt sit
					magna sed ut ut. Sit eos. Elitr et vero elitr diam et voluptua justo
					at accusam, vero eos sit sadipscing dolor lorem amet consetetur diam.
					Ipsum.
				</p>
				<div className="flex flex-wrap justify-center items-center overflow-hidden m-5">
					<div className="w-52 bg-gray-100 pb-2/3 rounded shadow-lg m-3 transition transform duration-200 ease-in hover:-translate-y-3">
						<img src={logo1} alt="" className="object-cover w-full" />
						<div className="p-2 text-sm font-medium text-gray-500">
							Elitr et vero elitr diam et voluptua justo at accusam, vero eos
							sit sadipscing dolor lorem amet consetetur diam.
						</div>
					</div>
					<div className="w-52 bg-gray-100 pb-2/3 rounded shadow-lg m-3 transition transform duration-200 ease-in hover:-translate-y-3">
						<img src={logo1} alt="" className="object-cover w-full" />
						<div className="p-2 text-sm font-medium text-gray-500">
							Elitr et vero elitr diam et voluptua justo at accusam, vero eos
							sit sadipscing dolor lorem amet consetetur diam.
						</div>
					</div>
					<div className="w-52 bg-gray-100 pb-2/3 rounded shadow-lg m-3 transition transform duration-200 ease-in hover:-translate-y-3">
						<img src={logo1} alt="" className="object-cover w-full" />
						<div className="p-2 text-sm font-medium text-gray-500">
							Elitr et vero elitr diam et voluptua justo at accusam, vero eos
							sit sadipscing dolor lorem amet consetetur diam.
						</div>
					</div>
					<div className="w-52 bg-gray-100 pb-2/3 rounded shadow-lg m-3 transition transform duration-200 ease-in hover:-translate-y-3">
						<img src={logo1} alt="" className="object-cover w-full" />
						<div className="p-2 text-sm font-medium text-gray-500">
							Elitr et vero elitr diam et voluptua justo at accusam, vero eos
							sit sadipscing dolor lorem amet consetetur diam.
						</div>
					</div>
					<div className="w-52 bg-gray-100 pb-2/3 rounded shadow-lg m-3 transition transform duration-200 ease-in hover:-translate-y-3">
						<img src={logo1} alt="" className="object-cover w-full" />
						<div className="p-2 text-sm font-medium text-gray-500">
							Elitr et vero elitr diam et voluptua justo at accusam, vero eos
							sit sadipscing dolor lorem amet consetetur diam.
						</div>
					</div>
				</div>
			</section>

			<ChartWrapper className="grid chart-container">
				<div className="grid fusion-chart">
					<header className="grid">
						<h4>TOKEN DISTRIBUTION</h4>
						<h1>Initial Distibution</h1>
					</header>
					<FisionDoughnut type="doughnut3d" showPercentValues={true} />
				</div>

				<div className="grid fusion-chart">
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
						<FisionDoughnut
							type="doughnut2d"
							data={cashbackCalculatorInput}
							numberPrefix="$"
						/>
					</div>
				</div>
			</ChartWrapper>
		</div>
	);
}

export default Home;
