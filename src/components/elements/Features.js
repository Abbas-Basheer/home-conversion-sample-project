import React from "react";
import Icon1 from "../../images/Icon-1.png";
import Icon2 from "../../images/Icon-2.png";
import Icon3 from "../../images/Icon-3.png";
import Icon4 from "../../images/Icon-4.png";
import Icon5 from "../../images/Icon-5.png";
import Icon6 from "../../images/Icon-6.png";
import People from "../../images/people.png";
import dots1 from "../../images/Path-1.png";


function Features() {
  return (
    <>
      <div className="py-16 bg-gray-900 custom-separator relative">
        <img
          src={dots1}
          className="absolute top-20 img-rotate hidden xl:block"
          alt="Dot 1"
        />
        <div className="separator-content px-5 xl:py-10 xl:px-20 outer-wrapper">
          <div className="text-center mb-8">
            <span className="special-color font-sf_pro_display_bold text-lg tracking-wider">
              FEATURES
            </span>
            <h3 className="text-3xl md:text-4xl xl:text-5xl my-3 font-sf_pro_display_bold text-white"> 
              A better way to send money
            </h3>
          </div>

          <div className="mobile space-y-4 md:hidden">
            <div className="card bg-white rounded-lg shadow-lg p-6">
              <div className="flex space-x-5 items-center mb-5">
                <img src={Icon1} className="w-6 h-6" alt="Icon 1" />
                <span className="feature-head text-gray-800">
                  Email Notification
                </span>
              </div>
              <p className="feature-description text-gray-700">
                Let your team members receive email notifications about
                important changes they need to be aware of. Let your team
                members receive email notifications.
              </p>
            </div>

            <div className="card bg-white rounded-lg shadow-lg p-6">
              <div className="flex space-x-5 items-center mb-5">
                <img src={Icon3} className="w-6 h-6" alt="Icon 3" />
                <span className="feature-head text-gray-800">
                  Rich Domain Model
                </span>
              </div>
              <p className="feature-description text-gray-700">
                Targetprocess has a rich domain model with several different
                types of entities. These entities can be customized to fit your
                process.
              </p>
            </div>

            <div className="card bg-white rounded-lg shadow-lg p-6">
              <div className="flex space-x-5 items-center mb-5">
                <img src={Icon2} className="w-6 h-6" alt="Member two" />
                <span className="feature-head text-gray-800">
                  Comments & Mentions
                </span>
              </div>
              <p className="feature-description text-gray-700">
                Allow your team to communicate about the work they do using
                comments and @mentions
              </p>
            </div>

            <div className="card bg-white rounded-lg shadow-lg p-6">
              <div className="flex space-x-5 items-center mb-5">
                <img src={Icon4} className="w-6 h-6" alt="Icon 4" />
                <span className="feature-head text-gray-800">
                  Multi-Language Support
                </span>
              </div>
              <p className="feature-description text-gray-700">
                We support English, French, German, Spanish, Portuguese (the
                Brazilian variety), Russian languages to allow you to use
                Targetprocess in your native language
              </p>
            </div>

            <div className="card bg-white rounded-lg shadow-lg p-6">
              <div className="flex space-x-5 items-center mb-5">
                <img src={Icon5} className="w-6 h-6" alt="Icon 5" />
                <span className="feature-head text-gray-800">Share Views</span>
              </div>
              <p className="feature-description text-gray-700">
                Share any view, report, or dashboard with stakeholders to
                provide live updates on your progress.
              </p>
            </div>

            <div className="card bg-white rounded-lg shadow-lg p-6">
              <div className="flex flex-col">
                <img src={People} className="mb-8 w-full h-44" alt="People" />
                <div>
                  <span className="feature-head text-gray-800">
                    Multiple Teams Support
                  </span>
                  <p className="feature-description text-gray-700">
                    Allow multiple teams to collaborate more effectively when
                    delivering project(s) together. Help project members see how
                    their work contributes to the bigger picture.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center w-4/5 mx-auto">
              <img src={Icon6} className="mx-auto mb-3" alt="Icon 6" />
              <span className="font-semibold block font-sf_pro_semibold text-xl text-white mb-3">
                More Updates, Features & Articles are here.
              </span>
              <a href="#" className="special-color font-sf_pro_semibold">
                Learn More
              </a>
            </div>
          </div>

          <div className="tablet space-y-4 md:w-4/5 lg:w-3/5 mx-auto hidden md:block xl:hidden">
            <div className="first-row flex space-x-4">
              <div className="space-y-4">
                <div className="card bg-white rounded-lg shadow-lg p-6">
                  <img src={Icon1} className="mb-5 w-6 h-6" alt="Icon 1" />
                  <span className="feature-head text-gray-800">
                    Email Notification
                  </span>
                  <p className="feature-description text-gray-700">
                    Let your team members receive email notifications about
                    important changes they need to be aware of. Let your team
                    members receive email notifications.
                  </p>
                </div>
                <div className="card bg-white rounded-lg shadow-lg p-6">
                  <img src={Icon3} className="mb-5 w-6 h-6" alt="Icon 3" />
                  <span className="feature-head text-gray-800">
                    Rich Domain Model
                  </span>
                  <p className="feature-description text-gray-700">
                    Targetprocess has a rich domain model with several different
                    types of entities. These entities can be customized to fit
                    your process.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="card bg-white rounded-lg shadow-lg p-6">
                  <img src={Icon2} className="mb-5 w-6 h-6" alt="Member two" />
                  <span className="feature-head text-gray-800">
                    Comments & Mentions
                  </span>
                  <p className="feature-description text-gray-700">
                    Allow your team to communicate about the work they do using
                    comments and @mentions
                  </p>
                </div>
                <div className="card bg-white rounded-lg shadow-lg p-6">
                  <img src={Icon4} className="mb-5 w-6 h-6" alt="Icon 4" />
                  <span className="feature-head text-gray-800">
                    Multi-Language Support
                  </span>
                  <p className="feature-description text-gray-700">
                    We support English, French, German, Spanish, Portuguese (the
                    Brazilian variety), Russian languages to allow you to use
                    Targetprocess in your native language
                  </p>
                </div>
              </div>
            </div>

            <div className="second-row">
              <div className="card bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center space-x-4">
                  <img src={People} className="w-full h-44" alt="People" />
                  <div>
                    <span className="feature-head text-gray-800">
                      Multiple Teams Support
                    </span>
                    <p className="feature-description text-gray-700">
                      Allow multiple teams to collaborate more effectively when
                      delivering project(s) together. Help project members see
                      how their work contributes to the bigger picture.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="third-row">
              <div className="flex items-center space-x-10">
                <div className="left-box card bg-white rounded-lg shadow-lg p-6 w-1/2">
                  <img src={Icon5} className="mb-5 w-6 h-6" alt="Icon 5" />
                  <span className="feature-head text-gray-800">
                    Share Views
                  </span>
                  <p className="feature-description text-gray-700">
                    Share any view, report, or dashboard with stakeholders to
                    provide live updates on your progress.
                  </p>
                </div>
                <div className="right-box text-center w-1/2">
                  <img src={Icon6} className="mx-auto mb-3" alt="Icon 6" />
                  <span className="font-semibold block font-sf_pro_semibold text-xl text-white mb-3">
                    More Updates, Features & Articles are here.
                  </span>
                  <a href="#" className="special-color font-sf_pro_semibold">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="desktop space-x-3 justify-between hidden xl:flex xl:flex-row">
            <div className="first-col space-y-3 w-full lg:w-1/2 xl:w-1/4">
              <div className="card bg-white rounded-lg shadow-lg p-6">
                <img src={Icon1} className="mb-5 w-6 h-6" alt="Icon 1" />
                <span className="feature-head text-gray-800">
                  Email Notification
                </span>
                <p className="feature-description text-gray-700">
                  Let your team members receive email notifications about
                  important changes they need to be aware of. Let your team
                  members receive email notifications.
                </p>
              </div>
              <div className="card bg-white rounded-lg shadow-lg p-6">
                <img src={Icon3} className="mb-5 w-6 h-6" alt="Icon 3" />
                <span className="feature-head text-gray-800">
                  Rich Domain Model
                </span>
                <p className="feature-description text-gray-700">
                  Targetprocess has a rich domain model with several different
                  types of entities. These entities can be customized to fit
                  your process.
                </p>
              </div>
            </div>

            <div className="second-col space-y-3 w-full lg:w-1/2 xl:w-1/4">
              <div className="card bg-white rounded-lg shadow-lg p-6">
                <img src={Icon2} className="mb-5 w-6 h-6" alt="Member two" />
                <span className="feature-head text-gray-800">
                  Comments & Mentions
                </span>
                <p className="feature-description text-gray-700">
                  Allow your team to communicate about the work they do using
                  comments and @mentions
                </p>
              </div>
              <div className="card bg-white rounded-lg shadow-lg p-6">
                <img src={Icon4} className="mb-5 w-6 h-6" alt="Icon 4" />
                <span className="feature-head text-gray-800">
                  Multi-Language Support
                </span>
                <p className="feature-description text-gray-700">
                  We support English, French, German, Spanish, Portuguese (the
                  Brazilian variety), Russian languages to allow you to use
                  Targetprocess in your native language
                </p>
              </div>
            </div>

            <div className="third-col space-y-3 w-full lg:w-full xl:w-1/2">
              <div className="card bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center space-x-4">
                  <img src={People} className="w-full h-44" alt="People" />
                  <div>
                    <span className="feature-head text-gray-800">
                      Multiple Teams Support
                    </span>
                    <p className="feature-description text-gray-700">
                      Allow multiple teams to collaborate more effectively when
                      delivering project(s) together. Help project members see
                      how their work contributes to the bigger picture.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-10">
                <div className="left-box card bg-white rounded-lg shadow-lg p-6 w-1/2">
                  <img src={Icon5} className="mb-5 w-6 h-6" alt="Icon 5" />
                  <span className="feature-head text-gray-800">
                    Share Views
                  </span>
                  <p className="feature-description text-gray-700">
                    Share any view, report, or dashboard with stakeholders to
                    provide live updates on your progress.
                  </p>
                </div>
                <div className="right-box text-center w-1/2">
                  <img src={Icon6} className="mx-auto mb-3" alt="Icon 6" />
                  <span className="font-semibold block font-sf_pro_semibold text-xl text-white mb-3">
                    More Updates, Features & Articles are here.
                  </span>
                  <a href="#" className="special-color font-sf_pro_semibold">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
