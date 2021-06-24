import React, { useContext, useState } from "react";
import Typewriter from "typewriter-effect";
// import { IoMdSwap } from "react-icons/io";
import CustomButton from "../../components/CustomButton";
import logo1 from "../../images/logo1.jpg";
import Particles from "react-particles-js";
import particlesoptions from "../particleOptions";
import ethLogo from "../../assets/ethereum-logo.png";
import FisionDoughnut from "../../components/FisionDoughnut";
import { ChartWrapper } from "./styles";
import { cashbackCalculator } from "../../components/Helper";
import { web3Context } from "../../components/Context";

function Home() {
  const [inputAmount, setInputAmount] = useState("");
  const [cashbackCalculatorInput, setCashbackCalculatorInput] = useState(cashbackCalculator());
  const { cashbackPercentage } = useContext(web3Context);

  const handleInput = async e => {
      e.preventDefault();
      if(isNaN(e.target.value)) return;
      setInputAmount(() => e.target.value);
      if(parseFloat(cashbackPercentage) === 0 || e.target.value === "") {
        setCashbackCalculatorInput(() => cashbackCalculator());
        return;
      }
      const _result = cashbackCalculator(parseFloat(e.target.value), cashbackPercentage);
      console.log(_result);
      setCashbackCalculatorInput(() => _result);
  }

  return (
    <div className="grid">
      <section
        style={{ height: "75vh" }}
        className="relative bg-blue-900 flex justify-center items-center "
      >
        <div>
          <Particles
            style={{ position: "absolute", top: 0, right: 0 }}
            params={particlesoptions}
          />
          <section className="container mx-auto flex flex-col md:flex-row justify-between items-center ">
            <div className="w-full lg:w-1/2 text-center md:text-left z-50">
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
                From the Dev of UniDexBot.com
              </p>
              <div>
                <CustomButton styles="ring-8 ring-inset ring-offset-2 ring-offset-blue-600 hover:bg-blue-600 p-3 md:p-5 mr-3 mb-3 sm:mb-0 text-white rounded">
                  {/* BE8DA4 shadow border-blue-600 hover:bg-blue-600 border-3 border-solid */}
                  LAUNCH APP
                </CustomButton>
                <CustomButton styles="shadow border-blue-600 border-3 border-solid bg-blue-600 p-3 md:p-5 text-white rounded">
                  DOWNLOAD WHITE PAPER
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
          <FisionDoughnut  type="doughnut3d" showPercentValues={true} />
        </div>

        <div className="grid fusion-chart">
          <div className="grid">
            <header className="grid">
              <h1>Cashback Calculator</h1>
            </header>
            <form className="grid">
                <input value={inputAmount} placeholder="Enter amount in USD" onChange={handleInput} />
            </form>
            <FisionDoughnut type="doughnut2d" data={cashbackCalculatorInput} numberPrefix="$" />
          </div>
        </div>
      </ChartWrapper>

      {/* <section className="py-10">
        <div className="md:w-full lg:w-3/4 mx-auto bg-gray-500 p-7 rounded flex flex-col sm:flex-row justify-between items-center">
          <div>
            <p>Convert COIN to USD</p>
            <span className="flex ">
              <input
                className="w-full mr-3 outline-none p-3 bg-gray-400 rounded"
                placeholder="Enter amount..."
              />
              <select className="outline-none p-3 px-4 bg-black text-white rounded">
                <option>ETH</option>
                <option>BTC</option>
                <option>BNB</option>
              </select>
            </span>
          </div>
          <div className="m-3.5 sm:self-end sm:my-0">
            <IoMdSwap className="icon text-5xl" />
          </div>
          <div>
            <p>Convert COIN to USD</p>
            <span className="flex ">
              <input
                className="w-full mr-3 outline-none p-3 bg-gray-400 rounded"
                placeholder="Enter amount..."
              />
              <select className="outline-none p-3 px-4 bg-black text-white rounded">
                <option>ETH</option>
                <option>BTC</option>
                <option>BNB</option>
              </select>
            </span>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default Home;
