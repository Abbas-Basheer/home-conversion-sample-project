import React from "react";
import Plate from "../../images/Plate.png";
import Billing from "../../images/Billing.png";

function banner() {
  return (
    <>
      <div className="flex flex-col-reverse w-full lg:flex-row xl:items-center lg:pl-14 xl:pl-20 lg:pt-8 pb-10 lg:pb-28 lg:justify-between outer-wrapper">
        <div className="desktop hidden lg:block lg:w-3/5 xl:w-2/5">
          <h1 className="font-sf_pro_display_bold text-4xl lg:text-5xl xl:text-6xl tracking-tight text-gray-900 font-extrabold">
            Data to enrich your <br />
            <span className="special-color-heading">online business</span>
          </h1>
          <p className="my-5 font-sf_pro_regular text-gray-500 lg:text-lg xl:text-xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua ad ad non deserunt sunt.{" "}
          </p>
          <p className="font-inter text-gray-900 font-medium leading-6">
            Sign up to get notified when it’s ready.
          </p>
          <div className="lg:flex lg:flex-row my-3 items-center">
            <div>
              <input
                type="text"
                className="border rounded-md border-gray-300 focus:border-gray-400 h-10 p-3 font-inter text-gray-500 font-normal text-base leading-6 w-full mb-4 lg:mb-0"
                placeholder="Enter your email"
              />
            </div>
            <div className="banner-button">
              <a
                href="/"
                class="lg:ml-5 dark-button block text-center lg:text-left"
              >
                Start free trail
              </a>
              {/* <span
                class="ml-5 bg-gradient-to-br from-pink-500 to-orange-400 rounded py-2 px-4 block text-transparent absolute top-2 left-2"
              >Start free trail</span> */}
            </div>
          </div>
          <p className="font-inter text-gray-500 font-normal">
            We care about the protection of your data. Read our{" "}
            <a
              href="/"
              className="underline underline-offset-4 font-inter text-gray-900 font-medium text-base leading-6"
            >
              Privacy Policy.
            </a>
          </p>
        </div>

        <div className="ipad py-8 px-4 flex flex-col md:flex-row md:space-x-5 lg:hidden">
          <div className="w-full md:w-1/2">
            <h1 className="font-sf_pro_display_bold text-4xl lg:text-5xl xl:text-6xl tracking-tight text-gray-900 font-extrabold">
              Data to enrich your <br />
              <span className="special-color">online business</span>
            </h1>
            <p className="my-5 font-sf_pro_regular text-gray-500 lg:text-lg xl:text-xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua ad ad non deserunt sunt.{" "}
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <p className="font-inter text-gray-900 font-medium leading-6">
              Sign up to get notified when it’s ready.
            </p>
            <div className="lg:flex lg:flex-row my-3 items-center">
              <div>
                <input
                  type="text"
                  className="border rounded-md border-gray-300 focus:border-gray-400 h-10 p-3 font-inter text-gray-500 font-normal text-base leading-6 w-full mb-4 lg:mb-0"
                  placeholder="Enter your email"
                />
              </div>
              <div className="banner-button">
                <a
                  href="/"
                  class="lg:ml-5 dark-button block text-center lg:text-left"
                >
                  Start free trail
                </a>
                {/* <span
                class="ml-5 bg-gradient-to-br from-pink-500 to-orange-400 rounded py-2 px-4 block text-transparent absolute top-2 left-2"
              >Start free trail</span> */}
              </div>
            </div>
            <p className="font-inter text-gray-500 font-normal">
              We care about the protection of your data. Read our{" "}
              <a
                href="/"
                className="underline underline-offset-4 font-inter text-gray-900 font-medium text-base leading-6"
              >
                Privacy Policy.
              </a>
            </p>
          </div>
        </div>

        <div>
          <div className="relative">
            <img
              src={Plate}
              alt="Plate"
              className="hidden lg:block lg:w-3/4 lg:relative lg:-right-1/4 xl:right-0 xl:w-full"
            />
            <img
              src={Billing}
              className="w-full lg:absolute lg:top-16 xl:top-1/4 lg:left-12 xl:-left-1/4 lg:w-4/5 xl:w-full"
              alt="Billing desk"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default banner;
