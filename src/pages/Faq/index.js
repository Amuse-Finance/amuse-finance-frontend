import React from "react";
import Accordion from "../../components/Accordion";
import CustomButton from "../../components/CustomButton";

function Faq() {
  return (
    <div className="">
      <section className="w-full h-44 sm:h-72 text-center relative mb-5 bg-gradient-to-r from-blue-600 via-green-500 to-blue-800">
        <div className="bg-blend-darken w-full h-full  flex flex-col justify-center text-white">
          <h2 className="text-4xl sm:text-5xl mb-4 text-white font-bold">
            FAQ
          </h2>
          <p className="text-sm sm:text-xl font-thin mx-3">
            We are always here to support you. Get every single answers here.
          </p>
        </div>
      </section>
      <section className="container mx-auto px-3 sm:px-5">
        <div className="my-8 sm:my-12 ">
          <h4 className="mb-5 text-gray-700 text-xl font-normal opacity-60">
            Faqs
          </h4>
          <h2 className="text-black font-bold text-2xl sm:text-4xl mb-8">
            Get Answers To Your Questions Here.
          </h2>
        </div>
        <div className="m-0">
          <Accordion />
          <Accordion />
          <Accordion />
        </div>
      </section>
      <section className="h-full w-full bg-gray-900 mt-10 ">
        <div className="w-full sm:w-1/2 mx-auto text-center p-8 md:p-12 text-white">
          <h4 className="text-xl mb-5 font-normal">Get In Touch</h4>
          <h2 className="font-bold text-xl md:text-3xl mb-8 leading-tight text-gray-50 opacity-">
            If You Have A Question Which Is Not Written Here, Kindly Contact Us.
          </h2>
          <CustomButton styles="shadow bg-gradient-to-r from-blue-600 to-green-500 p-5 text-white rounded">
            CONTACT US NOW
          </CustomButton>
        </div>
      </section>
    </div>
  );
}

export default Faq;
