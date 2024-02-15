import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hotel = ({id}) => {
  return (
    <div className="mb-5 border-2 border-red-500 rounded-lg h-72 w-full p-5 ">
      <div className="flex">
        <Image
          src={
            "https://media.istockphoto.com/id/936331412/photo/breakfast-served-on-a-hotel-bed.jpg?s=1024x1024&w=is&k=20&c=qexqnHwitra-xorlLGh1p0SasdFP-D5tgMFXS5KWZpw="
          }
          alt="hotel"
          width={200}
          height={200}
          className="w-96 h-60 mr-3"
        />
        <div className="grid grid-rows-3  ">
          <Image
            src={
              "https://media.istockphoto.com/id/936331412/photo/breakfast-served-on-a-hotel-bed.jpg?s=1024x1024&w=is&k=20&c=qexqnHwitra-xorlLGh1p0SasdFP-D5tgMFXS5KWZpw="
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28"
          />
          <Image
            src={
              "https://media.istockphoto.com/id/936331412/photo/breakfast-served-on-a-hotel-bed.jpg?s=1024x1024&w=is&k=20&c=qexqnHwitra-xorlLGh1p0SasdFP-D5tgMFXS5KWZpw="
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28 "
          />
          <Image
            src={
              "https://media.istockphoto.com/id/936331412/photo/breakfast-served-on-a-hotel-bed.jpg?s=1024x1024&w=is&k=20&c=qexqnHwitra-xorlLGh1p0SasdFP-D5tgMFXS5KWZpw="
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28"
          />
          <Image
            src={
              "https://media.istockphoto.com/id/936331412/photo/breakfast-served-on-a-hotel-bed.jpg?s=1024x1024&w=is&k=20&c=qexqnHwitra-xorlLGh1p0SasdFP-D5tgMFXS5KWZpw="
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28"
          />
        </div>
        <div className="ml-20">
            <h2 className="font-bold text-2xl">This is heading for the given project.</h2>
            <p className="text-justify my-5 text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy .</p>
            <p className="text-xl my-5">
                <span className="font-bold">Facilities : </span>
                <span>Free wifi, Gaming ,Swiming poll, Pet care etc. </span>
            </p>
            <div className="flex items-center">
            <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">Price: 4500</button>
                <Link href={`/hotels/${id}`} className="text-xl font-bold text-red-600 ml-10">See Details</Link>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Hotel;
