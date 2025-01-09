import React, { useEffect, useState } from "react";
import CardItems from "./CardItems";
import axios from "axios";

export default function Card() {


  const [search, setSearch] = useState("");

  const [testApi, setTestApi] = useState([]);
  const api = "https://fakestoreapi.com/products";
  const fetchApi = async () => {
    await axios.get(api).then((res) => {
      setTestApi(res.data);
    });
  };
  useEffect(() => {
    fetchApi();
  }, []);
  const aaa = testApi.filter((ca) => ca.includes(search) === ca.catagory);
  if (testApi <= 0) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-slate-600 ">
        <div
          className=" h-8 w-8  animate-spin rounded-full border-4 border-solid border-white border-current border-r-transparent flex align-center items-center justify-center motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="w-full flex items-center justify-center  py-8">
        <input
          className="outline-none border-2 border-gray-200 pl-2 pr-9 rounded-lg"
          type="text"
          placeholder="What you need"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="w-full  flex gap-4 items-center justify-center flex-wrap">
        <button className="bg-slate-200 px-5 py-2 rounded-xl ">
          All Catagory
        </button>
        <button className="bg-slate-200 px-5 py-2 rounded-xl ">
          Men's clothing
        </button>
        <button className="bg-slate-200 px-5 py-2 rounded-xl ">
          women's clothing
        </button>
        <button className="bg-slate-200 px-5 py-2 rounded-xl ">
          Electronics
        </button>
        <button className="bg-slate-200 px-5 py-2 rounded-xl ">
          Jewellery
        </button>
      </div>
      <div className="grid grid-cols-1 gap-3 px-2 sm:px-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ">
        {aaa.map((item, index) => {
          return <CardItems key={index} item={item} />;
        })}
      </div>
    </>
  );
}
