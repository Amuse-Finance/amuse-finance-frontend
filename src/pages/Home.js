import React from "react";
import CustomButton from "../components/CustomButton";
import logo1 from "../images/logo1.jpg";

function Home() {
  return (
    <>
      <section className="container mx-auto py-36 flex flex-col md:flex-row justify-between items-center">
        <div className="w-full lg:w-1/2 text-center md:text-left">
          <h1 className="gray-700 text-2xl md:text-5xl font-semibold">
            100% Cashbacks On Ethereum Gas Spends
          </h1>
          <p className="gray-100 md:text-2xl my-5">
            From the Dev of UniDexBot.com
          </p>
          <CustomButton styles="bg-gray-700 p-5 mt-3 text-white rounded md:mx-auto">
            DOWNLOAD WHITE PAPER
          </CustomButton>
        </div>
        <div>
          <CustomButton styles="bg-gray-700 p-5 mx-3 text-white rounded mt-5 sm:mt-0">
            PRINT WITH PAPER
          </CustomButton>
        </div>
      </section>
      <section className="container mx-auto bg-gray-300 text-center">
        <h1 className="text-5xl font-semibold pt-8 pb-5">FEATURES</h1>
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
    </>
  );
}

export default Home;
