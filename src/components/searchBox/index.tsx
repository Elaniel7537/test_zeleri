import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { setWeatherCity } from "@redux/slices/weatherSlice";

import { getWeather } from "@services/services";

const SearchBox: React.FC = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const search = async (e: any) => {
    if (e.key === "Enter") {
      const weatherData = await getWeather({ inputSearch: text });
      dispatch(setWeatherCity(weatherData));
      setText("");
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="mb-4">
        <input
          className="font-Montserrat font-lightshadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="search"
          type="text"
          value={text}
          placeholder="Introducir ciudad"
          onChange={(e) => setText(e.target.value)}
          onKeyPress={search}
        />
      </div>
    </div>
  );
};

export default SearchBox;
