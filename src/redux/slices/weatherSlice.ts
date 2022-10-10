import { createSlice } from "@reduxjs/toolkit";

interface WeatherCity {
  name?: string;
  sys: { country: string };
  weather: [{ description: string }];
  main?: { temp: number };
}

export const initialState = {
  weatherCity: {} as WeatherCity,
};

const weather = createSlice({
  name: "weatherTimeCity",
  initialState,
  reducers: {
    setWeatherCity: (state, action) => {
      state.weatherCity = action.payload.data;
    },
  },
});

export const { setWeatherCity } = weather.actions;

export default weather.reducer;
