import React from "react";
import tickMark from "../../images/tick-mark.png";
function Pricing() {
  return (
    <>
      <div className="px-4 lg:px-0">
      <div className="bg-gray-100 md:pb-60 pt-16 relative px-4 lg:px-0 pb-96">
        <h3 className="text-3xl lg:text-4xl xl:text-5xl text-center mb-3 font-sf_pro_display_bold text-gray-900">
          Simple no-tricks pricing
        </h3>
        <p className="text-center text-gray-600 text-xl">
          If you're not satisfied, contact us within the first 14 days and we'll
          send you a full refund.
        </p>

        <div className="px-4 lg:px-14 absolute md:top-48 left-1/2 -translate-x-1/2 w-full 5xl:max-w-fit top-56">
          <div className="flex flex-col shadow-lg lg:flex-row">
            <div className="p-8 bg-white space-y-6 m-0 lg:w-2/3 xl:w-4/5">
              <h4 className="font-extrabold text-2xl lg:text-3xl">Lifetime Membership</h4>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque
                amet indis perferendis blanditiis repellendus etur quidem
                assumenda.{" "}
              </p>
              <div className="flex items-center">
                <p className="mr-4 block text-indigo-600 font-semibold text-sm flex-none">WHAT'S INCLUDED</p>
                <hr className="block w-full border-t-2 border-gray-200" />
              </div>
              <div className="flex flex-col md:flex-row justify-start space-y-4 md:space-y-0">
                <ul className="space-y-4 w-full md:w-1/2">
                  <li className="flex text-gray-700">
                    <div className="block">
                      <img src={tickMark} className="mt-1 mr-3 " alt="Tick mark" />
                    </div>
                    Private forum access
                  </li>
                  <li className="flex text-gray-700">
                    <div className="block">
                      <img src={tickMark} className="mt-1 mr-3 " alt="Tick mark" />
                    </div>
                    Entry to annual conference
                  </li>
                </ul>
                <ul className="space-y-4 w-full md:w-1/2">
                  <li className="flex text-gray-700">
                    <div className="block">
                      <img src={tickMark} className="mt-1 mr-3 " alt="Tick mark" />
                    </div>
                    Member resources
                  </li>
                  <li className="flex text-gray-700">
                    <div className="block">
                      <img src={tickMark} className="mt-1 mr-3 " alt="Tick mark" />
                    </div>
                    Official member t-shirt
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-8 bg-gray-100 text-center m-0 lg:w-1/3 xl:w-1/5">
              <p className="text-gray-900 font-medium">Pay once, own it forever</p>
              <div className="flex items-center justify-center my-3">
              <span className="mr-2 text-gray-900 text-5xl font-extrabold">$349</span>
                <span className="text-gray-500 text-xl font-medium">USD</span>
              </div>
              <a href="#" className="underline underline-offset-4 my-4 block text-gray-500 text-sm font-medium">
                Learn about our membership policy
              </a>
              <a
                href="#"
                className="text-white py-3 px-4 rounded-lg bg-gray-900 hover:bg-gray-800 block my-4 font-medium md:px-16 md:mx-auto md:w-fit lg:px-4 lg:w-auto"
              >
                Get Access
              </a>
              <p className="text-gray-900 font-medium text-sm">Get a free sample <span className="text-gray-500">(20MB)</span></p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Pricing;
