import React from "react";
import whiteLogo from "../../images/Mark-footer.png";
import footerIconOne from "../../images/footer-Icon-1.png";
import footerIconTwo from "../../images/footer-Icon-2.png";
import footerIconThree from "../../images/footer-Icon-3.png";
import footerIconFour from "../../images/footer-Icon-4.png";
import footerIconFive from "../../images/footer-Icon-5.png";
function Footer() {
  return (
    <>
      <div className="desktop hidden lg:block footer-wrapper">
        <div className="px-20 pt-44 pb-14 bg-gray-900 text-gray-400">
          <div className="lg:flex lg:justify-between outer-wrapper">
            <div className="footer-description text-gray-200 lg:w-4/12">
              <a href="/">
                <img src={whiteLogo} alt="Footer Logo" />
              </a>
              <p className="py-8">
                Making the world a better place through constructing elegant
                hierarchies.
              </p>
              <div className="footer-social">
                <ul className="flex space-x-5">
                  <li>
                    <a href="/">
                      <img src={footerIconOne} alt="Footer icon 1" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={footerIconTwo} alt="Footer icon 2" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={footerIconThree} alt="Footer icon 3" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={footerIconFour} alt="Footer icon 4" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={footerIconFive} alt="Footer icon 5" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-menu">
              <h4 className="uppercase mb-3 font-semibold text-gray-400">
                Solutions
              </h4>
              <ul className="text-gray-200">
                <a href="#">
                  <li>Marketing</li>
                </a>
                <a href="#">
                  <li>Analytics</li>
                </a>
                <a href="#">
                  <li>Commerce</li>
                </a>
                <a href="#">
                  <li>Insights</li>
                </a>
              </ul>
            </div>

            <div className="footer-menu">
              <h4 className="uppercase mb-3 font-semibold text-gray-400">
                Support
              </h4>
              <ul className="text-gray-200">
                <a href="#">
                  <li>Pricing</li>
                </a>
                <a href="#">
                  <li>Documentation</li>
                </a>
                <a href="#">
                  <li>Guide</li>
                </a>
                <a href="#">
                  <li>API Status</li>
                </a>
              </ul>
            </div>

            <div className="footer-menu">
              <h4 className="uppercase mb-3 font-semibold text-gray-400">
                Company
              </h4>
              <ul className="text-gray-200">
                <a href="#">
                  <li>About</li>
                </a>
                <a href="#">
                  <li>Blog</li>
                </a>
                <a href="#">
                  <li>Jobs</li>
                </a>
                <a href="#">
                  <li>Press</li>
                </a>
                <a href="#">
                  <li>Partners</li>
                </a>
              </ul>
            </div>

            <div className="footer-menu">
              <h4 className="uppercase mb-3 font-semibold text-gray-400">
                Legal
              </h4>
              <ul className="text-gray-200">
                <a href="#">
                  <li>Claim</li>
                </a>
                <a href="#">
                  <li>Privacy</li>
                </a>
                <a href="#">
                  <li>Terms</li>
                </a>
              </ul>
            </div>
          </div>

          <hr className="my-10 border-t-2 border-gray-700" />
          <p className="text-center text-gray-400">
            &#169; 2022 Workflow, Inc. All rights reserved.
          </p>
        </div>
      </div>

      <div className="tablet space-y-8 px-4 py-12 bg-gray-900 text-gray-400 lg:hidden">
        <div className="footer-logo">
          <a href="/">
            <img src={whiteLogo} alt="Footer Logo" />
          </a>
        </div>

        <div className="footer-description text-gray-200">
          <p>
            Making the world a better place through constructing elegant
            hierarchies.
          </p>
        </div>

        <div className="footer-social">
          <ul className="flex space-x-5">
            <li>
              <a href="/">
                <img src={footerIconOne} alt="Footer icon 1" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={footerIconTwo} alt="Footer icon 2" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={footerIconThree} alt="Footer icon 3" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={footerIconFour} alt="Footer icon 4" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={footerIconFive} alt="Footer icon 5" />
              </a>
            </li>
          </ul>
        </div>

        <div className="flex">
          <div className="footer-menu w-2/5">
            <h4 className="uppercase mb-3 font-semibold text-gray-400">
              Solutions
            </h4>
            <ul className="text-gray-200">
              <a href="#">
                <li>Marketing</li>
              </a>
              <a href="#">
                <li>Analytics</li>
              </a>
              <a href="#">
                <li>Commerce</li>
              </a>
              <a href="#">
                <li>Insights</li>
              </a>
            </ul>
          </div>
          <div className="footer-menu">
            <h4 className="uppercase mb-3 font-semibold text-gray-400">
              Support
            </h4>
            <ul className="text-gray-200">
              <a href="#">
                <li>Pricing</li>
              </a>
              <a href="#">
                <li>Documentation</li>
              </a>
              <a href="#">
                <li>Guide</li>
              </a>
              <a href="#">
                <li>API Status</li>
              </a>
            </ul>
          </div>
        </div>

        <div className="flex">
          <div className="footer-menu w-2/5">
            <h4 className="uppercase mb-3 font-semibold text-gray-400">
              Company
            </h4>
            <ul className="text-gray-200">
              <a href="#">
                <li>About</li>
              </a>
              <a href="#">
                <li>Blog</li>
              </a>
              <a href="#">
                <li>Jobs</li>
              </a>
              <a href="#">
                <li>Press</li>
              </a>
              <a href="#">
                <li>Partners</li>
              </a>
            </ul>
          </div>
          <div className="footer-menu">
            <h4 className="uppercase mb-3 font-semibold text-gray-400">
              Legal
            </h4>
            <ul className="text-gray-200">
              <a href="#">
                <li>Claim</li>
              </a>
              <a href="#">
                <li>Privacy</li>
              </a>
              <a href="#">
                <li>Terms</li>
              </a>
            </ul>
          </div>
        </div>

        <hr className="my-10 border-t-2 border-gray-700" />
          <p className="text-left text-gray-400">
            &#169; 2022 Workflow, Inc. All rights reserved.
          </p>
      </div>
    </>
  );
}
export default Footer;
