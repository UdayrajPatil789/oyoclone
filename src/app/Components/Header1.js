import Image from "next/image";
import React from "react";
import Block from "./Block";
import Link from "next/link";

const Header1 = ({ title, para }) => {
  return (
    <div className="flex justify-between border-b-2 border-gray-300 items-center h-16 px-10">
      <Image
        src={"/logo (1).png"}
        alt="logo"
        width={200}
        height={200}
        className="w-28 h-28"
      />
      <div className="broder-gray-300 h-full flex ">
        <Block
          title={"Become a member"}
          para={"Additional 10% off on stays."}
        />
        <Block
          title={"Oyo For Business"}
          para={"Trusted by 5000 corporates."}
        />
        <Block title={"List Your Property"} para={"Start Earning in 30 min."} />
        <Block title={"9786645345"} para={"Call us to book now."} />
        <div className="flex items-center px-3">
          <Image
            src={"/demo.svg"}
            alt="logo"
            width={200}
            height={200}
            className="w-10 h-10 rounded-full mr-5"
          />
          {/*<h3 className="font-bold">Login/signup</h3>*/}
          <Link href="/login">
            <h3 className="font-bold">Login/signup</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header1;
