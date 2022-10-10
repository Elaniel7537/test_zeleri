import React from "react";
import Image from "next/image";
import { useAppSelector } from "@redux/app/hooks";

const CardWeather: React.FC = () => {
  const { weatherCity } = useAppSelector((state) => state.weather);

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between px-10 py-10">
        <div className="flex flex-row items-center justify-between">
          <div className="text-left mr-8">
            <Image alt="img-time" src="/sol.png" width={90} height={90} />
          </div>
          <div className="font-Montserrat font-light text-4xl sm:text-5xl">
            {weatherCity?.name?.length ? weatherCity?.main?.temp : "00.0"} °C
          </div>
        </div>

        <div className="flex flex-row sm:flex-col justify-between">
          <div className="text-left sm:text-right mb-0 sm:mb-4">
            <div className="font-Montserrat font-normal text-3xl w-40">
              {weatherCity?.name ? weatherCity?.name : "Sin Datos"}
            </div>
            <div className="font-Montserrat font-light text-2xl">
              {weatherCity?.name?.length && weatherCity?.sys?.country}
            </div>
          </div>
          <div className="font-Montserrat font-light text-lg text-right">
            {weatherCity?.name?.length &&
              weatherCity?.weather?.[0]?.description.toUpperCase()}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardWeather;
