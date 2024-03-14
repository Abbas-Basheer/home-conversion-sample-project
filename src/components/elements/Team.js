import React from "react";
import Email from "../../images/email-icon.png";
import Message from "../../images/message-icon.png";
import MemberOne from "../../images/Avatar-1.png";
import MemberTwo from "../../images/Avatar-2.png";
import dots2 from "../../images/Path-2.png";
import dots3 from "../../images/Path-3.png";

function Team() {
  return (
    <>
      <div className="relative mb-20 mt-16 md:mt-28 xl:mb-20 xl:mt-36">
        <img
          src={dots2}
          alt="Dot style 2"
          className="tablet hidden lg:block xl:hidden absolute top-4 left-0 -z-10"
        />
        <img
          src={dots3}
          alt="Dot style 2"
          className="desktop hidden xl:block absolute -top-8 left-0 -z-10"
        />
        <div className="flex flex-col-reverse items-center lg:px-14 2xl:px-20 xl:w-4/5 xl:p-0 mx-auto xl:py-4 lg:flex-row outer-wrapper">
          <div className="flex-initial w-full bg-white px-4 lg:px-0 mt-8 lg:mt-0">
            <div className="space-y-3 w-full lg:w-11/12 xl:w-5/6 ">
              <div className="team-card flex flex-col md:flex-row border rounded-lg px-4 py-4 md:justify-between md:items-center shadow-md">
                <div className="flex mb-5 md:mb-0">
                  <img
                    src={MemberOne}
                    className="mr-6 w-12 h-full"
                    alt="Member One"
                  />
                  <p>
                    <span className="font-semibold text-gray-900">
                      Jane Cooper
                    </span>
                    <br />
                    <span className="text-gray-500">
                      jane.cooper@example.com
                    </span>
                  </p>
                </div>
                <div className=" bg-green-100 text-green-800 rounded-full px-2 py-1 text-sm max-w-max mx-auto md:mx-0">
                  <div className="flex items-center font-medium">
                    <span className="h-2 w-2 bg-green-400 mr-2 rounded-full block"></span>
                    Success
                  </div>
                </div>
              </div>
              <div className="team-card flex flex-col md:flex-row border rounded-lg px-4 py-4 md:justify-between md:items-center shadow-md">
                <div className="flex mb-5 md:mb-0">
                  <img
                    src={MemberTwo}
                    className="mr-6 w-12 h-full"
                    alt="Member two"
                  />
                  <p>
                    <span className="font-semibold text-gray-900">
                      John Cooper
                    </span>
                    <br />
                    <span className="text-gray-500">
                      john.cooper@example.com
                    </span>
                  </p>
                </div>
                <div className="bg-yellow-100 text-yellow-800 rounded-full px-2 py-1 text-sm max-w-max mx-auto md:mx-0">
                  <div className="flex items-center font-medium">
                    <span className="h-2 w-2 bg-yellow-400 mr-2 rounded-full block"></span>
                    Processing
                  </div>
                </div>
              </div>
              <div className="team-card flex flex-col md:flex-row border rounded-lg px-4 py-4 md:justify-between md:items-center shadow-md">
                <div className="flex mb-5 md:mb-0">
                  <img
                    src={MemberOne}
                    className="mr-6 w-12 h-full"
                    alt="Member One"
                  />
                  <p>
                    <span className="font-semibold text-gray-900">
                      Jane Cooper
                    </span>
                    <br />
                    <span className="text-gray-500">
                      jane.cooper@example.com
                    </span>
                  </p>
                </div>
                <div className=" bg-red-100 text-red-800 rounded-full px-2 py-1 text-sm max-w-max mx-auto md:mx-0">
                  <div className="flex items-center font-medium">
                    <span className="h-2 w-2 bg-red-400 mr-2 rounded-full block"></span>
                    Failed
                  </div>
                </div>
              </div>
              <div className="team-card flex flex-col md:flex-row border rounded-lg px-4 py-4 md:justify-between md:items-center shadow-md">
                <div className="flex mb-5 md:mb-0">
                  <img
                    src={MemberTwo}
                    className="mr-6 w-12 h-full"
                    alt="Member two"
                  />
                  <p>
                    <span className="font-semibold text-gray-900">
                      John Cooper
                    </span>
                    <br />
                    <span className="text-gray-500">
                      john.cooper@example.com
                    </span>
                  </p>
                </div>
                <div className=" bg-green-100 text-green-800 rounded-full px-2 py-1 text-sm max-w-max mx-auto md:mx-0">
                  <div className="flex items-center font-medium">
                    <span className="h-2 w-2 bg-green-400 mr-2 rounded-full block"></span>
                    Success
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:px-0">
            <h4 className="mb-1 font-extrabold text-3xl lg:text-2xl xl:text-3xl text-gray-900 leading-9">
              Always in the loop
            </h4>
            <p className="mb-10 mt-2 text-gray-500 text-lg leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              ex obcaecati natus eligendi delectus, cum deleniti sunt in labore
              nihil quod quibusdam expedita nemo.
            </p>
            <div className="space-y-7">
              <div className="flex space-x-3">
                <div className="block">
                  <img
                    src={Message}
                    className="mr-2 w-24 md:w-16 lg:w-24 5xl:w-12 h-fit"
                    alt="Message"
                  />
                </div>
                <div>
                  <span className="font-medium text-gray-900 text-lg">
                    Mobile notifications
                  </span>
                  <p className="text-gray-500 mt-2 text-base">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.{" "}
                  </p>
                </div>
              </div>
              <div className="flex space-x-3">
                <div className="block">
                  <img src={Email} className="mr-2 w-24 md:w-16 lg:w-24 5xl:w-12 h-fit" alt="Email" />
                </div>
                <div>
                  <span className="font-medium text-gray-900 text-lg">
                    Reminder emails
                  </span>
                  <p className="text-gray-500 mt-2 text-base">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
