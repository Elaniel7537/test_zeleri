import React, { useEffect } from "react";
import Image from "next/image";
import { useAppSelector } from "@redux/app/hooks";

const CardWeather: React.FC = () => {
  const { weatherCity } = useAppSelector((state) => state.weather);

  useEffect(() => {}, []);

  return (
    <div className="container mx-auto shadow-lg gradient-card mt-10 rounded-lg">
      <div className="font-Montserrat font-semibold text-3xl space-y-4 px-14 py-10">
        Tiempo Metereológico
      </div>
      <div className="flex justify-between p-14">
        <div>
          <div className="font-Montserrat font-light text-5xl">
            {weatherCity?.main?.temp} °C
          </div>
          <div className="text-left">
            <Image alt="img-time" src="/sol.png" width={90} height={90} />
          </div>
        </div>
        <div>
          <div className="font-Montserrat font-normal text-3xl">
            {weatherCity?.name}
          </div>
          <div className="font-Montserrat font-light text-2xl mb-8">
            {weatherCity?.sys?.country}
          </div>
          <div className="font-Montserrat font-light text-xl">
            Nublado
            {/* {weatherCity?.weather[0]?.description} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWeather;
