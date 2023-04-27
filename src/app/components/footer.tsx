import React from "react";
import moment from "moment";
import Link from "next/link";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentDate = new Date();

  return (
    <footer className="fixed bottom-0 w-full bg-primaryDark text-sm text-textDark">
      <div className="mx-4 flex flex-col items-center justify-center space-y-3 py-2 text-sm text-gray-300 md:flex-row md:justify-between md:space-y-0">
        <div className="text-center">
          <span className="">
            &#169; {currentDate.getFullYear()} 311 Data | All Rights Reserved |
            {"  "}
            <Link
              href="/privacy"
              className="items-center justify-center text-center"
            >
              Privacy Policy
            </Link>
            {" | "}
            Powered by volunteers from Hack for LA Privacy Policy
          </span>
        </div>
        <div>
          <span>
            Data last updated 4/13/23
            {/* {moment(lastUpdated).format("MM/DD/YY")} */}
          </span>
        </div>

        <div className="flex flex-row space-x-2">
          <div className="rounded-full bg-white p-1">
            <FaFacebookF size={10} color="#083344" />
          </div>

          <div className="rounded-full bg-white p-1">
            <FaTwitter size={10} color="#083344" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
