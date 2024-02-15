import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-7/12 mx-auto  ">
      <Image
        src={
          "https://media.istockphoto.com/id/936331412/photo/breakfast-served-on-a-hotel-bed.jpg?s=1024x1024&w=is&k=20&c=qexqnHwitra-xorlLGh1p0SasdFP-D5tgMFXS5KWZpw="
        }
        alt="hotel"
        width={2000}
        height={2000}
        className="w-full h-72 my-5 "
      />
      <div className="">
        <h3 className="text-2xl font-bold  ">
          Lorem Ipsum is simply dummy text of the printing .
        </h3>
        <p className="text-xl my-5 text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.Lorem Ipsum is simply dummy text of the printing
          and typesetting industry.Lorem Ipsum is simply dummy text of the
          printing and typesetting industry.
        </p>
        <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">Price: 4500</button>
      </div>
    </div>
  );
};

export default page;
