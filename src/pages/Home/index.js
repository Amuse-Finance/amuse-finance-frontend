import React from "react";
import Typewriter from "typewriter-effect";
import { IoMdSwap } from "react-icons/io";
import CustomButton from "../../components/CustomButton";
import logo1 from "../../images/logo1.jpg";
import Particles from "react-particles-js";
import particlesoptions from "../particleOptions";

function Home() {
  return (
    <div>
      <section
        style={{ height: "80vh" }}
        className="relative bg-blue-300 mb-10 skeyArt"
      >
        <div>
          <Particles
            style={{ position: "absolute", zIndex: -1 }}
            params={particlesoptions}
          />
          <section className="container mx-auto py-36 flex flex-col md:flex-row justify-between items-center">
            <div className="w-full lg:w-1/2 text-center md:text-left">
              <h1 className="gray-700 text-2xl md:text-5xl font-semibold">
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
              <p className="gray-100 md:text-2xl my-5">
                From the Dev of UniDexBot.com
              </p>
              <div>
                <CustomButton styles="shadow border-blue-600 hover:bg-blue-600 border-3 border-solid p-5 mr-3 text-blue-600 hover:text-white rounded">
                  {/* BE8DA4 */}
                  LAUNCH APP
                </CustomButton>
                <CustomButton styles="shadow border-blue-600 border-3 border-solid bg-blue-600 p-5 text-white rounded">
                  DOWNLOAD WHITE PAPER
                </CustomButton>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section
        className=" bg-gray-300 text-center z-50"
        style={{ marginTop: "-150px" }}
      >
        <h1 className="pt-24 text-5xl font-semibold pb-5">FEATURES</h1>
        <p className="text-xl lg:mx-32 md:mx-10 sm:mx-2">
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

      <section className="w-2/3 mx-auto bg-gray-500 p-7 rounded block md:flex justify-between items-center">
        <div>
          <h5>Convert COIN to USD</h5>
          <div className="flex ">
            <div className="mr-3 bg-gray-500 rounded w-1/2 md:w-full">
              <input
                className="w-full outline-none p-3 bg-gray-400 rounded"
                placeholder="Enter amount..."
              />
            </div>
            <select className="outline-none p-3 px-4 bg-black text-white rounded">
              <option>ETH</option>
              <option>BTC</option>
              <option>BNB</option>
            </select>
          </div>
        </div>
        <div>
          <IoMdSwap className="icon text-5xl" />
        </div>
        <div>
          <p>Convert COIN to USD</p>
          <div className="flex ">
            <div className="mr-3 bg-gray-500 rounded w-1/2 md:w-full">
              <input
                className="w-full outline-none p-3 bg-gray-400 rounded"
                placeholder="Enter amount..."
              />
            </div>
            <select className="outline-none p-3 px-4 bg-black text-white rounded">
              <option>ETH</option>
              <option>BTC</option>
              <option>BNB</option>
            </select>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
