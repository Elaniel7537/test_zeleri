import type { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setWeatherCity } from "@redux/slices/weatherSlice";

import { ServiceResponse } from "@services/config";
import { getWeather } from "@services/services";

import SearchBox from "@components/searchBox";
import CardWeather from "@components/cardWeather";

const Home: NextPage = (weatherData: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setWeatherCity(weatherData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* buscador */}
      <SearchBox />

      {/* detalle tiempo de la ciudad */}
      <div className="container mx-auto shadow-lg gradient-card mt-10 rounded-lg">
        <div className="font-Montserrat font-semibold text-3xl px-10 pt-10 pb-5">
          Tiempo Metereológico
        </div>
        <CardWeather />
      </div>
    </>
  );
};

Home.getInitialProps = async () => {
  const weatherData: ServiceResponse = await getWeather({ inputSearch: "" });
  return weatherData;
};
export default Home;
