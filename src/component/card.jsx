import React, { useEffect, useState } from "react";
import CardItems from "./CardItems";
import axios from "axios";

export default function Card() {
  const [search, setSearch] = useState({
    selectOption: "",
    searchText: "",
    filteredArray: [],
  });
  const [testApi, setTestApi] = useState([]);
  const api = "https://fakestoreapi.com/products";

  const fetchApi = async () => {
    const res = await axios.get(api);
    setTestApi(res.data);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    const filterBySearch = testApi.filter((val) =>
      val.category.startsWith(search.searchText || search.selectOption)
    );
    setSearch((prev) => ({ ...prev, filteredArray: filterBySearch }));
  }, [search.selectOption, search.searchText, testApi]);

  if (testApi.length === 0) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-slate-600">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-white border-current border-r-transparent flex align-center items-center justify-center">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  const handleSelectOption = (option) =>
    setSearch((prev) => ({ ...prev, selectOption: option }));

  return (
    <>
      <div className="w-full flex items-center justify-center py-8">
        <input
          className="outline-none border-2 border-gray-200 pl-2 pr-9 rounded-lg"
          type="text"
          placeholder="What you need"
          value={search.searchText}
          onChange={(e) =>
            setSearch((prev) => ({ ...prev, searchText: e.target.value }))
          }
        />
      </div>
      <div className="w-full flex gap-4 items-center justify-center flex-wrap">
        {["", "men", "women", "electronics", "jewelery"].map((category) => (
          <button
            key={category}
            onClick={() => handleSelectOption(category)}
            className="bg-slate-200 px-5 py-2 rounded-xl"
          >
            {category
              ? category.charAt(0).toUpperCase() + category.slice(1)
              : "All Category"}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-3 px-2 sm:px-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {search.filteredArray.map((item, index) => (
          <CardItems key={index} item={item} />
        ))}
      </div>
    </>
  );
}
