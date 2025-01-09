import React from "react";

export default function CardItems({ item }) {
  return (
    <div className="flex flex-col shadow-2xl">
      <div className=" flex flex-col items-center justify-center text-center">
        <h1 className="text-center px-3 font-bold font-serif py-5">
          {item.title.slice(0, 15)}{" "}
        </h1>
        <img
          className="object-contain h-52 px-5 max-w-xs transition duration-300 ease-in-out hover:scale-110"
          src={item.image}
        />
      </div>
      <div className="px-6 py-3 flex flex-col text-start gap-3">
        <h1 className="text-center">{item.category} </h1>
        <p className={`text-center text-white bg-blue-950`}>
          {item.rating.rate}
        </p>
        <p className="">{item.description.slice(0, 70)} </p>

        {/* <span>{item.price}</span> */}
      </div>
    </div>
  );
}
