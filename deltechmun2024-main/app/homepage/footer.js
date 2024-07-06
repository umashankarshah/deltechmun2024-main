import Link from "next/link";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div id="contacts">
      <footer className=" bg-gray-900 p-8 w-full">
        <div className=" flex flex-col justify-evenly items-center lg:items-start py-4 lg:flex-row">
          <div className="flex flex-col items-center">
            <h2 className="mb-6 text-lg md:text-xl  font-semibold whitespace-nowrap text-white">
              For Any Queries Contact
            </h2>
            <div className="flex flex-col justify-evenly items-center md:flex-row ">
              <div className="p-4 w-52  h-24  mb-5 flex flex-col justify-evenly items-center md:mr-5  rounded-lg border shadow-md bg-gray-800 border-gray-700 hover:bg-gray-700">
                <p className=" text-neutral-300 text-xs text-center font-normal pb-2">
                  Administrative Affairs
                </p>
                <h5 className="mb-2 font-bold text-sm text-white">
                  Hemabh Gupta
                </h5>
                <div className="font-normal text-sm flex flex-row items-center  text-neutral-300">
                  <span>
                    <FaPhoneAlt size={15} />
                  </span>
                  <span className="ml-2">9560995939</span>
                </div>
              </div>
              <div className="p-4 w-52  h-24 mb-5 flex flex-col justify-evenly items-center rounded-lg border  bg-gray-800 border-gray-700 hover:bg-gray-700">
                <p className=" text-neutral-300 text-xs text-center font-normal pb-2">
                  Publicity
                </p>
                <h5 className="mb-2  font-bold text-white">Dhruv Rustagi</h5>
                <div className="font-normal  text-xs flex flex-row items-center text-neutral-300   ">
                  <span>
                    <FaPhoneAlt size={15} />
                  </span>
                  <span className="ml-2 leading-loose ">9718453773</span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2 mb-6 mt-2  flex flex-col items-center">
            <h5 className="mb-2 md:text-lg font-bold text-white">
              Helpful Links
            </h5>
            <div>
              <Link
                href="/payment_policy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-normal text-gray-400 text-sm hover:underline"
              >
                Payment Policy
              </Link>
            </div>
            <div>
              <Link
                href="/terms_&_conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="font-normal text-gray-400 text-sm hover:underline"
              >
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
          <div className=" space-y-2  flex flex-col items-center ">
            <h5 className="mb-2 md:text-lg font-bold text-white">
              Connect With Us
            </h5>
            <a
              href="mailto:deltech.mun@gmail.com"
              className=" items-center flex flex-row font-normal text-gray-400"
            >
              <span>
                <FaEnvelope />
              </span>
              <span className="ml-2 text-sm  hover:underline">
                deltech.mun@gmail.com
              </span>
            </a>
            <a
              href="https://www.instagram.com/deltechdebsoc"
              target="_blank"
              rel="noopener noreferrer"
              className="font-normal items-center flex flex-row text-gray-400"
            >
              <span>
                <FaInstagram />
              </span>
              <span className="ml-2 text-sm  hover:underline">Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/mundeltech"
              target="_blank"
              rel="noopener noreferrer"
              className="font-normal items-center flex flex-row text-gray-400"
            >
              <span>
                <FaFacebookF />
              </span>
              <span className="ml-2 text-sm  hover:underline">Facebook</span>
            </a>
            <a
              href="https://www.linkedin.com/company/deltechdebsoc"
              target="_blank"
              rel="noopener noreferrer"
              className="font-normal items-center flex flex-row text-gray-400"
            >
              <span>
                <FaLinkedinIn />
              </span>
              <span className="ml-2 text-sm  hover:underline">LinkedIn</span>
            </a>
            <a
              href="https://www.youtube.com/channel/UCAw3xkvalx-64ZuZ32fSgNA/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-normal items-center flex flex-row text-gray-400"
            >
              <span>
                <FaYoutube />
              </span>
              <span className="ml-2 text-sm  hover:underline">Youtube</span>
            </a>
          </div>
        </div>
        <hr className="mb-6 sm:mx-auto border-gray-700 lg:mb-6" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center text-gray-400">
            © 2023
            <a href="/" className="ml-1 hover:underline">
              deltech-mun™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
